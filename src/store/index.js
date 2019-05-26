import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate';
import VueTheMask from 'vue-the-mask'



import tab_personal_info from './modules/tab_personal_info'
// import {APIService} from "../components/plugins/APIService";
Vue.use(VueTheMask)
Vue.use(VeeValidate);
Vue.use(Vuetify);
Vue.use(Vuex);
// Vue.use(APIService);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    tab_personal_info
  },
  strict: false
});
