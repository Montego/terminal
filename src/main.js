import Vue from 'vue'
import App from './App.vue'
import {store} from './store';
import {router} from './router/routes';
import {Tabs, Tab} from 'vue-tabs-component';
import 'vue-tabs-component/docs/resources/tabs-component.css';
import 'vuetify/dist/vuetify.min.css';
// import 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons';

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  render: h => h(App)
})
