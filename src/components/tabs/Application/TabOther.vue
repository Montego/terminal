<template>
  <div class="clear_save_button row">
  {{this.application}}
  <button @click="onSave">Сохранить</button>
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
    export default {
        name: "Other",
        computed: {
          ...applications(['application']),
          ...tab_reception_condition([ 'file',]),
      },
      methods: {
        onSave() {

          // let formData = new FormData()
          // formData.append('application',JSON.stringify(this.application));
          // let i =0;
          // for(i ;i < this.application.application_condition.length;i++ ){
          //   formData.append('conditions', this.application.application_condition.file[i])
          //   console.log(this.application.application_condition.file[i])
          // }
          // formData.append('conditions'),this.application.application_condition.


          // AXIOS.post(`/persons`,formData)
          // AXIOS.post(`/applications`, formData)
          AXIOS.post(`/applications`, this.application)
            .then(response => {
              this.info.push(response.data)
            })
            .catch(e => {
              // this.errors.push(e)
            })
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
