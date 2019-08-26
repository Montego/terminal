import Vue from 'vue'
import App from './App.vue'
import {store} from './store';
import {router} from './router/routes';
import {Tabs, Tab} from 'vue-tabs-component';
import moment from 'moment'
import 'vue-tabs-component/docs/resources/tabs-component.css';
import 'vuetify/dist/vuetify.min.css';
import 'vue-nav-tabs/themes/vue-tabs.css'
import Vuelidate from "vuelidate";

Vue.prototype.moment = moment;

Vue.component('tabs', Tabs);

Vue.component('tab', Tab);

Vue.use(Vuelidate);

new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  render: h => h(App)
});
