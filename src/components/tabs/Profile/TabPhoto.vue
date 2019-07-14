<template>
  <div>
    <!--<img v-bind:src="'data:image/jpeg;base64,'+ this.image" />-->
    <div class="photo-loader">
      <div class="photo-loader__img-placeholder">
        <div v-if="!showimage">
          <!--<h2>Выберите изображение</h2>-->
          <!--<input type="file" id="image" ref="image" @change="uploadFile">-->
        </div>
        <div v-else>
          <img class="images_place" :src="showimage" />
        </div>
      </div>
      <div class="photo-loader__controls">
        <!--<button class="photo-loader__control-btn btn btn_load" type="button">-->
        <input type="file" id="image" ref="image" @change="uploadFile"/>
        <button class="photo-loader__control-btn btn btn_reset" type="button" @click="removeImage">Сбросить</button>
        <button class="photo-loader__control-btn btn btn_save" type="button" @click="onSave">Сохранить</button>
      </div>
    </div>


  </div>
</template>

<script>
  import { createHelpers } from 'vuex-map-fields';
  import {AXIOS} from "../../plugins/APIService";

  const { mapMultiRowFields } = createHelpers({
    getterType: `person/getField`,
    mutationType: `person/updateField`,
  });
  const { mapFields:tab_personal_info} = createHelpers({
    getterType: 'tab_personal_info/getField',
    mutationType: 'tab_personal_info/updateField',
  });


  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
    export default {
      name: "TabPhoto",
      data() {
        return {
          info: [],
          imagesData: [],
          // showimage: '',
          base:''
        }
      },
      computed: {
        ...mapMultiRowFields(['persons']),
        ...person(['person','showProfile','profiles',
          'tab_personal_lastname',  'tab_personal_firstname', 'tab_personal_middlename' , 'tab_personal_lastname_genitive',
          'tab_personal_firstname_genitive','tab_personal_middlename_genitive','tab_personal_selectedGender',
          'tab_personal_birthDate', 'tab_personal_INIPA', 'tab_personal_INIPADate','tab_personal_note',
          'tab_personal_selectedIdentityCardCode','tab_personal_identityCardSeries','tab_personal_identityCardNumber',
          'tab_personal_identityCardIssueBy', 'tab_personal_identityCardIssueDate', 'tab_personal_identityCardIssueDep',
          'tab_personal_selectedCitizenship', 'tab_personal_isCompatriot', 'tab_personal_isEquatedForeign',
          'tab_personal_birthplace', 'tab_personal_isHostel','tab_personal_isForeignLikeRussian',
          'tab_personal_homePhoneNumber','tab_personal_cellularPhone','tab_personal_email','tab_personal_company_name',
          'tab_personal_company_address','tab_personal_seniority','tab_personal_employYears','tab_personal_employMonths',
          'tab_personal_employDays','tab_personal_selectedForeignLanguageInfo','selected_foreignLanguageName1',
          'language_score1','selected_foreignLanguageName2', 'language_score2','selected_foreignLanguageName3',
          'language_score3','tab_address_registrationAddress','tab_address_factAddress','tab_address_templateRegistrationAddress',
          'tab_edu_military_educationLevel','tab_edu_military_univer','tab_edu_military_selectedCountryRegion',
          'tab_edu_military_selectedState','tab_edu_military_selectedAcademyYear','tab_edu_military_selectedEduDoc',
          'tab_edu_military_eduDocSerial','tab_edu_military_eduDocNumber','tab_edu_military_eduDocDate',
          'tab_edu_military_eduDocName','tab_edu_military_attachment_serial','tab_edu_military_attachment_number',
          'averageScore,tab_edu_military_selectedSoldiery','tab_edu_military_selectedSoldieryStatus',
          'tab_edu_military_selectedMilitaryFormDoc','tab_edu_military_militaryNumber','tab_edu_military_militarySeries',
          'tab_edu_military_militaryIssueDate','tab_edu_military_militaryIssueBy','tab_edu_military_militaryRank',
          'tab_edu_military_selectedDocType','tab_edu_military_docMilitaryShowDate','tab_edu_military_startMilitary',
          'tab_edu_military_endMilitary', 'image', 'showimage', 'person_info_id'
        ]),
        show(){
          return this.persons
        }
      },
      methods: {
        handleClick(val) {
          this.showProfile = val;
        },
        // uploadFile(e){
        //   console.log(e)
        //   let file = e.target.files[0];
        //   this.image = URL.createObjectURL(file)

        // let file = e.target.files[0];
        //  let reader = new FileReader();
        //  reader.onloadend = (file) => {
        //    this.person.photo = reader.result
        //    this.base = reader.result;
        //    // console.log('RESULT',reader.result)
        //  }
        //  reader.readAsDataURL(file);


        onSave() {
          // function ContactPerson(personal_lastname, personal_firstname, personal_middlename, personal_lastname_genitive,
          //                 personal_firstname_genitive, personal_middlename_genitive, personal_selectedGender,
          //                 personal_birthDate, personal_INIPA, personal_INIPADate, personal_note,
          //                 personal_selectedIdentityCardCode, personal_identityCardSeries, personal_identityCardNumber,
          //                 personal_identityCardIssueBy, personal_identityCardIssueDate, personal_identityCardIssueDep,
          //                 personal_selectedCitizenship, isCompatriot, isEquatedForeign, birthplace, isHostel,
          //                 isForeignLikeRussian, personal_homePhoneNumber, personal_cellularPhone, personal_email,
          //                 personal_company_name, personal_company_address, personal_seniority, personal_employYears,
          //                 personal_employMonths, personal_employDays, selectedForeignLanguageInfo, foreignLanguageName1,
          //                 language_score1, foreignLanguageName2, language_score2, foreignLanguageName3, language_score3,
          //                 address_registrationAddress, address_factAddress, templateRegistrationAddress,
          //                 edu_military_educationLevel, edu_military_univer, edu_military_selectedCountryRegion,
          //                 edu_military_selectedState, edu_military_selectedAcademyYear, edu_military_selectedEduDoc,
          //                 edu_military_eduDocSerial, edu_military_eduDocNumber, edu_military_eduDocDate,
          //                 edu_military_eduDocName, edu_military_attachment_serial, edu_military_attachment_number,
          //                 averageScore, edu_military_selectedSoldiery, edu_military_selectedSoldieryStatus,
          //                 edu_military_selectedMilitaryFormDoc, edu_military_militaryNumber, edu_military_militarySeries,
          //                 edu_military_militaryIssueDate, edu_military_militaryIssueBy, edu_military_militaryRank,
          //                 edu_military_selectedDocType, edu_military_docMilitaryShowDate, edu_military_startMilitary,
          //                 edu_military_endMilitary,image, showimage) {
          //   this.tab_personal_lastname = personal_lastname;
          //   this.tab_personal_firstname = personal_firstname;
          //   this.tab_personal_middlename = personal_middlename;
          //   this.tab_personal_lastname_genitive = personal_lastname_genitive;
          //   this.tab_personal_firstname_genitive = personal_firstname_genitive;
          //   this.tab_personal_middlename_genitive = personal_middlename_genitive;
          //   this.tab_personal_selectedGender = personal_selectedGender;
          //   this.tab_personal_birthDate = personal_birthDate;
          //   this.tab_personal_INIPA = personal_INIPA;
          //   this.tab_personal_INIPADate = personal_INIPADate;
          //   this.tab_personal_note = personal_note;
          //   this.tab_personal_selectedIdentityCardCode = personal_selectedIdentityCardCode;
          //   this.tab_personal_identityCardSeries = personal_identityCardSeries;
          //   this.tab_personal_identityCardNumber = personal_identityCardNumber;
          //   this.tab_personal_identityCardIssueBy = personal_identityCardIssueBy;
          //   this.tab_personal_identityCardIssueDate = personal_identityCardIssueDate;
          //   this.tab_personal_identityCardIssueDep = personal_identityCardIssueDep;
          //   this.tab_personal_selectedCitizenship = personal_selectedCitizenship;
          //   this.tab_personal_isCompatriot = isCompatriot;
          //   this.tab_personal_isEquatedForeign = isEquatedForeign;
          //   this.tab_personal_birthplace = birthplace;
          //   this.tab_personal_isHostel = isHostel;
          //   this.tab_personal_isForeignLikeRussian = isForeignLikeRussian;
          //   this.tab_personal_homePhoneNumber = personal_homePhoneNumber;
          //   this.tab_personal_cellularPhone = personal_cellularPhone;
          //   this.tab_personal_email = personal_email;
          //   this.tab_personal_company_name = personal_company_name;
          //   this.tab_personal_company_address = personal_company_address;
          //   this.tab_personal_seniority = personal_seniority;
          //   this.tab_personal_employYears = personal_employYears;
          //   this.tab_personal_employMonths = personal_employMonths;
          //   this.tab_personal_employDays = personal_employDays;
          //   this.tab_personal_selectedForeignLanguageInfo = selectedForeignLanguageInfo;
          //   this.selected_foreignLanguageName1 = foreignLanguageName1;
          //   this.language_score1 = language_score1;
          //   this.selected_foreignLanguageName2 = foreignLanguageName2;
          //   this.language_score2 = language_score2;
          //   this.selected_foreignLanguageName3 = foreignLanguageName3;
          //   this.language_score3 = language_score3;
          //   this.tab_address_registrationAddress = address_registrationAddress;
          //   this.tab_address_factAddress = address_factAddress;
          //   this.tab_address_templateRegistrationAddress = templateRegistrationAddress;
          //   this.tab_edu_military_educationLevel = edu_military_educationLevel;
          //   this.tab_edu_military_univer = edu_military_univer;
          //   this.tab_edu_military_selectedCountryRegion = edu_military_selectedCountryRegion;
          //   this.tab_edu_military_selectedState = edu_military_selectedState;
          //   this.tab_edu_military_selectedAcademyYear = edu_military_selectedAcademyYear;
          //   this.tab_edu_military_selectedEduDoc = edu_military_selectedEduDoc;
          //   this.tab_edu_military_eduDocSerial = edu_military_eduDocSerial;
          //   this.tab_edu_military_eduDocNumber = edu_military_eduDocNumber;
          //   this.tab_edu_military_eduDocDate = edu_military_eduDocDate;
          //   this.tab_edu_military_eduDocName = edu_military_eduDocName;
          //   this.tab_edu_military_attachment_serial = edu_military_attachment_serial;
          //   this.tab_edu_military_attachment_number = edu_military_attachment_number;
          //   this.averageScore = averageScore;
          //   this.tab_edu_military_selectedSoldiery = edu_military_selectedSoldiery;
          //   this.tab_edu_military_selectedSoldieryStatus = edu_military_selectedSoldieryStatus;
          //   this.tab_edu_military_selectedMilitaryFormDoc = edu_military_selectedMilitaryFormDoc;
          //   this.tab_edu_military_militaryNumber = edu_military_militaryNumber;
          //   this.tab_edu_military_militarySeries = edu_military_militarySeries;
          //   this.tab_edu_military_militaryIssueDate = edu_military_militaryIssueDate;
          //   this.tab_edu_military_militaryIssueBy = edu_military_militaryIssueBy;
          //   this.tab_edu_military_militaryRank = edu_military_militaryRank;
          //   this.tab_edu_military_selectedDocType = edu_military_selectedDocType;
          //   this.tab_edu_military_docMilitaryShowDate = edu_military_docMilitaryShowDate;
          //   this.tab_edu_military_startMilitary = edu_military_startMilitary;
          //   this.tab_edu_military_endMilitary = edu_military_endMilitary;
          //   this.image = image;
          //   this.showimage = showimage;
          // }
          //
          // let contactperson = new ContactPerson(
          //   this.tab_personal_lastname, this.tab_personal_firstname, this.tab_personal_middlename, this.tab_personal_lastname_genitive,
          //   this.tab_personal_firstname_genitive, this.tab_personal_middlename_genitive, this.tab_personal_selectedGender,
          //   this.tab_personal_birthDate, this.tab_personal_INIPA, this.tab_personal_INIPADate, this.tab_personal_note,
          //   this.tab_personal_selectedIdentityCardCode, this.tab_personal_identityCardSeries, this.tab_personal_identityCardNumber,
          //   this.tab_personal_identityCardIssueBy, this.tab_personal_identityCardIssueDate, this.tab_personal_identityCardIssueDep,
          //   this.tab_personal_selectedCitizenship, this.tab_personal_isCompatriot, this.tab_personal_isEquatedForeign,
          //   this.tab_personal_birthplace, this.tab_personal_isHostel, this.tab_personal_isForeignLikeRussian,
          //   this.tab_personal_homePhoneNumber, this.tab_personal_cellularPhone, this.tab_personal_email, this.tab_personal_company_name,
          //   this.tab_personal_company_address, this.tab_personal_seniority, this.tab_personal_employYears, this.tab_personal_employMonths,
          //   this.tab_personal_employDays, this.tab_personal_selectedForeignLanguageInfo, this.selected_foreignLanguageName1,
          //   this.language_score1, this.selected_foreignLanguageName2, this.language_score2, this.selected_foreignLanguageName3,
          //   this.language_score3, this.tab_address_registrationAddress, this.tab_address_factAddress, this.tab_address_templateRegistrationAddress,
          //   this.tab_edu_military_educationLevel, this.tab_edu_military_univer, this.tab_edu_military_selectedCountryRegion,
          //   this.tab_edu_military_selectedState, this.tab_edu_military_selectedAcademyYear, this.tab_edu_military_selectedEduDoc,
          //   this.tab_edu_military_eduDocSerial, this.tab_edu_military_eduDocNumber, this.tab_edu_military_eduDocDate,
          //   this.tab_edu_military_eduDocName, this.tab_edu_military_attachment_serial, this.tab_edu_military_attachment_number,
          //   this.averageScore, this.tab_edu_military_selectedSoldiery, this.tab_edu_military_selectedSoldieryStatus,
          //   this.tab_edu_military_selectedMilitaryFormDoc, this.tab_edu_military_militaryNumber, this.tab_edu_military_militarySeries,
          //   this.tab_edu_military_militaryIssueDate, this.tab_edu_military_militaryIssueBy, this.tab_edu_military_militaryRank,
          //   this.tab_edu_military_selectedDocType, this.tab_edu_military_docMilitaryShowDate, this.tab_edu_military_startMilitary,
          //   this.tab_edu_military_endMilitary, this.image, this.showimage
          // );
          //
          // this.person.person_info.push(contactperson);
          // console.log(this.person.person_info)

          this.person.person_info.tab_personal_lastname = this.tab_personal_lastname;
          this.person.person_info.tab_personal_firstname = this.tab_personal_firstname;
          this.person.person_info.tab_personal_middlename = this.tab_personal_middlename;
          this.person.person_info.tab_personal_lastname_genitive = this.tab_personal_lastname_genitive;
          this.person.person_info.tab_personal_firstname_genitive = this.tab_personal_firstname_genitive;
          this.person.person_info.tab_personal_middlename_genitive = this.tab_personal_middlename_genitive;
          this.person.person_info.tab_personal_selectedGender = this.tab_personal_selectedGender;
          this.person.person_info.tab_personal_birthDate = this.tab_personal_birthDate;
          this.person.person_info.tab_personal_INIPA = this.tab_personal_INIPA;
          this.person.person_info.tab_personal_INIPADate = this.tab_personal_INIPADate;
          this.person.person_info.tab_personal_note = this.tab_personal_note;
          this.person.person_info.tab_personal_selectedIdentityCardCode = this.tab_personal_selectedIdentityCardCode;
          this.person.person_info.tab_personal_identityCardSeries = this.tab_personal_identityCardSeries;
          this.person.person_info.tab_personal_identityCardNumber = this.tab_personal_identityCardNumber;
          this.person.person_info.tab_personal_identityCardIssueBy = this.tab_personal_identityCardIssueBy;
          this.person.person_info.tab_personal_identityCardIssueDate = this.tab_personal_identityCardIssueDate;
          this.person.person_info.tab_personal_identityCardIssueDep = this.tab_personal_identityCardIssueDep;
          this.person.person_info.tab_personal_selectedCitizenship = this.tab_personal_selectedCitizenship;
          this.person.person_info.tab_personal_isCompatriot = this.tab_personal_isCompatriot;
          this.person.person_info.tab_personal_isEquatedForeign = this.tab_personal_isEquatedForeign;
          this.person.person_info.tab_personal_birthplace = this.tab_personal_birthplace;
          this.person.person_info.tab_personal_isHostel = this.tab_personal_isHostel;
          this.person.person_info.tab_personal_isForeignLikeRussian = this.tab_personal_isForeignLikeRussian;
          this.person.person_info.tab_personal_homePhoneNumber = this.tab_personal_homePhoneNumber;
          this.person.person_info.tab_personal_cellularPhone = this.tab_personal_cellularPhone;
          this.person.person_info.tab_personal_email = this.tab_personal_email;
          this.person.person_info.tab_personal_company_name = this.tab_personal_company_name;
          this.person.person_info.tab_personal_company_address = this.tab_personal_company_address;
          this.person.person_info.tab_personal_seniority = this.tab_personal_seniority;
          this.person.person_info.tab_personal_employYears = this.tab_personal_employYears;
          this.person.person_info.tab_personal_employMonths = this.tab_personal_employMonths;
          this.person.person_info.tab_personal_employDays = this.tab_personal_employDays;
          this.person.person_info.tab_personal_selectedForeignLanguageInfo = this.tab_personal_selectedForeignLanguageInfo;
          this.person.person_info.selected_foreignLanguageName1 = this.selected_foreignLanguageName1;
          this.person.person_info.language_score1 = this.language_score1;
          this.person.person_info.selected_foreignLanguageName2 = this.selected_foreignLanguageName2;
          this.person.person_info.language_score2 = this.language_score2;
          this.person.person_info.selected_foreignLanguageName3 = this.selected_foreignLanguageName3;
          this.person.person_info.language_score3 = this.language_score3;
          this.person.person_info.tab_address_registrationAddress = this.tab_address_registrationAddress;
          this.person.person_info.tab_address_factAddress = this.tab_address_factAddress;
          this.person.person_info.tab_address_templateRegistrationAddress = this.tab_address_templateRegistrationAddress;
          this.person.person_info.tab_edu_military_educationLevel = this.tab_edu_military_educationLevel;
          this.person.person_info.tab_edu_military_univer = this.tab_edu_military_univer;
          this.person.person_info.tab_edu_military_selectedCountryRegion = this.tab_edu_military_selectedCountryRegion;
          this.person.person_info.tab_edu_military_selectedState = this.tab_edu_military_selectedState;
          this.person.person_info.tab_edu_military_selectedAcademyYear = this.tab_edu_military_selectedAcademyYear;
          this.person.person_info.tab_edu_military_selectedEduDoc = this.tab_edu_military_selectedEduDoc;
          this.person.person_info.tab_edu_military_eduDocSerial = this.tab_edu_military_eduDocSerial;
          this.person.person_info.tab_edu_military_eduDocNumber = this.tab_edu_military_eduDocNumber;
          this.person.person_info.tab_edu_military_eduDocDate = this.tab_edu_military_eduDocDate;
          this.person.person_info.tab_edu_military_eduDocName = this.tab_edu_military_eduDocName;
          this.person.person_info.tab_edu_military_attachment_serial = this.tab_edu_military_attachment_serial;
          this.person.person_info.tab_edu_military_attachment_number = this.tab_edu_military_attachment_number;
          this.person.person_info.averageScore = this.averageScore;
          this.person.person_info.score_five = this.score_five;
          this.person.person_info.score_four = this.score_four;
          this.person.person_info.score_three = this.score_three;
          this.person.person_info.tab_edu_military_selectedSoldiery = this.tab_edu_military_selectedSoldiery;
          this.person.person_info.tab_edu_military_selectedSoldieryStatus = this.tab_edu_military_selectedSoldieryStatus;
          this.person.person_info.tab_edu_military_selectedMilitaryFormDoc = this.tab_edu_military_selectedMilitaryFormDoc;
          this.person.person_info.tab_edu_military_militaryNumber = this.tab_edu_military_militaryNumber;
          this.person.person_info.tab_edu_military_militarySeries = this.tab_edu_military_militarySeries;
          this.person.person_info.tab_edu_military_militaryIssueDate = this.tab_edu_military_militaryIssueDate;
          this.person.person_info.tab_edu_military_militaryIssueBy = this.tab_edu_military_militaryIssueBy;
          this.person.person_info.tab_edu_military_militaryRank = this.tab_edu_military_militaryRank;
          this.person.person_info.tab_edu_military_selectedDocType = this.tab_edu_military_selectedDocType;
          this.person.person_info.tab_edu_military_docMilitaryShowDate = this.tab_edu_military_docMilitaryShowDate;
          this.person.person_info.tab_edu_military_startMilitary = this.tab_edu_military_startMilitary;
          this.person.person_info.tab_edu_military_endMilitary = this.tab_edu_military_endMilitary;
          this.person.person_info.image = this.image;
          this.person.person_info.showimage = this.showimage;

          // console.log(this.person.person_info.tab_personal_lastname)

          if(this.person_info_id === ''){
            AXIOS.post(`/profile`, (this.person))
              .then(response => {
                //todo push to tablePerson
                this.info.push(response.data)
                location.href='profile#overview_personal_info';
                this.person.ege_info = [];
                this.person.parents_info = [];
                // this.person.person_info = {};
                this.person.futures_info = [];
              })
              .catch(e => {
                this.errors.push(e)
              })
          }else {
            AXIOS.put('/profile/person/' + this.person_info_id,(this.person))
              .then(response =>{
                console.log(response)
              console.log("person was updated")})
              .catch(e => {
                this.errors.push(e)
              })
          }



          AXIOS.get(`/profile/personsTable`)
            .then(response => {
              this.profiles = response.data;
              console.log(this.profiles)
            })
            .catch(e => {
              this.errors.push(e)
            })

        },
        uploadFile(e) {
          console.log(e)
          let file = e.target.files[0];
          this.showimage = URL.createObjectURL(file)

           let reader = new FileReader();
           reader.onloadend = (file) => {
             this.image = reader.result
             this.base = reader.result;
             // console.log('RESULT',reader.result)
           }
           reader.readAsDataURL(file);
        },

        removeImage: function (e) {

          this.showimage = '';
          // this.image = '';
        },
        // onFileChange(e) {
        //   var files = e.target.files || e.dataTransfer.files;
        //   if (!files.length)
        //     return;
        //   this.createImage(files[0]);
        //
        // },
        // createImage(file) {
        //   var image = new Image();
        //   var reader = new FileReader();
        //   var vm = this;
        //
        //   reader.onload = (e) => {
        //     vm.image = e.target.result;
        //   };
        //   reader.readAsDataURL(file);
        //   // this.base = reader.readAsDataURL(file);
        //
        // },



      }


        // clearPhoto() {
        //   this.imagesData.pop(this.imagesData.length-1);
        // },
        // previewImages: function(event) {
        //   this.imagesData = [];
        //   var pictures = event.target.files;
        //   for (var i = 0; i < pictures.length; i++) {
        //     var reader = new FileReader();
        //     reader.onload = (e) => {
        //       this.imagesData.push(e.target.result);
        //     }
        //     reader.readAsDataURL(pictures[i]);
        //   }
        // }

    }
</script>

<style scoped>

  .photo-loader {
    display: flex;
    align-items: flex-start;
  }

  .photo-loader__img-placeholder {
    margin-right: 30px;
    width: 200px;
    height: 300px;
    background: url('https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png') no-repeat 50% 50% / cover;
  }

  .photo-loader__controls {
    display: flex;
    flex-direction: column;
    margin-bottom: -20px;
  }

  .photo-loader__control-btn {
    margin-bottom: 20px;
  }


  .images_place {
    height: 640px;
    width: 480px
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
    background-color: red;
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
    /*margin-top: 75%;*/
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
