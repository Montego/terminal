import Vue from 'vue'
import App from './App.vue'
import {store} from './store';
import {router} from './router/routes';
import {Tabs, Tab} from 'vue-tabs-component';
// import './plugins/APIService'
import moment from 'moment'

Vue.prototype.moment = moment;

import 'vue-tabs-component/docs/resources/tabs-component.css';
import 'vuetify/dist/vuetify.min.css';
// import 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons';
// import Tabs from 'vue-nav-tabs/dist/vue-tabs.js'
import 'vue-nav-tabs/themes/vue-tabs.css'
// import ru from 'vee-validate/dist/locale/ru';

// import VeeValidate, { Validator } from 'vee-validate';
import Vuelidate from "vuelidate";


Vue.component('tabs', Tabs);

Vue.component('tab', Tab);

// Vue.use(VeeValidate);
Vue.use(Vuelidate);
// Validator.localize('ru', ru);

new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  render: h => h(App)
});
