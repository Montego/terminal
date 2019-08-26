<template>
  <div id="app" data-app>
    <div class="header">
    </div>
      <router-view>
      </router-view>
  </div>
</template>

<script>
import Header from "./components/layouts/Header";
import Profile from "./components/pages/Profile";
import {AxiosInstance as AXIOS} from "axios";

export default {
  name: 'app',
  components: {Header, Profile},
//TODO check it --> part of making login/logout with vuex
  // created: function () {
  //   AXIOS.interceptors.response.use(undefined, function (err) {
  //     return new Promise(function (resolve, reject) {
  //       if (err.status === 401 && err.config) {
  //         // if you ever get an unauthorized, logout the user
  //         // this.$store.dispatch(AUTH_LOGOUT)
  //         // location.href='/login';
  //         console.log("==============================================================================")
  //         // you can also redirect to /login if needed !
  //       }
  //       throw err;
  //     });
  //   });
  // }
}
</script>

<style>
  .header {
    margin-top: -30px;

  }
#app {
  margin: -8px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  /*margin: 0 10px;*/
}

a {
  color: #42b983;
}
</style>
