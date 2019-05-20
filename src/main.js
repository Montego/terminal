import Vue from 'vue'
import App from './App.vue'
import {store} from './store';
import {router} from './router/routes';
import {Tabs, Tab} from 'vue-tabs-component';
import 'vue-tabs-component/docs/resources/tabs-component.css';

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  render: h => h(App)
})
