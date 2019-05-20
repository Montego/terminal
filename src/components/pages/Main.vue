<template>

  <div>
    <!--<Header></Header>-->
    <h1>Личный кабинет</h1>
    <div>
      <!--<tabs :options="{ useUrlFragment: false }">-->
      <tabs>
        <tab id="statements" name="Заявления">
          <!--<router-link :to="{name: 'main'}" v-bind:title="titles[0].title">-->
          <!--</router-link>-->
          <Statements></Statements>
        </tab>
        <tab id="specialty" name="Специалитет">
          <Specialty></Specialty>
        </tab>
        <tab id="residency" name="Ординатура">
          <Residency></Residency>
        </tab>
        <tab id="postgraduate" name="Аспирантура">
          <Postgraduate></Postgraduate>
        </tab>
        <tab id="contacts" name="Контакты">
          <Contacts></Contacts>
        </tab>
      </tabs>
    </div>
  </div>
</template>


<script>
  import {Tabs} from "vue-tabs-component";
  import Header from "../layouts/Header";
  import Statements from "../tabs/Statements";
  import Specialty from "../tabs/Specialty";
  import Residency from "../tabs/Residency";
  import Postgraduate from "../tabs/Postgraduate";
  import Contacts from "../tabs/Contacts";

    export default {
        name: "Main",
        components: {
          Contacts,
          Postgraduate,
          Residency,
          Specialty,
          Statements,
          Header,
          Tabs
        }
    }
</script>

<style scoped>
  .tab.a{
    color: #99ccff;
  }
</style>
