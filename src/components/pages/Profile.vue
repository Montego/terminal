<template>
  <div class="outer">



    <div class="row search_place">
      <label class="row search_form">
        <div class="col-sm">Абитуриент:</div>
        <input class="col-sm" type="search" name="поиск" placeholder="Поиск по сайту">
      </label>
      <!--<input type="submit" value="Заявление">-->

      <v-dialog v-model="dialog" max-width="800px">
        <!--забрать стиль-->
        <!--<v-btn slot="activator" color="#5bc0de" dark class="mb-2">Новое событие</v-btn>-->
        <button slot="activator" class="search_button col-sm-2">Заявление</button>
        <v-card>
          <v-card-title>
            <span class="headline"> Заявление </span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>

            </v-container>
          </v-card-text>
          <v-card-actions>
            <!--<v-spacer></v-spacer>-->
            <!--<v-btn color="blue darken-1" flat @click.native="close">Закрыть</v-btn>-->
            <!--<v-btn color="blue darken-1" flat @click.native="save">Сохранить</v-btn>-->
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--<button slot="activator" class="search_button col-sm-2">Заявление</button>-->

      <!--<button class="search_button col-sm-2">Заявление</button>-->

    </div>

    <!--другой вариант табов.c кнопками.самый быстрый вариант, хз как сделать с компонентами-->
    <!--<div id="dynamic-component-demo" class="demo">-->
    <!--<button-->
    <!--v-for="tab in tabs"-->
    <!--v-bind:key="tab"-->
    <!--v-bind:class="['tab-button', { active: currentTab === tab }]"-->
    <!--v-on:click="currentTab = tab"-->
    <!--&gt;{{ tab }}</button>-->

    <!--<component-->
    <!--v-bind:is="currentTabComponent"-->
    <!--class="tab"-->
    <!--&gt;</component>-->
    <!--</div>-->

    <div>
      <tabs class="main_tab" :options="{ useUrlFragment: false }">
        <tab id="" name="Обзор">
          <TabOverview></TabOverview>
        </tab>

        <tab class="personal_tab" id="specialty" name="Личные сведения">
          <TabPersonalInfo></TabPersonalInfo>
        </tab>

        <!--///////////////////////////////////////-->
        <tab id="contacts" name="Адресные данные">
          <TabAddressInfo></TabAddressInfo>
        </tab>

        <tab id="graduate_military" name="Образование, военная служба">
          <TabEducationMilitary></TabEducationMilitary>
        </tab>

        <tab id="evidence_ege" name="Свидетельства ЕГЭ">
          <TabEvidenceEge></TabEvidenceEge>
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
      </tabs>
    </div>
  </div>
</template>


<script>
  import TabOverview from "../tabs/TabOverview";
  import TabPersonalInfo from "../tabs/TabPersonalInfo";
  import TabAddressInfo from "../tabs/TabAddressInfo";
  import TabEducationMilitary from "../tabs/TabEducationMilitaryInfo";
  import TabEvidenceEge from "../tabs/TabEvidenceEgeInfo";
  import TabParentInfo from "../tabs/TabParentInfo";
  import TabDistinctiveFeaturesInfo from "../tabs/TabDistinctiveFeaturesInfo";
  import TabPhoto from "../tabs/TabPhoto";


  export default {
    name: "Profile",
    components: {
      TabPhoto,
      TabDistinctiveFeaturesInfo,
      TabParentInfo, TabEvidenceEge, TabEducationMilitary, TabAddressInfo, TabPersonalInfo, TabOverview
    },
    computed: {},
    data() {
      return {
        dialog: false,
        currentTab: 'Home',
        tabs: ['TabOverview', 'TabPersonalInfo', 'TabAddressInfo', 'TabEducationMilitary', 'TabEvidenceEge', 'TabParentInfo', 'TabDistinctiveFeaturesInfo', 'TabPhoto'],
//test data
        options_gender: [
          {id: 0, item: '-выберите пол-'},
          {id: 1, item: 'Мужской'},
          {id: 2, item: 'Женский'},
          {id: 3, item: 'Другое'},
        ],
        options_document_type: [
          {id: 1, item: 'Паспорт РФ'},
          {id: 2, item: 'Не паспорт РФ'},
        ]
        ,
        options_citizenship: [
          {id: 1, item: 'РФ'},
          {id: 2, item: 'Казахстан'},
        ],
        options_foreign_language: [
          {id: 1, item: 'изучал'},
          {id: 2, item: 'не изучал'},
        ]
      }
    },
    methods: {
      onApplication() {

      }
    }
  }
</script>

<style scoped>
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
