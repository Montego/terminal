import addressDto from './addressDto'
import RepositoryFactory from '../../repository'
import {getField, updateField} from "vuex-map-fields";
const specialistRepo = RepositoryFactory.getRepository('specialist');
// const authRepo = RepositoryFactory.getRepository('aus');


export default {
    state: {
        data: {},
        countOfAddParent: 3
    },
    getters: {
      // getField,
        SPECIALIST: state => {return state.data;},
      countOfAddParent: state => {
        return state.countOfAddParent;
      }
    },
    computed: {

    },
    mutations: {
      increment (state) {
        state.countOfAddParent += 1
      },
      decrement (state) {
        state.countOfAddParent -= 1
      },
      default (state) {
        state.countOfAddParent = 3
      },
      // updateField,
        updateSpecialist(state, data) {
            state.data = data;
        }
    },
    actions: {
        async loadEmptyAdrDTO(ctx) {
            const r = await specialistRepo.getEmptyAdrDTO();
            const tmpDto = await r.data;
            ctx.commit('updateSpecialistDto', tmpDto);
        },
        async loadEmptyAdrParentDTO(ctx) {
            const r = await specialistRepo.getEmptyAdrParentDTO();
            const tmpDto = await r.data;
            console.log(tmpDto);
            console.log(ctx.getters.countOfAddParent);
            // console.log('countParentt: ',this.countOfAddParent);
            tmpDto.addressType = {"id": "1", "name": "Адрес фактический"};
            ctx.commit('updateSpecialistParentDto', tmpDto);
        },
    },
    modules: {
        addressDto
    }
}
