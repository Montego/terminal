<template>
  <div class="inner_tab row">
    <div class="col-sm">
      <div>
        <p>Образование</p>
      </div>
      <hr>
      <div>
        <!--<label class="row">-->
        <label :class="{ row : true , error1 : $v.tab_edu_military_educationLevel.$invalid}">
          <span class="form__label-text col-sm">Уровень образования:</span>
                   <select v-model="tab_edu_military_educationLevel" class="minimal col-sm"
                           @change="getPreferByEduLevel(tab_edu_military_educationLevel)">
            <option v-for="item in eduLevel" v-bind:value="item">
              {{item.name}}
            </option>
          </select>
        </label>
      </div>
      <div>
        <p>Учебное заведение</p>
      </div>
      <hr>
      <div>
        <!--<label class="row">-->
        <label :class="{ row : true , error1 : $v.tab_edu_military_univer.$invalid}">
          <span class="form__label-text col-sm">Наименование:</span>
          <textarea v-model="tab_edu_military_univer" class="col-sm" name=""></textarea>
        </label>

        <label class="row">
          <span class="form__label-text col-sm">Страна:</span>
          <select v-model="tab_edu_military_selectedCountryRegion" class="minimal col-sm">
            <option v-for="item in addressCountryRegion" v-bind:value="item">
              {{item.countryRegionId}}
            </option>
          </select>
        </label>
        <label v-if="tab_edu_military_selectedCountryRegion.countryRegionId === 'РФ'" class="row">
          <span class="form__label-text col-sm">Регион:</span>
          <select  v-model="tab_edu_military_selectedState" class="minimal col-sm">
            <option v-for="item in addressState" v-bind:value="item">
              {{item.stateId}}
            </option>
          </select>

        </label>
        <!--<label class="row">-->
        <label :class="{ row : true , error1 : $v.tab_edu_military_selectedAcademyYear.$invalid}">
          <span class="form__label-text col-sm">Год окончания:</span>
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
        <!--<label class="row">-->
        <label :class="{ row : true , error1 : $v.tab_edu_military_selectedEduDoc.$invalid}">
          <span class="form__label-text col-sm">Документ об образовании:</span>
          <select v-model="tab_edu_military_selectedEduDoc" class="minimal col-sm-8"
                  @change="getDocumentByEduDoc(tab_edu_military_selectedEduDoc)">
            <option class="col-sm-12" v-for="item in eduDoc" v-bind:value="item">
              {{item.name}}
            </option>
          </select>
        </label>
        <!--<span class="alarm_label" v-if="tab_edu_military_selectedEduDoc===''">Не выбран документ об образовании</span>-->

        <label class="row">
          <span class="form__label-text col-sm">Серия:</span>
          <input data-vv-as="серия" v-validate v-model="tab_edu_military_eduDocSerial" class="form__input col-sm" type="text" name="eduDocSerial" placeholder="" v-mask="'##################'" required/>
        </label>

        <label class="row">
          <span class="form__label-text col-sm">Номер:</span>
          <input data-vv-as="номер" v-validate v-model="tab_edu_military_eduDocNumber" class="form__input col-sm" type="text" name="eduDocNumber" placeholder="" v-mask="'##################'" required/>
        </label>

        <!--<label class="row">-->
        <label :class="{ row : true , error1 : $v.tab_edu_military_eduDocDate.$invalid}">
          <span class="form__label-text col-sm">Дата выдачи:</span>
          <input v-model="tab_edu_military_eduDocDate" class="form__input col-sm" type="date"  min="1918-01-01" max="2100-01-01"/>
        </label>
        <div class="row">
          <!--<label class="col-sm-9"></label>-->
          <button class= "col-sm-3" @click="copyFromEdu">Копировать</button>
        </div>
        <label class="row">
          <span class="form__label-text col-sm">Наименование:</span>
          <textarea v-model="tab_edu_military_eduDocName" class="col-sm" name=""></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Серия приложения:</div>
          <input v-model="tab_edu_military_attachment_serial" class="form__input col-sm" type="text" name="" placeholder="" v-mask="'#########'"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Номер приложения:</div>
          <input v-model="tab_edu_military_attachment_number" class="form__input col-sm" type="text" name="" placeholder="" v-mask="'#########'"/>
        </label>
        <!--<div class="row">-->
          <!--<label class="col-sm-9"></label>-->
          <!--<button class="copy_button col-sm-3" @click="copyFromEdu">Копировать</button>-->
        <!--</div>-->

        <div class="row">
          <div class="form__label-text col-sm-2">Пятёрок:</div>
          <input v-model="score_five" class="form__input col-sm-1" type="text" v-mask="'##'" />
          <div class="form__label-text col-sm-2">Четверок:</div>
          <input v-model="score_four" class="form__input col-sm-1" type="text" v-mask="'##'"  />
          <div class="form__label-text col-sm-2">Троек:</div>
          <input v-model="score_three" class="form__input col-sm-1" type="text" v-mask="'##'"  />
        </div>
        <div class="row">
          <button class="" @click="onCalculateScore">Расчет среднего балла</button>

        </div>

        <label class="row">
          <!--<button class="calculate_score col-sm-4" @click="onCalculateScore">Расчет среднего балла</button>-->
          <div class="form__label-text col-sm-3">Средний балл:</div>
          <input v-model="score_full" class="form__input col-sm-3 " type="text" v-mask="'#.##'" placeholder="---"
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
      <div v-if="(tab_edu_military_selectedSoldiery.soldieryId ==='Военнообязанный') || (tab_edu_military_selectedSoldieryStatus.name ==='Служил')">
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
            <input v-model="tab_edu_military_militaryIssueDate" class="form__input col-sm" type="date" min="1918-01-01" max="2100-01-01"/>
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
            <input v-model="tab_edu_military_docMilitaryShowDate" class="form__input col-sm" type="date" min="1918-01-01" max="2100-01-01"/>
          </label>

        </div>
        <div>
          <p>Срок службы</p>
        </div>
        <hr>
        <div>
          <label class="row">
            <div class="form__label-text col-sm">Дата начала:</div>
            <input v-model="tab_edu_military_startMilitary" class="form__input col-sm" type="date" min="1918-01-01" max="2100-01-01"/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm">Дата окончания:</div>
            <input v-model="tab_edu_military_endMilitary" class="form__input col-sm" type="date" min="1918-01-01" max="2100-01-01"/>
          </label>
        </div>
      </div>

      <div>
        <p>Дополнительные сведения</p>
      </div>
      <hr>
      <label class="alarm_label">Внимание! Индивидуальные достижения заносятся на вкладке "Отличительные признаки"</label>
      <div class="row">
          <select v-model="selectedExtraInfos1" class="minimal exta_info_select col-sm">
            <option v-for="option in options_extraInfos">
              {{option.item}}
            </option>
          </select>
          <input v-model="extraInfosDescription1" class="form__input col-sm" type="text" name="" placeholder="Описание"/>
      </div>
      <div class="row">
        <select v-model="selectedExtraInfos2" class="minimal exta_info_select col-sm">
          <option v-for="option in options_extraInfos">
            {{option.item}}
          </option>
        </select>
        <input v-model="extraInfosDescription2" class="form__input col-sm" type="text" name="" placeholder="Описание"/>
      </div>
    </div>

  </div>
</template>

<script>
  import {required} from "vuelidate/lib/validators";
  import {AXIOS} from "../../plugins/APIService";
  import {mapGetters, mapMutations, mapState} from 'vuex'
  import { createHelpers } from 'vuex-map-fields';
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
        'tab_edu_military_endMilitary','selectedExtraInfos1',  'selectedExtraInfos2','extraInfosDescription1','extraInfosDescription2',
      'documentByEduDoc','preferencesByEduLevel',
      'docNumberMandatory','docSeriesMandatory']),
      ...mapState('dictionary',['addressCountryRegion','addressState', 'eduDoc','academyYear','soldiery','eduLevel'
      ],),
      ...mapGetters('dictionary',['GET_ADDRESS_COUNTRY_REGION','GET_ADDRESS_STATE',
        'GET_EDU_DOC','GET_ACADEMY_YEAR','GET_SOLDIERY','GET_eduLevel'],),
      ...mapState('enums',['soldieryStatus','militaryFormDoc','docType','educationLevel'],),
      ...mapGetters('enums',['GET_SOLDIERY_STATUS','GET_MILITARY_FORM_DOC','GET_DOC_TYPE','GET_EDUCATION_LEVEL'],),
      ...mapMutations('dictionary',['TO_MAIN_PAGE'])

      },
    validations() {
      let obj = {};
      obj.tab_edu_military_educationLevel = {required};
      obj.tab_edu_military_univer = {required};
      obj.tab_edu_military_selectedAcademyYear = {required};
      obj.tab_edu_military_selectedEduDoc = {required};
      obj.tab_edu_military_eduDocDate = {required};

      return obj;
    },
      methods: {
        getDocumentByEduDoc(eduDoc){
          AXIOS.post(`dictionary/documentByEduDoc/`, eduDoc)
            .then(response => {

              this.docSeriesMandatory = response.data[0].docSeriesMandatory;
              this.docNumberMandatory = response.data[0].docNumberMandatory;
              console.log(this.docSeriesMandatory);
              console.log(this.docNumberMandatory);
              this.documentByEduDoc = response.data[0];
              console.log('resp',this.documentByEduDoc);
            })
            .catch(e => {
              if (e.response.data.status === 401) {
                this.$store.commit('TO_MAIN_PAGE', 'login');
              }
            })
        },

        getPreferByEduLevel(){
          // let educationLev  = educationLevel.educationLevel;
          let educationLev  = 1;
          AXIOS.post(`dictionary/preferByEduLevel/`+ educationLev)
            .then(response => {
              this.preferencesByEduLevel = response.data;
            })
            .catch(e => {
            })
        },

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
  .exta_info_select {
    margin-left: 10px;
  }

  .copy_button {
    margin-top: 1px;
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

  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid grey;
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
    border: 1px solid grey;
  }

  textarea {
    border-radius: 3px;
    border: 1px solid grey;
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
    border: 1px solid grey;
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
    margin-left: 300px;
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
  /*.error1 {*/
    /*color: red;*/
  /*}*/
  .error1 span {
    color: red;
  }
</style>
