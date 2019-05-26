<template>
    <div>
      <!--<tabs class="parent_tabs">-->
        <!--<tab id="" name="Обзор">-->
          <!--<div class="row">-->
            <!--<button>Добавить</button>-->
          <!--</div>-->
          <!--<v-data-table-->
            <!--:headers="headers_features_info"-->
            <!--:items="info_features_info"-->
            <!--hide-actions-->
            <!--class="elevation-1 text-xs-center"-->
            <!--&gt;-->
            <!--<template slot="items" slot-scope="props">-->
            <!--<td class="text-xs-center">{{ props.item.code }}</td>-->
            <!--<td class="text-xs-center">{{ props.item.type_sygn }}</td>-->
            <!--<td class="text-xs-center">{{ props.item.name }}</td>-->
            <!--<td class="text-xs-center">{{ props.item.type_diplom }}</td>-->
            <!--<td class="text-xs-center">{{ props.item.ball_1}}</td>-->
            <!--<td class="text-xs-center">{{ props.item.done }}</td>-->
            <!--<td class="text-xs-center">{{ props.item.ball_2}}</td>-->
            <!--</template>-->

            <!--</v-data-table>-->
        <!--</tab>-->
        <!--<tab id="" name="Отличительные признаки">-->
          <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
            <!--&lt;!&ndash;<button>Добавить</button>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</tab>-->
      <!--</tabs>-->

      <div>
        <p>Отличительные признаки</p>
      </div>
      <div class="row">
        <button>Добавить</button>
      </div>
      <div class="">
        <div class="distinctive_features_top">
          <v-hover :disabled="true">
            <v-data-table
              :headers="headers_features_info"
              :items="info_features_info"
              hide-actions
              class="elevation-1 text-xs-center"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.item.code }}</td>
                <td class="text-xs-center">{{ props.item.type_sygn }}</td>
                <td class="text-xs-center">{{ props.item.name }}</td>
                <td class="text-xs-center">{{ props.item.type_diplom }}</td>
                <td class="text-xs-center">{{ props.item.ball_1}}</td>
                <td class="text-xs-center">{{ props.item.done }}</td>
                <td class="text-xs-center">{{ props.item.ball_2}}</td>
              </template>

            </v-data-table>
          </v-hover>
          <div class="distinctive_features_bottom">
            <div>
              <p>Прикрепленные документы</p>
            </div>
            <div class="row">
              <button>Добавить</button>
            </div>
            <div class="row">
              <button>Редактировать</button>
            </div>
            <v-data-table
              :headers="headers_features_documents"
              :items="info_features_documents"
              hide-actions
              class="elevation-1 text-xs-center"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.item.num }}</td>
                <td class="text-xs-center">{{ props.item.documents }}</td>
                <td class="text-xs-center">{{ props.item.copy_or_origin }}</td>

              </template>
            </v-data-table>
          </div>
        </div>
      </div>



    </div>
</template>

<script>
    export default {
        name: "TabDistinctiveFeaturesInfo",
      data () {
        return {
          headers_features_info: [
            { text: 'Код', value: 'code', sortable: false, align: 'center' },
            { text: 'Тип признака', value: 'type_sygn',sortable: false, align: 'center' },
            { text: 'Название', value: 'name',sortable: false, align: 'center' },
            { text: 'Тип диплома', value: 'type_diplom', sortable: false,align: 'center' },
            { text: 'Балл ИД', value: 'ball_1', sortable: false, align: 'center' },
            { text: 'Выполнено', value: 'done', sortable: false, align: 'center' },
            { text: 'Балл экс.в ФИС.', value: 'ball_2',sortable: false, align: 'center' },
          ],
          info_features_info: [],

          headers_features_documents: [
            { text: '№', value: 'num', sortable: false, align: 'center' },
            { text: 'Документ', value: 'documents',sortable: false, align: 'center' },
            { text: 'Копия(Оригинал)', value: 'copy_or_origin',sortable: false, align: 'center' },
          ],
          info_features_documents: [],
        }
      }
    }
</script>

<style scoped>
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
