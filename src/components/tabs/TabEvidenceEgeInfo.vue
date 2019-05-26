<template>
  <div>
    <tabs class="ege_tabs">
      <tab id="" name="Обзор">
        <!--<tab id="" name="Свидетельства ЕГЭ">-->
        <div class="row">
          <button>Добавить</button>
        </div>
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
                <input class="form__input col-sm-6" type="text" name="" placeholder="Заполняется автоматически"
                       disabled="disabled"/>
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
              <div class="form__label-text col-sm">Предмет(1):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Балл(1):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Балл (ФИС)(1):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Статус апелляции (1):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <hr>
            <label class="row">
              <div class="form__label-text col-sm">Предмет(2):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Балл(2):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Балл (ФИС)(2):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Статус апелляции (2):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <hr>
            <label class="row">
              <div class="form__label-text col-sm">Предмет(3):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Балл(3):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Балл (ФИС)(3):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Статус апелляции (3):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <hr>
          </div>
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
  export default {
    name: "TabEvidenceEge",
    data() {
      return {

        headers_ege_evidence: [
          {text: '№', value: 'ege_evidence_number', sortable: false, align: 'center'},
          {text: 'Дата выдачи', value: 'ege_evidence_date', sortable: false, align: 'center'},
          {text: 'Типограф.а №', value: 'ege_evidence_t_number', sortable: false, align: 'center'},
          {text: 'Сумма баллов', value: 'ege_evidence_score', sortable: false, align: 'center'},
          {text: 'Коп/ориг.', value: 'ege_evidence_copy_origin', sortable: false, align: 'center'},
          {text: 'Предоставлено', value: 'ege_evidence_date_show', sortable: false, align: 'center'},
          {text: 'Форма ЕГЭ', value: 'ege_evidence_form_ege', sortable: false, align: 'center'},
          {text: 'Место проведения', value: 'ege_evidence_place_ege', sortable: false, align: 'center'},
          {text: 'Год', value: 'ege_evidence_year_ege', sortable: false, align: 'center'},
          {text: 'Статус', value: 'ege_evidence_date_status', sortable: false, align: 'center'}

        ],
        info_ege_evidence: [],

        headers_ege_subjects: [
          {text: 'Предмет', value: 'ege_subject_name', sortable: false, align: 'center'},
          {text: 'Балл', value: 'ege_ball_1', sortable: false, align: 'center'},
          {text: 'Балл(ФИС)', value: 'ege_ball_2', sortable: false, align: 'center'},
          {text: 'Статус апелляция', value: 'ege_appeal_status', sortable: false, align: 'center'},
        ],
        info_ege_subjects: [],
      }
    }
  }
</script>

<style scoped>

  p {
    font-size: 25px;
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

  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
    /*border: 4px;*/
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
    width: 90%;
    height: 100px;
    resize: none;
  }

  .search_place p {
    margin-right: 10px;
  }

  .search_form div {
    font-size: 20px;
  }

  .search_form input {
    width: 500px;
  }

  .copy_address {
    margin-left: -290px;
  }

  .ege_tabs {
    margin-top: -35px;
  }

  .inner_tab {
    margin-top: -40px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }

  .row {
    margin-bottom: 8px;
  }

  .form__label-text {
    text-align: left;
  }

</style>
