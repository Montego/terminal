import Vue from 'vue'
// import ADR from '@/components/addresser/addressHelper'
import ADR from '../../components/addresser/addressHelper'
import RepositoryFactory from '../../repository'
const fias = RepositoryFactory.getRepository('fias');

export default {
    state: {
        addressesDto: [],
        aolevelss: [],
        searchObject: [],
        fullAdrText: []
    },
    getters: {
        addressTxtRandomDTO: state => {
            return state.addressesDto.map(function(e) {return e.addressTxtRandom});
        },
        flatDTO: state => {
            return state.addressesDto.map(function(e) {return e.flat});
        },
        ADRText: state => {
            return state.fullAdrText;
        },
        ADRDTO: state => {
            return state.addressesDto;
        },
        ADRSearchObject: state => {
            return state.searchObject || {};
        },
        ADRAoLevels: state => {
            return state.aolevelss;
        }
    },
    mutations: {
        updateSpecialistDto(state, DTO){
            state.addressesDto.splice(0,state.addressesDto.length);
            console.log(state.addressesDto);
            DTO
                .sort((a, b)=>{return a.addressType['id'] - b.addressType['id']})
                .forEach(e=>{state.addressesDto.push(e)});
            for(let i = 0; i < state.addressesDto.length; i++){
                this.commit('updateAoL', {adrType: i});
                this.commit('updateADRText', {adrType: i});
            }
        },
        // updateSpecialist(state, data) {
        //     data.person_info.addressesDto.forEach(e=>{state.addressesDto.push(e)});
        //     for(let i = 0; i < state.addressesDto.length; i++){
        //         this.commit('updateAoL', {adrType: i});
        //         this.commit('updateADRText', {adrType: i});
        //     }
        // },
        updateAddressTxtRandomDTO: (state, data) => {
            state.addressesDto[data.adrType].addressTxtRandom = data.newValue;
        },
        updateFlatDTO: (state, data) => {
            state.addressesDto[data.adrType].flat = data.newValue;
        },
        updateDTO: (state, data) => {
            Vue.set(state.addressesDto, data.adrType , data.dto);
        },
        clearDTO:(state, data)=>{
            let aomap = ADR.getAoLevelMap();
            for (let aomapKey in aomap) {
                if(!aomap.hasOwnProperty(aomapKey) || !state.addressesDto[data.adrType].hasOwnProperty(aomap[aomapKey].objName)){
                        continue;
                }
                if(aomap[data.aolevel].pos <= aomap[aomapKey].pos){
                        state.addressesDto[data.adrType][aomap[aomapKey].objName].name = '';
                        state.addressesDto[data.adrType][aomap[aomapKey].objName].refId = null;
                }
            }
            state.addressesDto[data.adrType]['house'].name = '';
            state.addressesDto[data.adrType]['house'].refId = null;
            state.addressesDto[data.adrType]['flat'] = '';
            state.addressesDto[data.adrType]['addressTxtRandom'] = '';
        },
        updateAoL: (state, data) => {
            let tmpLvlss = [];
            let tmpSObj = [];

            for (let i = 0; i < state.addressesDto.length; i++) {
                tmpLvlss[i] = ADR.aolevelsFromDto(state.addressesDto[i]);
                tmpSObj[i] = tmpLvlss[i]
                    .filter(e => {
                        return e.name && e.level < 100
                    })
                    .reduce((accum, e) => {
                        let splitter = '';
                        if (accum.name.length > 0) {
                            splitter = ', ';
                        }
                        return {level: e.level, name: accum.name + splitter + e.name, refId: e.refId}
                    }, {level: 0, name: '', refId: null});
            }
            Vue.set(state, 'aolevelss', tmpLvlss);
            Vue.set(state, 'searchObject', tmpSObj);
        },
        updateHouse(state, data) {
            state.addressesDto[data.adrType]['house'].name = data.house.newValue.name;
            state.addressesDto[data.adrType]['house'].refId = data.house.newValue.refId;
        },
        updateADRText(state, data){
            let houseName = state.addressesDto[data.adrType]['house'].name || '';
            let flatName = state.addressesDto[data.adrType]['flat'] || '';
            let rndText = state.addressesDto[data.adrType]['addressTxtRandom'] || '';
            state.fullAdrText[data.adrType] = state.searchObject[data.adrType].name;
            state.fullAdrText[data.adrType] += houseName > '' ? ', ' +  houseName : '';
            state.fullAdrText[data.adrType] += flatName > '' ? ', кв. ' +  flatName : '';
            state.fullAdrText[data.adrType] += rndText > '' ? ', ' +  rndText : '';
        }
    },
    actions: {
        clear: (ctx, data) => {
            ctx.commit('clearDTO', data);
            ctx.commit('updateAoL', data);
            ctx.commit('updateADRText', data);
        },
        updateAddressTxtRandomDTO : (ctx, data)=>{
                    ctx.commit('updateAddressTxtRandomDTO', data);
                    ctx.commit('updateADRText', data);
                },
        updateFlatDTO: (ctx, data)=>{
            ctx.commit('updateFlatDTO', data);
            ctx.commit('updateADRText', data);
        },
        async fill(ctx, data){
            // console.log(data);
            const dtoPromise = await fias.fill(data.data.newValue);
            const res = await dtoPromise.data;
            const addressType =  ctx.state.addressesDto[data.adrType].addressType;
            // console.log('addressType', addressType);
            res.addressType = addressType;
            ctx.commit('updateDTO', {dto: res, adrType: data.adrType});
            ctx.commit('updateAoL', {adrType: data.adrType});
            ctx.commit('updateADRText', {adrType: data.adrType});
        },
        updateHouse(ctx, data){
            const adrType = {
                "id": 0,
                "name": "Адрес регистрации"
            };
            ctx.commit('updateHouse', {house: data, adrType: adrType.id});
            ctx.commit('updateADRText', {adrType: adrType.id});
        }
    }
}