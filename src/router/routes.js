import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/pages/Login";
import E404 from "../components/pages/E404";
import Registation from "../components/pages/Registation";
import Main from "../components/pages/Main";
Vue.use(VueRouter);

const routes = [
  {
    name:'login',
    path:'/login',
    component: Login
  },
  {
    name:'registration',
    path:'/registration',
    component: Registation
  },

  {
    path:'',
    redirect: {name :'login'}
  },
  {
    name:'main',
    path:'/main',
    component: Main
  },


  {
    path:'*',
    component: E404
  }
];

export const router =  new VueRouter({
  routes,
  mode: 'history'
});
