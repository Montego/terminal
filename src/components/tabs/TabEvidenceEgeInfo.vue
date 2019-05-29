<template>
  <div>
    <tabs class="ege_tabs">
      <tab id="" name="Обзор">
        <!--<tab id="" name="Свидетельства ЕГЭ">-->
        <!--<div class="row">-->
          <!--<button>Добавить</button>-->
        <!--</div>-->
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
                <td class="text-xs-center">{{ props.item.actions}}</td>
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
                <input v-model="tab_ege_lastname" class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <span class="alarm_label" v-if="tab_ege_lastname===''">Не заполнено поле "Фамилия"</span>
              <label class="row">
                <div class="form__label-text col-sm">Имя:</div>
                <input v-model="tab_ege_firstname" class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <span class="alarm_label" v-if="tab_ege_firstname===''">Не заполнено поле "Имя"</span>
              <span class="alarm_label" v-else-if="tab_ege_firstname===tab_ege_lastname">Имя не может совпадать с фамилией</span>
              <label class="row">
                <div class="form__label-text col-sm">Отчество:</div>
                <input v-model="tab_ege_middlename" class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Документ</div>
                <select v-model="tab_ege_selectedIdentityCardCode" class="col-sm">
                  <option v-for="option in options_identityCardCode">
                    {{option.item}}
                  </option>
                </select>
                <input v-model="tab_ege_selectedIdentityCardCode" class="form__input col-sm-12" type="text" name="" placeholder="Заполняется автоматически"
                       disabled="disabled"/>
              </label>
              <span class="alarm_label" v-if="tab_ege_selectedIdentityCardCode===''">Не выбран тип документа</span>
              <label class="row">
                <div class="form__label-text col-sm">Серия:</div>
                <input v-if="tab_ege_selectedIdentityCardCode === 'Паспорт РФ'" v-model="tab_ege_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial" placeholder="****" v-mask="'####'" required/>
                <input v-else-if="tab_ege_selectedIdentityCardCode === 'Временное удостоверение лич.граждан.РФ'" v-model="tab_ege_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial" placeholder="***-***" v-mask="'###-###'" required/>
                <input v-else v-model="tab_ege_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial"required/>
                <!--<input v-model="identityCardSeries" class="form__input col-sm" type="text" name="" placeholder=""/>-->
              </label>
              <span class="alarm_label" v-if="tab_ege_identityCardSeries===''">Не заполнено поле "Серия"</span>
              <span class="alarm_label" v-else-if="tab_ege_identityCardSeries.length<4 & tab_ege_selectedIdentityCardCode === 'Паспорт РФ'">Серия должна содержать 4 цифры</span>

              <label class="row">
                <div class="form__label-text col-sm">Номер:</div>
                <!--<input v-model="identityCardNumber" class="form__input col-sm" type="text" name="" placeholder=""/>-->
                <input v-if="tab_ege_selectedIdentityCardCode === 'Паспорт РФ'" v-model="tab_ege_identityCardNumber" class="form__input col-sm" type="text" name="doc_serial" placeholder="******" v-mask="'######'" required/>
                <input v-else-if="tab_ege_selectedIdentityCardCode === 'Временное удостоверение лич.граждан.РФ'" v-model="tab_ege_identityCardNumber" class="form__input col-sm" type="text" name="doc_serial" placeholder="***-***-***" v-mask="'###-###-###'" required/>
                <input v-else v-model="tab_ege_identityCardNumber" class="form__input col-sm" type="text" name="doc_serial"required/>
              </label>
              <span class="alarm_label" v-if="tab_ege_identityCardNumber===''">Не заполнено поле "Номер"</span>
              <span class="alarm_label" v-else-if="tab_ege_identityCardNumber.length<6 & tab_ege_selectedIdentityCardCode === 'Паспорт РФ'">Номер должен содержать 6 цифр</span>
              <label class="row">
                <div class="form__label-text col-sm">Дата выдачи:</div>
                <input v-model="tab_ege_identityCardIssueDate" class="form__input col-sm" type="date" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm-2">Кем выдан:</div>
                <textarea v-model="tab_ege_identityCardIssueBy" class="col-sm-10" name=""></textarea>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Гражданство</div>
                <select class="col-sm" name="">
                  <option>РФ</option>
                  <option>Казахстан</option>
                </select>
              </label>
              <button class="copy_address col-sm-6" @click="onCopyInfoFromProfileTab">
                Копировать из личных сведений
              </button>
            </div>
          </div>

          <div class="col-sm">
            <div>
              <p>Свидетельство</p>
            </div>
            <hr>
            <label class="row">
              <div class="form__label-text col-sm">№ свидетельства:</div>
              <input v-model="tab_ege_documentNumber" class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <span class="alarm_label" v-if="tab_ege_documentNumber===''">Не заполнено поле "№ свидетельства"</span>
            <label class="row">
              <div class="form__label-text col-sm">Дата выдачи:</div>
              <input class="form__input col-sm" type="date" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Типографский №:</div>
              <input v-model="tab_ege_typographyNumber" class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <span class="alarm_label" v-if="tab_ege_typographyNumber===''">Не заполнено поле "Типографский №"</span>
            <label class="row">
              <div class="form__label-text col-sm">Сумма баллов:</div>
              <input  v-model="tab_ege_sumScores" class="form__input col-sm" type="number" name="" placeholder=""/>
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
              <select v-model="tab_ege_selectedSubject1" class="col-sm">
                <option v-for="option in options_subject">
                  {{option.item}}
                </option>
              </select>
              <!--<input class="form__input col-sm" type="text" name="" placeholder=""/>-->
            </label>
            <label class="row">
              <div class="form__label-text col-sm-6">Балл(1):</div>
              <input v-model="tab_ege_score1" class="form__input col-sm-6" type="number" name="" placeholder=""/>
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
              <!--<input class="form__input col-sm" type="text" name="" placeholder=""/>-->
              <select v-model="tab_ege_selectedSubject2" class="col-sm">
                <option v-for="option in options_subject">
                  {{option.item}}
                </option>
              </select>
            </label>
            <label class="row">
              <div class="form__label-text col-sm-6">Балл(2):</div>
              <input v-model="tab_ege_score2" class="form__input col-sm-6" type="number" name="" placeholder=""/>
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
              <!--<input class="form__input col-sm" type="text" name="" placeholder=""/>-->
              <select v-model="tab_ege_selectedSubject3" class="col-sm">
                <option v-for="option in options_subject">
                  {{option.item}}
                </option>
              </select>
            </label>
            <label class="row">
              <div v-model="tab_ege_score3" class="form__label-text col-sm-6">Балл(3):</div>
              <input class="form__input col-sm-6" type="number" name="" placeholder=""/>
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

  import { createHelpers } from 'vuex-map-fields';
  import { mapMultiRowFields } from 'vuex-map-fields';
  const { mapFields:tab_evidence_ege_info_fields } = createHelpers({
    getterType: `tab_evidence_ege_info/getField`,
    mutationType: `tab_evidence_ege_info/updateField`,
  });
  const { mapFields:tab_personal_info_fields } = createHelpers({
    getterType: 'tab_personal_info/getField',
    mutationType: 'tab_personal_info/updateField',
  });

  export default {
    name: "TabEvidenceEge",
    mounted () {
      console.log(2222)
      console.log(this.$store.getters)
      // this.$store.commit('Test',)
    },
    computed: {
      ...tab_evidence_ege_info_fields(['tab_ege_lastname', 'tab_ege_firstname', 'tab_ege_middlename',
        'tab_ege_identityCardSeries','tab_ege_identityCardNumber','tab_ege_identityCardIssueDate',
        'tab_ege_identityCardIssueBy','tab_ege_documentNumber','tab_ege_typographyNumber',
        'tab_ege_sumScores','tab_ege_score1','tab_ege_score2','tab_ege_score3','tab_ege_selectedSubject1',
        'tab_ege_selectedSubject2','tab_ege_selectedSubject3','tab_ege_selectedIdentityCardCode'
      ]),
      ...tab_personal_info_fields(['tab_personal_lastname', 'tab_personal_firstname', 'tab_personal_middlename',
       'tab_personal_selectedIdentityCardCode','tab_personal_identityCardSeries','tab_personal_identityCardNumber',
        'tab_personal_identityCardIssueDate','tab_personal_identityCardIssueDep','tab_personal_identityCardIssueBy'


      ]),
      // ...mapMultiRowFields(['gender','']),
      // fullscore: function () {
      //   return this.sumScores = parseInt(this.score1)+ parseInt(this.score2) + parseInt(this.score3)
      // },


    },
    data() {
      return {
        // lastname_evidence_ege:'',
        // lastname:'',
        // firstname:'',
        // middlename:'',
        // identityCardSeries:'',
        // identityCardNumber:'',
        // identityCardIssueDate:'',
        // identityCardIssueBy:'',
        //
        // documentNumber:'',
        // typographyNumber:'',
        // sumScores: '',
        // score1:'',
        // score2:'',
        // score3:'',
        //
        // selectedSubject1: '',
        // selectedSubject2: '',
        // selectedSubject3: '',
        // selectedIdentityCardCode: '',

        options_subject: [
          {id: 1, item: 'Биология'},
          {id: 2, item: 'Иностранный язык'},
          {id: 3, item: 'Общественное здоровье и здравоохранение'},
          {id: 4, item: 'Русский язык'},
          {id: 5, item: 'Философия'},
          {id: 6, item: 'Химия'},
          {id: 7, item: 'Экзамен по специальности'},
          {id: 8, item: 'Экзамен по специальности'},
          ],
        options_identityCardCode: [
          // {id: 0, item: '-выберите документ-'},
          {id: 1, item: 'ВидЖител'},
          {id: 2, item: 'ВоенБилет'},
          {id: 3, item: 'ВоенБилОфц'},
          {id: 4, item: 'Временное удостоверение лич.граждан.РФ'},
          {id: 5, item: 'ДиплПаспРФ'},
          {id: 6, item: 'ЗагрПасп'},
          {id: 7, item: 'ЗагрПаспРФ'},
          {id: 8, item: 'ИнострПасп'},
          {id: 9, item: 'НетДокум'},
          {id: 10, item: 'ПаспМорФл'},
          {id: 11, item: 'ПаспМоряка'},
          {id: 12, item: 'Паспорт РФ'},
          {id: 13, item: 'Паспорт иностранного гражданина'},
          {id: 14, item: 'ПРОЧЕЕ'},
          {id: 15, item: 'СвидБеженц'},
          {id: 16, item: 'СвидРожд'},
          {id: 17, item: 'СправОбОсв'},
          {id: 18, item: 'СпрУдЛичн'},
          {id: 19, item: 'УдЛичности'},
          {id: 20, item: 'УдОфицера'},
        ],


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
          {text: 'Действия', value: 'actions', sortable: false, align: 'center'}
        ],
        info_ege_subjects: [],
      }
    },
    methods: {
      // onUpdateLastname_evidence_ege (e) {
      //   this.$store.commit('tab_evidence_ege_info/UPDATE_LASTNAME_EVIDENCE_EGE', e.target.payload)
      // },

      onCopyInfoFromProfileTab() {
        this.tab_ege_lastname = this.tab_personal_lastname;
        this.tab_ege_firstname =  this.tab_personal_firstname;
        this.tab_ege_middlename =  this.tab_personal_middlename;
        this.tab_ege_identityCardSeries = this.tab_personal_identityCardSeries;
        this.tab_ege_identityCardNumber = this.tab_personal_identityCardNumber;
        this.tab_ege_identityCardIssueDate = this.tab_personal_identityCardIssueDate;
        this.tab_ege_identityCardIssueBy = this.tab_personal_identityCardIssueBy;
        this.tab_ege_selectedIdentityCardCode = this.tab_personal_selectedIdentityCardCode;


        // this.name =  this.lastname_personal_info;
        // this.$store.dispatch('tab_evidence_ege_info/ON_SET_LASTNAME_EVIDENCE_EGE',this.$store.getters.GET_LASTNAME_PERSONAL_INFO);

        // this.lastname = this.$store.tab_personal_info.GET_LASTNAME()

        // this.lastname = this.$store.tab_personal_info;
        // console.log(this.$store.getters)
        // this.firstname = TabPersonalInfo.data().firstname;
        // this.middlename = TabPersonalInfo.data().middlename;
        // this.identityCardSeries = TabPersonalInfo.data().identityCardSeries;
        // this.identityCardNumber = TabPersonalInfo.data().identityCardNumber;
        // this.identityCardIssueDate = TabPersonalInfo.data().identityCardIssueDate;
        // this.identityCardIssueBy = TabPersonalInfo.data().identityCardIssueBy;

      }
    }
  }
</script>

<style scoped>
  label.row {
    margin-bottom: 3px;
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
    margin-left: 59%;
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
  .alarm_label {
    /*text-align: left;*/
    color: red;
  }

</style>
