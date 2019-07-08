<template>
  <div>
    <!--{{this.person}}-->
    <!--<form method="POST" onsubmit="" ACTION="api/persons/image?${_csrf.parameterName}=${_csrf.token}"-->
          <!--ENCTYPE="multipart/form-data">-->


    <form enctype="multipart/form-data">
      <div v-if="!image">
        <h2>Select an image</h2>
        <input type="file" id="image" ref="image" @change="uploadFile">
      </div>
      <div class="row" v-else>
        <div class="col-sm-8">
          <img class="images_place" :src="image" />
        </div>

        <div class="col-sm-4">
          <div class="row">
            <div class="">
              <button @click="removeImage">Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="">
      <!--<button type="button" @click="handleClick(false)">К заявлениям</button>-->
      <button @click="onSave">Сохранить </button>
    </div>
  <!--<section>-->
    <!--<form method="post" class="row" action="/image/add" enctype="multipart/form-data">-->

      <!--<div class="form-group row">-->
        <!--<input type='file' @change="previewImages" id="newfiles" name="newfiles[]" class="form-control col-sm-9" accept="image/*" />-->
        <!--&lt;!&ndash;<button class="btn btn-outline-success float-right col-sm-4">Загрузить</button>&ndash;&gt;-->
      <!--</div>-->
      <!--{{this.person}}-->

    <!--</form>-->
    <!--&lt;!&ndash;<button class="btn btn-outline-success float-right col-sm-4" @click="clearPhoto" >Очистить</button>&ndash;&gt;-->
      <!--<div class="col-md-6 py-2 border" v-for="(image, index) in imagesData">-->
        <!--<img class="img-thumbnail images_place" :src="image" v-if="image.length > 0">-->
      <!--</div>-->
    <!---->
  <!--</section>-->

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
          image: '',
          base:''
        }
      },
      computed: {
        // ...mapMultiRowFields(['profiles']),
        ...tab_personal_info([ 'tab_personal_lastname', 'tab_personal_firstname',
          'tab_personal_middlename','tab_personal_birthDate','tab_personal_age',
          ' tab_personal_seniority','tab_personal_employYears','tab_personal_employMonths',
          'tab_personal_employDays','tab_personal_lastname_genitive','tab_personal_firstname_genitive',
          'tab_personal_middlename_genitive','tab_personal_contactPersonNameGenitive',
          'tab_personal_identityCardSeries','tab_personal_identityCardNumber',
          'tab_personal_identityCardIssueDate','tab_personal_identityCardIssueDep','tab_personal_identityCardIssueBy',
          'tab_personal_homePhoneNumber','tab_personal_cellularPhone','tab_personal_isCompatriot',
          'tab_personal_isEquatedForeign', 'tab_personal_isHostel',
          'tab_personal_isForeignLikeRussian','tab_personal_selectedGender',
          'tab_personal_selectedIdentityCardCode','tab_personal_selectedForeignLanguageInfo',
          'tab_personal_selectedCitizenship', 'tab_personal_INIPA', 'tab_personal_INIPADate', 'tab_personal_note',
          'tab_personal_bithplace', 'tab_personal_email']),

        ...mapMultiRowFields(['persons']),
        ...person(['person','showProfile']),
        show(){
          return this.persons
        }
      },
      methods: {
        handleClick(val) {
          this.showProfile = val;
        },
        uploadFile(e){
          let file = e.target.files[0];
           let reader = new FileReader();
           reader.onloadend = (file) => {
             this.person.photo = reader.result
             this.base = reader.result;
             // console.log('RESULT',reader.result)
           }
           reader.readAsDataURL(file);
        },

        // tab_personal_lastname: '',
        // tab_personal_firstname: '',
        // tab_personal_middlename: '',
        // tab_personal_lastname_genitive: '',
        // tab_personal_firstname_genitive: '',
        // tab_personal_middlename_genitive: '',
        // tab_personal_selectedGender: '',
        // tab_personal_birthDate: '',
        // tab_personal_INIPA: '',
        // tab_personal_INIPADate: '',
        // tab_personal_note: '',
        //
        // tab_personal_selectedIdentityCardCode: '',
        // tab_personal_identityCardSeries: '',
        // tab_personal_identityCardNumber: '',
        // tab_personal_identityCardIssueBy: '',
        // tab_personal_identityCardIssueDate: '',
        // tab_personal_identityCardIssueDep: '',
        // tab_personal_selectedCitizenship: '',
        // tab_personal_isCompatriot: '',
        // tab_personal_isEquatedForeign: '',
        // tab_personal_birthplace: '',
        // tab_personal_isHostel: '',
        // tab_personal_isForeignLikeRussian: '',
        // tab_personal_homePhoneNumber: '',
        // tab_personal_cellularPhone: '',
        // tab_personal_email: '',
        // tab_personal_company_name: '',
        // tab_personal_company_address: '',
        // tab_personal_seniority: '',
        // tab_personal_employYears: '',
        // tab_personal_employMonths: '',
        // tab_personal_employDays: '',
        // tab_personal_selectedForeignLanguageInfo: '',
        // selected_foreignLanguageName1: '',
        // language_score1: '',
        // selected_foreignLanguageName2: '',
        // language_score2: '',
        // selected_foreignLanguageName3: '',
        // language_score3: '',
        //
        // tab_address_registrationAddress: '',
        // tab_address_factAddress: '',
        // tab_address_templateRegistrationAddress: '',
        //
        // tab_edu_military_educationLevel: '',
        // tab_edu_military_univer: '',
        // tab_edu_military_selectedCountryRegion: '',
        // tab_edu_military_selectedState: '',
        // tab_edu_military_selectedAcademyYear: '',
        // tab_edu_military_selectedEduDoc: '',
        // tab_edu_military_eduDocSerial: '',
        // tab_edu_military_eduDocNumber: '',
        // tab_edu_military_eduDocDate: '',
        // tab_edu_military_eduDocName: '',
        // tab_edu_military_attachment_serial: '',
        // tab_edu_military_attachment_number: '',
        // averageScore: '',
        // tab_edu_military_selectedSoldiery: '',
        // tab_edu_military_selectedSoldieryStatus: '',
        // tab_edu_military_selectedMilitaryFormDoc: '',
        // tab_edu_military_militaryNumber: '',
        // tab_edu_military_militarySeries: '',
        // tab_edu_military_militaryIssueDate: '',
        // tab_edu_military_militaryIssueBy: '',
        // tab_edu_military_militaryRank: '',
        // tab_edu_military_selectedDocType: '',
        // tab_edu_military_docMilitaryShowDate: '',
        // tab_edu_military_startMilitary: '',
        // tab_edu_military_endMilitary: '',


        onSave() {

          function Person(personal_lastname, personal_firstname, personal_middlename, personal_lastname_genitive,
                          personal_firstname_genitive, personal_middlename_genitive, personal_selectedGender,
                          personal_birthDate, personal_INIPA, personal_INIPADate,personal_note,
                          personal_selectedIdentityCardCode,personal_identityCardSeries,personal_identityCardNumber,
                          personal_identityCardIssueBy,personal_identityCardIssueDate,personal_identityCardIssueDep,
                          personal_selectedCitizenship,isCompatriot,isEquatedForeign,birthplace,isHostel,
                          isForeignLikeRussian,personal_homePhoneNumber,personal_cellularPhone,personal_email,
                          personal_company_name,personal_company_address,personal_seniority,personal_employYears,
                          personal_employMonths,personal_employDays,selectedForeignLanguageInfo,foreignLanguageName1,
                          language_score1,foreignLanguageName2,language_score2,foreignLanguageName3,language_score3,
                          address_registrationAddress,address_factAddress,templateRegistrationAddress,
                          edu_military_educationLevel,edu_military_univer,edu_military_selectedCountryRegion,
                          edu_military_selectedState,edu_military_selectedAcademyYear,edu_military_selectedEduDoc,
                          edu_military_eduDocSerial,edu_military_eduDocNumber,edu_military_eduDocDate,
                          edu_military_eduDocName,edu_military_attachment_serial,edu_military_attachment_number,
                          averageScore,edu_military_selectedSoldiery,edu_military_selectedSoldieryStatus,
                          edu_military_selectedMilitaryFormDoc,edu_military_militaryNumber,edu_military_militarySeries,
                          edu_military_militaryIssueDate,edu_military_militaryIssueBy,edu_military_militaryRank,
                          edu_military_selectedDocType,edu_military_docMilitaryShowDate,edu_military_startMilitary,
                          edu_military_endMilitary) {
            // parent_name = this.tab_parent_name;
            this.tab_personal_lastname = personal_lastname;
            this.tab_personal_firstname = personal_firstname;
            this.tab_personal_middlename = personal_middlename;
            this.tab_personal_lastname_genitive = personal_lastname_genitive;
            this.tab_personal_firstname_genitive = personal_firstname_genitive;
            this.tab_personal_middlename_genitive = personal_middlename_genitive;
            this.tab_personal_selectedGender = personal_selectedGender;
            this.tab_personal_birthDate = personal_birthDate;
            this.tab_personal_INIPA = personal_INIPA;
            this.tab_personal_INIPADate = personal_INIPADate;
            this.tab_personal_note = personal_note;
            this.tab_personal_selectedIdentityCardCode = personal_selectedIdentityCardCode;
            this.tab_personal_identityCardSeries = personal_identityCardSeries;
            this.tab_personal_identityCardNumber = personal_identityCardNumber;
            this.tab_personal_identityCardIssueBy = personal_identityCardIssueBy;
            this.tab_personal_identityCardIssueDate = personal_identityCardIssueDate;
            this.tab_personal_identityCardIssueDep = personal_identityCardIssueDep;
            this.tab_personal_selectedCitizenship = personal_selectedCitizenship;
            this.tab_personal_isCompatriot = isCompatriot;
            this.tab_personal_isEquatedForeign = isEquatedForeign;
            this.tab_personal_birthplace = birthplace;
            this.tab_personal_isHostel = isHostel;
            this.tab_personal_isForeignLikeRussian = isForeignLikeRussian;
            this.tab_personal_homePhoneNumber = personal_homePhoneNumber;
            this.tab_personal_cellularPhone = personal_cellularPhone;
            this.tab_personal_email = personal_email;
            this.tab_personal_company_name = personal_company_name;
            this.tab_personal_company_address = personal_company_address;
            this.tab_personal_seniority = personal_seniority;
            this.tab_personal_employYears = personal_employYears;
            this.tab_personal_employMonths = personal_employMonths;
            this.tab_personal_employDays = personal_employDays;
            this.tab_personal_selectedForeignLanguageInfo = selectedForeignLanguageInfo;
            this.selected_foreignLanguageName1 = foreignLanguageName1;
            this.language_score1 = language_score1;
            this.selected_foreignLanguageName2 = foreignLanguageName2;
            this.language_score2 = language_score2;
            this.selected_foreignLanguageName3 = foreignLanguageName3;
            this.language_score3 = language_score3;
            this.tab_address_registrationAddress = address_registrationAddress;
            this.tab_address_factAddress = parent_name;
            this.tab_address_templateRegistrationAddress = parent_name;
            this.tab_edu_military_educationLevel = parent_name;
            this.tab_edu_military_univer = parent_name;
            this.tab_edu_military_selectedCountryRegion = parent_name;
            this.tab_edu_military_selectedState = parent_name;
            this.tab_edu_military_selectedAcademyYear = parent_name;
            this.tab_edu_military_selectedEduDoc = parent_name;
            this.tab_edu_military_eduDocSerial = parent_name;
            this.tab_edu_military_eduDocNumber = parent_name;
            this.tab_edu_military_eduDocDate = parent_name;
            this.tab_edu_military_eduDocName = parent_name;
            this.tab_edu_military_attachment_serial = parent_name;
            this.tab_edu_military_attachment_number = parent_name;
            this.averageScore = parent_name;
            this.tab_edu_military_selectedSoldiery = parent_name;
            this.tab_edu_military_selectedSoldieryStatus = parent_name;
            this.tab_edu_military_selectedMilitaryFormDoc = parent_name;
            this.tab_edu_military_militaryNumber = parent_name;
            this.tab_edu_military_militarySeries = parent_name;
            this.tab_edu_military_militaryIssueDate = parent_name;
            this.tab_edu_military_militaryIssueBy = parent_name;
            this.tab_edu_military_militaryRank = parent_name;
            this.tab_edu_military_selectedDocType = parent_name;
            this.tab_edu_military_docMilitaryShowDate = parent_name;
            this.tab_edu_military_startMilitary = parent_name;
            this.tab_edu_military_endMilitary = parent_name;










            let person = new Person(
              this.tab_parent_name, this.tab_parent_lastname, this.tab_parent_firstname,
              this.tab_parent_middlename, this.tab_parent_birthDate, this.tab_parent_homePhoneNumber,
              this.tab_parent_cellularPhone, this.tab_parent_factAddress, this.tab_parent_selectedFamRelationShip,
              this.tab_parent_selectedGender, this.tab_parent_organization_name, this.tab_parent_organization_address,
              this.tab_parent_organization_seniority, this.tab_parent_organization_employYears
            );


            this.person.parents_info.push(parent);


            AXIOS.post(`/persons`, (this.person))


              .then(response => {
                this.info.push(response.data)
              })
              .catch(e => {
                this.errors.push(e)
              })

            //   let formData = new FormData();
            //   formData.append('image', this.image);
            //   AXIOS.post( '/persons/image',
            //     formData,
            //     {
            //       headers: {
            //         'Content-Type': 'multipart/form-data'
            //       }
            //     }
            //   ).then(function(){
            //     console.log('SUCCESS!!');
            //   })
            //     .catch(function(){
            //       console.log('FAILURE!!');
            //     });
            //
          }


        },

        onFileChange(e) {
          var files = e.target.files || e.dataTransfer.files;
          if (!files.length)
            return;
          this.createImage(files[0]);

        },
        createImage(file) {
          var image = new Image();
          var reader = new FileReader();
          var vm = this;

          reader.onload = (e) => {
            vm.image = e.target.result;
          };
          reader.readAsDataURL(file);
          // this.base = reader.readAsDataURL(file);

        },
        removeImage: function (e) {
          this.image = '';
        },

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
    }
</script>

<style scoped>
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
