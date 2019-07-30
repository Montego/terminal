import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/pages/Login";
import E404 from "../components/pages/E404";
import Registation from "../components/pages/Registation";
import Profile from "../components/pages/Profile";


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
    name:'profile',
    path:'/profile',
    component: Profile
  },

  {
    name:'profile#personal_info',
    path:'/profile#personal_info',
    component: Profile
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
