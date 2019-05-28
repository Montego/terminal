import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate';
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'


import tab_personal_info from './modules/tab_personal_info'
import tab_evidence_ege_info from './modules/tab_evidence_ege_info'
import tab_education_military_info from './modules/tab_education_military_info'
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
    tab_personal_info,
    tab_evidence_ege_info,
    tab_education_military_info
  },
  strict: false
});
