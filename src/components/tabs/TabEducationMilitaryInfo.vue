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

          <select v-model="tab_edu_military_educationLevel" class="col-sm">
            <option v-for="option in options_educationLevel">
              {{option.item}}
            </option>
          </select>

          <input v-model="tab_edu_military_educationLevel" class="form__input col-sm-6" type="text" name="" placeholder="Заполняется автоматически"
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
          <select v-model="tab_edu_military_selectedEduDoc" class="col-sm-6">
            <option class="col-sm-6" v-for="option in options_eduDoc">
              {{option.item}}
            </option>
          </select>

          <input v-model="tab_edu_military_selectedEduDoc" class="form__input col-sm-8" type="text" name="" placeholder="Заполняется автоматически"
                 disabled="disabled"/>
        </label>
        <span class="alarm_label" v-if="tab_edu_military_selectedEduDoc===''">Не выбран документ об образовании</span>
        <label class="row">
          <div class="form__label-text col-sm">Серия:</div>
          <input v-model="tab_edu_military_eduDocSerial" class="form__input col-sm" type="text" name="" placeholder=""/>
        </label>
        <span class="alarm_label" v-if="tab_edu_military_eduDocSerial===''">Не заполнено поле "Серия"</span>
        <label class="row">
          <div class="form__label-text col-sm">Номер:</div>
          <input v-model="tab_edu_military_eduDocNumber" class="form__input col-sm" type="text" name="" placeholder=""/>
        </label>
        <span class="alarm_label" v-if="tab_edu_military_eduDocNumber===''">Не заполнено поле "Номер"</span>
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
          <input class="form__input col-sm" type="text" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Номер приложения:</div>
          <input class="form__input col-sm" type="text" name="" placeholder=""/>
        </label>

        <label class="row">
          <div class="form__label-text col-sm-6">Средний балл:</div>
          <button class="calculate_score col-sm-4" @click="onCalculateScore">Расчет среднего балла</button>
          <input v-model="score_full" class="form__input col-sm-2 " type="text" v-mask="'#.##'" placeholder="---"
                 disabled="disabled"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm-2">Химия:</div>
          <input v-model="score_chemistry" class="form__input col-sm-1" type="text" v-mask="'#'"/>
          <div class="form__label-text col-sm-2">Биология:</div>
          <input v-model="score_biology" class="form__input col-sm-1" type="text" v-mask="'#'"/>
          <div class="form__label-text col-sm-2">Русский язык:</div>
          <input v-model="score_russian" class="form__input col-sm-1" type="text" v-mask="'#'"/>
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
          <select v-model="tab_edu_military_selectedSoldiery" class="col-sm">
            <option v-for="option in options_soldiery">
              {{option.item}}
            </option>
          </select>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Прохождение службы:</div>
          <select v-if="tab_edu_military_selectedSoldiery=='Военнообязанный'" v-model="tab_edu_military_selectedSoldieryStatus" class="col-sm">
            <option v-for="option in options_soldieryStatus">
              {{option.item}}
            </option>
          </select>
          <input v-else class="form__input col-sm" type="text" name="" placeholder="Не заполняется"
                 disabled="disabled"/>
        </label>
      </div>
      <div v-if="tab_edu_military_selectedSoldieryStatus=='Служил' || tab_edu_military_selectedSoldiery=='Военнообязанный'  ">
      <div>
        <p>Документ о военной службе</p>
      </div>
      <hr>
      <div>
        <label class="row">
          <div class="form__label-text col-sm">Тип документа:</div>
          <select v-model="tab_edu_military_selectedMilitaryFormDoc" class="col-sm">
            <option v-for="option in options_militaryFormDoc">
              {{option.item}}
            </option>
          </select>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Номер военного билета:</div>
          <input v-model="tab_edu_military_militaryNumber" class="form__input col-sm" type="number" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Серия:</div>
          <input v-model="tab_edu_military_militarySeries" class="form__input col-sm" type="number" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Дата выдачи:</div>
          <input v-model="tab_edu_military_militaryIssueDate" class="form__input col-sm" type="date" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Кем выдан:</div>
          <textarea v-model="tab_edu_military_militaryIssueBy" class="col-sm" name=""></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Воинское звание:</div>
          <input v-model="tab_edu_military_militaryRank" class="form__input col-sm" type="text" name="" placeholder=""/>
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
        <p>Срок службы</p>
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
      </div>
      <div>
        <p>Дополнительные сведения</p>
      </div>
      <hr>
      <label class="row">
        <select v-model="tab_edu_military_selectedMilitaryFormDoc" class="col-sm">
          <option v-for="option in options_militaryFormDoc">
            {{option.item}}
          </option>
        </select>
        <input class="form__input col-sm" type="text" name="" placeholder="Описание"/>
        <button class="col-sm-12">Добавить</button>
      </label>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import { createHelpers } from 'vuex-map-fields';
  const { mapFields:tab_education_military_info } = createHelpers({
    getterType: `tab_education_military_info/getField`,
    mutationType: `tab_education_military_info/updateField`,
  });
  export default {
    name: "TabEducationMilitary",
    computed: {
      ...tab_education_military_info(['tab_edu_military_militaryNumber', 'tab_edu_military_militarySeries',
        'tab_edu_military_militaryIssueBy', 'tab_edu_military_militaryIssueDate', 'tab_edu_military_militaryRank',
        'tab_edu_military_soldieryBegDate', 'tab_edu_military_soldieryEndDate', 'tab_personal_identityCardIssueBy',
        'tab_edu_military_eduDocSerial', 'tab_edu_military_eduDocNumber', 'tab_edu_military_selectedEduDoc',
        'tab_edu_military_educationLevel', 'tab_edu_military_selectedSoldiery', 'tab_edu_military_selectedSoldieryStatus',
        'tab_edu_military_selectedMilitaryFormDoc',
      ]),
      // ...mapState('enums'['educationLevel','soldieryStatus','militaryFormDoc','docType']),
      // ...mapGetters('enums'['GET_EDUCATION_LEVEL','GET_SOLDIERY_STATUS','GET_MILITARY_FORM_DOC','GET_DOC_TYPE']),
      // },
      mounted() {
        this.$store.dispatch('enums/onLoadEducationLevel');
        this.$store.dispatch('dictionary/onLoadAddressCountryRegion');
        this.$store.dispatch('dictionary/onLoadAddressState');
        this.$store.dispatch('dictionary/onLoadAcademyYear');
        this.$store.dispatch('dictionary/onLoadEduDoc');
        this.$store.dispatch('dictionary/onLoadSoldiery');
        this.$store.dispatch('enums/onLoadSoldieryStatus');
        this.$store.dispatch('enums/onLoadMilitaryFormDoc');
        this.$store.dispatch('enums/onLoadDocType');
      },
      },
      methods: {
        onCalculateScore() {
          this.score_full = (parseInt(this.score_chemistry) + parseInt(this.score_biology) +
            parseInt(this.score_russian))/3;
        },
      },
        data() {
          return {
            score_chemistry: 0,
            score_biology: 0,
            score_russian: 0,
            score_full: 0,
            // eduDocSerial:'',
            // eduDocNumber:'',
            //
            //
            // selectedEduDoc: '',
            // selectedEduLevel: '',
            // selectedSoldiery: '',
            // selectedSoldieryStatus: '',
            // selectedMilitaryFormDoc: '',

            options_eduDoc: [
              {id: 1, item: 'Академическая справка'},
              {id: 2, item: 'Аттестат о полном среднем образовании'},
              {id: 3, item: 'Аттестат о среднем общем образовании'},
              {id: 4, item: 'Аттестат о среднем общем образовании без корочки'},
              {id: 5, item: 'Аттестат иного государства'},
              {id: 6, item: 'Выписка из протокола заседания комиссии'},
              {id: 7, item: 'Диплом об окончании аспирантуры (адъюнкатуры)'},
              {id: 8, item: 'Диплом бакалавра'},
              {id: 9, item: 'Диплом ВУЗа'},
              {id: 10, item: 'Диплом кандидата наук'},
              {id: 11, item: 'Диплом лицея'},
              {id: 12, item: 'Диплом магистра'},
              {id: 13, item: 'Диплом о начальном профессиональном образовании'},
              {id: 14, item: 'Диплом'},
              {id: 15, item: 'Диплом иностранного государства (ВУЗ)'},
              {id: 16, item: 'Диплом специалиста'},
              {id: 17, item: 'Диплом о среднем профессиональном образовании'},
              {id: 18, item: 'Свидетельство'},
              {id: 19, item: 'Свидетельство об аккредитации'},
              {id: 20, item: 'Сертификат'},
            ],
            options_educationLevel: [
              {id: 1, item: 'Бакалавриат'},
              {id: 2, item: 'Магистратура'},
              {id: 3, item: 'Специалитет'},
              {id: 4, item: 'Мед.училище'},
              {id: 5, item: 'СПО и техникум'},
              {id: 6, item: 'НПО'},
              {id: 7, item: 'СШД (Средняя школа дневная)'},
              {id: 8, item: 'СШВ (Средняя школа вечерняя'},
              {id: 9, item: 'Ординатура'},
              {id: 10, item: 'Интернатура'},
              {id: 11, item: 'Аспирантура'},
            ],
            options_soldiery: [
              {id: 1, item: 'Военнообязанный'},
              {id: 2, item: 'Невоеннообязанный'},
            ],
            options_soldieryStatus: [
              {id: 1, item: 'Служил'},
              {id: 2, item: 'Не служил'},
            ],

            options_militaryFormDoc: [
              {id: 1, item: 'Не определено'},
              {id: 2, item: 'Приписное свид-во'},
              {id: 3, item: 'Военный билет'},

            ],
          }
        }


  }
</script>

<style scoped>

  .inner_tab {
    padding-bottom: -30px;
  }
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

  .calculate_score {
    margin-top: -8px;
    padding: -10px;
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
  .separate_label {
    margin-right: 0px;
  }
</style>
