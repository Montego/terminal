<template>
  <div>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
      @toApplication="onAppl"
      @validatorConditions="validatorConditions"
    />
    <div class="photo-loader">
      <div class="photo-loader__img-placeholder">
        <div v-if="!showimage">
        </div>
        <div v-else>
          <img class="images_place" :src="showimage"/>
        </div>
      </div>

      <div class="photo-loader__controls">
        <!--<button class="photo-loader__control-btn btn btn_load" type="button">-->
        <input type="file" id="image" ref="image" @change="uploadFile"/>
        <button v-if="!this.isModalVisible" class="photo-loader__control-btn /btn btn_reset" type="button"
                @click="removeImage">Сбросить
        </button>
      </div>
    </div>
    <span>{{successMessage}}</span>
    <span>{{errorMessages}}</span>
    <!--<div v-if="!this.isModalVisible">-->
    <!--<button v-if="person.saved !=='Сохранено' " class="photo-loader__control-btn btn btn_save" type="button" @click="onSave">Проверить заполнение</button>-->
    <!--</div>-->

    <!--<div v-if="!this.isModalVisible"  >-->
    <!--<button v-if="person.saved !=='Сохранено' " class="photo-loader__control-btn btn btn_save" type="button" @click="showModal">Заявление</button>-->
    <!--</div>-->
    <div v-if="!this.isModalVisible">

      <button class="button" type="button" @click="showModal">Зявление</button>
      <!--<p class="typo__p" v-if="submitStatus === 'OK'">Спасибо</p>-->
      <p class="typo__p" v-if="submitStatus === 'ERROR'">Некорректно заполнены/не заполнены поля: </p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Проверка...</p>
      <div class="box">
        <span>
           <ul >
          <li v-for="value in validAnswer">
             -- {{ value.answer }}
          </li>
        </ul>
        </span>
      </div>


    </div>

  </div>
</template>

<script>
  import {required} from 'vuelidate/lib/validators';
  import {createHelpers} from 'vuex-map-fields';
  import {AXIOS} from "../../plugins/APIService";
  import modal from "../../modals/modal";
  import {mapGetters, mapState} from 'vuex'
  import TabPersonalInfo from "./TabPersonalInfo";
  import TabAddressInfo from "./TabAddressInfo";
  import TabEducationMilitary from "./TabEducationMilitaryInfo";
  import TabEvidenceEge from "./TabEvidenceEgeInfo";
  import TabParentInfo from "./TabParentInfo";

  const {mapMultiRowFields} = createHelpers({
    getterType: `person/getField`,
    mutationType: `person/updateField`,
  });

  const {mapFields: person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  const {mapFields: applications} = createHelpers({
    getterType: `applications/getField`,
    mutationType: `applications/updateField`,
  });

  export default {
    name: "TabPhoto",
    components: {
      TabParentInfo,
      TabEvidenceEge,
      TabEducationMilitary,
      TabAddressInfo,
      TabPersonalInfo,
      modal
    },
    data() {
      return {
        counterTarg:0,

        testMessage: '',
        validAnswer: [],
        submitStatus: null,
        info: [],
        imagesData: [],
        // showimage: '',
        base: '',
        // howMuchTarg: [],
        optionsErrorAnswer:[
          {
            field: 'parent_info',
            answer: 'Не добавлен ни один родитель/попечитель'
          },
          {
            field: 'tab_personal_lastname',
            answer: 'фамилия абитуриента(вкладка личные сведения)'
          },
          {
            field: 'tab_personal_firstname',
            answer: 'имя абитуриента (вкладка личные сведения)'
          },
          {
            field: 'tab_personal_lastname_genitive',
            answer: 'фамилия абитуриента в род.падеже(вкладка личные сведения)'
          },
          {
            field: 'tab_personal_firstname_genitive',
            answer: 'имя абитуриента в род.падеже(вкладка личные сведения)'
          },
          {
            field: 'tab_personal_birthDate',
            answer: 'дата рождения (вкладка личные сведения)'
          },
          {
            field: 'tab_personal_selectedIdentityCardCode',
            answer: 'документ (вкладка личные сведения)'
          },
          {
            field: 'tab_personal_identityCardSeries',
            answer: 'серия документа (вкладка личные сведения)'
          },
          {
            field: 'tab_personal_identityCardNumber',
            answer: 'номер документа (вкладка личные сведения)'
          },
          {
            field: 'tab_personal_identityCardIssueBy',
            answer: 'кем выдано документ (вкладка личные сведения)'
          },
          {
            field: 'tab_personal_identityCardIssueDate',
            answer: 'дата выдачи документа (вкладка личные сведения)'
          },
          {
            field: 'tab_personal_selectedCitizenship',
            answer: 'гражданство (вкладка личные сведения)'
          },
          {
            field: 'tab_personal_birthplace',
            answer: 'место рождения (вкладка личные сведения)'
          },
          //--------------------------------------------------------------------
          {
            field: 'tab_edu_military_educationLevel',
            answer: 'уровень образования (вкладка Образование, военная служба)'
          },
          {
            field: 'tab_edu_military_univer',
            answer: 'наименовани учебного заведения (вкладка Образование, военная служба)'
          },
          {
            field: 'tab_edu_military_selectedAcademyYear',
            answer: 'год окончания учебы (вкладка Образование, военная служба)'
          },
          {
            field: 'tab_edu_military_selectedEduDoc',
            answer: 'документ об образовании (вкладка Образование, военная служба)'
          },
          {
            field: 'tab_edu_military_eduDocSerial',
            answer: 'серия док-а об образовании (вкладка Образование, военная служба)'
          },
          {
            field: 'tab_edu_military_eduDocNumber',
            answer: 'номер док-а об образовании (вкладка Образование, военная служба)'
          },
        ]
      }
    },
    validations: {
      //validations rules
      tab_personal_lastname: {required},
      tab_personal_firstname: {required},
      tab_personal_lastname_genitive: {required},
      tab_personal_firstname_genitive: {required},
      tab_personal_birthDate: {required},
      tab_personal_selectedIdentityCardCode: {required},
      tab_personal_identityCardSeries: {required},
      tab_personal_identityCardNumber: {required},
      tab_personal_identityCardIssueBy: {required},
      tab_personal_identityCardIssueDate: {required},
      tab_personal_selectedCitizenship: {required},
      tab_personal_birthplace: {required},

      tab_edu_military_educationLevel: {required},
      tab_edu_military_univer: {required},
      tab_edu_military_selectedAcademyYear: {required},
      tab_edu_military_selectedEduDoc: {required},
      tab_edu_military_eduDocSerial: {required},
      tab_edu_military_eduDocNumber: {required},


      //validations inside groups
      GroupsValidationInfo: ['tab_personal_lastname', 'tab_personal_firstname', 'tab_personal_lastname_genitive',
        'tab_personal_firstname_genitive', 'tab_personal_birthDate',
        'tab_personal_selectedIdentityCardCode', 'tab_personal_identityCardSeries',
        'tab_personal_identityCardNumber','tab_personal_identityCardIssueBy',
        'tab_personal_identityCardIssueDate','tab_personal_selectedCitizenship','tab_personal_birthplace',
        'tab_edu_military_educationLevel', 'tab_edu_military_univer', 'tab_edu_military_selectedAcademyYear',
        'tab_edu_military_selectedEduDoc', 'tab_edu_military_eduDocSerial', 'tab_edu_military_eduDocNumber'
      ],

    },
    mounted() {
      this.$store.dispatch('dictionary/onLoadAddressCountryRegion');
      this.$store.dispatch('dictionary/onLoadTargOrg');

    },
    computed: {
      ...mapMultiRowFields(['persons']),
      ...person(['person', 'showProfile', 'profiles', 'isModalVisible', 'errorMessages', 'successMessage',
        'tab_personal_lastname', 'tab_personal_firstname', 'tab_personal_middlename', 'tab_personal_lastname_genitive',
        'tab_personal_firstname_genitive', 'tab_personal_middlename_genitive', 'tab_personal_selectedGender',
        'tab_personal_birthDate', 'tab_personal_INIPA', 'tab_personal_INIPADate', 'tab_personal_note',
        'tab_personal_selectedIdentityCardCode', 'tab_personal_identityCardSeries', 'tab_personal_identityCardNumber',
        'tab_personal_identityCardIssueBy', 'tab_personal_identityCardIssueDate', 'tab_personal_identityCardIssueDep',
        'tab_personal_selectedCitizenship', 'tab_personal_isCompatriot', 'tab_personal_isEquatedForeign',
        'tab_personal_birthplace', 'tab_personal_isHostel', 'tab_personal_isForeignLikeRussian',
        'tab_personal_homePhoneNumber', 'tab_personal_cellularPhone', 'tab_personal_email', 'tab_personal_company_name',
        'tab_personal_company_address', 'tab_personal_seniority', 'tab_personal_employYears', 'tab_personal_employMonths',
        'tab_personal_employDays', 'tab_personal_selectedForeignLanguageInfo', 'selected_foreignLanguageName1',
        'language_score1', 'selected_foreignLanguageName2', 'language_score2', 'selected_foreignLanguageName3',
        'language_score3', 'tab_address_registrationAddress', 'tab_address_factAddress', 'tab_address_templateRegistrationAddress',
        'tab_edu_military_educationLevel', 'tab_edu_military_univer', 'tab_edu_military_selectedCountryRegion',
        'tab_edu_military_selectedState', 'tab_edu_military_selectedAcademyYear', 'tab_edu_military_selectedEduDoc',
        'tab_edu_military_eduDocSerial', 'tab_edu_military_eduDocNumber', 'tab_edu_military_eduDocDate',
        'tab_edu_military_eduDocName', 'tab_edu_military_attachment_serial', 'tab_edu_military_attachment_number',
        'score_five', 'score_four', 'score_three',
        'averageScore', 'tab_edu_military_selectedSoldiery', 'tab_edu_military_selectedSoldieryStatus',
        'tab_edu_military_selectedMilitaryFormDoc', 'tab_edu_military_militaryNumber', 'tab_edu_military_militarySeries',
        'tab_edu_military_militaryIssueDate', 'tab_edu_military_militaryIssueBy', 'tab_edu_military_militaryRank',
        'tab_edu_military_selectedDocType', 'tab_edu_military_docMilitaryShowDate', 'tab_edu_military_startMilitary',
        'tab_edu_military_endMilitary', 'selectedExtraInfos1', 'selectedExtraInfos2', 'extraInfosDescription1',
        'extraInfosDescription2', 'image', 'showimage', 'person_info_id', 'saved', 'acceptedPerson'
      ]),
      ...applications(['application', 'application_person_id', 'application_person_name', 'applId', 'applTableName',
        'applTableNumber', 'applTableDate', 'applTableDeliveryType', 'applicationId', 'apls', 'chooseAppls', 'resultApl',
        'checkTargCount', 'checkSpecCount', 'message', 'checCountBudgetAndCel',
      'lechDelCel','lechDelBudget','medProfCel', 'medProfBudget','stomDelCel','stomDelBudget','howMuchTarg',
      'targEduLechDel','targEduMedProf','targEduStomDel','targCountCheck'],),
      ...mapState('dictionary', ['targOrg'],),
      ...mapGetters('dictionary', ['GET_targOrg']),
      ...mapGetters(['ADRDTO']),

    },
    methods: {
      check(GroupsValidationInfo) {
        let entries = Object.entries(GroupsValidationInfo);
        let i = 0;

        for (i; i < entries.length; i++) {
          for(let j = 0; j < this.optionsErrorAnswer.length; j++){
            if (entries[i][0] === this.optionsErrorAnswer[j].field) {
              if(entries[i][1].$invalid){
                this.validAnswer.push(this.optionsErrorAnswer[j]);
              }
            }
          }
        }
        // if(person.parents_info.length === 0){
        //   this.validAnswer.push(this.optionsErrorAnswer[0])
        // }
      },

      handleClick(val) {
        this.showProfile = val;
      },

      showModal() {
        this.lechDelCel = true;
        this.lechDelBudget = true;
        this.medProfCel = true;
        this.medProfBudget = true;
        this.stomDelCel = true;
        this.stomDelBudget = true;
        this.howMuchTarg = [];
        this.validAnswer = [];
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR';

          this.check(this.$v.GroupsValidationInfo);

        } else {
          // do your submit logic here
          //----------------------------------------
          // this.onSave();


          if (this.application.choosenWizards.length === 0) {
            this.person.application.choosenWizards = [];
            this.isModalVisible = true;
            AXIOS.get(`/profile/conditionsDto`)
              .then(response => {
                console.log(response.data);
                this.apls = response.data;

                console.log(this.profiles)
              })
              .catch(e => {
                this.errors.push(e)
              })

          } else {
            this.showProfile = false;
            location.href = 'profile#applicationFill';
          }

          //----------------------------------------
          this.submitStatus = 'PENDING';
          setTimeout(() => {
            this.submitStatus = 'OK'
          }, 500)
        }


        // if(this.application.choosenWizards.length === 0) {
        //     this.person.application.choosenWizards = [];
        //       this.isModalVisible = true;
        //       AXIOS.get(`/profile/conditionsDto`)
        //         .then(response => {
        //           console.log(response.data);
        //           this.apls = response.data;
        //
        //           console.log(this.profiles)
        //         })
        //         .catch(e => {
        //           this.errors.push(e)
        //         })
        //
        //   }else{
        //     this.showProfile = false;
        //     location.href = 'profile#applicationFill';
        //   }


      },
      closeModal() {
        this.isModalVisible = false;
      },

      validatorConditions() {
        this.targCountCheck = true;
        this.howMuchTarg = [];
        this.counterTarg = 0;
        let counterCheckTargOrg = 0;

        let counterLechDel = 0;
        let counterMedProf = 0;
        let counterStom = 0;
        let counterSestr = 0;
        let sumSpec = counterLechDel + counterMedProf + counterStom + counterSestr;

        let i = 0;
        for (i; i < this.apls.length; i++) {
          // if(this.apls[i].specialityId === 'ЛечДел')
            switch (this.apls[i].specialityId) {
              case 'ЛечДел':
                if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === true) ) {
                  this.lechDelCel = false;
                  console.log('Бюджет, ЛечДел', this.apls[i].chose, "открыть лечДел целевое ",this.lechDelCel );
                }
                if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === true) ) {
                  this.lechDelBudget = false;
                  this.targEduLechDel = false;
                  console.log('targLechDel--',this.targEduLechDel);
                  console.log('ЦелНапр, ЛечДел', this.apls[i].chose, "открыть лечДел бюджет ",this.lechDelBudget );
                }
                if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === false) && (this.lechDelCel === false) ) {
                  this.lechDelCel = true;

                  console.log('Бюджет, ЛечДел', this.apls[i].chose, "открыть лечДел целевое ",this.lechDelCel );
                }
                if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === false) && (this.lechDelBudget === false) ) {
                  this.lechDelBudget = true;
                  this.targEduLechDel = true;
                  console.log('targLechDel--',this.targEduLechDel);
                  console.log('ЦелНапр, ЛечДел', this.apls[i].chose, "открыть лечДел бюджет ",this.lechDelBudget );
                }
                break;
              case 'МедПрофДел':
                  if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === true) ) {
                    this.medProfCel = false;
                    console.log('Бюджет, МедПрофДел', this.apls[i].chose, "открыть медПроф целевое ", this.medProfCel );
                  }
                  if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === true) ) {
                    this.medProfBudget = false;
                    this.targEduMedProf = false;
                    console.log('targMedProf--',this.targEduMedProf);
                    console.log('ЦелНапр, МедПрофДел', this.apls[i].chose, "открыть медПроф бюджет ", this.medProfBudget );
                  }
                  if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === false) && (this.medProfCel === false)) {
                    this.medProfCel = true;
                    console.log('Бюджет, МедПрофДел', this.apls[i].chose, "открыть медПроф целевое ", this.medProfCel );
                  }
                  if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === false) && (this.medProfBudget === false)) {
                    this.medProfBudget = true;
                    this.targEduMedProf = true;
                    console.log('targMedProf--',this.targEduMedProf);
                    console.log('ЦелНапр, МедПрофДел', this.apls[i].chose, "открыть медПроф бюджет ", this.medProfBudget );
                  }
                break;
              case 'СтомДел':
                  if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === true) ) {
                    this.stomDelCel = false;
                    console.log('Бюджет, СтомДел', this.apls[i].chose, "открыть СтомДел целевое ", this.stomDelCel );
                  }
                  if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === true) ) {
                    this.stomDelBudget = false;
                    this.targEduStomDel = false;
                    console.log('targStom--',this.targEduStomDel);
                    console.log('ЦелНапр, СтомДел', this.apls[i].chose, "открыть СтомДел бюджет ", this.stomDelBudget );
                  }
                  if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === false) && (this.stomDelCel === false) ) {
                    this.stomDelCel = true;
                    console.log('ЦелНапр, СтомДел', this.apls[i].chose, "открыть СтомДел целевое ", this.stomDelCel );
                  }
                  if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === false) && (this.stomDelBudget === false) ) {
                    this.stomDelBudget = true;
                    this.targEduStomDel = true;
                    console.log('targStom--',this.targEduStomDel);
                    console.log('ЦелНапр, СтомДел', this.apls[i].chose, "открыть СтомДел бюджет ", this.stomDelBudget );
                  }
              default:
                break;
            }
        }

        this.howMuchTarg.push(this.targEduLechDel);
        this.howMuchTarg.push(this.targEduMedProf);
        this.howMuchTarg.push(this.targEduStomDel);
//todo
        for(let x=0;x<this.howMuchTarg.length; x++){
          if(this.howMuchTarg[x] === false){
            this.counterTarg++;
            console.log(x, 'here')
          }
          // if(this.howMuchTarg[x] === true){
          //   this.counterTarg = 0;
          //   console.log(x, 'here')
          // }

        }
        if (this.counterTarg === 2 ){
          this.targCountCheck = false;
        }
        console.log(this.howMuchTarg);

        // console.log('result counter ', counterCheckTargOrg)
      },


      onAppl(id) {
        console.log('in method -' + this.person_info_id);
        let i = 0;
        for (i; i < this.apls.length; i++) {
          if (this.apls[i].chose === true) {
            this.person.application.choosenWizards.push(this.apls[i]);
          }
        }

        let strangeCounter =
          Object.keys(this.person.application.choosenWizards
            .reduce((accum, el) => {
              accum[el.specialityId] = true;
              return accum;
            }, [])).length;
        console.log(strangeCounter, 'strangeCounter');

        if (strangeCounter > 3) {
          this.isModalVisible = true;
          this.message = "МОЖНО ВЫБРАТЬ ТОЛЬКО 3 СПЕЦИАЛЬНОСТИ!        ";
          this.person.application.choosenWizards = [];
        } else {
          this.message = "";
          this.isModalVisible = false;
        }
        // this.isModalVisible = false;

        // location.href='profile#overview_new';

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

        // this.person_info_id = '';
        // this.person.person_info_id = '';


        if (this.person_info_id === '') {
          // this.person.saved = "Сохранено";
          AXIOS.post(`/profile`, (this.person))
            .then(response => {
              this.person_info_id = response.data;

              if (this.person_info_id !== '') {
                this.person.saved = "Сохранено";
                this.successMessage = "Проверено, обязательные поля заполнены";
              }

              console.log('saved person ' + response.data)
            })
            .catch(e => {
              // this.errorMessages.push[e];
              this.person.saved = "Не сохранено";

            })
        } else {
          AXIOS.put('/profile/person/' + this.person_info_id, (this.person))
            .then(response => {
              console.log(response);
              console.log(this.person);
              console.log("person was updated")
            })
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

  li {
    font-size: 23px;
  }

  .box {
    background: #e6e3df;
    text-align: left;
  }
  .box span {

    display: inline-block;
    box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);
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


  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid grey;
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


  textarea {
    width: 90%; /* Ширина поля в процентах */
    height: 100px; /* Высота поля в пикселах */
    resize: none; /* Запрещаем изменять размер */
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


  .search_place p {
    margin-right: 10px;
  }


</style>
