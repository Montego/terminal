<template>
  <div>
    <span v-if="person.application.saved ==='Сохранено'"> Сохранено!</span>
    <div v-if="person.application.saved !=='Сохранено'" class="row">
      <div class="col-sm-4">
        <section>
          <div>
            <h2>Персональные данные</h2>
          </div>
          <label class="row">
            <div class=" form__label-text col-sm-5">Ф.И.О</div>
            <input :value="tab_personal_lastname + ' ' + tab_personal_firstname+ ' '+ tab_personal_middlename" class="uneditable form__input col-sm-7" type="text" name="name"
                   placeholder="Заполняется автоматически" disabled/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-5">Ф.И.О.(род. п.)</div>
            <input :value="tab_personal_lastname_genitive + ' ' + tab_personal_firstname_genitive+ ' '+ tab_personal_middlename_genitive" class="uneditable form__input col-sm-7" type="text"
                   placeholder="Заполняется автоматически"disabled/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-5">Дата рождения:</div>
            <input v-model="tab_personal_birthDate" class="form__input col-sm-7" type="date" disabled/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-5">СНИЛС</div>
            <input  v-model="tab_personal_INIPA" class="form__input col-sm-7" type="text" disabled/>
          </label>
          <!--<span class="alarm_label">{{ errors.first('snils') }}</span>-->
          <label class="row">
            <div class="form__label-text col-sm-5">СНИЛС Дата:</div>
            <input  v-model="tab_personal_INIPADate" class="form__input col-sm-7" type="date" disabled/>
          </label>

          <!--<hr>-->
          <input v-model="tab_personal_selectedIdentityCardCode.identityCardNameFull" class="minimal col-sm-7" disabled>
          <label class="row">
            <div class="form__label-text col-sm-5">Серия:</div>
            <input v-model="tab_personal_identityCardSeries" class="form__input col-sm-7" type="text" disabled/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-5">Номер:</div>
            <input v-model="tab_personal_identityCardNumber" class="form__input col-sm-7" type="text" disabled/>
          </label>
          <!--<label class="row">-->
          <!--<div class="form__label-text col-sm-3">Гражданство:</div>-->
          <!--<input v-model="tab_personal_selectedCitizenship.countryRegionId"  class="minimal col-sm" disabled>-->
          <!--</label>-->
          <label class="row">
            <div class="form__label-text col-sm-5">Соотечественник:</div>
            <input v-model="tab_personal_isCompatriot" class="checkbox col-sm-7" type="checkbox" disabled>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-5">Приравнять к иностранцам:</div>
            <input v-model="tab_personal_isEquatedForeign" class="checkbox col-sm-7" type="checkbox" disabled>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-5">Место рождения:</div>
            <textarea v-model="tab_personal_birthplace" class="col-sm-7" disabled></textarea>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-5">Общежитие:</div>
            <input v-model="tab_personal_isHostel" class="checkbox col-sm-7" type="checkbox" disabled>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-5">Иностранец, как гражданин РФ:</div>
            <input v-model="tab_personal_isForeignLikeRussian" class="checkbox col-sm-7" type="checkbox" disabled>
          </label>

        </section>
          <!--<hr>-->
        <section>
          <div>
            <h2>Контактные данные</h2>
          </div>
          <label class="row">
            <div class="form__label-text col-sm-4">Мобильный телефон:</div>
            <input v-model="tab_personal_cellularPhone" class="form__input col-sm" type="text" disabled/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-4">Эл. почта:</div>
            <input v-model="tab_personal_email" class="form__input col-sm"  type="email" disabled>
          </label>
        </section>
          <!--<hr>-->
          <section>
            <div>
              <h2>Адреса</h2>
            </div>
              <label class="row">
                <div class="form__label-text col-sm-4">Адрес по прописке:</div>
                <textarea v-model="tab_address_registrationAddress" class="uneditable col-sm-8" name="" ></textarea>
              </label>
              <label class="row">
                <div class="form__label-text col-sm-4">Адрес фактический:</div>
                <textarea v-model="tab_address_factAddress" class="uneditable col-sm-8" ></textarea>
              </label>
              <label class="row">
                <div class="form__label-text col-sm-4">Адрес временной регистрации:</div>
                <textarea v-model="tab_address_templateRegistrationAddress" class="uneditable col-sm-8" ></textarea>
              </label>
          </section>
      </div>



      <div class="col-sm-4">
        <!--<div>-->
          <!--<p>Образование</p>-->
        <!--</div>-->

        <!--<section>-->
          <!--<div>-->
            <!--<h2>Егэ</h2>-->
          <!--</div>-->
          <!--<div v-for="info in person.ege_info" >-->
            <!--<div>-->
              <!--<label class="row">-->
                <!--<div class="row">-->
                  <!--<div class="form__label-text col-sm-4">Предмет:</div>-->
                  <!--<input v-model="info.tab_ege_selectedSubject" class="form__input col-sm-6" type="text" disabled/>-->
                <!--</div>-->
                <!--<div class="row">-->
                  <!--<div class="form__label-text col-sm-4">Баллы:</div>-->
                  <!--<input v-model="info.tab_ege_score" class="form__input col-sm-6" type="text" disabled/>-->
                <!--</div>-->
              <!--</label>-->

            <!--</div>-->
          <!--</div>-->
        <!--</section>-->

        <!--<hr>-->
        <section>
          <div>
            <h2>Учебное заведение</h2>
          </div>
          <label class="row">
            <div class="form__label-text col-sm-4">Наименование:</div>
            <textarea v-model="tab_edu_military_univer" class="col-sm" disabled></textarea>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-4">Серия:</div>
            <input v-model="tab_edu_military_eduDocSerial" class="form__input col-sm" type="text" disabled/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-4">Номер:</div>
            <input  v-model="tab_edu_military_eduDocNumber" class="form__input col-sm" type="text" disabled/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-4">Дата выдачи:</div>
            <input v-model="tab_edu_military_eduDocDate" class="form__input col-sm" type="date" disabled/>
          </label>

        </section>
        <!--<div>-->
          <!--<p>Родители/попечители</p>-->
        <!--</div>-->
        <!--<div v-for="info in person.parents_info" >-->
          <!--<div class="row">-->
            <!--<div class="form__label-text col-sm-4">ФИО:</div>-->
            <!--<input v-model="info.tab_parent_name" class="form__input col-sm-6" type="text" disabled/>-->
          <!--</div>-->
          <!--<div class="row">-->
            <!--<div class="form__label-text col-sm-4">Кем прихождится:</div>-->
            <!--<input v-model="info.tab_parent_selectedFamRelationShip.name" class="form__input col-sm-6" type="text" disabled/>-->
          <!--</div>-->
          <!--<div class="row">-->
            <!--<div class="form__label-text col-sm-4">Дом. телефон:</div>-->
            <!--<input v-model="info.tab_parent_homePhoneNumber" class="form__input col-sm-6" type="text" disabled/>-->
          <!--</div>-->
          <!--<div class="row">-->
            <!--<div class="form__label-text col-sm-4">Моб. телефон:</div>-->
            <!--<input v-model="info.tab_parent_cellularPhone" class="form__input col-sm-6" type="text" disabled/>-->
          <!--</div>-->
        <!--</div>-->

      </div>

      <div class="col-sm-4">
        <section>
          <div>
            <h2>Заявление</h2>
          </div>
          <label class="row">
            <div class="form__label-text col-sm-5">Номер заявления:</div>
            <input v-model="application.application_number" class="form__input col-sm" type="text" disabled/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm-5">Дата заявления:</div>
            <input v-model="application.application_date" class="form__input col-sm" type="date" disabled />
          </label>
        </section>
        <!--<hr>-->
        <!--<div>-->
          <!--<p>Направление</p>-->
        <!--</div>-->
        <!--<div>-->
            <!--<div v-for="info in application.choosenWizards" >-->
              <!--<label class="row">-->
                <!--<div class="form__label-text col-sm-4">Факультет:</div>-->
                <!--<input v-model="info.deparName" class="form__input col-sm-6" type="text" disabled/>-->
              <!--</label>-->
              <!--<label class="row">-->
                <!--<div class="form__label-text col-sm-4">Специальность:</div>-->
                <!--<input v-model="info.specialityId" class="form__input col-sm-6" type="text" disabled/>-->
              <!--</label>-->
              <!--&lt;!&ndash;<label class="row">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="form__label-text col-sm-4">Специальное право:</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<input v-model="info.selected_typeOfSpecialRight" class="form__input col-sm-6" type="text" disabled/>&ndash;&gt;-->
              <!--&lt;!&ndash;</label>&ndash;&gt;-->
            <!--</div>-->

        <!--</div>-->
        <!--<hr>-->
        <!--<div>-->
          <!--<p>Документы</p>-->
        <!--</div>-->
        <div>

            <div v-for="info in application.application_documents" >
              <div class="row">
                <div class="form__label-text col-sm-4">Документы:</div>
                <input v-model="info.name" class="form__input col-sm" type="text" disabled/>
              </div>
              <div class="row">
                <div class="form__label-text col-sm-4">Серия:</div>
                <input v-model="info.serial" class="form__input col-sm" type="text" disabled/>
              </div>
              <div class="row">
                <div class="form__label-text col-sm-4">Номер:</div>
                <input v-model="info.number" class="form__input col-sm" type="text" disabled/>
              </div><label class="row">
              <div class="form__label-text col-sm-4">Количество:</div>
              <input v-model="info.count" class="form__input col-sm" type="text" disabled/>
            </label>

              <!--{{ todo.text }}-->
            </div>
          <!--this.acceptedPerson-->

        </div>
      </div>


    </div>
    <!--{{this.application}}-->
    <div>
      <button v-if="showPrintApplication" @click="onPrintApplication()">
        Заявление
      </button>
      <button v-if="showPrintDocuments" @click="onPrintDocuments()">
        Опись
      </button>
      <button v-if="showPrintAgreement" @click="onPrintAgreement()">
        Согласие
      </button>
    </div>

    <!--{{this.person}}-->
    <div class="clear_save_button row">
      <!--<button v-if="this.resultAcceptPerson !=='Утверждено'" @click="onAcceptPerson">Утвердить</button>-->
      <!--{{this.application}}-->
      <!--<div v-if="this.resultAcceptPerson ==='Утверждено'">-->
        <!--<button v-if="person.application.saved !=='Сохранено'" @click="onSave">Сохранить</button>-->
      <!--<button @click="checkFields">Проверить</button>-->
      <!--</div>-->


      <button v-if="showButtons || saved !== 'Сохранено'" @click="onSave">Сохранить</button>
      <!--<button v-if="showButtons || person.application.saved ==='Сохранено'" @click="onSave">Сохранить</button>-->


    </div>
  </div>

</template>

<script>
  import axios from 'axios';
  import {AXIOS} from "../../plugins/APIService";
  import { createHelpers } from 'vuex-map-fields';
  import { mapGetters } from 'vuex';
  const { mapFields:applications} = createHelpers({
    getterType: 'applications/getField',
    mutationType: 'applications/updateField',
  });
  const { mapFields:tab_reception_condition} = createHelpers({
    getterType: 'tab_reception_condition/getField',
    mutationType: 'tab_reception_condition/updateField',
  });
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
    export default {
        name: "Other",
      data(){
          return {
            showButtons: true,
            showPrintApplication: false,
            showPrintDocuments: false,
            showPrintAgreement: false,
            savedInfo: [],
          }
      },
        computed: {
          ...applications(['application',]),
          ...tab_reception_condition([ 'file',]),
          ...person(['person','showProfile','person_info_id','resultAcceptPerson','saved','savedResult','personInfoSavedId',
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
            'averageScore','tab_edu_military_selectedSoldiery','tab_edu_military_selectedSoldieryStatus',
            'tab_edu_military_selectedMilitaryFormDoc','tab_edu_military_militaryNumber','tab_edu_military_militarySeries',
            'tab_edu_military_militaryIssueDate','tab_edu_military_militaryIssueBy','tab_edu_military_militaryRank',
            'tab_edu_military_selectedDocType','tab_edu_military_docMilitaryShowDate','tab_edu_military_startMilitary',
            'tab_edu_military_endMilitary', 'image', 'showimage','acceptedPerson', 'profiles','selectedExtraInfos1',
            'selectedExtraInfos2','extraInfosDescription1','extraInfosDescription2'
          ]),
          ...mapGetters(['ADRDTO']),
      },

      methods: {
        axapta(id) {
          console.log('in axapta method');
          this.$store.dispatch('go', id);
        },

        onPrintApplication() {
          console.log(this.$store.state.applicationId);
          let id = this.$store.state.applicationId;
          window.open('http://10.71.0.115/application/' + id + '.xlsm');
          // 'ApW000191'

        },

        onPrintDocuments() {
          console.log(this.$store.state.applicationId);
          let id = this.$store.state.applicationId;
          window.open('http://10.71.0.115/appldoclist/' + id + '.xlsm');
        },

        onPrintAgreement() {
          console.log(this.$store.state.agreementId);
          let id = this.$store.state.agreementId;
          window.open('http://10.71.0.115/agreement/' + id + '.xlsm');
        },

        onSave() {
          //TODO check double save person_inf(id)
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
          // this.person.person_info.addressesDto = this.ADRDTO();
          this.person.person_info.showimage = this.showimage;
          this.person.saved = "Сохранено";
          this.person.application.saved = "Сохранено";
          // console.log(this.person.person_info.tab_personal_lastname)



          if(this.person_info_id === ''){
            AXIOS.post(`/profile`, (this.person))
              .then(response => {
                console.log('saved person ' + response.data);
                this.person_info_id = response.data;
                if(response.data!== ''){
                  this.showButtons = false;
                }


                this.axapta(this.person_info_id);

                if(this.agreementId !== ""){
                  this.showPrintAgreement = true;
                }
                if(this.applicationId !== ""){
                  this.showPrintApplication = true;
                }
                if(this.contactPersonId !== ""){
                  this.showPrintDocuments = true;
                  this.showButtons = false;
                }

                // if(this.agreementId!== ''){
                //   this.showButtons = true;
                // }
              })
              .catch(e => {
                this.person.saved ="Не сохранено";
                // this.errors.push(e)
              });

          }else {
            //TODO if part of person will save inf tabPhoto, check this flow(post/put)
            AXIOS.put('/profile/person/' + this.person_info_id,(this.person))
              .then(response =>{
                console.log(response);
                console.log(this.person);
                // location.href='profile#overview_personal_info';
                // this.person.ege_info = [];
                // this.person.parents_info = [];
                // // this.person.person_info = {};
                // this.person.futures_info = [];
                // this.person_info_id='';
                console.log("person was updated");
                this.showButtons = true;
                this.axapta(this.person_info_id);
              })
              .catch(e => {
                this.errors.push(e)
              });
            console.log('before axapta: ' + this.person_info_id);
            this.axapta(this.person_info_id);
          }
        },
        },
    }
</script>

<style scoped>

  /*.section-data {*/
    /*padding: 10px 20px;*/
    /*background: rgba(114, 172, 196, 0.2);*/
  /*}*/

  /*.section-data__title {*/
    /*font-size: 30px;*/
  /*}*/

  /*.section-data__label-text {*/
    /*margin-bottom: 5px;*/
    /*font-weight: 700;*/
  /*}*/

  /*.section-data__input {*/
    /*height: 30px;*/
  /*}*/

  input.checkbox {
    margin-top: 8px;
    height: 15px;
    transform: scale(1.3);
    opacity: 0.9;
    cursor: pointer;
  }
  .form__label-text {
    margin-top: 5px;
  }

  label {
    border-bottom: 1px solid gray;
    min-height: 30px;
    align-content: space-between;
    vertical-align: center;
  }
  section {
    border: 1px solid lightblue;
    overflow: hidden;
    padding: 10px;
    margin-bottom: 20px;
  }

  input {
    margin-top: 5px;
    vertical-align: center;
    /*padding: 10px 5px;*/
  }

  .clear_save_button {
    margin-top: 5%;
    /*margin-left: 65%;*/
    display: flex;
    justify-content: flex-end;
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
</style>
