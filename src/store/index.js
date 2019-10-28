import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate';
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'

import axios from 'axios';

import enums from './modules/enums'
import dictionary from './modules/dictionary'
import tab_distinctive_features_info from './modules/profile/tab_distinctive_features_info'
import tab_parent_info from './modules/profile/tab_parent_info'
import tab_personal_info from './modules/profile/tab_personal_info'
import tab_evidence_ege_info from './modules/profile/tab_evidence_ege_info'
import tab_education_military_info from './modules/profile/tab_education_military_info'

import tab_documents from './modules/application/tab_documents'
import tab_entrance_tests from './modules/application/tab_entrance_tests'
import tab_reception_condition from './modules/application/tab_reception_condition'
import person from './modules/profile/person'
import applications from './modules/application/applications'
// import {AXIOS} from "/src/components/plugins/APIService";
import converter from "./modules/converter";
import specialist from "./xmodules/specialist";
import {getField, updateField} from "vuex-map-fields";

Vue.use(VueTheMask);
Vue.use(VeeValidate);
Vue.use(Vuelidate);
Vue.use(Vuetify);
Vue.use(Vuex);



// Vue.use(APIService);

export const store = new Vuex.Store({
  state: {
    agreementId:[],
    applicationId:'nothing',
    contactPersonId:'nothing'
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    getIdsFromAxapta(state, payload) {
      console.log(payload);
        state.agreementId = payload.agreementsId;
        state.applicationId = payload.applicationId ;
        state.contactPersonId = payload.contactPersonId;
        console.log(state.agreementId)
    },
    clearIdsFromAxapta(state){
      state.agreementId.length = 0;
      state.applicationId = 'nothing' ;
      state.contactPersonId = 'nothing';
      // console.log(state.agreementId)
    }

  },
  actions: {
    onClearIdsFromAxapta({commit}) {
          commit('clearIdsFromAxapta');
    },

    async go(ctx, payload = null){
      let id = payload ? payload : '686';
      let url = '/operator_api/profile/personByPersonInfo/' + id;
      let r = await axios.get(url);
      let result = await r.data;
      console.log(result);
      // return result;
      // let some = this;
      converter(r.data, ctx);

    }
  },
  modules: {
    enums,
    dictionary,
    tab_personal_info,
    tab_evidence_ege_info,
    tab_education_military_info,
    tab_distinctive_features_info,
    tab_parent_info,
    tab_documents,
    tab_entrance_tests,
    tab_reception_condition,
    person,
    applications,

    s : specialist
  },
  strict: false
});
