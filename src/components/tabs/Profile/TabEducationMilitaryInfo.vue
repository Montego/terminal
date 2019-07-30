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
                   <select v-model="tab_edu_military_educationLevel" class="minimal col-sm">
            <option v-for="item in eduLevel" v-bind:value="item">
              {{item.name}}
            </option>
          </select>

          <!--<input v-model="person.tab_edu_military_educationLevel.name" class="uneditable form__input col-sm-6" type="text" name="" placeholder="Заполняется автоматически"-->
                 <!--disabled="disabled"/>-->
        </label>
      </div>
      <div>
        <p>Учебное заведение</p>
      </div>
      <hr>
      <div>
        <label class="row">
          <div class="form__label-text col-sm">Наименование:</div>
          <textarea v-model="tab_edu_military_univer" class="col-sm" name=""></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Страна:</div>
          <select v-model="tab_edu_military_selectedCountryRegion" class="minimal col-sm">
            <option v-for="item in addressCountryRegion" v-bind:value="item">
              {{item.countryRegionId}}
            </option>
          </select>
        </label>
        <label v-if="tab_edu_military_selectedCountryRegion.countryRegionId === 'РФ'" class="row">
          <div class="form__label-text col-sm">Регион:</div>
          <select  v-model="tab_edu_military_selectedState" class="minimal col-sm">
            <option v-for="item in addressState" v-bind:value="item">
              {{item.stateId}}
            </option>
          </select>

        </label>
        <label class="row">
          <div class="form__label-text col-sm">Год окончания:</div>
          <select v-model="tab_edu_military_selectedAcademyYear" class="minimal col-sm">
            <option v-for="item in academyYear" v-bind:value="item">
              {{item.academyYearId}}
            </option>
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
          <select v-model="tab_edu_military_selectedEduDoc" class="minimal col-sm-8">
            <option class="col-sm-12" v-for="item in eduDoc" v-bind:value="item">
              {{item.name}}
            </option>
          </select>

        </label>
<label class="row">
  <!--<input v-model="tab_edu_military_selectedEduDoc" class="uneditable form__input col-sm-12" type="text" name="" placeholder="Заполняется автоматически"-->
         <!--disabled/>-->
</label>


        <span class="alarm_label" v-if="tab_edu_military_selectedEduDoc===''">Не выбран документ об образовании</span>

        <label class="row">
          <div class="form__label-text col-sm">Серия:</div>
          <input data-vv-as="серия" v-validate v-model="tab_edu_military_eduDocSerial" class="form__input col-sm" type="text" name="eduDocSerial" placeholder="" required/>
        </label>

        <span class="alarm_label">{{ errors.first('eduDocSerial') }}</span>

        <label class="row">
          <div class="form__label-text col-sm">Номер:</div>
          <input data-vv-as="номер" v-validate v-model="tab_edu_military_eduDocNumber" class="form__input col-sm" type="text" name="eduDocNumber" placeholder="" required/>
        </label>

        <span class="alarm_label">{{ errors.first('eduDocNumber') }}</span>

        <label class="row">
          <div class="form__label-text col-sm">Дата выдачи:</div>
          <input v-model="tab_edu_military_eduDocDate" class="form__input col-sm" type="date"  min="1918-01-01" max="2019-01-01"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Наименование:</div>
          <textarea v-model="tab_edu_military_eduDocName" class="col-sm" name=""></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Серия приложения:</div>
          <input v-model="tab_edu_military_attachment_serial" class="form__input col-sm" type="text" name="" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Номер приложения:</div>
          <input v-model="tab_edu_military_attachment_number" class="form__input col-sm" type="text" name="" placeholder=""/>
        </label>
        <div class="row">
          <label class="col-sm-9"></label>
          <button class="calculate_score col-sm-3" @click="copyFromEdu">Копировать</button>
        </div>


        <div class="row">
          <div class="form__label-text col-sm-2">Пятёрок:</div>
          <input v-model="score_five" class="form__input col-sm-1" type="text" v-mask="'##'" />
          <div class="form__label-text col-sm-2">Четверок:</div>
          <input v-model="score_four" class="form__input col-sm-1" type="text" v-mask="'##'"  />
          <div class="form__label-text col-sm-2">Троек:</div>
          <input v-model="score_three" class="form__input col-sm-1" type="text" v-mask="'##'"  />
        </div>
        <label class="row">
          <div class="form__label-text col-sm-6">Средний балл:</div>
          <button class="calculate_score col-sm-4" @click="onCalculateScore">Расчет среднего балла</button>
          <!--<input v-model="score_full" class="form__input col-sm-2 " type="text" v-mask="'#.##'" disabled hidden/>-->
          <input v-model="score_full" class="form__input col-sm-2 " type="text" v-mask="'#.##'" placeholder="---"
                 disabled="disabled"/>
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
          <select v-model="tab_edu_military_selectedSoldiery" class="minimal col-sm">
            <option v-for="item in soldiery" v-bind:value="item">
              {{item.soldieryId}}
            </option>
          </select>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Прохождение службы:</div>
          <input v-if="tab_edu_military_selectedSoldiery =='Невоеннообязанный'" class="form__input col-sm" type="text" name="" placeholder="Не заполняется"
                 disabled="disabled"/>
          <select v-else v-model="tab_edu_military_selectedSoldieryStatus" class="minimal col-sm">
            <option v-for="item in soldieryStatus" v-bind:value="item" >
              {{item.name}}
            </option>
          </select>

        </label>
      </div>
      <!--<div v-if="tab_edu_military_selectedSoldieryStatus.name ==='Служил' ">-->
      <div v-if="tab_edu_military_selectedSoldiery.soldieryId ==='Военнообязанный'">
        <div>
          <p>Документ о военной службе</p>
        </div>
        <hr>
        <div>
          <label class="row">
            <div class="form__label-text col-sm">Тип документа:</div>
            <select v-model="tab_edu_military_selectedMilitaryFormDoc" class="minimal col-sm">
              <option v-for="item in militaryFormDoc" v-bind:value="item" >
                {{item.name}}
              </option>
            </select>
          </label>
          <label class="row">
            <div class="form__label-text col-sm">Серия:</div>
            <input v-model="tab_edu_military_militarySeries" class="form__input col-sm" type="text" name="" placeholder=""/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm">Номер:</div>
            <input v-model="tab_edu_military_militaryNumber" class="form__input col-sm" type="text" name="" placeholder=""/>
          </label>

          <label class="row">
            <div class="form__label-text col-sm">Дата выдачи:</div>
            <input v-model="tab_edu_military_militaryIssueDate" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>
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
            <select v-model="tab_edu_military_selectedDocType" class="minimal col-sm">
              <option v-for="item in docType" v-bind:value="item">
                {{item.name}}
              </option>
            </select>
          </label>
          <label v-if="tab_edu_military_selectedDocType.name ==='Оригинал'" class="row">
            <div class="form__label-text col-sm">Дата предоставления:</div>
            <input v-model="tab_edu_military_docMilitaryShowDate" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>
          </label>
        </div>
        <div>
          <p>Срок службы</p>
        </div>
        <hr>
        <div>
          <label class="row">
            <div class="form__label-text col-sm">Дата начала:</div>
            <input v-model="tab_edu_military_startMilitary" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm">Дата окончания:</div>
            <input v-model="tab_edu_military_endMilitary" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>
          </label>
        </div>
      </div>

      <div>
        <p>Дополнительные сведения</p>
      </div>
      <hr>
      <label class="alarm_label">Внимание! Индивидуальные достижения заносятся на вкладке "Отличительные признаки"</label>
      <div class="row">
          <select v-model="selectedExtraInfos1" class="minimal col-sm">
            <option v-for="option in options_extraInfos">
              {{option.item}}
            </option>
          </select>
          <input v-model="extraInfosDescription1" class="form__input col-sm" type="text" name="" placeholder="Описание"/>
      </div>
      <div class="row">
        <select v-model="selectedExtraInfos2" class="minimal col-sm">
          <option v-for="option in options_extraInfos">
            {{option.item}}
          </option>
        </select>
        <input v-model="extraInfosDescription2" class="form__input col-sm" type="text" name="" placeholder="Описание"/>
      </div>
    </div>
        <!--</label>-->
      <!--</div>-->

      <!--<label class="row">-->
        <!--<input class="button_add" type="button" value="Добавить" @click="onAddExtraInfo" >-->
        <!--<input class="button_add" type="button" value="Убрать" @click="onRemoveExtraInfo" >-->
      <!--</label>-->

  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import { createHelpers } from 'vuex-map-fields';
  const { mapFields:tab_education_military_info } = createHelpers({
    getterType: `tab_education_military_info/getField`,
    mutationType: `tab_education_military_info/updateField`,
  });
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  export default {
    name: "TabEducationMilitary",
    mounted() {
      this.$store.dispatch('dictionary/onLoadAddressCountryRegion');
      this.$store.dispatch('dictionary/onLoadAddressState');
      this.$store.dispatch('dictionary/onLoadEduDoc');
      this.$store.dispatch('dictionary/onLoadEduLevel');
      this.$store.dispatch('dictionary/onLoadAcademyYear');
      this.$store.dispatch('dictionary/onLoadSoldiery');
      this.$store.dispatch('enums/onLoadSoldieryStatus');
      this.$store.dispatch('enums/onLoadMilitaryFormDoc');
      this.$store.dispatch('enums/onLoadDocType');
      this.$store.dispatch('enums/onLoadEducationLevel');

    },
    computed: {


      ...person(['person','tab_edu_military_educationLevel', 'tab_edu_military_univer','tab_edu_military_selectedCountryRegion','tab_edu_military_selectedState',
      'tab_edu_military_selectedAcademyYear','tab_edu_military_selectedEduDoc','tab_edu_military_eduDocSerial','tab_edu_military_eduDocNumber',
      'tab_edu_military_eduDocDate','tab_edu_military_eduDocName','tab_edu_military_attachment_serial','tab_edu_military_attachment_number',
      'score_five','score_four','score_three','score_full',
        'averageScore','tab_edu_military_selectedSoldiery','tab_edu_military_selectedSoldieryStatus','tab_edu_military_selectedMilitaryFormDoc',
      'tab_edu_military_militaryNumber','tab_edu_military_militarySeries','tab_edu_military_militaryIssueDate','tab_edu_military_militaryIssueBy',
      'tab_edu_military_militaryRank','tab_edu_military_selectedDocType','tab_edu_military_docMilitaryShowDate','tab_edu_military_startMilitary',
        'tab_edu_military_endMilitary','selectedExtraInfos1',  'selectedExtraInfos2','extraInfosDescription1','extraInfosDescription2',]),
      ...mapState('dictionary',['addressCountryRegion','addressState', 'eduDoc','academyYear','soldiery','eduLevel'
      ],),
      ...mapGetters('dictionary',['GET_ADDRESS_COUNTRY_REGION','GET_ADDRESS_STATE',
        'GET_EDU_DOC','GET_ACADEMY_YEAR','GET_SOLDIERY','GET_eduLevel'],),
      ...mapState('enums',['soldieryStatus','militaryFormDoc','docType','educationLevel'],),
      ...mapGetters('enums',['GET_SOLDIERY_STATUS','GET_MILITARY_FORM_DOC','GET_DOC_TYPE','GET_EDUCATION_LEVEL'],),


      },
      methods: {
        copyFromEdu() {
          this.tab_edu_military_eduDocName = this.tab_edu_military_univer;
          this.tab_edu_military_attachment_serial = this.tab_edu_military_eduDocSerial;
          this.tab_edu_military_attachment_number = this.tab_edu_military_eduDocNumber;
        },
        onCalculateScore() {
          this.score_full = Math.round(( (parseInt(this.score_five)*5 + parseInt(this.score_four)*4 +
            parseInt(this.score_three)*3) / (parseInt(this.score_five) + parseInt(this.score_four)
            + parseInt(this.score_three)) )*100)/100;

        },

      },
        data() {
          return {
            full:'',
            extraInfos: [
              {
                id:'',
                item:''
              }
            ],

            options_extraInfos: [
              {id: 1, item: 'Достижения в учебе'},
              {id: 2, item: 'Художственные достижения'},
              {id: 3, item: 'Научные достижения'},
              {id: 4, item: 'Спортивные достижения'},
            ],
          }
        }


  }
</script>

<style scoped>
  .uneditable {
    background-color: #F5F5F5;
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

  .inner_tab {
    padding-bottom: -30px;
  }
  label.row {
    margin-bottom: 3px;
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
