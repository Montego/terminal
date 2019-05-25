import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'


import tab_personal_info from './modules/tab_personal_info'
// import {APIService} from "../components/plugins/APIService";

Vue.use(Vuetify);
Vue.use(Vuex);
// Vue.use(APIService);

export const store = new Vuex.Store({
  modules: {
    tab_personal_info
  },
  strict: false
});
