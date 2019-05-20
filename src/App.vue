<template>
  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/layouts/Header";
export default {
  name: 'app',
  components: {Header},
}
</script>

<style>
  .header {
    margin-top: -21px;

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
