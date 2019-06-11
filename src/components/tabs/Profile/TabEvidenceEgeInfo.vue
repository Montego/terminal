<template>
  <div>
    <tabs class="ege_tabs">
      <tab id="ege_overview" name="Обзор">
        <!--<tab id="" name="Свидетельства ЕГЭ">-->
        <div class="row">
          <button @click="onInfo">Добавить</button>
        </div>
        <div class="row">

          <div class="col-sm">
            <v-data-table
              :headers="headers_ege_subjects"
              :items="table_show"
              class="elevation-1 text-xs-center"
              hide-actions
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.item.tab_ege_selectedSubject}}</td>
                <td class="text-xs-center">{{ props.item.tab_ege_score}}</td>
                <td class="text-xs-center">{{ props.item.ege_ball_2}}</td>
                <td class="text-xs-center">{{ props.item.ege_appeal_status}}</td>
                <td>
                  <button @click="onDelete(props.item)">
                    <v-icon color="#5bc0de">delete</v-icon>
                  </button>{{ props.item.acions}}
                </td>
              </template>
            </v-data-table>
          </div>
        </div>
      </tab>
      <tab id="ege_info" name="Данные для свидетельства">
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
                <select v-model="tab_ege_selectedIdentityCardCode" class="minimal col-sm">
                  <option v-for="option in options_identityCardCode">
                    {{option.item}}
                  </option>
                </select>
                <input v-model="tab_ege_selectedIdentityCardCode" class="uneditable form__input col-sm-12" type="text" name="" placeholder="Заполняется автоматически"
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
                <div class="form__label-text col-sm">Гражданство:</div>
                <select v-model="tab_ege_info_selectedCitizenship" class="minimal col-sm">
                  <option v-for="option in addressCountryRegion">
                    {{option.CountryRegionId}}
                  </option>
                </select>
              </label>
              <button class="copy_address col-sm-6" @click="onCopyInfoFromProfileTab">
                Копировать из личных сведений
              </button>
            </div>
          </div>

          <div class="col-sm">
            <div>
              <p>Предметы</p>
            </div>
            <hr>
            <label class="row">
              <div class="form__label-text col-sm">Форма ЕГЭ:</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Год сдачи:</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Предмет:</div>
              <select v-model="tab_ege_selectedSubject" class="minimal col-sm">
                <option v-for="option in options_subject">
                  {{option.item}}
                </option>
              </select>
              <!--<input class="form__input col-sm" type="text" name="" placeholder="русский язык" disabled/>-->
            </label>
            <label class="row">
              <div class="form__label-text col-sm-6">Балл:</div>
              <input v-model="tab_ege_score" class="form__input col-sm-6" type="text" v-mask="'###'"/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Балл (ФИС):</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Статус апелляции:</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <hr>

            <div class="clear_save_button row">
              <button @click="onClearFields">Очистить</button>
              <button @click="onAddEge">Добавить</button>
              <!--<button @click="onSaveParent">Сохранить изм-я</button>-->
            </div>
          </div>

          <div class="col-sm">
            <!--<div>-->
              <!--&lt;!&ndash;<p>Свидетельство</p>&ndash;&gt;-->
              <!--<p>ЕГЭ</p>-->
            <!--</div>-->
            <!--<hr>-->
            <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">№ свидетельства:</div>-->
            <!--<input v-model="tab_ege_documentNumber" class="form__input col-sm" type="text" name="" placeholder=""/>-->
            <!--</label>-->
            <!--<span class="alarm_label" v-if="tab_ege_documentNumber===''">Не заполнено поле "№ свидетельства"</span>-->
            <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Дата выдачи:</div>-->
            <!--<input class="form__input col-sm" type="date" name="" placeholder=""/>-->
            <!--</label>-->
            <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Типографский №:</div>-->
            <!--<input v-model="tab_ege_typographyNumber" class="form__input col-sm" type="text" name="" placeholder=""/>-->
            <!--</label>-->
            <!--<span class="alarm_label" v-if="tab_ege_typographyNumber===''">Не заполнено поле "Типографский №"</span>-->
            <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Сумма баллов:</div>-->
            <!--<input  v-model="tab_ege_sumScores" class="form__input col-sm" type="number" name="" placeholder=""/>-->
            <!--</label>-->
            <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Копия/оригинал:</div>-->
            <!--<input class="form__input col-sm" type="text" name="" placeholder=""/>-->
            <!--</label>-->
            <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Предоставлено:</div>-->
            <!--<input class="form__input col-sm" type="date" name="" placeholder=""/>-->
            <!--</label>-->
            <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Форма ЕГЭ:</div>-->
            <!--<input class="form__input col-sm" type="text" name="" placeholder=""/>-->
            <!--</label>-->
            <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Место проведения:</div>-->
            <!--<input class="form__input col-sm" type="text" name="" placeholder=""/>-->
            <!--</label>-->
            <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Год:</div>-->
            <!--<input class="form__input col-sm" type="text" name="" placeholder=""/>-->
            <!--</label>-->
            <!--<label class="row">-->
            <!--<div class="form__label-text col-sm">Статус:</div>-->
            <!--<input class="form__input col-sm" type="text" name="" placeholder=""/>-->
            <!--</label>-->
          </div>

        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import { createHelpers } from 'vuex-map-fields';
  const { mapMultiRowFields } = createHelpers({
    getterType: `tab_evidence_ege_info/getField`,
    mutationType: `tab_evidence_ege_info/updateField`,
  });
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
      this.$store.dispatch('dictionary/onLoadIdentityCardCode');
      this.$store.dispatch('dictionary/onLoadOtherCountryRegion');
      this.$store.dispatch('dictionary/onLoadAddressCountryRegion');
    },
    computed: {
      ...mapState('dictionary',['addressCountryRegion']),
      ...mapGetters('dictionary',['GET_ADDRESS_COUNTRY_REGION']),
      ...tab_evidence_ege_info_fields(['tab_ege_lastname', 'tab_ege_firstname', 'tab_ege_middlename',
        'tab_ege_identityCardSeries','tab_ege_identityCardNumber','tab_ege_identityCardIssueDate',
        'tab_ege_identityCardIssueBy','tab_ege_documentNumber','tab_ege_typographyNumber', 'tab_ege_info_selectedCitizenship',
        'tab_ege_sumScores','tab_ege_score','tab_ege_selectedSubject', 'tab_ege_selectedIdentityCardCode'
      ]),
      ...tab_personal_info_fields(['tab_personal_lastname', 'tab_personal_firstname', 'tab_personal_middlename',
       'tab_personal_selectedIdentityCardCode','tab_personal_identityCardSeries','tab_personal_identityCardNumber',
        'tab_personal_identityCardIssueDate','tab_personal_identityCardIssueDep','tab_personal_identityCardIssueBy'


      ]),
      ...mapMultiRowFields(['ege_info',]),

      table_show() {
        return this.info_ege_subjects = this.ege_info;
      },

    },

    data() {
      return {

        options_subject: [
          {id: 1, item: 'Биология'},
          {id: 2, item: 'Русский язык'},
          {id: 3, item: 'Химия'},
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


        // headers_ege_evidence: [
        //   {text: '№', value: 'ege_evidence_number', sortable: false, align: 'center'},
        //   {text: 'Дата выдачи', value: 'ege_evidence_date', sortable: false, align: 'center'},
        //   {text: 'Типограф.а №', value: 'ege_evidence_t_number', sortable: false, align: 'center'},
        //   {text: 'Сумма баллов', value: 'ege_evidence_score', sortable: false, align: 'center'},
        //   {text: 'Коп/ориг.', value: 'ege_evidence_copy_origin', sortable: false, align: 'center'},
        //   {text: 'Предоставлено', value: 'ege_evidence_date_show', sortable: false, align: 'center'},
        //   {text: 'Форма ЕГЭ', value: 'ege_evidence_form_ege', sortable: false, align: 'center'},
        //   {text: 'Место проведения', value: 'ege_evidence_place_ege', sortable: false, align: 'center'},
        //   {text: 'Год', value: 'ege_evidence_year_ege', sortable: false, align: 'center'},
        //   {text: 'Статус', value: 'ege_evidence_date_status', sortable: false, align: 'center'}
        //
        // ],
        // info_ege_evidence: [],

        headers_ege_subjects: [
          {text: 'Предмет', value: 'tab_ege_selectedSubject', sortable: false, align: 'center'},
          {text: 'Балл', value: 'tab_ege_score', sortable: false, align: 'center'},
          {text: 'Балл(ФИС)', value: 'ege_ball_2', sortable: false, align: 'center'},
          {text: 'Статус апелляция', value: 'ege_appeal_status', sortable: false, align: 'center'},
          {text: 'Действия', value: 'actions', sortable: false, align: 'center'}
        ],
        info_ege_subjects: [],
      }
    },

    methods: {
      onInfo(){
        location.href='profile#ege_info';
      },
      onDelete(item) {
        const index = this.info_ege_subjects.indexOf(item);
        console.log(index);
        this.info_ege_subjects.splice(index,1);

      },
      onClearFields() {
        this.tab_ege_lastname = '';
        this.tab_ege_firstname = '';
        this.tab_ege_middlename = '';
        this.tab_ege_identityCardSeries = '';
        this.tab_ege_identityCardNumber = '';
        this.tab_ege_identityCardIssueDate = '';
        this.tab_ege_identityCardIssueBy = '';
        this.tab_ege_selectedIdentityCardCode = '';
    //TODO other fields





      },
      onAddEge() {
        function Ege(ege_lastname,ege_firstname,ege_middlename,ege_identityCardSeries,
                     ege_identityCardNumber,ege_identityCardIssueDate,ege_identityCardIssueBy,
                     ege_selectedIdentityCardCode,ege_selectedSubject, ege_score) {
          this.tab_ege_lastname = ege_lastname;
          this.tab_ege_firstname = ege_firstname;
          this.tab_ege_middlename = ege_middlename;
          this.tab_ege_identityCardSeries = ege_identityCardSeries;
          this.tab_ege_identityCardNumber = ege_identityCardNumber;
          this.tab_ege_identityCardIssueDate = ege_identityCardIssueDate;
          this.tab_ege_identityCardIssueBy = ege_identityCardIssueBy;
          this.tab_ege_selectedIdentityCardCode = ege_selectedIdentityCardCode;
          this.tab_ege_selectedSubject = ege_selectedSubject;
          this.tab_ege_score = ege_score

        }
        var ege = new Ege(
          this.tab_ege_lastname, this.tab_ege_firstname, this.tab_ege_middlename,
          this.tab_ege_identityCardSeries, this.tab_ege_identityCardNumber, this.tab_ege_identityCardIssueDate,
          this.tab_ege_identityCardIssueBy, this.tab_ege_selectedIdentityCardCode, this.tab_ege_selectedSubject,
          this.tab_ege_score,
        );
        location.href='profile#ege_overview';
        this.ege_info.push(ege);
        console.log(this.ege_info)

      },
      onCopyInfoFromProfileTab() {
        this.tab_ege_lastname = this.tab_personal_lastname;
        this.tab_ege_firstname =  this.tab_personal_firstname;
        this.tab_ege_middlename =  this.tab_personal_middlename;
        this.tab_ege_identityCardSeries = this.tab_personal_identityCardSeries;
        this.tab_ege_identityCardNumber = this.tab_personal_identityCardNumber;
        this.tab_ege_identityCardIssueDate = this.tab_personal_identityCardIssueDate;
        this.tab_ege_identityCardIssueBy = this.tab_personal_identityCardIssueBy;
        this.tab_ege_selectedIdentityCardCode = this.tab_personal_selectedIdentityCardCode;

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


  .clear_save_button {
    /*margin-top: 30%;*/
    /*margin-left: 65%;*/
    display: flex;
    justify-content: flex-end;
  }

  label.row {
    margin-bottom: 3px;
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
