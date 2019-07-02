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
      <!--<td class="text-xs-center">{{ props.item.tab_personal_selectedGender}}</td>-->
      <td class="text-xs-center">{{ props.item.tab_personal_birthDate}}</td>
      <!--<td class="text-xs-center">{{ props.item.contact_code_pretendent}}</td>-->
      <td class="justify-center layout px-0">
          <button @click="onRedaction(props.item)">
            <v-icon color="#5bc0de">edit</v-icon>
          </button>
          <!--<button type="button" @click="handleClick(false)">-->
            <!--<v-icon color="#5bc0de">Заявление</v-icon>-->
          <!--</button>-->
      </td>
    </template>
  </v-data-table>
  </div>
</template>

<script>
  import {AXIOS} from "../../plugins/APIService";
  import { createHelpers } from 'vuex-map-fields';
  import { mapMultiRowFields } from 'vuex-map-fields';

  // const { mapMultiRowFields: personM } = createHelpers({
  //   getterType: `person/getField`,
  //   mutationType: `person/updateField`,
  // });
  // const { mapMultiRowFields:application } = createHelpers({
  //   getterType: `application/getField`,
  //   mutationType: `application/updateField`,
  // });

  const { mapFields: tab_personal_info } = createHelpers({
    getterType: `tab_personal_info/getField`,
    mutationType: `tab_personal_info/updateField`,
  });
  const { mapFields: applications } = createHelpers({
    getterType: `applications/getField`,
    mutationType: `applications/updateField`,
  });
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
    export default {
      name: "TabOverview",
      props: {
        handleClick: Function,
      },
      data () {
        return {

          profiles: [],
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
            // { text: 'Пол', value: 'selectedGender',sortable: false, align: 'center' },
            { text: 'Дата рождения', value: 'birthDate',sortable: false, align: 'center' },
            // { text: 'Код контактного лица', value: 'contact_code_pretendent',sortable: false, align: 'center' },
            { text: 'Действия', value: 'name', sortable: false, align: 'center' }
          ],
          pretendets: [],

        }
      },
      computed: {
        // ...mapMultiRowFields(['profiles']),
        // ...application(['contacts']),
        ...person(['person','showProfile']),
        // ...personM(['persons','profiles']),
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
        ...applications(['application_person_id','application_person_name']),
        showTable() {
            return this.profiles;
          // return this.persons;
        },

        // fullname: function () {
        //   return this.profile_1_personal_name = this.profile_1_personal_lastname + ' ' + this.profile_1_personal_firstname + ' ' + this.profile_1_personal_middlename
        //   },
        },
      created () {
          AXIOS.get(`/profile/persons`)
            .then(response => {
              this.profiles = response.data
              console.log(this.profiles)
            })
            .catch(e => {
              this.errors.push(e)
            })
      },

      methods: {


        onNewProfile(){

          this.person.ege_info = [];
          this.person.parents_info = [];

          // this.person.tab_personal_lastname = "";
          // this.person.tab_personal_firstname = null;
          // this.person.tab_personal_middlename = null;
          // this.person.tab_personal_lastname_genitive = null;
          // this.person.tab_personal_firstname_genitive = null;
          // this.person.tab_personal_middlename_genitive = null;
          // this.person.tab_personal_birthDate = null;
          // this.person.tab_personal_selectedGender = null;
          // this.person.tab_personal_seniority = null;
          // this.person.tab_personal_employYears = null;
          // this.person.tab_personal_employMonths = null;
          // this.person.tab_personal_employDays = null;
          // this.person.tab_personal_identityCardSeries = null;
          // this.person.tab_personal_identityCardNumber = null;
          // this.person.tab_personal_identityCardIssueDate = null;
          // this.person.tab_personal_identityCardIssueDep = null;
          // this.person.tab_personal_identityCardIssueBy = null;
          // this.person.tab_personal_isCompatriot = null;
          // this.person.tab_personal_isEquatedForeign = null;
          // this.person.tab_personal_isHostel = '';
          // this.person.tab_personal_isForeignLikeRussian = null;
          // this.person.tab_personal_cellularPhone = '';
          // this.person.tab_personal_selectedIdentityCardCode = null;
          // this.person.tab_personal_note = null;
          // this.person.tab_personal_email = null;
          // this.person.tab_personal_selectedCitizenship = null;
          // this.person.tab_personal_INIPA = null;
          // this.person.tab_personal_INIPADate = null;
          // this.person.tab_personal_note = null;
          //
          // this.person.tab_personal_selectedIdentityCardCode = null;
          // this.person.tab_personal_identityCardSeries = null;
          // this.person.tab_personal_identityCardNumber = null;
          // this.person.tab_personal_identityCardIssueBy = null;
          // this.person.tab_personal_identityCardIssueDate = null;
          // this.person.tab_personal_identityCardIssueDep = null;
          // this.person.tab_personal_selectedCitizenship = null;
          // this.person.tab_personal_isCompatriot = null;
          // this.person.tab_personal_isEquatedForeign = null;
          // this.person.tab_personal_birthplace = null;
          // this.person.tab_personal_isHostel = null;
          // this.person.tab_personal_isForeignLikeRussian = null;
          // this.person.tab_personal_homePhoneNumber = null;
          // this.person.tab_personal_cellularPhone = null;
          // this.person.tab_personal_email = null;
          // this.person.tab_personal_company = null;
          // this.person.tab_personal_company_address = null;
          // this.person.tab_personal_seniority = null;
          // this.person.tab_personal_employYears = null;
          // this.person.tab_personal_employMonths = null;
          // this.person.tab_personal_employDays = null;
          // this.person.tab_personal_selectedForeignLanguageInfo = null;
          // this.person.selected_foreignLanguageName1 = null;
          // this.person.language_score1 = null;
          // this.person.selected_foreignLanguageName2 = null;
          // this.person.language_score2 = null;
          // this.person.selected_foreignLanguageName3 = null;
          // this.person.language_score3 = null;
          //
          // this.person.tab_address_registrationAddress = null;
          // this.person.tab_address_factAddress = null;
          // this.person.tab_address_templateRegistrationAddress = null;
          //
          // this.person.tab_edu_military_educationLevel = null;
          // this.person.tab_edu_military_univer = null;
          // this.person.tab_edu_military_selectedCountryRegion = null;
          // this.person.tab_edu_military_selectedState = null;
          // this.person.tab_edu_military_selectedAcademyYear = null;
          // this.person.tab_edu_military_selectedEduDoc = null;
          // this.person.tab_edu_military_eduDocSerial = null;
          // this.person.tab_edu_military_eduDocNumber = null;
          // this.person.tab_edu_military_eduDocDate = null;
          // this.person.tab_edu_military_eduDocName = null;
          // this.person.tab_edu_military_attachment_serial = null;
          // this.person.tab_edu_military_attachment_number = null;
          // this.person.averageScore = null;
          // this.person.tab_edu_military_selectedSoldiery = null;
          // this.person.tab_edu_military_selectedSoldieryStatus = null;
          // this.person.tab_edu_military_selectedMilitaryFormDoc = null;
          // this.person.tab_edu_military_militaryNumber = null;
          // this.person.tab_edu_military_militarySeries = null;
          // this.person.tab_edu_military_militaryIssueDate = null;
          // this.person.tab_edu_military_militaryIssueBy = null;
          // this.person.tab_edu_military_militaryRank = null;
          // this.person.tab_edu_military_selectedDocType = null;
          // this.person.tab_edu_military_docMilitaryShowDate = null;
          // this.person.tab_edu_military_startMilitary = null;
          // this.person.tab_edu_military_endMilitary = null;
          location.href='profile#personal_info';

        },
        onRedaction(item) {
          location.href='profile#personal_info';

          const index = this.profiles.indexOf(item);
          this.person = this.profiles[index];
          this.person.ege_info = this.profiles[index].ege_info;
          // this.person.tab_personal_lastname = this.profiles[index].tab_personal_lastname;
          // this.person.tab_personal_firstname = this.profiles[index].tab_personal_firstname;
          // this.person.tab_personal_middlename = this.profiles[index].tab_personal_middlename;
          // this.person.tab_personal_birthDate = this.profiles[index].tab_personal_birthDate;
          // this.person.tab_personal_selectedGender = this.profiles[index].tab_personal_selectedGender;
          // this.person.tab_personal_seniority = this.profiles[index].tab_personal_seniority;
          // this.person.tab_personal_employYears = this.profiles[index].tab_personal_employYears;
          // this.person.tab_personal_employMonths = this.profiles[index].tab_personal_employMonths;
          // this.person.tab_personal_employDays = this.profiles[index].tab_personal_employDays;
          // this.person.tab_personal_identityCardSeries = this.profiles[index].tab_personal_identityCardSeries;
          // this.person.tab_personal_identityCardNumber = this.profiles[index].tab_personal_identityCardNumber;
          // this.person.tab_personal_identityCardIssueDate = this.profiles[index].tab_personal_identityCardIssueDate;
          // this.person.tab_personal_identityCardIssueDep = this.profiles[index].tab_personal_identityCardIssueDep;
          // this.person.tab_personal_identityCardIssueBy = this.profiles[index].tab_personal_identityCardIssueBy;
          // this.person.tab_personal_isCompatriot = this.profiles[index].tab_personal_isCompatriot;
          // this.person.tab_personal_isEquatedForeign = this.profiles[index].tab_personal_isEquatedForeign;
          // this.person.tab_personal_isHostel = this.profiles[index].tab_personal_isHostel;
          // this.person.tab_personal_isForeignLikeRussian = this.profiles[index].tab_personal_isForeignLikeRussian;
          // this.person.tab_personal_cellularPhone = this.profiles[index].tab_personal_cellularPhone;
          // this.person.tab_personal_selectedIdentityCardCode = this.profiles[index].tab_personal_selectedIdentityCardCode;
          // this.person.tab_personal_note = this.profiles[index].tab_personal_note;
          // this.person.tab_personal_email = this.profiles[index].tab_personal_email;
          // this.person.tab_personal_selectedCitizenship = this.profiles[index].tab_personal_selectedCitizenship;
          // this.person.tab_personal_INIPA = this.profiles[index].tab_personal_INIPA;
          // this.person.tab_personal_INIPADate = this.profiles[index].tab_personal_INIPADate;
        },
        // onApplication(item) {
        //   this.$root.$emit('sendShow', {
        //     showApplication: true,
        //     showPerson: false
        //   })


        onApplication(item) {

          const index = this.profiles.indexOf(item);
          this.person = this.profiles[index];
          this.showPerson = !this.showPerson;


          // console.log(this.showApplication)
          console.log(this.showPerson)

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
