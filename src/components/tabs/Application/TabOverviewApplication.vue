<template>
<div>
  <!--<button color="#5bc0de" @click="onNewApplication()">-->
    <!--+-->
  <!--</button>-->
  <button color="#5bc0de" @click="onNewApplication()">
    +
  </button>
  <v-data-table
    :headers="headers_applications"
    :items="applications"
    hide-actions
    class="elevation-1 text-xs-center"
  >

    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.tab_personal_name}}</td>
      <td class="text-xs-center">{{ props.item.application_number}}</td>
      <td class="text-xs-center">{{ props.item.application_date}}</td>
      <td class="text-xs-center">{{ props.item.application_selectedDeliveryType }}</td>
      <td class="text-xs-center">
        <input v-model="budget" class="checkbox col-sm" type="checkbox" id="budget">
      </td>
      <td class="text-xs-center">
        <input v-model="approved" class="checkbox col-sm" type="checkbox" id="approved">
      </td>
      <td class="justify-center layout px-0">
        <button class="table_buttons" @click="printItem(props.item)">
          <!--Печать-->
          <v-icon color="#5bc0de">print</v-icon>
        </button>
        <button class="table_buttons" @click="redactionItem(props.item)">
          <v-icon color="#5bc0de">edit</v-icon>
        </button>
        <button class="table_buttons" @click="deleteItem(props.item)">
          <v-icon color="red">delete</v-icon>
        </button>
        <!--<button @click="deleteItem(props.item)">-->
          <!--Удалить-->
        <!--</button>-->


        <!--<v-btn icon class="mx-0" @click="approveItem(props.item)">-->
          <!--<v-icon color="red">delete</v-icon>-->
        <!--</v-btn>-->
        <!--<v-btn icon class="mx-0" @click="consentsItem(props.item)">-->
          <!--<v-icon color="red">delete</v-icon>-->
        <!--</v-btn>-->
        <!--<v-btn icon class="mx-0" @click="enrolleeItem(props.item)">-->
          <!--<v-icon color="red">delete</v-icon>-->
        <!--</v-btn>-->
      </td>
    </template>
  </v-data-table>
</div>
</template>

<script>
  import {AXIOS} from "../../plugins/APIService";
  import { createHelpers } from 'vuex-map-fields';
  import {mapGetters, mapState} from 'vuex'

  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
    export default {
        name: "TabOverviewApplication",
      data(){
          return{
            budget: false,
            approved: false,
            headers_applications: [
              {text: 'Абитуриент', value: 'tab_personal_name', sortable: false, align: 'center'},
              {text: 'Номер заявления', value: 'application_number', sortable: false, align: 'center'},
              {text: 'Дата заявления', value: 'application_date', sortable: false, align: 'center'},
              {text: 'Тип доставки', value: 'application_selectedDeliveryType', sortable: false, align: 'center'},
              {text: 'Перевести на бюджет', value: 'budget', sortable: false, align: 'center'},
              {text: 'Утвердить', value: 'approved', sortable: false, align: 'center'},
              // {text: 'Отчество', value: 'patronymic_parent', sortable: false, align: 'center'},
              // {text: 'Пол', value: 'gender_parent', sortable: false, align: 'center'},
              {text: 'Действия', value: 'actions', sortable: false, align: 'center'},
            ],
            applications: [],

          }
      },
      computed:{
        ...person(['person']),
      },
      created () {
        AXIOS.get(`/profile/applicationsTable`)
          .then(response => {
            this.applications = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      methods:{
        onNewApplication() {
          this.person.application_number = null;
          this.person.application_date = null;
          this.person.application_selectedDeliveryType = null;
          this.person.application_selectedDocType = null;
          this.person.application_condition = [];
          this.person.application_documents = [];

          location.href='profile#applicationFill';
        },
        printItem(){},

        redactionItem(item) {
          const index = this.applications.indexOf(item);

          const idString = this.applications[index].id;
          const id = parseInt(idString,10);
          AXIOS.get(`/profile/person/` + id)
            .then(response => {
              this.person = response.data
            })
            .catch(e => {
              this.errors.push(e)
            })

          location.href='profile#applicationFill';
        },
        deleteItem() {},
        approveItem(){},
        consentsItem(){},
        enrolleeItem(){}
      }
    }
</script>

<style scoped>
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

  button.table_buttons {
    min-width: 20px;
  }
  input.checkbox {
    height: 15px;
    transform: scale(1.3);
    opacity: 0.9;
    cursor: pointer;
  }
</style>
