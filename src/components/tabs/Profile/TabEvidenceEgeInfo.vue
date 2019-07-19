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
                <td class="text-xs-center">{{ props.item.tab_ege_year}}</td>
                <!--<td class="text-xs-center">{{ props.item.ege_appeal_status}}</td>-->
                <td>
                  <button @click="onEdit(props.item)">
                    <v-icon color="#5bc0de">edit</v-icon>
                  </button>{{ props.item.actions}}
                  <button @click="onDelete(props.item)">
                    <v-icon color="#5bc0de">delete</v-icon>
                  </button>{{ props.item.actions}}

                </td>
              </template>
            </v-data-table>
          </div>
        </div>
      </tab>
      <tab id="ege_info" name="Данные для свидетельства">
        <div class="inner_tab row">

          <div class="col-sm-4">
            <div>
              <p>Предметы</p>
            </div>
            <hr>
            <label class="row">
              <div class="form__label-text col-sm">Форма ЕГЭ:</div>

              <!--<select v-model="tab_ege_selectedExamForm" class="minimal col-sm">-->
              <!--<option v-for="item in examForm" v-bind:value="item">-->
              <!--{{item.name}}-->
              <!--</option>-->
              <!--</select>-->
              <select v-model="tab_ege_selectedExamForm" class="minimal col-sm">
                <option v-for="option in options_ege">
                  {{option.item}}
                </option>
              </select>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Год сдачи:</div>
              <input v-validate="'digits:4'" data-vv-as="год сдачи" v-model="tab_ege_year" class="form__input col-sm" type="text" name="examyear" placeholder="****" v-mask="'####'"/>
            </label>

            <span class="alarm_label">{{ errors.first('examyear') }}</span>

            <label class="row">
              <div class="form__label-text col-sm">Предмет:</div>
              <!--<select v-model="tab_ege_selectedSubject" class="minimal col-sm">-->
              <!--<option v-for="item in subject" v-bind:value="item">-->
              <!--{{item.name}}-->
              <!--</option>-->
              <!--</select>-->
              <select v-model="tab_ege_selectedSubject" class="minimal col-sm" required>
                <option v-for="option in options_subject">
                  {{option.item}}
                </option>
              </select>
              <!--<input class="form__input col-sm" type="text" name="" placeholder="русский язык" disabled/>-->
            </label>
            <label class="row">
              <div class="form__label-text col-sm-6">Балл:</div>

              <input v-model="tab_ege_score" class="form__input col-sm-6" type="number"  min="50" max="100"/>
            </label>
            <hr>

            <div class="clear_save_button row">
              <button @click="onClearFields">Очистить</button>
              <button v-if="this.person.ege_info.length < 3" @click="onAddEge">Добавить</button>
              <!--<button @click="onSaveParent">Сохранить изм-я</button>-->
            </div>

            <label class="row">
              <div class="form__label-text col-sm">Паспортные данные изменились:</div>
              <input v-model="tab_ege_changePaspInf" class="checkbox col-sm" type="checkbox" id="hostel">
            </label>
          </div>

          <!---->
          <div v-if="tab_ege_changePaspInf" class="col-sm">

            <div>
              <p>Паспортные данные</p>
            </div>
            <hr>
            <div>
              <label class="row">
                <div class="form__label-text col-sm">Фамилия:</div>
                <input  v-model="tab_ege_lastname" class="form__input col-sm" type="text" name="lastname2" placeholder="" required />
              </label>

              <span class="alarm_label">{{ errors.first('lastname2') }}</span>

              <label class="row">
                <div class="form__label-text col-sm">Имя:</div>
                <input    v-model="tab_ege_firstname" class="form__input col-sm" type="text" name="firstname2" placeholder="" required/>
              </label>

              <span class="alarm_label">{{ errors.first('firstname2') }}</span>

              <label class="row">
                <div class="form__label-text col-sm">Отчество:</div>
                <input  v-model="tab_ege_middlename" class="form__input col-sm" type="text" name="middlename2" placeholder=""/>
              </label>

              <span class="alarm_label">{{ errors.first('middlename2') }}</span>

              <label class="row">
                <div class="form__label-text col-sm">Документ</div>
                <select v-model="tab_ege_selectedIdentityCardCode" class="minimal col-sm">
                  <option v-for="item in identityCardCode" v-bind:value="item">
                    {{item.identityCardCode}}
                  </option>
                </select>
                <!--<input v-model="tab_ege_selectedIdentityCardCode.identityCardCode" class="uneditable form__input col-sm-12" type="text" name="" placeholder="Заполняется автоматически"-->
                       <!--disabled="disabled"/>-->
              </label>
              <span class="alarm_label" v-if="tab_ege_selectedIdentityCardCode===''">Не выбран тип документа</span>
              <label class="row">
                <div class="form__label-text col-sm">Серия:</div>
                <input name="pspseries" v-if="tab_ege_selectedIdentityCardCode.identityCardCode === 'Паспорт РФ'" v-model="tab_ege_identityCardSeries" class="form__input col-sm" type="text" placeholder="****" v-mask="'####'" required/>
                <!--<input v-else-if="tab_ege_selectedIdentityCardCode === 'Временное удостоверение лич.граждан.РФ'" v-model="tab_ege_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial" placeholder="***-***" v-mask="'###-###'" required/>-->
                <input v-else v-model="tab_ege_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial"required/>
                <!--<input v-model="identityCardSeries" class="form__input col-sm" type="text" name="" placeholder=""/>-->
              </label>

              <span class="alarm_label">{{ errors.first('pspseries') }}</span>
              <span class="alarm_label">{{ errors.first('doc_serial') }}</span>

              <label class="row">
                <div class="form__label-text col-sm">Номер:</div>
                <!--<input v-model="identityCardNumber" class="form__input col-sm" type="text" name="" placeholder=""/>-->
                <input name="pspnum"   v-if="tab_ege_selectedIdentityCardCode.identityCardCode == 'Паспорт РФ'" v-model="tab_ege_identityCardNumber" class="form__input col-sm" type="text"  placeholder="******" v-mask="'######'" required/>
                <input v-else-if="tab_ege_selectedIdentityCardCode.identityCardCode === 'Временное удостоверение лич.граждан.РФ'" v-model="tab_ege_identityCardNumber" class="form__input col-sm" type="text" name="doc_num" placeholder="***-***-***" v-mask="'###-###-###'" required/>
                <input v-else v-model="tab_ege_identityCardNumber" class="form__input col-sm" type="text" name="doc_num"required/>
              </label>


              <span class="alarm_label">{{ errors.first('pspnum') }}</span>
              <span class="alarm_label">{{ errors.first('doc_num') }}</span>


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
                  <option v-for="item in addressCountryRegion" v-bind:value="item">
                    {{item.countryRegionId}}
                  </option>
                </select>
              </label>
              <button class="copy_address col-sm-6" @click="onCopyInfoFromProfileTab">
                Копировать из личных сведений
              </button>
              <div></div>
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
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  const { mapMultiRowFields } = createHelpers({
    getterType: `tab_evidence_ege_info/getField`,
    mutationType: `tab_evidence_ege_info/updateField`,
  });
  const { mapFields:tab_evidence_ege_info_fields } = createHelpers({
    getterType: `tab_evidence_ege_info/getField`,
    mutationType: `tab_evidence_ege_info/updateField`,
  });
  // const { mapFields:tab_personal_info_fields } = createHelpers({
  //   getterType: 'tab_personal_info/getField',
  //   mutationType: 'tab_personal_info/updateField',
  // });
  // const { mapFields:tab_entrance_tests } = createHelpers({
  //   getterType: 'tab_personal_info/getField',
  //   mutationType: 'tab_personal_info/updateField',
  // });

  export default {
    name: "TabEvidenceEge",
    mounted () {
      this.$store.dispatch('dictionary/onLoadIdentityCardCode');
      // this.$store.dispatch('dictionary/onLoadOtherCountryRegion');
      this.$store.dispatch('dictionary/onLoadAddressCountryRegion');
      this.$store.dispatch('enums/onLoadExamForm');
      this.$store.dispatch('dictionary/onLoadSubject');

    },
    computed: {
      ...person(['person','tab_personal_lastname',  'tab_personal_firstname', 'tab_personal_middlename' , 'tab_personal_lastname_genitive',
        'tab_personal_firstname_genitive','tab_personal_middlename_genitive','tab_personal_selectedGender',
        'tab_personal_birthDate', 'tab_personal_INIPA', 'tab_personal_INIPADate','tab_personal_note',
        'tab_personal_selectedIdentityCardCode','tab_personal_identityCardSeries','tab_personal_identityCardNumber',
        'tab_personal_identityCardIssueBy', 'tab_personal_identityCardIssueDate', 'tab_personal_identityCardIssueDep',
        'tab_personal_selectedCitizenship', 'tab_personal_isCompatriot', 'tab_personal_isEquatedForeign',
        'tab_personal_birthplace', 'tab_personal_isHostel','tab_personal_isForeignLikeRussian',
        'tab_personal_homePhoneNumber','tab_personal_cellularPhone','tab_personal_email','tab_personal_company_name',
        'tab_personal_company_address','tab_personal_seniority','tab_personal_employYears','tab_personal_employMonths',
        'tab_personal_employDays','tab_personal_selectedForeignLanguageInfo','selected_foreignLanguageName1',
        'language_score1','selected_foreignLanguageName2', 'language_score2','selected_foreignLanguageName3',
        'language_score3','tab_address_registrationAddress','tab_address_factAddress','tab_address_templateRegistrationAddress',
        'tab_edu_military_educationLevel','tab_edu_military_univer','tab_edu_military_selectedCountryRegion',
        'tab_edu_military_selectedState','tab_edu_military_selectedAcademyYear','tab_edu_military_selectedEduDoc',
        'tab_edu_military_eduDocSerial','tab_edu_military_eduDocNumber','tab_edu_military_eduDocDate',
        'tab_edu_military_eduDocName','tab_edu_military_attachment_serial','tab_edu_military_attachment_number',
        'averageScore,tab_edu_military_selectedSoldiery','tab_edu_military_selectedSoldieryStatus',
        'tab_edu_military_selectedMilitaryFormDoc','tab_edu_military_militaryNumber','tab_edu_military_militarySeries',
        'tab_edu_military_militaryIssueDate','tab_edu_military_militaryIssueBy','tab_edu_military_militaryRank',
        'tab_edu_military_selectedDocType','tab_edu_military_docMilitaryShowDate','tab_edu_military_startMilitary',
        'tab_edu_military_endMilitary',
      'tab_ege_changePaspInf']),

      ...mapState('dictionary',['addressCountryRegion','identityCardCode','subject']),
      ...mapGetters('dictionary',['GET_ADDRESS_COUNTRY_REGION','GET_IDENTITY_CARD_CODE','GET_subject']),
      ...mapState('enums',['examForm']),
      ...mapGetters('enums',['GET_EXAM_FORM']),
      ...tab_evidence_ege_info_fields(['tab_ege_lastname', 'tab_ege_firstname', 'tab_ege_middlename',
        'tab_ege_identityCardSeries','tab_ege_identityCardNumber','tab_ege_identityCardIssueDate',
        'tab_ege_identityCardIssueBy','tab_ege_documentNumber','tab_ege_typographyNumber', 'tab_ege_info_selectedCitizenship',
        'tab_ege_sumScores','tab_ege_score','tab_ege_selectedSubject', 'tab_ege_selectedIdentityCardCode',
        'tab_ege_selectedExamForm','tab_ege_year','tab_ege_score_fis', 'tab_ege_appelation','biology_score',
        'russian_score','chemistry_score',
      ]),
      // ...tab_personal_info_fields(['tab_personal_lastname', 'tab_personal_firstname', 'tab_personal_middlename',
      //  'tab_personal_selectedIdentityCardCode','tab_personal_identityCardSeries','tab_personal_identityCardNumber',
      //   'tab_personal_identityCardIssueDate','tab_personal_identityCardIssueDep','tab_personal_identityCardIssueBy'
      // ]),
      // ...mapMultiRowFields(['ege_info','tests']),
      // ...tab_entrance_tests(['tab_entrance_test_score', 'tab_entrance_test_subject']),
      table_show() {
        return this.person.ege_info;
      },



    },

    data() {
      return {
        editedIndex: -1,
        editedItem:{},
        customTokens: {
          // 'X': {pattern: /[5-9]/},
          // 'Y': {pattern: /[0-9]/},
          // 'Z': {pattern: /[0]/},
        },

        index_for_redaction:'',
        options_subject: [
          {id: 1, item: 'Химия'},
          {id: 2, item: 'Биология'},
          {id: 3, item: 'Русский язык'},
          ],
        options_ege: [
          {id: 1, item: 'ЕГЭ'},
          // {id: 2, item: 'Олимпиада'},
          // {id: 3, item: 'Химия'},
        ],
        // options_identityCardCode: [
        //   // {id: 0, item: '-выберите документ-'},
        //   {id: 1, item: 'ВидЖител'},
        //   {id: 2, item: 'ВоенБилет'},
        //   {id: 3, item: 'ВоенБилОфц'},
        //   {id: 4, item: 'Временное удостоверение лич.граждан.РФ'},
        //   {id: 5, item: 'ДиплПаспРФ'},
        //   {id: 6, item: 'ЗагрПасп'},
        //   {id: 7, item: 'ЗагрПаспРФ'},
        //   {id: 8, item: 'ИнострПасп'},
        //   {id: 9, item: 'НетДокум'},
        //   {id: 10, item: 'ПаспМорФл'},
        //   {id: 11, item: 'ПаспМоряка'},
        //   {id: 12, item: 'Паспорт РФ'},
        //   {id: 13, item: 'Паспорт иностранного гражданина'},
        //   {id: 14, item: 'ПРОЧЕЕ'},
        //   {id: 15, item: 'СвидБеженц'},
        //   {id: 16, item: 'СвидРожд'},
        //   {id: 17, item: 'СправОбОсв'},
        //   {id: 18, item: 'СпрУдЛичн'},
        //   {id: 19, item: 'УдЛичности'},
        //   {id: 20, item: 'УдОфицера'},
        // ],


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
          {text: 'Год', value: 'tab_ege_year', sortable: false, align: 'center'},
          // {text: 'Балл(ФИС)', value: 'ege_ball_2', sortable: false, align: 'center'},
          // {text: 'Статус апелляция', value: 'ege_appeal_status', sortable: false, align: 'center'},
          {text: 'Действия', value: 'actions', sortable: false, align: 'center'}
        ],
        info_ege_subjects: [],
      }
    },

    methods: {
      onInfo(){
        this.tab_ege_lastname = '';
        this.tab_ege_firstname = '';
        this.tab_ege_middlename = '';
        this.tab_ege_selectedIdentityCardCode = { "identityCardCode": "Паспорт РФ", "identityCardNamemiddle": "Паспорт РФ", "identityCardNameFull": "Паспорт РФ", "identityCardNameShort": "", "isUniversity": 1, "isMandatory_Number": 1, "isMandatory_Series": 1, "sort": 1 };
        this.tab_ege_identityCardSeries = '';
        this.tab_ege_identityCardNumber = '';
        this.tab_ege_identityCardIssueDate = '';
        this.tab_ege_identityCardIssueBy = '';
        this.tab_ege_info_selectedCitizenship = null;
        this.tab_ege_selectedExamForm = null;
        this.tab_ege_selectedSubject = null;
        this.tab_ege_year ='';
        this.tab_ege_changePaspInf= false;
        this.tab_ege_score = '';
        location.href='profile#ege_info';
      },
      onDelete(item) {
        const index = this.person.ege_info.indexOf(item);
        console.log(index);
        this.person.ege_info.splice(index,1);

        // this.tests.splice(index,1);

      },

      onEdit(item) {
        this.editedIndex = this.person.ege_info.indexOf(item);
        this.editedItem = Object.assign({}, item);

        const index = this.person.ege_info.indexOf(item);
        this.index_for_redaction = index;
        location.href='profile#ege_info';
        this.tab_ege_lastname = this.person.ege_info[index].tab_ege_lastname;
        this.tab_ege_firstname = this.person.ege_info[index].tab_ege_firstname;
        this.tab_ege_middlename = this.person.ege_info[index].tab_ege_middlename;
        this.tab_ege_selectedIdentityCardCode = this.person.ege_info[index].tab_ege_selectedIdentityCardCode;
        this.tab_ege_identityCardSeries = this.person.ege_info[index].tab_ege_identityCardSeries;
        this.tab_ege_identityCardNumber = this.person.ege_info[index].tab_ege_identityCardNumber;
        this.tab_ege_identityCardIssueDate = this.person.ege_info[index].tab_ege_identityCardIssueDate;
        this.tab_ege_identityCardIssueBy = this.person.ege_info[index].tab_ege_identityCardIssueBy;
        this.tab_ege_info_selectedCitizenship = this.person.ege_info[index].tab_ege_info_selectedCitizenship;
        this.tab_ege_selectedExamForm = this.person.ege_info[index].tab_ege_selectedExamForm;
        this.tab_ege_selectedSubject = this.person.ege_info[index].tab_ege_selectedSubject;
        this.tab_ege_score = this.person.ege_info[index].tab_ege_score;
        this.tab_ege_changePaspInf = this.person.ege_info[index].tab_ege_changePaspInf;
      },

      onClearFields() {
        this.tab_ege_lastname = '';
        this.tab_ege_firstname = '';
        this.tab_ege_middlename = '';
        this.tab_ege_identityCardSeries = '';
        this.tab_ege_identityCardNumber = '';
        this.tab_ege_identityCardIssueDate = '';
        this.tab_ege_identityCardIssueBy = '';
        this.tab_ege_info_selectedCitizenship = null;
        this.tab_ege_selectedExamForm = null;
        this.tab_ege_selectedSubject = null;
        this.tab_ege_score = '';
        this.tab_ege_year = '';
        this.tab_ege_changePaspInf = false;

    //TODO other fields

      },
      onAddEge() {
        if (this.editedIndex > -1) {
          console.log('its redaction ')
          console.log('its edited item' + this.editedItem.tab_ege_score)
          this.editedItem.tab_ege_lastname = this.tab_ege_lastname;
          this.editedItem.tab_ege_score = this.tab_ege_score;
          Object.assign(this.person.ege_info[this.editedIndex], this.editedItem);
          location.href='profile#ege_overview';
          // this.person.ege_info[this.editedIndex].push(this.editedItem)
        }
        else {
          function Ege(ege_lastname, ege_firstname, ege_middlename, ege_selectedIdentityCardCode,
                       ege_identityCardSeries, ege_identityCardNumber, ege_identityCardIssueDate,
                       ege_identityCardIssueBy, ege_selectedCitizenship, ege_selectedExamForm,
                       ege_year, ege_selectedSubject, ege_score, change) {
            this.tab_ege_lastname = ege_lastname;
            this.tab_ege_firstname = ege_firstname;
            this.tab_ege_middlename = ege_middlename;
            this.tab_ege_selectedIdentityCardCode = ege_selectedIdentityCardCode;
            this.tab_ege_identityCardSeries = ege_identityCardSeries;
            this.tab_ege_identityCardNumber = ege_identityCardNumber;
            this.tab_ege_identityCardIssueDate = ege_identityCardIssueDate;
            this.tab_ege_identityCardIssueBy = ege_identityCardIssueBy;
            this.tab_ege_info_selectedCitizenship = ege_selectedCitizenship;
            this.tab_ege_selectedExamForm = ege_selectedExamForm;
            this.tab_ege_year = ege_year;
            this.tab_ege_selectedSubject = ege_selectedSubject;
            this.tab_ege_score = ege_score;
            this.tab_ege_changePaspInf = change
          }

          var ege = new Ege(
            this.tab_ege_lastname, this.tab_ege_firstname, this.tab_ege_middlename, this.tab_ege_selectedIdentityCardCode,
            this.tab_ege_identityCardSeries, this.tab_ege_identityCardNumber, this.tab_ege_identityCardIssueDate,
            this.tab_ege_identityCardIssueBy, this.tab_ege_info_selectedCitizenship,
            this.tab_ege_selectedExamForm, this.tab_ege_year, this.tab_ege_selectedSubject,
            this.tab_ege_score, this.tab_ege_changePaspInf
          );


          this.person.ege_info.push(ege);
        }
        console.log(this.person.ege_info)
        console.log(this.tests)
        location.href='profile#ege_overview';
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
        this.tab_ege_info_selectedCitizenship = this.tab_personal_selectedCitizenship;
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
