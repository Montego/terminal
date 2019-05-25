<template>
    <div>
      <tabs class="ege_tabs">
        <tab id="" name="Обзор">
        <!--<tab id="" name="Свидетельства ЕГЭ">-->
          <div class="row">
            <div class="col-sm">

              <v-data-table
              :headers="headers_ege_subjects"
              :items="info_ege_subjects"
              class="elevation-1 text-xs-center"
              hide-actions
              >
              <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.ege_subject_name}}</td>
              <td class="text-xs-center">{{ props.item.ege_ball_1}}</td>
              <td class="text-xs-center">{{ props.item.ege_ball_2}}</td>
              <td class="text-xs-center">{{ props.item.ege_appeal_status}}</td>
              </template>
              </v-data-table>


              <!--<div>-->
                <!--<p>Свидетельство</p>-->
              <!--</div>-->
              <!--<v-data-table-->
                <!--:headers="headers_ege_evidence"-->
                <!--:items="info_ege_evidence"-->
                <!--class="elevation-1 text-xs-center"-->
              <!--&gt;-->
                <!--<template slot="items" slot-scope="props">-->
                  <!--<td class="text-xs-center">{{ props.item.ege_evidence_number}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_evidence_date}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_evidence_t_number}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_evidence_score}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_evidence_copy_origin}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_evidence_date_show}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_evidence_form_ege}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_evidence_place_ege}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_evidence_year_ege}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_evidence_date_status}}</td>-->
                <!--</template>-->
              <!--</v-data-table>-->
              <!--<hr>-->
              <!--<div>-->
                <!--<p>Предметы</p>-->
              <!--</div>-->
              <!--<v-data-table-->
                <!--:headers="headers_ege_subjects"-->
                <!--:items="info_ege_subjects"-->
                <!--class="elevation-1 text-xs-center"-->
              <!--&gt;-->
                <!--<template slot="items" slot-scope="props">-->
                  <!--<td class="text-xs-center">{{ props.item.ege_subject_name}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_ball_1}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_ball_2}}</td>-->
                  <!--<td class="text-xs-center">{{ props.item.ege_appeal_status}}</td>-->
                <!--</template>-->
              <!--</v-data-table>-->
            </div>
          </div>

        </tab>
        <tab id="" name="Данные для свидетельства">
          <div class="inner_tab row">

            <div class="col-sm">
              <div>
                <p>Паспортные данные</p>
              </div>
              <hr>
              <div>
                <label class="row">
                  <div class="form__label-text col-sm">Фамилия:</div>
                  <input class="form__input col-sm" type="text" name="" placeholder=""/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Имя:</div>
                  <input class="form__input col-sm" type="text" name="" placeholder=""/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Отчество:</div>
                  <input class="form__input col-sm" type="text" name="" placeholder=""/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Документ</div>
                  <select class="col-sm-4" name="">
                    <option>Паспорт РФ</option>
                    <option>Не паспорт РФ</option>
                  </select>
                  <input class="form__input col-sm-6" type="text" name="" placeholder="Заполняется автоматически" disabled="disabled"/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Серия:</div>
                  <input class="form__input col-sm" type="text" name="" placeholder=""/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Номер:</div>
                  <input class="form__input col-sm" type="text" name="" placeholder=""/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Дата выдачи:</div>
                  <input class="form__input col-sm" type="date" name="" placeholder=""/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm-2">Кем выдан:</div>
                  <textarea class="col-sm-10" name=""></textarea>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Гражданство</div>
                  <select class="col-sm" name="">
                    <option>РФ</option>
                    <option>Казахстан</option>
                  </select>
                </label>
                    <button class="copy_address col-sm-6">Копировать из личных сведений</button>
              </div>
            </div>

            <div class="col-sm">
              <div>
                <p>Свидетельство</p>
              </div>
              <hr>
              <label class="row">
                <div class="form__label-text col-sm">№ свидетельства:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Дата выдачи:</div>
                <input class="form__input col-sm" type="date" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Типографский №:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Сумма баллов:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Копия/оригинал:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Предоставлено:</div>
                <input class="form__input col-sm" type="date" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Форма ЕГЭ:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Место проведения:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Год:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Статус:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
            </div>

            <div class="col-sm">
              <div>
                <p>Предметы</p>
              </div>
              <hr>
              <label class="row">
                <div class="form__label-text col-sm">Предмет:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Балл:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Балл (ФИС):</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Статус апелляции:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
            </div>
          </div>
        </tab>
      </tabs>
    </div>
</template>

<script>
    export default {
        name: "TabEvidenceEge",
      data () {
        return {

          headers_ege_evidence: [
            { text: '№', value: 'ege_evidence_number', sortable: false, align: 'center' },
            { text: 'Дата выдачи', value: 'ege_evidence_date',sortable: false, align: 'center' },
            { text: 'Типограф.а №', value: 'ege_evidence_t_number',sortable: false, align: 'center' },
            { text: 'Сумма баллов', value: 'ege_evidence_score',sortable: false, align: 'center' },
            { text: 'Коп/ориг.', value: 'ege_evidence_copy_origin',sortable: false, align: 'center' },
            { text: 'Предоставлено', value: 'ege_evidence_date_show', sortable: false,align: 'center' },
            { text: 'Форма ЕГЭ', value: 'ege_evidence_form_ege',sortable: false, align: 'center' },
            { text: 'Место проведения', value: 'ege_evidence_place_ege',sortable: false, align: 'center' },
            { text: 'Год', value: 'ege_evidence_year_ege',sortable: false, align: 'center' },
            { text: 'Статус', value: 'ege_evidence_date_status',sortable: false, align: 'center' }

          ],
          info_ege_evidence: [],

          headers_ege_subjects: [
            { text: 'Предмет', value: 'ege_subject_name', sortable: false, align: 'center' },
            { text: 'Балл', value: 'ege_ball_1',sortable: false, align: 'center' },
            { text: 'Балл(ФИС)', value: 'ege_ball_2',sortable: false, align: 'center' },
            { text: 'Статус апелляция', value: 'ege_appeal_status',sortable: false, align: 'center' },
          ],
          info_ege_subjects: [],
        }
      }
    }
</script>

<style scoped>

  .copy_address {
    margin-left: -290px;
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
