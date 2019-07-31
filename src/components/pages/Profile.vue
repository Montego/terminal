<template>
  <div class="outer">
    <!--<div class="row">-->
      <!--<div class="col-sm-1">Абитуриент:</div>-->
      <!--<input class="col-sm-4" type="search" name="поиск" placeholder="Поиск по сайту">-->
      <!--<button class="col-sm-2" type="button" @click="handleClick(false)">К заявлениям</button>-->
      <!--<button class="col-sm-2" type="button" @click="handleClick(true)">К профилям</button>-->
      <!--<a class="logout col-sm-3" href="/login">Logout</a>-->
    <!--</div>-->
    <div class="control-panel col-sm">
      <div>
        <span>Абитуриент:</span>
        <input @change="searchPersonBySNP(searchForm)" v-model="searchForm.tab_personal_lastname.input" type="search" name="поиск" placeholder="Поиск по сайту">
        <select v-model="searchForm.tab_personal_lastname.select" class="minimal exta_info_select col-sm-3">
          <option v-for="option in search_options">
            {{option.item}}
          </option>
        </select>
      </div>
      <div>
        <!--<button type="button" @click="handleClick(false)">К заявлениям</button>-->
        <button type="button" @click="handleClick(true)">К абитуриентам</button>
      </div>
      <!--<form action="/logout" method="post">-->
        <!--<input type="hidden" name="_csrf" value="${_csrf.token}"/>-->
        <!--<button class="btn btn-primary" type="submit">Sign Out</button>-->
      <!--</form>-->
      <a class="logout" href="" @click.prevent="onLogout">Logout</a>
    </div>

    <div>
      <WraperProfile v-show="showProfile" :handleClick="handleClick" ></WraperProfile>
      <WraperApplication v-show="!showProfile" :handleClick="handleClick"></WraperApplication>

    </div>
  </div>
</template>


<script>
  import TabOverview from "../tabs/Profile/TabOverviewProfile";
  import TabPersonalInfo from "../tabs/Profile/TabPersonalInfo";
  import TabAddressInfo from "../tabs/Profile/TabAddressInfo";
  import TabEducationMilitary from "../tabs/Profile/TabEducationMilitaryInfo";
  import TabEvidenceEge from "../tabs/Profile/TabEvidenceEgeInfo";
  import TabParentInfo from "../tabs/Profile/TabParentInfo";
  import TabDistinctiveFeaturesInfo from "../tabs/Profile/TabDistinctiveFeaturesInfo";
  import TabPhoto from "../tabs/Profile/TabPhoto";

  import WraperProfile from "./WraperProfile";
  import WraperApplication from "./WraperApplication";

  import TabOverviewApplication from "../tabs/Application/TabOverviewApplication";
  import TabApplicationFill from "../tabs/Application/TabApplicationFill";
  import TabReceptionConditions from "../tabs/Application/TabReceptionConditions";
  import TabDocuments from "../tabs/Application/TabDocuments";
  import TabEntranceTests from "../tabs/Application/TabEntranceTests";
  import TabOther from "../tabs/Application/TabOther";

  import { createHelpers } from 'vuex-map-fields';
  import {AXIOS} from "../plugins/APIService";
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  const { mapFields:applications} = createHelpers({
    getterType: 'applications/getField',
    mutationType: 'applications/updateField',
  });
  export default {
    name: "Profile",

    components: {
      WraperProfile,WraperApplication,
      TabPhoto, TabDistinctiveFeaturesInfo, TabParentInfo, TabEvidenceEge, TabEducationMilitary,
      TabAddressInfo, TabPersonalInfo, TabOverview, TabOverviewApplication, TabApplicationFill,
      TabReceptionConditions, TabDocuments, TabEntranceTests, TabOther
    },
    computed: {
      ...person(['person', 'showProfile','person_info_id','isModalVisible','profiles']),
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
            sortProperty:"",
            sortDirection:"",
            size:20,
            page:0
        },

        selectedSearchOption:'',
        searchContext:'',
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
      searchPersonBySNP(){
        this.profiles = [];
          console.log(this.searchForm);

          AXIOS.post("/profile/search/",(this.searchForm))
            .then((response) => {
              let i = 0;
              for(i; i<response.data.length; i++){
                this.profiles.push(response.data[i]);
              }

              console.log(response.data);
            })
            .catch( (e) => {
              console.error(e);
            });
      },

      handleClick(val) {
        location.href='profile#overview_personal_info';
          this.showProfile = val;
          this.isModalVisible = false;
          this.application.applicationTable.splice(0,1)
      },

      onLogout: () => {
          AXIOS.get("/logout")
              .then((response) => {
                  console.log(response);
                  location.href='login';
              })
              .catch( (e) => {
                  console.error(e);
              });
      },

      onApplication(data) {
        console.log(data)
      }
    }
  }
</script>

<style scoped>


  select.minimal {
    background-image:
      linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
  }

  select.minimal:focus {
    background-image:
      linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 15px) 1em,
      calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
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
    /*margin-top: -5px;*/
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
