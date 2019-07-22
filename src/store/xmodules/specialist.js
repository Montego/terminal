import addressDto from './addressDto'
import RepositoryFactory from '../../repository'
const specialistRepo = RepositoryFactory.getRepository('specialist');
// const authRepo = RepositoryFactory.getRepository('aus');


export default {
    state: {
        data: {},
    },
    getters: {
        SPECIALIST: state => {return state.data;},
    },
    computed: {

    },
    mutations: {
        updateSpecialist(state, data) {
            state.data = data;
        }
    },
    actions: {
        async loadEmptyAdrDTO(ctx, payload = null) {
            const r = await specialistRepo.getEmptyAdrDTO();
            const tmpDto = await r.data;
            ctx.commit('updateSpecialistDto', tmpDto);
        },
        async loadSpecialist(ctx, id) {
            // const a = await authRepo.aus();
            const r = await specialistRepo.getById(id);
            const specialist = await r.data;
            ctx.commit('updateSpecialist', specialist);
        },
        async saveSpecialist(ctx) {
            // data.person_info.addressesDto
            // console.log('saveSpecialist', this.getters.SPECIALIST.person_info.addressesDto);
            let saveObj = this.getters.SPECIALIST;
            saveObj.person_info.addressesDto = ctx.state.addressDto.addressesDto;
            // console.log('saveSpecialist', ctx.state.addressDto);
            const r = await specialistRepo.save(saveObj);
            console.log(r);
        }
    },
    modules: {
        addressDto
    }
}