<template>
  <div id="app">
    <div class="header">
      <!--<Header></Header>-->
    </div>
    <!--<div class="container">-->
    <!--<Profile>-->
      <!---->
    <!--</Profile>-->
      <router-view>

      </router-view>
    <!--</div>-->
  </div>
</template>

<script>
import Header from "./components/layouts/Header";
import Profile from "./components/pages/Profile";

export default {
  name: 'app',
  components: {Header, Profile},

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
