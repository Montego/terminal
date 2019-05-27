import Vue from 'vue'
import App from './App.vue'
import {store} from './store';
import {router} from './router/routes';
import {Tabs, Tab} from 'vue-tabs-component';
// import './plugins/APIService'


import 'vue-tabs-component/docs/resources/tabs-component.css';
import 'vuetify/dist/vuetify.min.css';
// import 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons';
// import Tabs from 'vue-nav-tabs/dist/vue-tabs.js'
import 'vue-nav-tabs/themes/vue-tabs.css'


Vue.component('tabs', Tabs);
Vue.component('tab', Tab);


new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  render: h => h(App)
})
