<template>
<div>
  <!--<button color="#5bc0de" @click="onNewApplication()">-->
    <!--+-->
  <!--</button>-->
  <v-data-table
    :headers="headers_parent"
    :items="info_parent"
    hide-actions
    class="elevation-1 text-xs-center"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.profile_name}}</td>
      <td class="text-xs-center">{{ props.item.application_number}}</td>
      <td class="text-xs-center">{{ props.item.application_date}}</td>
      <td class="text-xs-center">{{ props.item.application_deliveryType }}</td>
      <!--<td class="text-xs-center">{{ props.item.patronymic_parent}}</td>-->
      <!--<td class="text-xs-center">{{ props.item.gender_parent}}</td>-->
      <td class="justify-center layout px-0">
        <v-btn icon class="mx-0" @click="printItem(props.item)">
          <v-icon color="#5bc0de">edit</v-icon>
        </v-btn>
        <v-btn icon class="mx-0" @click="approveItem(props.item)">
          <v-icon color="red">delete</v-icon>
        </v-btn>
        <v-btn icon class="mx-0" @click="consentsItem(props.item)">
          <v-icon color="red">delete</v-icon>
        </v-btn>
        <v-btn icon class="mx-0" @click="enrolleeItem(props.item)">
          <v-icon color="red">delete</v-icon>
        </v-btn>
      </td>
    </template>
  </v-data-table>
</div>
</template>

<script>

    export default {
        name: "TabOverviewApplication",
      data(){
          return{
            headers_parent: [
              {text: 'Абитуриент', value: 'profile_name', sortable: false, align: 'center'},
              {text: 'Номер заявления', value: 'application_number', sortable: false, align: 'center'},
              {text: 'Дата заявления', value: 'application_date', sortable: false, align: 'center'},
              {text: 'Тип доставки', value: 'application_deliveryType', sortable: false, align: 'center'},
              {text: 'Перевести на бюджет', value: 'toBudget', sortable: false, align: 'center'},
              // {text: 'Отчество', value: 'patronymic_parent', sortable: false, align: 'center'},
              // {text: 'Пол', value: 'gender_parent', sortable: false, align: 'center'},
              {text: 'Действия', value: 'actions', sortable: false, align: 'center'},
            ],
            info_parent: [],

          }
      },
      methods:{
        onNewApplication() {
          location.href='application#applicationFill';
        },
        printItem(){},
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
</style>
