<template>
        <div class="outer">
          <div class="row search_place">
            <label class="row search_form">
              <div class="col-sm">Заявление</div>
              <input class="col-sm" type="search" name="поиск" placeholder="Поиск по сайту" hidden>
            </label>
            <router-link :to="{name: 'profile'}" v-bind:title="titles[0].title">
              <button class="search_button col-sm-2">К личным делам</button>-->
            </router-link>

          </div>

          <div>
            <tabs class="main_tab">
              <tab id="overview" name="Обзор">
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
          </div>
        </div>
      </template>

<script>
  import TabOverviewApplication from "../tabs/Application/TabOverviewApplication";
  import TabReceptionConditions from "../tabs/Application/TabReceptionConditions";
  import TabDocuments from "../tabs/Application/TabDocuments";
  import TabOther from "../tabs/Application/TabOther";
  import TabEntranceTests from "../tabs/Application/TabEntranceTests";
  import TabApplicationFill from "../tabs/Application/TabApplicationFill";
    export default {
        name: "Application",
      components: {
        TabOverviewApplication, TabApplicationFill, TabReceptionConditions , TabDocuments, TabEntranceTests, TabOther
      },
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
    margin-top: 5%;
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
    margin-top: -5px;
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
    /*margin-top: -35px;*/
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
    min-width: 160px;
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
    display: flex;
    justify-content: space-between;
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
