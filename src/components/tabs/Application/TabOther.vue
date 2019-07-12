<template>
  <div>
    {{this.application}}
    ///////////////////////
    {{this.person}}
    <div class="clear_save_button row">
      <button @click="onAcceptPerson">Утвердить</button>
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
