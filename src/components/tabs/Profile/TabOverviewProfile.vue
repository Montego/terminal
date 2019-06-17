<template>
  <div>
    <div>
      <!--{{this.tab_profiles[0].tab_personal_lastname}}-->
      <button color="#5bc0de" @click="onNewProfile()">
        +
      </button>
      <div class="row">

      </div>
    </div>


  <v-data-table data-app
    :headers="headers_profile"
    :items="showTable" hide-actions
    class="elevation-1 text-xs-center"
  >
    <template slot="items" slot-scope="props">
      <!--<td class="text-xs-center">{{ props.item.profile_1_personal_name }}</td>-->
      <td class="text-xs-center">{{ props.item.tab_personal_lastname }}</td>
      <td class="text-xs-center">{{ props.item.tab_personal_firstname}}</td>
      <td class="text-xs-center">{{ props.item.tab_personal_middlename}}</td>
      <td class="text-xs-center">{{ props.item.tab_personal_selectedGender}}</td>
      <td class="text-xs-center">{{ props.item.tab_personal_birthDate}}</td>
      <!--<td class="text-xs-center">{{ props.item.contact_code_pretendent}}</td>-->
      <td class="justify-center layout px-0">
          <button @click="onRedaction(props.item)">
            <v-icon color="#5bc0de">edit</v-icon>
          </button>
          <button @click="onApplication(props.item)">
            <v-icon color="#5bc0de">Заявление</v-icon>
          </button>
      </td>
    </template>
  </v-data-table>
  </div>
</template>

<script>
  import { createHelpers } from 'vuex-map-fields';
  const { mapMultiRowFields } = createHelpers({
    getterType: `person/getField`,
    mutationType: `person/updateField`,
  });

  const { mapFields: tab_personal_info } = createHelpers({
    getterType: `tab_personal_info/getField`,
    mutationType: `tab_personal_info/updateField`,
  });
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
    export default {
      name: "TabOverview",
      data () {
        return {
          titles:[
            {
              title: 'Личные сведения'
            },
          ],

          headers_profile: [
            // { text: 'Ф.И.О.', value: 'personal_name', sortable: false, align: 'center' },
            { text: 'Фамилия', value: 'lastname',sortable: false, align: 'center' },
            { text: 'Имя', value: 'firstname',sortable: false, align: 'center' },
            { text: 'Отчество', value: 'middlename',sortable: false, align: 'center' },
            { text: 'Пол', value: 'selectedGender',sortable: false, align: 'center' },
            { text: 'Дата рождения', value: 'birthDate',sortable: false, align: 'center' },
            // { text: 'Код контактного лица', value: 'contact_code_pretendent',sortable: false, align: 'center' },
            { text: 'Действия', value: 'name', sortable: false, align: 'center' }
          ],
          pretendets: [],

        }
      },
      computed: {
        ...person(['person']),
        ...mapMultiRowFields(['persons']),
        ...tab_personal_info(['tab_personal_name', 'tab_personal_lastname', 'tab_personal_firstname',
          'tab_personal_middlename','tab_personal_birthDate','tab_personal_age',
          ' tab_personal_seniority','tab_personal_employYears','tab_personal_employMonths',
          'tab_personal_employDays','tab_personal_lastname_genitive','tab_personal_firstname_genitive',
          'tab_personal_middlename_genitive','tab_personal_contactPersonNameGenitive',
          'tab_personal_identityCardSeries','tab_personal_identityCardNumber',
          'tab_personal_identityCardIssueDate','tab_personal_identityCardIssueDep','tab_personal_identityCardIssueBy',
          'tab_personal_homePhoneNumber','tab_personal_cellularPhone','tab_personal_isCompatriot',
          'tab_personal_isEquatedForeign', 'tab_personal_isHostel','tab_personal_isForeignLikeRussian','tab_personal_selectedGender',
          'tab_personal_selectedIdentityCardCode','tab_personal_selectedForeignLanguageInfo',
          'tab_personal_selectedCitizenship', 'tab_personal_INIPA', 'tab_personal_INIPADate', 'tab_personal_note',
          'tab_personal_birthplace', 'tab_personal_email'
        ]),
        showTable() {

          return this.persons;
        },

        // fullname: function () {
        //   return this.profile_1_personal_name = this.profile_1_personal_lastname + ' ' + this.profile_1_personal_firstname + ' ' + this.profile_1_personal_middlename
        //   },
        },
      methods: {
        onNewProfile(){
          location.href='profile#personal_info';
          this.tab_personal_lastname = '';
          this.tab_personal_firstname = '';
          this.tab_personal_middlename = '';
          this.tab_personal_birthDate = '';
          this.tab_personal_selectedGender = '';
          this.tab_personal_seniority = '';
          this.tab_personal_employYears = '';
          this.tab_personal_employMonths = '';
          this.tab_personal_employDays = '';
          this.tab_personal_identityCardSeries = '';
          this.tab_personal_identityCardNumber = '';
          this.tab_personal_identityCardIssueDate = '';
          this.tab_personal_identityCardIssueDep = '';
          this.tab_personal_identityCardIssueBy = '';
          this.tab_personal_isCompatriot = '';
          this.tab_personal_isEquatedForeign = '';
          this.tab_personal_isHostel = '';
          this.tab_personal_isForeignLikeRussian = '';
          this.tab_personal_cellularPhone = '';
          this.tab_personal_selectedIdentityCardCode = '';
          this.tab_personal_note = '';
          this.tab_personal_email = '';
          this.tab_personal_selectedCitizenship = '';
          this.tab_personal_INIPA = '';
          this.tab_personal_INIPADate = '';
        },
        onRedaction(item) {
          location.href='profile#personal_info';
          this.tab_personal_lastname = item.profile_1_personal_lastname;
          this.tab_personal_firstname = item.profile_1_personal_firstname;
          this.tab_personal_middlename = item.profile_1_personal_middlename;
          this.tab_personal_birthDate = item.profile_1_personal_birthDate;
          this.tab_personal_selectedGender = item.profile_1_personal_selectedGender;
          this.tab_personal_seniority = item.profile_1_personal_seniority;
          this.tab_personal_employYears = item.profile_1_personal_employYears;
          this.tab_personal_employMonths = item.profile_1_personal_employMonths;
          this.tab_personal_employDays = item.profile_1_personal_employDays;
          this.tab_personal_identityCardSeries = item.profile_1_personal_identityCardSeries;
          this.tab_personal_identityCardNumber = item.profile_1_personal_identityCardNumber;
          this.tab_personal_identityCardIssueDate = item.profile_1_personal_identityCardIssueDate;
          this.tab_personal_identityCardIssueDep = item.profile_1_personal_identityCardIssueDep;
          this.tab_personal_identityCardIssueBy = item.profile_1_personal_identityCardIssueBy;
          this.tab_personal_isCompatriot = item.profile_1_personal_isCompatriot;
          this.tab_personal_isEquatedForeign = item.profile_1_personal_isEquatedForeign;
          this.tab_personal_isHostel = item.profile_1_personal_isHostel;
          this.tab_personal_isForeignLikeRussian = item.profile_1_personal_isForeignLikeRussian;
          this.tab_personal_cellularPhone = item.profile_1_personal_cellularPhone;
          this.tab_personal_selectedIdentityCardCode =item.profile_1_personal_selectedIdentityCardCode;
          this.tab_personal_note = item.profile_1_personal_note;
          this.tab_personal_email = item.profile_1_personal_email;
          this.tab_personal_selectedCitizenship = item.profile_1_personal_selectedCitizenship;
          this.tab_personal_INIPA = item.profile_1_personal_INIPA;
          this.tab_personal_INIPADate = item.profile_1_personal_INIPADate;
        },
        onApplication(item) {
          location.href='application#applicationFill';
        },
      },

    }
</script>

<style scoped>

table {
  padding: 0;

}
  label.row {
    margin-bottom: 3px;
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
