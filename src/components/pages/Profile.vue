<template>
    <div class="outer">

      <div class="row search_place">
          <label class="row search_form">
            <div class="col-sm">Абитуриент:</div>
            <input class="col-sm" type="search" name="поиск" placeholder="Поиск по сайту">
          </label>
            <!--<input type="submit" value="Заявление">-->
            <button class="search_button col-sm-2">Заявление</button>

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
        <tabs :options="{ useUrlFragment: false }">
        <!--<tabs class="main_tab">-->
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
  import { mapState, mapGetters } from 'vuex'
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
        TabParentInfo, TabEvidenceEge, TabEducationMilitary, TabAddressInfo, TabPersonalInfo, TabOverview},
      computed:{
        ...mapState('tab_personal_info', ['name', 'lastname', 'firstname', 'middlename', 'lastname_genitive',
        'firstname_genitive', 'middlename_genitive', 'contactPersonNameGenitive', 'gender', 'birthDate', 'age', 'inipa',
        'inipa_date', 'note', 'identityCardCode', 'identityCardSeries', 'identityCardNumber', 'identityCardIssueBy', 'identityCardIssueDate',
        'identityCardIssueDep', 'otherCountryRegion', 'isCompatriot', 'isForeigners', 'birthPlace', 'isHotel',
        'foreign_like_russian', 'homePhoneNumber', 'cellularPhone', 'email', 'organization_name',
        'organization_address', 'organization_profession', 'seniority', 'employYears', 'employMonths',
        'employDays', 'foreign_language', 'language_name', 'language_score']),
        ...mapGetters('tab_personal_info', ['form', 'name', 'lastname', 'firstname', 'middlename', 'lastname_genitive',
          'firstname_genitive', 'middlename_genitive', 'contactPersonNameGenitive', 'gender', 'birthDate', 'age', 'inipa',
          'inipa_date', 'note', 'identityCardCode', 'identityCardSeries', 'identityCardNumber', 'identityCardIssueBy', 'identityCardIssueDate',
          'identityCardIssueDep', 'otherCountryRegion', 'isCompatriot', 'isForeigners', 'birthPlace', 'isHotel',
          'foreign_like_russian', 'homePhoneNumber', 'cellularPhone', 'email', 'organization_name',
          'organization_address', 'organization_profession', 'seniority', 'employYears', 'employMonths',
          'employDays', 'foreign_language', 'language_name', 'language_score']),
        // contactPersonNameGenitive: this.lastname + ' ' + this.firstname + ' ' + this.middlename,
        // currentTabComponent: function () {
        //   return this.currentTab
        // }
      },
      data () {
        return {
          currentTab: 'Home',
          tabs: ['TabOverview', 'TabPersonalInfo', 'TabAddressInfo', 'TabEducationMilitary', 'TabEvidenceEge', 'TabParentInfo', 'TabDistinctiveFeaturesInfo', 'TabPhoto'],
      // tables
      //   headers_all_pretendents: [
      //     { text: 'Ф.И.О.', value: 'snp_pretendent', sortable: false, align: 'center' },
      //     { text: 'Фамилия', value: 'surname_pretendent',sortable: false, align: 'center' },
      //     { text: 'Имя', value: 'name_pretendent',sortable: false, align: 'center' },
      //     { text: 'Отчество', value: 'patronymic_pretendent',sortable: false, align: 'center' },
      //     { text: 'Пол', value: 'gender_pretendent',sortable: false, align: 'center' },
      //     { text: 'Дата рождения', value: 'birthday_pretendent',sortable: false, align: 'center' },
      //     { text: 'Код контактного лица', value: 'contact_code_pretendent',sortable: false, align: 'center' },
      //   ],
      //     info_all_pretendents: [],

          // headers_ege_evidence: [
          //   { text: '№', value: 'ege_evidence_number', sortable: false, align: 'center' },
          //   { text: 'Дата выдачи', value: 'ege_evidence_date',sortable: false, align: 'center' },
          //   { text: 'Типограф.а №', value: 'ege_evidence_t_number',sortable: false, align: 'center' },
          //   { text: 'Сумма баллов', value: 'ege_evidence_score',sortable: false, align: 'center' },
          //   { text: 'Коп/ориг.', value: 'ege_evidence_copy_origin',sortable: false, align: 'center' },
          //   { text: 'Предоставлено', value: 'ege_evidence_date_show', sortable: false,align: 'center' },
          //   { text: 'Форма ЕГЭ', value: 'ege_evidence_form_ege',sortable: false, align: 'center' },
          //   { text: 'Место проведения', value: 'ege_evidence_place_ege',sortable: false, align: 'center' },
          //   { text: 'Год', value: 'ege_evidence_year_ege',sortable: false, align: 'center' },
          //   { text: 'Статус', value: 'ege_evidence_date_status',sortable: false, align: 'center' }
          //
          // ],
          // info_ege_evidence: [],

          // headers_ege_subjects: [
          //   { text: 'Предмет', value: 'ege_subject_name', sortable: false, align: 'center' },
          //   { text: 'Балл', value: 'ege_ball_1',sortable: false, align: 'center' },
          //   { text: 'Балл(ФИС)', value: 'ege_ball_2',sortable: false, align: 'center' },
          //   { text: 'Статус апелляция', value: 'ege_appeal_status',sortable: false, align: 'center' },
          // ],
          // info_ege_subjects: [],

          // headers_parent: [
          //   { text: 'Кем приходится', value: 'who_parent', sortable: false, align: 'center' },
          //   { text: 'Ф.И.О.', value: 'snp_parent',sortable: false, align: 'center' },
          //   { text: 'Фамилия', value: 'surname_parent',sortable: false, align: 'center' },
          //   { text: 'Имя', value: 'name_parent', sortable: false, align: 'center' },
          //   { text: 'Отчество', value: 'patronymic_parent',sortable: false, align: 'center' },
          //   { text: 'Пол', value: 'gender_parent',sortable: false, align: 'center' },
          //
          // ],
          // info_parent: [],

          // headers_features_info: [
          //   { text: 'Код', value: 'code', sortable: false, align: 'center' },
          //   { text: 'Тип признака', value: 'type_sygn',sortable: false, align: 'center' },
          //   { text: 'Название', value: 'name',sortable: false, align: 'center' },
          //   { text: 'Тип диплома', value: 'type_diplom', sortable: false,align: 'center' },
          //   { text: 'Балл ИД', value: 'ball_1', sortable: false, align: 'center' },
          //   { text: 'Выполнено', value: 'done', sortable: false, align: 'center' },
          //   { text: 'Балл экс.в ФИС.', value: 'ball_2',sortable: false, align: 'center' },
          // ],
          // info_features_info: [],
          //
          // headers_features_documents: [
          //   { text: '№', value: 'num', sortable: false, align: 'center' },
          //   { text: 'Документ', value: 'documents',sortable: false, align: 'center' },
          //   { text: 'Копия(Оригинал)', value: 'copy_or_origin',sortable: false, align: 'center' },
          // ],
          // info_features_documents: [],


//test data
          options_gender: [
            {id: 0, item:'-выберите пол-'},
            {id: 1, item:'Мужской'},
            {id: 2, item:'Женский'},
            {id: 3, item:'Другое'},
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
  input.checkbox{
    height: 15px;
    transform:scale(1.3);
    opacity:0.9;
    cursor:pointer;
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
    border-radius:5px;
    background-color: ghostwhite;
    /*background-color: #EDD19C;*/
    font-size: 16px;
    cursor: pointer;
    transform:scale(0.8);
    opacity:0.9
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
  .search_place p{
    margin-right: 10px;
  }
  .input_profile_part1 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
</style>
