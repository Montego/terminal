<template>
  <div class="outer">
    <div class="row">
      <label class="lb">Абитуриент:</label>
    </div>
    <div class="row">
      <div class="col-sm-2">
        <input class="" @change="searchPersonBySNP(searchForm)" v-model="searchForm.tab_personal_lastname.input" type="search"
               name="поиск" placeholder="Поиск по сайту">
      </div>
      <button class="col-sm-2 bt" type="button" @click="handleClick(1)">К списку абитуриентов</button>
      <button class="col-sm-2 bt" type="button" @click="handleClick(2)">К личным сведениям</button>
      <button class="col-sm-2 bt" type="button" @click="handleClick(3)">К заявлениям</button>
      <label class="col-sm-2">{{this.userNickname}}</label>
      <a class="col-sm-2" href="" @click.prevent="onLogout">Logout</a>
    </div>

    <!--<div class="control-panel ">-->
      <!--<div>-->
        <!--<span>Абитуриент:</span>-->
        <!--<div class="box">-->
          <!--<input @change="searchPersonBySNP(searchForm)" v-model="searchForm.tab_personal_lastname.input" type="search"-->
                 <!--name="поиск" placeholder="Поиск по сайту">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="row">-->
        <!--&lt;!&ndash;<button class="col-sm" type="button" @click="handleClick(true)">К списку абитуриентов</button>&ndash;&gt;-->
        <!--&lt;!&ndash;<button class="col-sm" type="button" @click="handleClick(false)">К личным сведениям</button>&ndash;&gt;-->
        <!--&lt;!&ndash;<button class="col-sm" type="button" @click="handleClick(false)">К заявлениям</button>&ndash;&gt;-->
        <!--<button class="col-sm" type="button" @click="handleClick(1)">К списку абитуриентов</button>-->
        <!--<button class="col-sm" type="button" @click="handleClick(2)">К личным сведениям</button>-->
        <!--<button class="col-sm" type="button" @click="handleClick(3)">К заявлениям</button>-->
      <!--</div>-->
      <!--<label class="col-sm">{{this.userNickname}}</label>-->
      <!--<a class="logout" href="" @click.prevent="onLogout">Logout</a>-->
    <!--</div>-->

    <div>
      <WraperProfile v-show="showProfile" :handleClick="handleClick"></WraperProfile>
      <WraperApplication v-show="!showProfile" :handleClick="handleClick"></WraperApplication>

    </div>
  </div>
</template>


<script>
  import WraperProfile from "./WraperProfile";
  import WraperApplication from "./WraperApplication";

  import {createHelpers} from 'vuex-map-fields';
  import {AXIOS} from "../plugins/APIService";

  const {mapFields: person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });

  export default {
    name: "Profile",
    mounted() {
      this.$store.dispatch('person/onLoadUser');
    },
    components: {
      WraperProfile, WraperApplication
    },
    computed: {
      ...person(['userNickname','person', 'showProfile', 'person_info_id', 'isModalVisible', 'profiles']),
    },
    data() {
      return {
        searchForm: {
          tab_personal_lastname:
            {
              select: 'содержит',
              input: '',
              fromDate: null,
              toDate: null
            },
          sortProperty: "",
          sortDirection: "",
          size: 20,
          page: 0
        },

        selectedSearchOption: '',
        searchContext: '',
        options_select: [
          {id: 1, item: 'да'},
          {id: 2, item: 'нет'},
        ],

        search_options: [
          {id: 0, item: '='},
          {id: 1, item: 'содержит'},
          // {id: 2, item: 'от/до'},
          // {id: 3, item: '>'},
          // {id: 4, item: '<'},
          {id: 5, item: 'начинается'},
          // {id: 6, item: 'в списке'},
        ],
        dialog: false,
      }
    },
    methods: {
      searchPersonBySNP() {
        this.profiles = [];
        console.log(this.searchForm);

        AXIOS.post("/profile/search/", (this.searchForm))
          .then((response) => {
            let i = 0;
            for (i; i < response.data.length; i++) {
              this.profiles.push(response.data[i]);
            }
            console.log(response.data);
            location.href = 'profile#overview_personal_info';

          })
          .catch((e) => {
            console.error(e);
          });
      },

      handleClick(val) {

        if(val === 1){
          location.href = 'profile#overview_personal_info';
          location.reload(true);
          this.isModalVisible = false;
        }
        if(val === 2){
          this.showProfile = true;
          location.href = 'profile#personal_info';
        }
        if(val === 3){
          // location.href = 'profile#personal_info';
          this.showProfile = false;
        }

        // location.href = 'profile#overview_personal_info';
        // this.showProfile = val;
        // if (this.showProfile) {
        //   location.reload(true)
        // }
        // this.isModalVisible = false;
      },

      onLogout: () => {
        AXIOS.get("/logout")
          .then((response) => {
            console.log(response);
            location.href = 'login';
          })
          .catch((e) => {
            console.error(e);
          });
      },

      onApplication(data) {
        // console.log(data)
      }
    }
  }
</script>

<style scoped>

  .bt {
    /*margin-bottom: 5px;*/
  }
  .lb {
    padding-left: 35px;
    padding-top: 10px;
  }
  .box {
    background: #e6e3df;
    text-align: left;
  }

  .box input {

    display: inline-block;
    /*box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);*/
  }

  select.minimal {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px,
    5px 5px,
    1px 1.5em;
    background-repeat: no-repeat;
  }

  select.minimal:focus {
    background-image: linear-gradient(45deg, green 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, green 50%),
    linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px,
    5px 5px,
    1px 1.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
  }

  .control-panel {
    display: flex;
    align-items: center;
    margin-top: 30px;

  }

  .control-panel > * {
    margin: 0 150px;
  }

  /*.logout {*/
  /*margin-left: 30%;*/
  /*}*/
  /*tabs-component-panels.graduate_military {*/
  /*padding-bottom: -30px;*/
  /*}*/
  section.tabs-component-panels {
    padding-bottom: -30px;
  }

  tbody tr:hover td {
    background-color: #FFEFC6;
    cursor: pointer;
  }

  .search_form div {
    font-size: 20px;
  }

  .search_form input {
    width: 500px;
  }

  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
    /*border: 4px;*/
  }

  input.checkbox {
    height: 15px;
    transform: scale(1.3);
    opacity: 0.9;
    cursor: pointer;
  }

  select {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
  }

  textarea {
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
  }


  .outer {
    /*margin: 5px;*/
    margin-top: 30px;
    background: linear-gradient(45deg, #EECFBA, #C5DDE8);
    /*background: linear-gradient(to top left, powderblue, pink);*/
  }

  textarea {
    width: 90%; /* Ширина поля в процентах */
    height: 100px; /* Высота поля в пикселах */
    resize: none; /* Запрещаем изменять размер */
  }

  p {
    font-size: 25px;
    margin-bottom: -10px;
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

  .search_place p {
    margin-right: 10px;
  }

</style>
