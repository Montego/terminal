<template>
    <div>
        <h3>{{ title }}</h3>
        <div>
            <div class="adr-text">{{ ADRText()[adrType] }}</div>
            <!--<div class="adr-text">{{ compADRAoLevels }}</div>-->
        </div>
        <div style="margin-top: 20px">
            <addresserLine
                    :adrItem="compADRSearchObject"
                    :selectOptions="resultArr['aolevel']"
                    @refresh="refresh(-1, $event)"
                    @clear="clear({'aolevel' : 'aolevel', 'adrType' : adrType})"
                    @newValue="newValue('aolevel', $event)"
                    label="Поиск адреса (до улицы. дом, квартиру вводить ниже)"
            >
            </addresserLine>
        </div>
        <div style="margin: 0 5%;">
            <addresserLine v-for="aoline in compADRAoLevels" :key="aoline.aolevel"
                           :adrItem="aoline"
                           :selectOptions="resultArr[aoline.aolevel]"
                           @refresh="refresh(aoline.level, $event)"
                           @clear="clear({'aolevel' : aoline.aolevel, 'adrType' : adrType})"
                           @newValue="newValue(aoline.aolevel, $event)"
                           :label="aoline.title"
            >
            </addresserLine>
        </div>
        <div style="margin: 0 10% 0 20%;">
            <v-text-field
                    :value="compFlat"
                    @change="updateFlatDTO($event)"
                    label="Квартира"
            ></v-text-field>
        </div>
        <div style="margin: 0 10% 0 20%;">
            <v-textarea
                    label="Уточнение адреса"
                    :value="compAddressTxtRandom"
                    @change="updateAddressTxtRandomDTO($event)"
            ></v-textarea>
        </div>
    </div>
</template>

<script>
    import {debounce} from 'lodash'
    import Axios from 'axios'
    import addresserLine from './addresserLine'
    import {mapGetters, mapActions} from 'vuex'
    import ADR from './addressHelper'

    export default {
        name: "addresser",
        components: {
            addresserLine
        },
        props: {
            adrType: {
                default : 0
            }
        },
        data() {
            return {
                resultArr: ADR.preparedArr(),
                source: null,
                CancelToken: Axios.CancelToken,
                title: '',
                curADRSearchObject: {}
            }
        },
        methods: {
            ...mapGetters(['ADRText', 'ADRDTO', 'ADRSearchObject', 'ADRAoLevels', 'flatDTO', 'addressTxtRandomDTO']),
            ...mapActions(['clear', 'fill', 'updateHouse']),
            updateFlatDTO (e) {
                this.$store.dispatch('updateFlatDTO', {newValue : e, adrType : this.adrType});
            },
            updateAddressTxtRandomDTO (e) {
                this.$store.dispatch('updateAddressTxtRandomDTO', {newValue : e, adrType : this.adrType});
            },
            newValue(aolevel, e) {
                if(aolevel === 'aolevel100'){
                    this.updateHouse(e);
                }
                else {
                    this.fill({data: e, adrType: this.adrType});
                }
            },
            updateresultArr: function (key, val) {
                let aolevels = this.compADRAoLevels || [];
                let aolevelObj = aolevels.find(e => {
                    return e.level == key;
                });

                let aolevel = aolevelObj === undefined ? 'aolevel' : aolevelObj.aolevel;

                const newVal = val
                    .reduce((a, e) => {
                            e.fullName = e.hasOwnProperty('fullName') ? e.fullName : null;
                            a.push({level: e.level, name: e.name, refId: e.refId, fullName: e.fullName});
                            return a;
                        }
                        , [])
                    .sort((a, b) => {
                        return a.name.length - b.name.length
                    });
                this.resultArr[aolevel].splice(0, this.resultArr[aolevel].length, ...newVal);
                // console.log('aolevel', this.resultArr[aolevel]);
            },

            refresh: debounce(function (key, val) {
                if (!val || val !== val.toString()){
                    this.updateresultArr(key, []);
                    return;
                }
                if (this.source !== null) {
                    this.source.cancel('new request started: ' + val);
                }
                this.source = this.CancelToken.source();
                this.source.searchVal = val;

                let resource = ADR.getResource(key);

                Axios.post(`https://priem.szgmu.ru/fias-search/rest${resource}`,
                    {"level": key, "name": val, "refId": "", dto: this.storedDto},
                    {cancelToken: this.source.token}
                )
                    .then(r => {
                        this.updateresultArr(key, r.data);
                    })
                    .catch(e => {
                        // console.log('Dng!', e);
                    })
                    .finally(() => {
                        this.source = null;
                        return null;
                    });
            }, 200)
        },
        computed: {
            compAddressTxtRandom(){
                return this.addressTxtRandomDTO()[this.adrType];
            },
            compFlat(){
                return this.flatDTO()[this.adrType];
            },compADRAoLevels(){
                return this.ADRAoLevels()[this.adrType];
            },
            compADRSearchObject(){
                return this.ADRSearchObject()[this.adrType];
            },
            storedDto(){
                return this.ADRDTO()[this.adrType];
            }
        },
        watch: {
            storedDto: {
                immediate: true,
                handler: function (val) {
                        if(val){
                            this.title = val.addressType ? val.addressType.name : '';
                        }
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    .adr-text {
        border: 1px solid #CCC;
        background: #DDD;
        padding: 10px;
    }
</style>