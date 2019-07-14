<template>
  <div>

    <div class="row">

      <!--<div class="col-sm-3">-->
        <!--<div class="row">-->
          <!--<div class=" form__label-text col-sm-4">Ф.И.О</div>-->
          <!--<input :value="tab_personal_lastname + ' ' + tab_personal_firstname+ ' '+ tab_personal_middlename" class="uneditable form__input col-sm-8" type="text" name="name"-->
                 <!--placeholder="Заполняется автоматически" disabled="disabled"/>-->
        <!--</div>-->
        <!--<div class="row">-->
          <!--<div class="form__label-text col-sm-4">Ф.И.О.(род. п.)</div>-->
          <!--<input :value="tab_personal_lastname_genitive + ' ' + tab_personal_firstname_genitive+ ' '+ tab_personal_middlename_genitive" class="uneditable form__input col-sm-8" type="text" name="snp_genitive"-->
                 <!--placeholder="Заполняется автоматически" disabled="disabled"/>-->
        <!--</div>-->

        <!--<div class="row">-->
          <!--<div class="form__label-text col-sm">Пол:</div>-->
          <!--<input v-model="tab_personal_selectedGender" class="minimal col-sm" disabled>-->
        <!--</div>-->

        <!--<div class="row">-->
          <!--<div class="form__label-text col-sm">Дата рождения:</div>-->
          <!--<input v-model="tab_personal_birthDate" class="col-sm" disabled/>-->
        <!--</div>-->

        <!--<div class="row">-->
          <!--<div class="form__label-text col-sm">Полных лет:</div>-->
          <!--<input v-model="fullage" class="form__input col-sm" type="text" name="age" disabled/>-->
        <!--</div>-->
        <!--<div class="row">-->
          <!--<div class="form__label-text col-sm">СНИЛС</div>-->
          <!--<input  v-model="tab_personal_INIPA" class="form__input col-sm" disabled/>-->
        <!--</div>-->
        <!--&lt;!&ndash;<span class="alarm_label">{{ errors.first('snils') }}</span>&ndash;&gt;-->
        <!--<div class="row">-->
          <!--<div class="form__label-text col-sm">СНИЛС Дата:</div>-->
          <!--<input  v-model="tab_personal_INIPADate" class="form__input col-sm" type="date" disabled/>-->
        <!--</div>-->
      <!--</div>-->
      <div class="col-sm-3">d</div>
      <div class="col-sm-3">d</div>
      <div class="col-sm-3">d</div>
    </div>
    <!--{{this.application}}-->

    <!--{{this.person}}-->
    <div class="clear_save_button row">
      <button v-if="this.resultAcceptPerson !=='Утверждено'" @click="onAcceptPerson">Утвердить</button>
      <!--{{this.application}}-->
      <button v-if="this.resultAcceptPerson === 'Утверждено'" @click="onSave">Сохранить</button>
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
          ...applications(['application']),
          ...tab_reception_condition([ 'file',]),
          ...person(['person','showProfile','person_info_id','resultAcceptPerson']),
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
              //что-то делать
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
          // this.person.applications.push(this.application);
          // AXIOS.post(`/profile`,(this.person))

          AXIOS.post(`/profile/application/` + this.person_info_id,(this.application))
            .then(response => {
              this.info.push(response.data)
            })
            .catch(e => {

            });
          // AXIOS.post(`/profile/application`,(this.application))
          //   .then(response => {
          //     this.info.push(response.data)
          //   })
          //   .catch(e => {
          //     this.errors.push(e)
          //   });
          this.showProfile = true;

          location.href='profile#overview_personal_info';
          // AXIOS.post(`/applications`, this.application)
          //   .then(response => {
          //     this.info.push(response.data)
          //   })
          //   .catch(e => {
          //     // this.errors.push(e)
          //   })
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
