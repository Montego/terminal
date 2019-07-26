<template>
  <div>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
      @toApplication="onAppl"
      @validatorConditions="validatorConditions"
    />
    <!--<img v-bind:src="'data:image/jpeg;base64,'+ this.image" />-->
    <div class="photo-loader">
      <div class="photo-loader__img-placeholder">
        <!--<div v-if="!person.person_info.showimage">-->
        <div v-if="!showimage">
          <!--<h2>Выберите изображение</h2>-->
          <!--<input type="file" id="image" ref="image" @change="uploadFile">-->
        </div>
        <div v-else>
          <img  class="images_place" :src= "showimage" />
          <!--<img v-else class="images_place" :src= "person.person_info.image" />-->
          <!--<img  class="images_place" :src = "person.person_info.image"/>-->
        </div>
        <!--<div v-if="person.person_info.image !== null">-->
          <!--<img class="images_place" :src = "person.person_info.image"/>-->
        <!--</div>-->
      </div>

      <div class="photo-loader__controls">
        <!--<button class="photo-loader__control-btn btn btn_load" type="button">-->
        <input type="file" id="image" ref="image" @change="uploadFile"/>
        <button v-if="!this.isModalVisible" class="photo-loader__control-btn /btn btn_reset" type="button" @click="removeImage">Сбросить</button>
      </div>
    </div>
    <span>{{successMessage}}</span>
    <span>{{errorMessages}}</span>
      <div v-if="!this.isModalVisible">
        <button v-if="person.saved !=='Сохранено' " class="photo-loader__control-btn btn btn_save" type="button" @click="onSave">Проверить заполнение</button>
      </div>

    <!--<div v-if="!this.isModalVisible"  >-->
      <!--<button v-if="person.saved !=='Сохранено' " class="photo-loader__control-btn btn btn_save" type="button" @click="showModal">Заявление</button>-->
    <!--</div>-->
    <div v-if="!this.isModalVisible">
      <button v-if="person.saved ==='Сохранено' " class="photo-loader__control-btn btn btn_save" type="button" @click="showModal">Заявление</button>
    </div>

  </div>
</template>

<script>
  import { createHelpers } from 'vuex-map-fields';
  import {AXIOS} from "../../plugins/APIService";
  import modal from "../../modals/modal";
  import {mapGetters, mapState} from 'vuex'
  const { mapMultiRowFields } = createHelpers({
    getterType: `person/getField`,
    mutationType: `person/updateField`,
  });

  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  const { mapFields: applications } = createHelpers({
    getterType: `applications/getField`,
    mutationType: `applications/updateField`,
  });

    export default {
      name: "TabPhoto",
      components: {
        modal
      },
      data() {
        return {

          info: [],
          imagesData: [],
          // showimage: '',
          base:''
        }
      },
      mounted() {
        this.$store.dispatch('dictionary/onLoadAddressCountryRegion');
        this.$store.dispatch('dictionary/onLoadTargOrg');

      },
      computed: {
        ...mapMultiRowFields(['persons']),
        ...person(['person','showProfile','profiles','isModalVisible','errorMessages','successMessage',
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
          'score_five','score_four','score_three',
          'averageScore','tab_edu_military_selectedSoldiery','tab_edu_military_selectedSoldieryStatus',
          'tab_edu_military_selectedMilitaryFormDoc','tab_edu_military_militaryNumber','tab_edu_military_militarySeries',
          'tab_edu_military_militaryIssueDate','tab_edu_military_militaryIssueBy','tab_edu_military_militaryRank',
          'tab_edu_military_selectedDocType','tab_edu_military_docMilitaryShowDate','tab_edu_military_startMilitary',
          'tab_edu_military_endMilitary', 'selectedExtraInfos1', 'selectedExtraInfos2', 'extraInfosDescription1',
          'extraInfosDescription2', 'image', 'showimage', 'person_info_id' , 'saved' ,'acceptedPerson'
        ]),
        ...applications(['application','application_person_id','application_person_name','applId','applTableName',
          'applTableNumber','applTableDate','applTableDeliveryType','applicationId','apls','chooseAppls','resultApl',
        'checkTargCount','checkSpecCount','message'],),
        ...mapState('dictionary',['targOrg'],),
        ...mapGetters('dictionary',['GET_targOrg']),

        show(){
          return this.persons
        }
      },
      methods: {
        ...mapGetters(['ADRDTO']),
        handleClick(val) {
          this.showProfile = val;
        },
        showModal() {

          if(this.application.choosenWizards.length === 0) {
            this.person.application.choosenWizards = [];
            this.isModalVisible = true;
            AXIOS.get(`/profile/conditionsDto`)
              .then(response => {
                console.log(response.data)
                this.apls = response.data;

                console.log(this.profiles)
              })
              .catch(e => {
                this.errors.push(e)
              })
          }else{
                  this.showProfile = false;
                  location.href = 'profile#applicationFill';
          }

            // AXIOS.get('/profile/conditions/' + (this.person_info_id))
            //   .then(response => {
            //     if (response.data.choosenWizards.length !== 0) {
            //       this.application.choosenWizards = response.data;
            //       this.showProfile = false;
            //       location.href = 'profile#applicationFill';
            //     }else {
            //       this.isModalVisible = true;
            //       AXIOS.get(`/profile/conditionsDto`)
            //         .then(response => {
            //           this.apls = response.data;
            //         })
            //         .catch(e => {
            //           this.errors.push(e)
            //         })
            //     }
            //   })
            //   .catch(e => {
            //   this.isModalVisible = true;
            //     AXIOS.get(`/profile/conditionsDto`)
            //       .then(response => {
            //         this.apls = response.data;
            //         console.log(this.profiles)
            //       })
            //       .catch(e => {
            //         this.errors.push(e)
            //       })
            //  })

        },
        closeModal() {
          this.isModalVisible = false;
        },

        validatorConditions(){
          let counterCheckTargOrg = 0;

          let counterLechDel = 0;
          let counterMedProf = 0;
          let counterStom = 0;
          let counterSestr = 0;
          let sumSpec = counterLechDel + counterMedProf + counterStom + counterSestr;
          // let counterCheckSpec : 0;
          console.log('counterLechDel ', counterLechDel);
          console.log('counterMedProf ', counterMedProf);
          console.log('counterStom ', counterStom);
          console.log('counterSestr ', counterSestr);
          console.log('sumSpec ',sumSpec);
          let i = 0;
          //проверка на только 1 целевое направление
              for(i; i< this.apls.length; i++) {
                if (this.apls[i].chose === true && this.apls[i].environmentId === 'ЦелНапр') {
                  counterCheckTargOrg++;
                  console.log('counter + ', counterCheckTargOrg)
                } else if (this.apls[i].chose === false && this.apls[i].environmentId === 'ЦелНапр') {
                  counterCheckTargOrg = 0;
                  console.log('counter + ', counterCheckTargOrg);
                }
              }

              if(counterCheckTargOrg === 1 ){
                this.checkTargCount = true;// если тру, отключать остальные чекбоксы
                console.log('true')
              }else{
                this.checkTargCount = false;
              }
          console.log('result counter ', counterCheckTargOrg)
        },


        onAppl(id) {

          console.log('in method -' + this.person_info_id);
          let i = 0;
          for(i; i < this.apls.length; i++){
            if(this.apls[i].chose === true) {
                this.person.application.choosenWizards.push(this.apls[i]);
            }
          }

          let strangeCounter =
            Object.keys(this.person.application.choosenWizards
              .reduce( (accum, el) => {accum[el.specialityId] = true;  return accum;}, [])).length;
          console.log(strangeCounter, 'strangeCounter');

          if(strangeCounter >3){
            this.isModalVisible = true;
            this.message = "Можно выбрать только 3 специальности!        ";
            this.person.application.choosenWizards = [];
          }else{
            this.message = ""
            this.isModalVisible = false;
          }
          // this.isModalVisible = false;

          location.href='profile#overview_new';
          // AXIOS.get('/profile/conditions/' + (this.person_info_id))
          //   .then(response => {
          //     this.resultApl = response.data;
          //
          //     console.log(this.resultApl.application_number)
          //   })
          //   .catch(e => {
          //   });

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

          this.person.person_info.selectedExtraInfos1 = this.selectedExtraInfos1;
          this.person.person_info.extraInfosDescription1 = this.extraInfosDescription1;
          this.person.person_info.selectedExtraInfos2 = this.selectedExtraInfos2;
          this.person.person_info.extraInfosDescription2 = this.extraInfosDescription2;

          this.person.person_info.image = this.image;
          this.person.person_info.addressesDto = this.ADRDTO();
          this.person.person_info.showimage = this.showimage;
          // this.person.saved = "Сохранено";
          // this.person.application.saved = "Сохранено";
          // console.log(this.person.person_info.tab_personal_lastname)
          this.person_info_id = '';
          this.person.person_info_id = '';


          if(this.person.person_info_id === '') {
            // this.person.saved = "Сохранено";
            AXIOS.post(`/profile`, (this.person))
              .then(response => {
                this.person.id = response.data;
                if(this.person.id !== ''){
                  this.person.saved = "Сохранено";
                  this.successMessage = "Проверено, обязательные поля заполнены";
                }

                // this.person.application.saved = response.data;
                // this.info.push(response.data)
                this.person_info_id = ''
                // this.person.ege_info = [];
                this.person.parents_info = [];
                this.person.futures_info = [];
                this.person_info_id = '';
                this.person.person_info_id = '';
                this.person.applications = [];

                this.person.application.application_number = '';
                this.person.application.application_date = '';
                this.person.application.application_selectedDeliveryType = {};
                this.person.application.application_selectedDocType = '';
                this.person.application.application_person_name = '';
                this.profiles = [];


                this.person.ege_info[0].tab_ege_selectedSubject = 'Химия';
                this.person.ege_info[0].tab_ege_score = 0;
                this.person.ege_info[0].tab_ege_year = {
                  "academyYearId": "2019",
                  "description": "2019-ый учебный год",
                  "beginPeriod": "2019-01-01",
                  "endPeriod": "2019-12-31"
                };
                this.person.ege_info[0].tab_ege_changePaspInf = false;
                this.person.ege_info[0].tab_ege_lastname = '';
                this.person.ege_info[0].tab_ege_firstname = '';
                this.person.ege_info[0].tab_ege_middlename = '';
                this.person.ege_info[0].tab_ege_selectedIdentityCardCode = null;
                this.person.ege_info[0].tab_ege_identityCardSeries = '';
                this.person.ege_info[0].tab_ege_identityCardNumber = '';
                this.person.ege_info[0].tab_ege_identityCardIssueDate = '';
                this.person.ege_info[0].tab_ege_identityCardIssueBy = '';
                this.person.ege_info[0].tab_ege_info_selectedCitizenship = null;

                this.person.ege_info[1].tab_ege_selectedSubject = 'Биология';
                this.person.ege_info[1].tab_ege_score = 0;
                this.person.ege_info[1].tab_ege_year = {
                  "academyYearId": "2019",
                  "description": "2019-ый учебный год",
                  "beginPeriod": "2019-01-01",
                  "endPeriod": "2019-12-31"
                };
                this.person.ege_info[1].tab_ege_changePaspInf = false;
                this.person.ege_info[1].tab_ege_lastname = '';
                this.person.ege_info[1].tab_ege_firstname = '';
                this.person.ege_info[1].tab_ege_middlename = '';
                this.person.ege_info[1].tab_ege_selectedIdentityCardCode = null;
                this.person.ege_info[1].tab_ege_identityCardSeries = '';
                this.person.ege_info[1].tab_ege_identityCardNumber = '';
                this.person.ege_info[1].tab_ege_identityCardIssueDate = '';
                this.person.ege_info[1].tab_ege_identityCardIssueBy = '';
                this.person.ege_info[1].tab_ege_info_selectedCitizenship = null;

                this.person.ege_info[2].tab_ege_selectedSubject = 'Русский язык';
                this.person.ege_info[2].tab_ege_score = 0;
                this.person.ege_info[2].tab_ege_year = {
                  "academyYearId": "2019",
                  "description": "2019-ый учебный год",
                  "beginPeriod": "2019-01-01",
                  "endPeriod": "2019-12-31"
                };
                this.person.ege_info[2].tab_ege_changePaspInf = false;
                this.person.ege_info[2].tab_ege_lastname = '';
                this.person.ege_info[2].tab_ege_firstname = '';
                this.person.ege_info[2].tab_ege_middlename = '';
                this.person.ege_info[2].tab_ege_selectedIdentityCardCode = null;
                this.person.ege_info[2].tab_ege_identityCardSeries = '';
                this.person.ege_info[2].tab_ege_identityCardNumber = '';
                this.person.ege_info[2].tab_ege_identityCardIssueDate = '';
                this.person.ege_info[2].tab_ege_identityCardIssueBy = '';
                this.person.ege_info[2].tab_ege_info_selectedCitizenship = null;

                console.log('saved person ' + response.data)
              })
              .catch(e => {
                this.errorMessages.push[e];
                this.person.saved = "Не сохранено";

              })
          }else {
            AXIOS.put('/profile/person/' + this.person_info_id,(this.person))
              .then(response =>{
                console.log(response)
                console.log(this.person)
              console.log("person was updated")})
              .catch(e => {
                this.errors.push(e)
              })
          }


        },
        uploadFile(e) {
          console.log(e)
          let file = e.target.files[0];
          this.showimage = URL.createObjectURL(file)

           let reader = new FileReader();
           reader.onloadend = (file) => {
             this.image = reader.result
             // this.base = reader.result;
             // console.log('RESULT',reader.result)
           }
           reader.readAsDataURL(file);
        },

        removeImage: function (e) {
          this.image = '';
          this.showimage = '';
          // this.person.person_info.showimage = '';
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
  .btn_save {
    margin-left: 75%;
    /*background-color: darkseagreen ;*/
  }
  .photo-loader {
    display: flex;
    align-items: flex-start;
  }

  .photo-loader__img-placeholder {
    margin-right: 30px;
    width: 300px;
    height: 400px;
    background: url('/src/assets/Portrait_Placeholder.png') no-repeat 50% 50% / cover;
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
    width: 300px;
    height: 400px;
    /*height: 640px;*/
    /*width: 480px*/
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
