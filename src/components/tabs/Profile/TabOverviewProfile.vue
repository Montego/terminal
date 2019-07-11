<template>
  <div>
    <div>
      <!--{{this.tab_profiles[0].tab_personal_lastname}}-->
      <button color="#5bc0de" @click="onNewProfile()">
        +
      </button>
    </div>

  <v-data-table data-app
    :headers="headers_profile"
    :items="profiles" hide-actions
    class="elevation-1 text-xs-center"
  >
    <template slot="items" slot-scope="props">
      <!--<td class="text-xs-center">{{ props.item.profile_1_personal_name }}</td>-->
      <td class="text-xs-center">{{ props.item.tab_personal_lastname }}</td>
      <td class="text-xs-center">{{ props.item.tab_personal_firstname}}</td>
      <td class="text-xs-center">{{ props.item.tab_personal_middlename}}</td>
      <!--<td class="text-xs-center">{{ props.item.tab_personal_selectedGender}}</td>-->
      <td class="text-xs-center">{{ props.item.tab_personal_birthDate}}</td>
      <td class="text-xs-center">{{ props.item.application_number}}</td>
      <!--<td class="text-xs-center">{{ props.item.contact_code_pretendent}}</td>-->
      <td class="justify-center layout px-0">
          <button type="button" @click="onApplication(props.item); handleClick(false) ">
            <v-icon color="#5bc0de">description</v-icon>
          </button>
        <button @click="onRedaction(props.item)">
          <v-icon color="#5bc0de">edit</v-icon>
        </button>
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
          personInfo:[],
          // profiles: [],
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
            { text: '№ Заявления', value: 'application_number',sortable: false, align: 'center' },
            { text: 'Действия', value: 'name', sortable: false, align: 'center' }
          ],
          pretendets: [],

        }
      },
      computed: {
        // ...mapMultiRowFields(['profiles']),
        // ...application(['contacts']),
        ...person(['person','showProfile','profiles',
          'tab_personal_lastname', 'tab_personal_firstname', 'tab_personal_middlename', 'tab_personal_lastname_genitive',
          'tab_personal_firstname_genitive', 'tab_personal_middlename_genitive', 'tab_personal_selectedGender', 'tab_personal_birthDate',
          'tab_personal_INIPA', 'tab_personal_INIPADate', 'tab_personal_note', 'tab_personal_selectedIdentityCardCode',
          'tab_personal_identityCardSeries', 'tab_personal_identityCardNumber', 'tab_personal_identityCardIssueBy',
          'tab_personal_identityCardIssueDate', 'tab_personal_identityCardIssueDep', 'tab_personal_selectedCitizenship',
          'tab_personal_isCompatriot', 'tab_personal_isEquatedForeign', 'tab_personal_birthplace', 'tab_personal_isHostel',
          'tab_personal_isForeignLikeRussian', 'tab_personal_homePhoneNumber', 'tab_personal_cellularPhone', 'tab_personal_email',
          'tab_personal_company_name', 'tab_personal_company_address', 'tab_personal_seniority', 'tab_personal_employYears',
          'tab_personal_employMonths', 'tab_personal_employDays', 'tab_personal_selectedForeignLanguageInfo', 'selected_foreignLanguageName1',
          'language_score1', 'selected_foreignLanguageName2', 'language_score2', 'selected_foreignLanguageName3', 'language_score3',
          'tab_address_registrationAddress', 'tab_address_factAddress', 'tab_address_templateRegistrationAddress', 'tab_edu_military_educationLevel',
          'tab_edu_military_univer', 'tab_edu_military_selectedCountryRegion', 'tab_edu_military_selectedState', 'tab_edu_military_selectedAcademyYear',
          'tab_edu_military_selectedEduDoc', 'tab_edu_military_eduDocSerial', 'tab_edu_military_eduDocNumber', 'tab_edu_military_eduDocDate',
          'tab_edu_military_eduDocName', 'tab_edu_military_attachment_serial', 'tab_edu_military_attachment_number', 'score_five', 'score_four',
          'score_three', 'averageScore', 'tab_edu_military_selectedSoldiery', 'tab_edu_military_selectedSoldieryStatus', 'tab_edu_military_selectedMilitaryFormDoc',
          'tab_edu_military_militaryNumber', 'tab_edu_military_militarySeries', 'tab_edu_military_militaryIssueDate', 'tab_edu_military_militaryIssueBy',
          'tab_edu_military_militaryRank', 'tab_edu_military_selectedDocType', 'tab_edu_military_docMilitaryShowDate', 'tab_edu_military_startMilitary',
          'tab_edu_military_endMilitary', 'selectedExtraInfos1', 'selectedExtraInfos2', 'extraInfosDescription1', 'extraInfosDescription2', 'image', 'person_info_id'
        ]),

        ...applications(['application','application_person_id','application_person_name','applId','applTableName',
        'applTableNumber','applTableDate','applTableDeliveryType','applicationId'],),
        showTable() {
            return this.profiles;
        },

        // fullname: function () {
        //   return this.profile_1_personal_name = this.profile_1_personal_lastname + ' ' + this.profile_1_personal_firstname + ' ' + this.profile_1_personal_middlename
        //   },
        },
      mounted() {
        return this.profiles;
        // this.showTable()
      },
      created () {
          AXIOS.get(`/profile/personsTable`)
            .then(response => {
              this.profiles = response.data;
              console.log(this.profiles)
            })
            .catch(e => {
              this.errors.push(e)
            })
      },

      methods: {
        onNewProfile(){

          this.person.person_info = [];
          this.person.ege_info = [];
          this.person.parents_info = [];
          this.person.futures_info = [];

          this.id = '';
          this.image = '';
          this.showimage = '';
          this.tab_personal_lastname = '';
          this.tab_personal_firstname = '';
          this.tab_personal_middlename = '';
          this.tab_personal_lastname_genitive = '';
          this.tab_personal_firstname_genitive = '';
          this.tab_personal_middlename_genitive = '';
          this.tab_personal_selectedGender  = null;
          this.tab_personal_birthDate = '';
          this.tab_personal_INIPA  = '';
          this.tab_personal_INIPADate  = '';
          this.tab_personal_note  = '';

          this.tab_personal_selectedIdentityCardCode;
          this.tab_personal_identityCardSeries  = '';
          this.tab_personal_identityCardNumber  = '';
          this.tab_personal_identityCardIssueBy  = '';
          this.tab_personal_identityCardIssueDate  = '';
          this.tab_personal_identityCardIssueDep  = '';
          this.tab_personal_selectedCitizenship  = '';
          this.tab_personal_isCompatriot  = '';
          this.tab_personal_isEquatedForeign  = '';
          this.tab_personal_birthplace  = '';
          this.tab_personal_isHostel  = '';
          this.tab_personal_isForeignLikeRussian  = '';
          this.tab_personal_homePhoneNumber  = '';
          this.tab_personal_cellularPhone  = '';
          this.tab_personal_email  = '';
          this.tab_personal_company  = '';
          this.tab_personal_company_address  = '';
          this.tab_personal_seniority  = '';
          this.tab_personal_employYears  = '';
          this.tab_personal_employMonths  = '';
          this.tab_personal_employDays  = '';
          this.tab_personal_selectedForeignLanguageInfo  = '';
          this.selected_foreignLanguageName1  = null;
          this.language_score1  = '';
          this.selected_foreignLanguageName2  = null;
          this.language_score2  = '';
          this.selected_foreignLanguageName3  = null;
          this.language_score3  = '';

          this.tab_address_registrationAddress  = '';
          this.tab_address_factAddress  = '';
          this.tab_address_templateRegistrationAddress  = '';

          this.tab_edu_military_educationLevel  = null;
          this.tab_edu_military_univer  = '';
          this.tab_edu_military_selectedCountryRegion  = null;
          this.tab_edu_military_selectedState  = '';
          this.tab_edu_military_selectedAcademyYear  = '';
          this.tab_edu_military_selectedEduDoc  = '';
          this.tab_edu_military_eduDocSerial  = '';
          this.tab_edu_military_eduDocNumber  = '';
          this.tab_edu_military_eduDocDate  = '';
          this.tab_edu_military_eduDocName  = '';
          this.tab_edu_military_attachment_serial  = '';
          this.tab_edu_military_attachment_number  = '';
          this.averageScore  = '';
          this.tab_edu_military_selectedSoldiery  = null;
          this.tab_edu_military_selectedSoldieryStatus  = null;
          this.tab_edu_military_selectedMilitaryFormDoc  = null;
          this.tab_edu_military_militaryNumber  = '';
          this.tab_edu_military_militarySeries  = '';
          this.tab_edu_military_militaryIssueDate  = '';
          this.tab_edu_military_militaryIssueBy  = '';
          this.tab_edu_military_militaryRank  = '';
          this.tab_edu_military_selectedDocType  = null;
          this.tab_edu_military_docMilitaryShowDate  = '';
          this.tab_edu_military_startMilitary  = '';
          this.tab_edu_military_endMilitary  = '';

          location.href='profile#personal_info';

        },
        onRedaction(item) {
          const index = this.profiles.indexOf(item);
          const idString = this.profiles[index].id;
          const id = parseInt(idString,10);
          this.person_info_id = id;
          // AXIOS.get(`/profile/personInfo/` + id)
          AXIOS.get(`/profile/personByPersonInfo/` + id)
          //todo получать dto - массивы person_info, ege_info, parent_info
            .then(response => {
              this.person = response.data;
              this.personInfo = response.data.person_info;
              this.tab_personal_lastname = this.personInfo[0].tab_personal_lastname;

              console.log(this.personInfo[0].tab_personal_lastname)

              this.tab_personal_firstname = this.personInfo[0].tab_personal_firstname
              this.tab_personal_middlename = this.personInfo[0].tab_personal_middlename
              this.tab_personal_lastname_genitive = this.personInfo[0].tab_personal_lastname_genitive
              this.tab_personal_firstname_genitive = this.personInfo[0].tab_personal_firstname_genitive
              this.tab_personal_middlename_genitive = this.personInfo[0].tab_personal_middlename_genitive
              this.tab_personal_selectedGender  = this.personInfo[0].tab_personal_selectedGender
              this.tab_personal_birthDate = this.personInfo[0].tab_personal_birthDate
              this.tab_personal_INIPA  = this.personInfo[0].tab_personal_INIPA
              this.tab_personal_INIPADate  = this.personInfo[0].tab_personal_INIPADate
              this.tab_personal_note  = this.personInfo[0].tab_personal_note

              this.tab_personal_selectedIdentityCardCode = this.personInfo[0].tab_personal_selectedIdentityCardCode;
              this.tab_personal_identityCardSeries  = this.personInfo[0].tab_personal_identityCardSeries
              this.tab_personal_identityCardNumber  = this.personInfo[0].tab_personal_identityCardNumber
              this.tab_personal_identityCardIssueBy  = this.personInfo[0].tab_personal_identityCardIssueBy
              this.tab_personal_identityCardIssueDate  = this.personInfo[0].tab_personal_identityCardIssueDate
              this.tab_personal_identityCardIssueDep  = this.personInfo[0].tab_personal_identityCardIssueDep
              this.tab_personal_selectedCitizenship  = this.personInfo[0].tab_personal_selectedCitizenship
              this.tab_personal_isCompatriot  = this.personInfo[0].tab_personal_isCompatriot
              this.tab_personal_isEquatedForeign  = this.personInfo[0].tab_personal_isEquatedForeign
              this.tab_personal_birthplace  = this.personInfo[0].tab_personal_birthplace
              this.tab_personal_isHostel  = this.personInfo[0].tab_personal_isHostel
              this.tab_personal_isForeignLikeRussian  = this.personInfo[0].tab_personal_isForeignLikeRussian
              this.tab_personal_homePhoneNumber  = this.personInfo[0].tab_personal_homePhoneNumber
              this.tab_personal_cellularPhone  = this.personInfo[0].tab_personal_cellularPhone
              this.tab_personal_email  = this.personInfo[0].tab_personal_email
              this.tab_personal_company  = this.personInfo[0].tab_personal_company
              this.tab_personal_company_address  = this.personInfo[0].tab_personal_company_address
              this.tab_personal_seniority  = this.personInfo[0].tab_personal_seniority
              this.tab_personal_employYears  = this.personInfo[0].tab_personal_employYears
              this.tab_personal_employMonths  = this.personInfo[0].tab_personal_employMonths
              this.tab_personal_employDays  = this.personInfo[0].tab_personal_employDays
              this.tab_personal_selectedForeignLanguageInfo  = this.personInfo[0].tab_personal_selectedForeignLanguageInfo
              this.selected_foreignLanguageName1  = this.personInfo[0].selected_foreignLanguageName1
              this.language_score1  = this.personInfo[0].language_score1
              this.selected_foreignLanguageName2  = this.personInfo[0].selected_foreignLanguageName2
              this.language_score2  = this.personInfo[0].language_score2
              this.selected_foreignLanguageName3  = this.personInfo[0].selected_foreignLanguageName3
              this.language_score3  = this.personInfo[0].language_score3

              this.tab_address_registrationAddress  = this.personInfo[0].tab_address_registrationAddress
              this.tab_address_factAddress  = this.personInfo[0].tab_address_factAddress
              this.tab_address_templateRegistrationAddress  = this.personInfo[0].tab_address_templateRegistrationAddress

              this.tab_edu_military_educationLevel  = this.personInfo[0].tab_edu_military_educationLevel
              this.tab_edu_military_univer  = this.personInfo[0].tab_edu_military_univer
              this.tab_edu_military_selectedCountryRegion  = this.personInfo[0].tab_edu_military_selectedCountryRegion
              this.tab_edu_military_selectedState  = this.personInfo[0].tab_edu_military_selectedState
              this.tab_edu_military_selectedAcademyYear  = this.personInfo[0].tab_edu_military_selectedAcademyYear
              this.tab_edu_military_selectedEduDoc  = this.personInfo[0].tab_edu_military_selectedEduDoc
              this.tab_edu_military_eduDocSerial  = this.personInfo[0].tab_edu_military_eduDocSerial
              this.tab_edu_military_eduDocNumber  = this.personInfo[0].tab_edu_military_eduDocNumber
              this.tab_edu_military_eduDocDate  = this.personInfo[0].tab_edu_military_eduDocDate
              this.tab_edu_military_eduDocName  = this.personInfo[0].tab_edu_military_eduDocName
              this.tab_edu_military_attachment_serial  = this.personInfo[0].tab_edu_military_attachment_serial
              this.tab_edu_military_attachment_number  = this.personInfo[0].tab_edu_military_attachment_number
              this.averageScore  = this.personInfo[0].averageScore
              this.tab_edu_military_selectedSoldiery  = this.personInfo[0].tab_edu_military_selectedSoldiery
              this.tab_edu_military_selectedSoldieryStatus  = this.personInfo[0].tab_edu_military_selectedSoldieryStatus
              this.tab_edu_military_selectedMilitaryFormDoc  = this.personInfo[0].tab_edu_military_selectedMilitaryFormDoc
              this.tab_edu_military_militaryNumber  = this.personInfo[0].tab_edu_military_militaryNumber
              this.tab_edu_military_militarySeries  = this.personInfo[0].tab_edu_military_militarySeries
              this.tab_edu_military_militaryIssueDate  = this.personInfo[0].tab_edu_military_militaryIssueDate
              this.tab_edu_military_militaryIssueBy  = this.personInfo[0].tab_edu_military_militaryIssueBy
              this.tab_edu_military_militaryRank  = this.personInfo[0].tab_edu_military_militaryRank
              this.tab_edu_military_selectedDocType  = this.personInfo[0].tab_edu_military_selectedDocType
              this.tab_edu_military_docMilitaryShowDate  = this.personInfo[0].tab_edu_military_docMilitaryShowDate
              this.tab_edu_military_startMilitary  = this.personInfo[0].tab_edu_military_startMilitary
              this.tab_edu_military_endMilitary  = this.personInfo[0].tab_edu_military_endMilitary
              this.image  = this.personInfo[0].image
              this.showimage  = this.personInfo[0].showimage
              this.person = response.data
              console.log(this.profiles)
            })
            .catch(e => {
              this.errors.push(e)
            })
          console.log('id (person_info) for redaction is '+ id);
          location.href='profile#personal_info';

          // const index = this.profiles.indexOf(item);
          // this.person = this.profiles[index];
          // this.person.ege_info = this.profiles[index].ege_info;

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
          const idString = this.profiles[index].id;
          const id = parseInt(idString,10);
          this.person_info_id = id;

          AXIOS.get('/profile/applicationTable/' + this.person_info_id)
            .then(response => {
              // this.applicationTable = response.data.
              this.applId = response.data[0].applicationId;
              this.applTableName = response.data[0].application_person_name;
              this.applTableNumber =response.data[0].application_number;
              this.applTableDate = response.data[0].application_date;
              this.applTableDeliveryType = response.data[0].application_selectedDeliveryType;

              function ApplTable(tableId,tableName, tableNumber, tableDate, tableDeliveryType) {
                this.applId = tableId
                this.applTableName = tableName;
                this.applTableNumber = tableNumber;
                this.applTableDate = tableDate;
                this.applTableDeliveryType = tableDeliveryType;
              }
              let appltable = new ApplTable(
                this.applId,
                this.applTableName,this.applTableNumber,this.applTableDate,this.applTableDeliveryType);

              this.application.applicationTable.push(appltable);

              console.log(response.data[0]);
            })
            .catch(e => {
              // this.errors.push(e)
            })



          // AXIOS.get(`/profile/getApplicationsByPersonInfo/` + id)
          //   .then(response => {
          //     this.application = response.data;
          //     console.log(this.application)
          //   })
          //   .catch(e => {
          //     this.errors.push(e)
          //   });

          // const index = this.profiles.indexOf(item);
          // this.person = this.profiles[index];
          // this.showPerson = !this.showPerson;
          console.log(1111)
          console.log(this.person_info_id)
          location.href = 'profile#overviewApplication';

        },
      },

    }
</script>

<style scoped>

  table.v-table tbody tr{
    transition: none !important
  }

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
