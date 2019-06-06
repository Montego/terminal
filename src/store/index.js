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

import test_profiles from './modules/profile/test_profiles'
Vue.use(VueTheMask);
Vue.use(VeeValidate);
Vue.use(Vuelidate)
Vue.use(Vuetify);
Vue.use(Vuex);



// Vue.use(APIService);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    enums,
    dictionary,
    tab_personal_info,
    tab_evidence_ege_info,
    tab_education_military_info,
    tab_address_info,
    tab_distinctive_features_info,
    tab_parent_info,
    test_profiles,
    tab_documents,
  },
  strict: false
});
