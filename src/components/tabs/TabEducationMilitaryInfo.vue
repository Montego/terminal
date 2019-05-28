<template>
  <div class="inner_tab row">
    <div class="col-sm">
      <div>
        <p>Образование</p>
      </div>
      <hr>
      <div>
        <label class="row">
          <div class="form__label-text col-sm">Уровень образования:</div>
          <select class="col-sm-2" name="">
            <option>код 1</option>
            <option>код 2</option>
            <option>код 3</option>
          </select>
          <input class="form__input col-sm-6" type="text" name="" placeholder="Заполняется автоматически"
                 disabled="disabled"/>
        </label>
      </div>
      <div>
        <p>Учебное заведение</p>
      </div>
      <hr>
      <div>
        <label class="row">
          <div class="form__label-text col-sm">Наименование:</div>
          <textarea class="col-sm" name=""></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Страна:</div>
          <select class="col-sm" name="">
            <option>РФ</option>
            <option>Другая страна 1</option>
            <option>Другая страна 2</option>
          </select>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Регион:</div>
          <select class="col-sm" name="">
            <option>Адыгея</option>
            <option>Другой регион 1</option>
            <option>Другой регион 2</option>
          </select>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Дата окончания:</div>
          <select class="col-sm" name="">
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
          </select>
        </label>
      </div>
      <div>
        <p>Документ об образовании</p>
      </div>
      <hr>
      <div>
        <label class="row">
          <div class="form__label-text col-sm">Документ об образовании:</div>
          <select class="col-sm-2" name="">
            <option>код 1</option>
            <option>код 2</option>
            <option>код 3</option>
          </select>
          <input class="form__input col-sm" type="text" name="" placeholder="Заполняется автоматически"
                 disabled="disabled"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Серия:</div>
          <input class="form__input col-sm" type="number" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Номер:</div>
          <input class="form__input col-sm" type="number" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Дата выдачи:</div>
          <input class="form__input col-sm" type="date" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Наименование:</div>
          <textarea class="col-sm" name=""></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Серия приложения:</div>
          <input class="form__input col-sm" type="number" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Номер приложения:</div>
          <input class="form__input col-sm" type="number" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Средний балл:</div>
          <input class="form__input col-sm" type="text" name="" placeholder="Заполняется автоматически"
                 disabled="disabled"/>
          <button class="calculate_score">Расчет среднего балла</button>
        </label>
      </div>
    </div>
    <div class="col-sm">
      <div>
        <p>Военная служба</p>
      </div>
      <hr>
      <div>
        <label class="row">
          <div class="form__label-text col-sm">Отношение к военной службе:</div>
          <select class="col-sm" name="">
            <option>Невоеннообязанный</option>
            <option>Военнообязанный</option>
            <option>Другое</option>
          </select>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Прохождение службы:</div>
          <select class="col-sm" name="">
            <option>Служил</option>
            <option>Не служил</option>
            <option>Другое</option>
          </select>
        </label>
      </div>
      <div>
        <p>Документ о военной службе</p>
      </div>
      <hr>
      <div>
        <label class="row">
          <div class="form__label-text col-sm">Тип документа:</div>
          <select class="col-sm" name="">
            <option>Не определено</option>
            <option>вариант 2</option>
            <option>Другое</option>
          </select>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Номер военного билета:</div>
          <input class="form__input col-sm" type="number" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Серия:</div>
          <input class="form__input col-sm" type="number" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Дата выдачи:</div>
          <input class="form__input col-sm" type="date" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Кем выдан:</div>
          <textarea class="col-sm" name=""></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Воинское звание:</div>
          <input class="form__input col-sm" type="text" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Копия/Оригинал:</div>
          <select class="col-sm" name="">
            <option>Оригинал</option>
            <option>Копия</option>
          </select>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Дата предоставления:</div>
          <input class="form__input col-sm" type="date" name="" placeholder=""/>
        </label>
      </div>
      <div>
        <p>Документ о военной службе</p>
      </div>
      <hr>
      <div>
        <label class="row">
          <div class="form__label-text col-sm">Дата начала:</div>
          <input class="form__input col-sm" type="date" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Дата окончания:</div>
          <input class="form__input col-sm" type="date" name="" placeholder=""/>
        </label>
      </div>
      <div>
        <p>Дополнительные сведения</p>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'

  export default {
    name: "TabEducationMilitary",
    computed: {
      ...mapState('tab_education_military_info', ['eduLevel', 'addressCountryRegion', 'addressState', 'academyYear', 'eduDoc',
        'soldiery', 'soldieryStatus', 'militaryFormDoc', 'docType',]),
      ...mapGetters('tab_education_military_info', ['GET_EDU_LEVEL', 'GET_ADDRESS_COUNTRY_REGION', 'GET_ADDRESS_STATE', 'GET_ACADEMY_YEAR',
        'GET_EDU_DOC', 'GET_SOLDIERY', 'GET_SOLDIERY_STATUS', 'GET_MILITARY_FORM_DOC', 'GET_DOC_TYPE',]),

      eduLevel() {
        return this.$store.getters.GET_EDU_LEVEL;
      },
      addressCountryRegion() {
        return this.$store.getters.GET_ADDRESS_COUNTRY_REGION;
      },
      addressState() {
        return this.$store.getters.GET_ADDRESS_STATE;
      },
      academyYear() {
        return this.$store.getters.GET_ACADEMY_YEAR;
      },
      eduDoc() {
        return this.$store.getters.GET_EDU_DOC;
      },
      soldiery() {
        return this.$store.getters.GET_SOLDIERY;
      },
      soldieryStatus() {
        return this.$store.getters.GET_SOLDIERY_STATUS;
      },
      militaryFormDoc() {
        return this.$store.getters.GET_MILITARY_FORM_DOC;
      },
      docType() {
        return this.$store.getters.GET_DOC_TYPE;
      },

    },
    mounted() {
      this.$store.dispatch('tab_education_military_info/onLoadEduLevel');
      this.$store.dispatch('tab_education_military_info/onLoadAddressCountryRegion');
      this.$store.dispatch('tab_education_military_info/onLoadAddressState');
      this.$store.dispatch('tab_education_military_info/onLoadAcademyYear');
      this.$store.dispatch('tab_education_military_info/onLoadEduDoc');
      this.$store.dispatch('tab_education_military_info/onLoadSoldiery');
      this.$store.dispatch('tab_education_military_info/onLoadSoldieryStatus');
      this.$store.dispatch('tab_education_military_info/onLoadMilitaryFormDoc');
      this.$store.dispatch('tab_education_military_info/onLoadDocType');

    },
    data() {
      return {
        //TODO поля
      }
    }
  }
</script>

<style scoped>
  label.row {
    margin-bottom: 3px;
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

  .calculate_score {
    margin-top: -8px;
  }

  .row {
    margin-bottom: 8px;
  }

  .form__label-text {
    text-align: left;
  }


</style>
