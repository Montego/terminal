<template>
  <v-data-table data-app
    :headers="headers_all_pretendents"
    :items="info_all_pretendents"
                hide-actions
    class="elevation-1 text-xs-center"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.snp_pretendent }}</td>
      <td class="text-xs-center">{{ props.item.surname_pretendent }}</td>
      <td class="text-xs-center">{{ props.item.name_pretendent}}</td>
      <td class="text-xs-center">{{ props.item.patronymic_pretendent}}</td>
      <td class="text-xs-center">{{ props.item.gender_pretendent}}</td>
      <td class="text-xs-center">{{ props.item.birthday_pretendent}}</td>
      <td class="text-xs-center">{{ props.item.contact_code_pretendent}}</td>
      <td class="justify-center layout px-0">
        <v-btn icon class="mx-0" >
          <v-icon color="#5bc0de">edit</v-icon>
        </v-btn>
        <v-btn icon class="mx-0" >
          <v-icon color="red">delete</v-icon>
        </v-btn>
      </td>
    </template>
  </v-data-table>
</template>

<script>
    export default {
        name: "TabOverview",
      data () {
        return {

          headers_all_pretendents: [
            { text: 'Ф.И.О.', value: 'snp_pretendent', sortable: false, align: 'center' },
            { text: 'Фамилия', value: 'surname_pretendent',sortable: false, align: 'center' },
            { text: 'Имя', value: 'name_pretendent',sortable: false, align: 'center' },
            { text: 'Отчество', value: 'patronymic_pretendent',sortable: false, align: 'center' },
            { text: 'Пол', value: 'gender_pretendent',sortable: false, align: 'center' },
            { text: 'Дата рождения', value: 'birthday_pretendent',sortable: false, align: 'center' },
            { text: 'Код контактного лица', value: 'contact_code_pretendent',sortable: false, align: 'center' },
            { text: 'Действия', value: 'name', sortable: false, align: 'center' }
          ],
          info_all_pretendents: []
        }
      }
    }
</script>

<style scoped>
  label.row {
    margin-bottom: 3px;
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
    ackground-color: red;
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
    margin-top: 75%;
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
