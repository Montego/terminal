<template>
  <div>

    <div class="row">
      <div class="col-sm-4">
        <!--<div>-->
          <!--<p>Персональные данные</p>-->
        <!--</div>-->

        <!--<label class="row">-->
          <!--<div class=" form__label-text col-sm">Ф.И.О</div>-->
          <!--<input :value="tab_personal_lastname + ' ' + tab_personal_firstname+ ' '+ tab_personal_middlename" class="uneditable form__input col-sm" type="text" name="name"-->
                 <!--placeholder="Заполняется автоматически" disabled/>-->
        <!--</label>-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm">Ф.И.О.(род. п.)</div>-->
          <!--<input :value="tab_personal_lastname_genitive + ' ' + tab_personal_firstname_genitive+ ' '+ tab_personal_middlename_genitive" class="uneditable form__input col-sm" type="text"-->
                 <!--placeholder="Заполняется автоматически"disabled/>-->
        <!--</label>-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm">Дата рождения:</div>-->
          <!--<input v-validate data-vv-as="дата рождения" v-model="tab_personal_birthDate" class="form__input col-sm" type="date" disabled/>-->
        <!--</label>-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm">СНИЛС</div>-->
          <!--<input v-validate="'numeric'" data-vv-as="СНИЛС" v-model="tab_personal_INIPA" class="form__input col-sm" type="text" disabled/>-->
        <!--</label>-->
        <!--&lt;!&ndash;<span class="alarm_label">{{ errors.first('snils') }}</span>&ndash;&gt;-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm">СНИЛС Дата:</div>-->
          <!--<input v-validate data-vv-as="дата СНИЛС" v-model="tab_personal_INIPADate" class="form__input col-sm" type="date" disabled/>-->
        <!--</label>-->
      <!--<hr>-->
          <!--<div class="form__label-text col-sm">Документ</div>-->
          <!--<input v-model="tab_personal_selectedIdentityCardCode" class="minimal col-sm" disabled>-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm">Серия:</div>-->
          <!--<input v-model="tab_personal_identityCardSeries" class="form__input col-sm" type="text" disabled/>-->
        <!--</label>-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm">Номер:</div>-->
          <!--<input v-model="tab_personal_identityCardNumber" class="form__input col-sm" type="text" disabled/>-->
        <!--</label>-->
      <!--<label class="row">-->
        <!--<div class="form__label-text col-sm">Гражданство:</div>-->
        <!--<input v-model="tab_personal_selectedCitizenship"  class="minimal col-sm" disabled>-->
      <!--</label>-->
      <!--<label class="row">-->
        <!--<div class="form__label-text col-sm">Соотечественник:</div>-->
        <!--<input v-model="tab_personal_isCompatriot" class="checkbox col-sm" type="checkbox" disabled>-->
      <!--</label>-->
      <!--<label class="row">-->
        <!--<div class="form__label-text col-sm">Приравнять к иностранцам:</div>-->
        <!--<input v-model="tab_personal_isEquatedForeign" class="checkbox col-sm" type="checkbox" disabled>-->
      <!--</label>-->
      <!--<label class="row">-->
        <!--<div class="form__label-text col-sm">Место рождения:</div>-->
        <!--<textarea v-model="tab_personal_birthplace" class="col-sm" disabled></textarea>-->
      <!--</label>-->
      <!--<label class="row">-->
        <!--<div class="form__label-text col-sm">Общежитие:</div>-->
        <!--<input v-model="tab_personal_isHostel" class="checkbox col-sm" type="checkbox" disabled>-->
      <!--</label>-->
      <!--<label class="row">-->
        <!--<div class="form__label-text col-sm">Иностранец, как гражданин РФ:</div>-->
        <!--<input v-model="tab_personal_isForeignLikeRussian" class="checkbox col-sm" type="checkbox" disabled>-->
      <!--</label>-->
        <!--<hr>-->
      <!--<div>-->
        <!--<p>Контактные данные</p>-->
      <!--</div>-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm">Мобильный телефон:</div>-->
          <!--<input v-model="tab_personal_cellularPhone" class="form__input col-sm" type="text" disabled/>-->
        <!--</label>-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm">Эл. почта:</div>-->
          <!--<input v-model="tab_personal_email" class="form__input col-sm"  type="email" disabled>-->
        <!--</label>-->
        <!--<hr>-->
        <!--<div>-->
          <!--<p>Адреса</p>-->
        <!--</div>-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm-2">Адрес по прописке:</div>-->
          <!--<textarea v-model="tab_address_registrationAddress" class="uneditable col-sm-10" name="" ></textarea>-->
        <!--</label>-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm-2">Адрес фактический:</div>-->
          <!--<textarea v-model="tab_address_factAddress" class="uneditable col-sm-10" ></textarea>-->
        <!--</label>-->
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm-2">Адрес временной регистрации:</div>-->
          <!--<textarea v-model="tab_address_templateRegistrationAddress" class="uneditable col-sm-10" ></textarea>-->
        <!--</label>-->
        <!--<hr>-->
        <!--<div>-->
          <!--<p>ЕГЭ</p>-->
        <!--</div>-->
        <!--<label class="row">-->
          <!--<input placeholder="Химия" class="form__input col-sm" type="text" disabled/>-->
          <!--<input placeholder="балл" class="form__input col-sm" type="text" disabled/>-->
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
          ...person(['person','showProfile','person_info_id','resultAcceptPerson','saved','savedResult']),
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
              console.log(this.profiles)
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
    margin-top: 30%;
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
