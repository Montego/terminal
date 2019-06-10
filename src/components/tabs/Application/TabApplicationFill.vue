<template>
  <div class="inside_tab">
    <div>
      <p>Вступительные испытания</p>
    </div>
    <hr>

    <div class="row">
      <div class="col-sm-4">
        <label class="row">
          <div class="form__label-text col-sm">Номер заявления:</div>
          <input  class="form__input col-sm" type="text" name=""  />
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Дата заявления:</div>
          <input  class="form__input col-sm" type="date" name=""  />
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Тип доставки:</div>
          <select  class="minimal col-sm">
            <option v-for="option in options_deliveryType">
              {{option.item}}
            </option>
          </select>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Перевести на бюджет:</div>
          <input class="checkbox col-sm" type="checkbox" id="budget">
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Документ об образовании:</div>
          <select  class="minimal col-sm">
            <option v-for="option in options_copy">
              {{option.item}}
            </option>
          </select>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Абитуриент:</div>
          <input  class="form__input col-sm" type="text" name=""  />
        </label>
    </div>
    </div>
    <div class="clear_save_button row">
      <button @click="onNext">Далее ->></button>
      <!--<button @click="onAddParent">Добавить</button>-->
      <!--<button @click="onSaveParent">Сохранить изм-я</button>-->
    </div>
  </div>
</template>

<script>
  import { createHelpers } from 'vuex-map-fields';
  const { mapMultiRowFields } = createHelpers({
    getterType: `tab_evidence_ege_info/getField`,
    mutationType: `tab_evidence_ege_info/updateField`,
  });
  const { mapFields:tab_entrance_tests } = createHelpers({
    getterType: `tab_entrance_tests/getField`,
    mutationType: `tab_entrance_tests/updateField`,
  });
  const {  mapFields:tab_evidence_ege_info } = createHelpers({
    getterType: `tab_evidence_ege_info/getField`,
    mutationType: `tab_evidence_ege_info/updateField`,
  });
  export default {
    name: "TabEntranceTests",
    computed: {
      ...tab_entrance_tests(['tab_entrance_test_score1', 'tab_entrance_test_score2', 'tab_entrance_test_score3',
        'tab_entrance_test_subject1', 'tab_entrance_test_subject2', 'tab_entrance_test_subject3',
      ]),
      ...tab_evidence_ege_info(['tab_ege_score','tab_ege_score1','tab_ege_score2','tab_ege_score3',
        'tab_ege_selectedSubject','tab_ege_selectedSubject2','tab_ege_selectedSubject3'
      ]),
      ...mapMultiRowFields(['ege_info']),


    },

    data(){
      return{
        options_deliveryType: [
          {id: 1, item: 'Лично'},
          {id: 2, item: 'Почтой'},
          {id: 3, item: 'По доверенности'},
          {id: 4, item: 'Портал'},
        ],
        options_copy: [
          {id: 1, item: 'Копия'},
          {id: 2, item: 'Оригинал'},
        ],
      }
    },
    methods: {
      onNext() {
        location.href='application#receptrionCondition';
      },
    },
  }
</script>

<style scoped>
  .clear_save_button {
    margin-top: 10%;
    /*margin-left: 65%;*/
    display: flex;
    justify-content: flex-end;
  }

  .uneditable {
    background-color: lightgrey;
  }

  select.minimal {
    background-image:
      linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
  }

  select.minimal:focus {
    background-image:
      linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 15px) 1em,
      calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
  }

  .button_add {
    min-width: 100px;
    min-height: 40px;
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
  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
    /*border: 4px;*/
  }

  input.checkbox {
    height: 15px;
    transform: scale(1.3);
    opacity: 0.9;
    cursor: pointer;
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

  p {
    font-size: 25px;
    margin-bottom: 0px;
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

  .search_place p {
    margin-right: 10px;
  }

  .search_form div {
    font-size: 20px;
  }

  .search_form input {
    width: 500px;
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
  label.row {
    margin-bottom: 3px;
  }

  .alarm_label {
    /*text-align: left;*/
    color: red;
  }
</style>
