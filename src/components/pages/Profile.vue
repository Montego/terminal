<template>
  <div class="outer">
    <div class="row search_place">
      <label class="row search_form">
        <div class="col-sm">Абитуриент:</div>
        <input class="col-sm" type="search" name="поиск" placeholder="Поиск по сайту">
      </label>
      <!--<router-link :to="{name: 'application'}" v-bind:title="titles[0].title">-->
        <!--<button class="search_button col-sm">К заявлениям</button>-->
      <!--</router-link>-->
      <button class="logout">
        <a href="/login">Logout</a>
      </button>
    </div>
    <div>
      <!--<tabs class="main_tab" :options="{ useUrlFragment: false }">-->
        <tabs class="main_tab" v-if="showPerson">
          <tab id="overview_personal_info" name="Обзор">
            <TabOverview></TabOverview>
          </tab>

          <tab class="personal_tab" id="personal_info" name="Личные сведения">
            <TabPersonalInfo></TabPersonalInfo>
          </tab>

          <tab id="contacts" name="Адресные данные">
            <TabAddressInfo></TabAddressInfo>
          </tab>

            <tab id="evidence_ege" name="Свидетельства ЕГЭ">
              <TabEvidenceEge></TabEvidenceEge>
            </tab>

          <tab class="graduate_military" id="graduate_military" name="Образование, военная служба">
            <TabEducationMilitary></TabEducationMilitary>
          </tab>

          <tab id="parent_trustee" name="Родитель/Попечитель">
            <TabParentInfo></TabParentInfo>
          </tab>
          <tab id="distinctive_features" name="Отличительные признаки">
            <TabDistinctiveFeaturesInfo></TabDistinctiveFeaturesInfo>
          </tab>
          <tab id="photo" name="Фотография">
            <TabPhoto></TabPhoto>
          </tab>

          <tab id="overviewApplication" name="Обзор">
            <TabOverviewApplication></TabOverviewApplication>
          </tab>

          <tabs class="main_tab" >
            <tab id="overviewApplication" name="Обзор">
              <TabOverviewApplication></TabOverviewApplication>
            </tab>
            <tab id="applicationFill" name="Заявление">
              <TabApplicationFill></TabApplicationFill>
            </tab>
            <tab id="receptrionCondition" name="Условия приема">
              <TabReceptionConditions></TabReceptionConditions>
            </tab>
            <tab id="documents" name="Документы">
              <TabDocuments></TabDocuments>
            </tab>
            <tab id="entranceTests" name="Вступительные испытания">
              <TabEntranceTests></TabEntranceTests>
            </tab>
            <tab id="other" name="Проверить и сохранить">
              <TabOther></TabOther>
            </tab>
          </tabs>

      </tabs>
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

  import TabOverviewApplication from "../tabs/Application/TabOverviewApplication";
  import TabApplicationFill from "../tabs/Application/TabApplicationFill";
  import TabReceptionConditions from "../tabs/Application/TabReceptionConditions";
  import TabDocuments from "../tabs/Application/TabDocuments";
  import TabEntranceTests from "../tabs/Application/TabEntranceTests";
  import TabOther from "../tabs/Application/TabOther";

  import { createHelpers } from 'vuex-map-fields';

  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  export default {
    name: "Profile",
    components: {
      TabPhoto,
      TabDistinctiveFeaturesInfo,
      TabParentInfo, TabEvidenceEge, TabEducationMilitary,
      TabAddressInfo, TabPersonalInfo, TabOverview,

      TabOverviewApplication, TabApplicationFill, TabReceptionConditions,
      TabDocuments, TabEntranceTests, TabOther
    },
    computed: {
      ...person(['person','showApplication','showPerson']),
    },
    data() {
      return {
        titles:[
          {
            title: 'Заявление'
          },

        ],
        dialog: false,
        currentTab: 'Home',
        tabs: ['TabOverview', 'TabPersonalInfo', 'TabAddressInfo', 'TabEducationMilitary',
          'TabEvidenceEge', 'TabParentInfo', 'TabDistinctiveFeaturesInfo', 'TabPhoto'],

      }
    },
    methods: {
      onApplication() {

      }
    }
  }
</script>

<style scoped>

  .logout {
    margin-left: 30%;
  }
  /*tabs-component-panels.graduate_military {*/
    /*padding-bottom: -30px;*/
  /*}*/
  section.tabs-component-panels {
    padding-bottom: -30px;
  }

  .calculate_score {
    margin-top: -8px;
  }

  .adress_button {
    margin-left: -20px;
  }

  tbody tr:hover td {
    background-color: #FFEFC6;
    cursor: pointer;
  }

  tr:hover {
    ackground-color: red;
  }

  .search_form div {
    font-size: 20px;
  }

  .search_form input {
    width: 500px;
  }

  .search_form {
    margin-top: 14px;
    height: 15px;
  }

  .search_button {
    margin-top: 7px;
    margin-left: 30px;
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

  .clear_save_button {
    margin-top: 75%;
    margin-left: 65%;
    display: flex;
    /*justify-content: space-between;*/
  }

  .outer {
    /*margin: 5px;*/
    /*margin-top: -5px;*/
    background: linear-gradient(45deg, #EECFBA, #C5DDE8);
    /*background: linear-gradient(to top left, powderblue, pink);*/
  }

  .distinctive_features_top {
    height: 50%;
  }

  .distinctive_features_bottom {
    height: 50%;
  }

  textarea {
    width: 90%; /* Ширина поля в процентах */
    height: 100px; /* Высота поля в пикселах */
    resize: none; /* Запрещаем изменять размер */
  }

  .buttons {
    margin-left: 10px;
  }

  .ege_tabs {
    margin-top: -35px;
  }

  .parent_tabs {
    margin-top: -35px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }

  .inner_tab {
    margin-top: -40px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
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

  /*.checkbox {*/
  /*transform:scale(1.3);*/
  /*opacity:0.9;*/
  /*cursor:pointer;*/
  /*}*/
  .main_tab {
    margin-top: 2px;
    margin-left: 5px;

    /*margin-right: 5px;*/
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }

  .row {
    margin-bottom: 8px;
  }

  .form__label-text {
    text-align: left;
  }

  .alarm_label {
    /*text-align: left;*/
    color: red;
  }

  .search_place {
    /*height: auto;*/
    margin-top: 30px;
    margin-left: 20px;
  }

  .search_place p {
    margin-right: 10px;
  }

  .input_profile_part1 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
</style>
