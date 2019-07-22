import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate';
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'

import enums from './modules/enums'
import dictionary from './modules/dictionary'
import tab_address_info from './modules/profile/tab_address_info'
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
import post from './modules/post'
import converter from './xmodules'
import Axios from 'axios'

import test_profiles from './modules/profile/test_profiles'
import specialist from "./xmodules/specialist";

Vue.use(VueTheMask);
Vue.use(VeeValidate);
Vue.use(Vuelidate);
Vue.use(Vuetify);
Vue.use(Vuex);



// Vue.use(APIService);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
     async go(ctx, payload = null){
       let id = payload ? payload : '686';
           let url = 'http://10.71.0.115/operator_api/profile/personByPersonInfo/' + id;
       let r = await Axios.get(url);
       let result = await r.data;
       ctx.commit('updateSpecialist', result);
       // console.log(result);
       // converter(r.data);
    }
  },
  modules: {
    enums,
    dictionary,
    tab_personal_info,
    tab_evidence_ege_info,
    tab_education_military_info,
    tab_address_info,
    tab_distinctive_features_info,
    tab_parent_info,
    // test_profiles,
    tab_documents,
    tab_entrance_tests,
    tab_reception_condition,
    person,
    applications,
    // post
    s : specialist
  },
  strict: false
});
