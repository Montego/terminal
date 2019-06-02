<template>
    <div>
      <router-link :to="{name: 'profile'}" v-bind:title="titles[0].title">
        <button class="search_button col-sm-2">К личным делам</button>-->
      </router-link>
      <tabs class="parent_tabs">
        <tab id="" name="Обзор">
        </tab>

        <tab name="Разное">

        </tab>
      </tabs>
    </div>
</template>

<script>
    export default {
        name: "Application",
      data() {
        return {
          titles:[
            {
              title: 'back'
            },

          ],
        }
        }
    }
</script>

<style scoped>
  .search_button {
    margin-top:5%;
    margin-left: 30px;
  }
  button {
    min-width: 100px;
    padding: 10px;
    border: 1px solid;
    border-color: grey;
    border-radius: 5px;
    background-color: ghostwhite;
    /*background-color: #EDD19C;*/
    font-size: 16px;
    cursor: pointer;
    transform: scale(0.8);
    opacity: 0.9
  }
</style>
