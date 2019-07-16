<template>
  <div>

    <div v-if="this.resultAcceptPerson !=='Утверждено'" class="row">
      <div class="col-sm-4">

        <div>
          <p>Персональные данные</p>
        </div>

        <label class="row">
          <div class=" form__label-text col-sm-3">Ф.И.О</div>
          <input :value="tab_personal_lastname + ' ' + tab_personal_firstname+ ' '+ tab_personal_middlename" class="uneditable form__input col-sm" type="text" name="name"
                 placeholder="Заполняется автоматически" disabled/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm-3">Ф.И.О.(род. п.)</div>
          <input :value="tab_personal_lastname_genitive + ' ' + tab_personal_firstname_genitive+ ' '+ tab_personal_middlename_genitive" class="uneditable form__input col-sm" type="text"
                 placeholder="Заполняется автоматически"disabled/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm-3">Дата рождения:</div>
          <input v-model="tab_personal_birthDate" class="form__input col-sm-7" type="date" disabled/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm-3">СНИЛС</div>
          <input  v-model="tab_personal_INIPA" class="form__input col-sm-5" type="text" disabled/>
        </label>
        <!--<span class="alarm_label">{{ errors.first('snils') }}</span>-->
        <label class="row">
          <div class="form__label-text col-sm-3">СНИЛС Дата:</div>
          <input  v-model="tab_personal_INIPADate" class="form__input col-sm" type="date" disabled/>
        </label>
      <hr>
          <div class="form__label-text col-sm-12">Документ</div>
          <input v-model="tab_personal_selectedIdentityCardCode.identityCardNameFull" class="minimal col-sm" disabled>
        <label class="row">
          <div class="form__label-text col-sm-2">Серия:</div>
          <input v-model="tab_personal_identityCardSeries" class="form__input col-sm" type="text" disabled/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm-2">Номер:</div>
          <input v-model="tab_personal_identityCardNumber" class="form__input col-sm" type="text" disabled/>
        </label>
      <!--<label class="row">-->
        <!--<div class="form__label-text col-sm-3">Гражданство:</div>-->
        <!--<input v-model="tab_personal_selectedCitizenship.countryRegionId"  class="minimal col-sm" disabled>-->
      <!--</label>-->
      <label class="row">
        <div class="form__label-text col-sm-4">Соотечественник:</div>
        <input v-model="tab_personal_isCompatriot" class="checkbox col-sm" type="checkbox" disabled>
      </label>
      <label class="row">
        <div class="form__label-text col-sm-4">Приравнять к иностранцам:</div>
        <input v-model="tab_personal_isEquatedForeign" class="checkbox col-sm" type="checkbox" disabled>
      </label>
      <label class="row">
        <div class="form__label-text col-sm-3">Место рождения:</div>
        <textarea v-model="tab_personal_birthplace" class="col-sm" disabled></textarea>
      </label>
      <label class="row">
        <div class="form__label-text col-sm-4">Общежитие:</div>
        <input v-model="tab_personal_isHostel" class="checkbox col-sm" type="checkbox" disabled>
      </label>
      <label class="row">
        <div class="form__label-text col-sm-4">Иностранец, как гражданин РФ:</div>
        <input v-model="tab_personal_isForeignLikeRussian" class="checkbox col-sm" type="checkbox" disabled>
      </label>
        <hr>
      <div>
        <p>Контактные данные</p>
      </div>
        <label class="row">
          <div class="form__label-text col-sm">Мобильный телефон:</div>
          <input v-model="tab_personal_cellularPhone" class="form__input col-sm" type="text" disabled/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm-4">Эл. почта:</div>
          <input v-model="tab_personal_email" class="form__input col-sm"  type="email" disabled>
        </label>
        <hr>
        <div>
          <p>Адреса</p>
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
        <!--<hr>-->
        <!--<div>-->
          <!--<p>ЕГЭ</p>-->
        <!--</div>-->
        <!--<label class="row">-->
          <!--<input v-model="person.ege_info[0]" placeholder="Химия" class="form__input col-sm" type="text" disabled/>-->
          <!--&lt;!&ndash;<input v-model="person.ege_info[0].tab_ege_score" placeholder="балл" class="form__input col-sm" type="text" disabled/>&ndash;&gt;-->
        <!--</label>-->
        <!--<label class="row">-->
          <!--<input placeholder="Биология" class="form__input col-sm" type="text" disabled/>-->
          <!--<input placeholder="балл" class="form__input col-sm" type="text" disabled/>-->
        <!--</label>-->
        <!--<label class="row">-->
          <!--<input placeholder="Русский язык" class="form__input col-sm" type="text" disabled/>-->
          <!--<input placeholder="балл" class="form__input col-sm" type="text" disabled/>-->
        <!--</label>-->

      </div>
      <div class="col-sm-4">
        <!--<div>-->
          <!--<p>Образование</p>-->
        <!--</div>-->
        <div>
          <p>Учебное заведение</p>
        </div>

        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm">Уровень образования:</div>-->
          <!--<input v-model="tab_edu_military_educationLevel" class="minimal col-sm" disabled>-->
        <!--</label>-->


        <label class="row">
          <div class="form__label-text col-sm-4">Наименование:</div>
          <textarea v-model="tab_edu_military_univer" class="col-sm" disabled></textarea>
        </label>
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm-4">Страна:</div>-->
          <!--<input v-model="tab_edu_military_selectedCountryRegion.countryRegionId" class="minimal col-sm" disabled>-->
        <!--</label>-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm-4">Документ об образовании:</div>-->
          <!--<input v-model="tab_edu_military_selectedEduDoc.name" class="minimal col-sm-8"  disabled>-->
        <!--</label>-->

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
        <hr>

        <!--<div>-->
          <!--<p>Военная служба</p>-->
        <!--</div>-->

          <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Прохождение службы:</div>-->
            <!--<input v-model="tab_edu_military_selectedSoldieryStatus.name" class="minimal col-sm">-->
          <!--</label>-->
          <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Тип документа:</div>-->
            <!--<input v-model="tab_edu_military_selectedMilitaryFormDoc" class="minimal col-sm">-->
          <!--</label>-->
          <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Серия:</div>-->
            <!--<input v-model="tab_edu_military_militarySeries" class="form__input col-sm" type="text" />-->
          <!--</label>-->
          <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Номер военного билета:</div>-->
            <!--<input v-model="tab_edu_military_militaryNumber" class="form__input col-sm" type="text" />-->
          <!--</label>-->

          <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Дата выдачи:</div>-->
            <!--<input v-model="tab_edu_military_militaryIssueDate" class="form__input col-sm" type="date" />-->
          <!--</label>-->
          <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Кем выдан:</div>-->
            <!--<textarea v-model="tab_edu_military_militaryIssueBy" class="col-sm" name=""></textarea>-->
          <!--</label>-->
          <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Воинское звание:</div>-->
            <!--<input v-model="tab_edu_military_militaryRank" class="form__input col-sm" type="text" />-->
          <!--</label>-->
          <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Копия/Оригинал:</div>-->
            <!--<input v-model="tab_edu_military_selectedDocType.name" class="minimal col-sm">-->
          <!--</label>-->
          <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Дата предоставления:</div>-->
            <!--<input v-model="tab_edu_military_docMilitaryShowDate" class="form__input col-sm" type="date" />-->
          <!--</label>-->




      </div>
      <div class="col-sm-4">d</div>
    </div>
    <!--{{this.application}}-->

    <!--{{this.person}}-->
    <div class="clear_save_button row">
      <button v-if="this.resultAcceptPerson !=='Утверждено'" @click="onAcceptPerson">Утвердить</button>
      <!--{{this.application}}-->
      <button v-if="this.application.applicationTable.saved !=='Сохранено'" @click="onSave">Сохранить</button>
    </div>
  </div>

</template>

<script>
  import {AXIOS} from "../../plugins/APIService";
  import { createHelpers } from 'vuex-map-fields';
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
        computed: {
          ...applications(['application',]),
          ...tab_reception_condition([ 'file',]),
          ...person(['person','showProfile','person_info_id','resultAcceptPerson','saved','savedResult',
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
            'tab_edu_military_endMilitary', 'image', 'showimage',
          ]),
      },
      methods: {


        onAcceptPerson() {
          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
          this.person.acceptedPerson = "Утверждено";
          this.resultAcceptPerson = "Утверждено";
          AXIOS.put(`/profile/acceptPerson/` + this.person_info_id, (this.person.acceptedPerson),config)
            .then(response => {
              AXIOS.get(`/profile/personsTable`)
                .then(response => {
                  this.profiles = response.data;
                })
                .catch(e => {
                  this.errors.push(e)
                });

              console.log(response.data)
              if(response.data === "Утверждено"){
                this.resultAcceptPerson = "Утверждено";
                console.log(this.resultAcceptPerson)

              }
              this.info.push(response.data)
            })
            .catch(e => {
            });
        },
        onSave() {
          this.application.saved = "Сохранено";
          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
          AXIOS.post(`/profile/application/` + this.person_info_id,(this.application))
            .then(response => {
              if(response.data === "Сохранено"){
                this.savedResult = "Сохранено"

              }
              // this.savedResult = '';
            })
            .catch(e => {

            });

          AXIOS.get(`/profile/personsTable`)
            .then(response => {
              this.profiles = response.data;
            })
            .catch(e => {
              this.errors.push(e)
            })

          this.showProfile = true;
          location.href='profile#overview_personal_info';

          }

        },
    }
</script>

<style scoped>
  .clear_save_button {
    margin-top: 0%;
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
