<template>
  <div>
    <tabs class="ege_tabs">
      <tab id="ege_overview" name="Обзор">
        <div class="row">
          <div class="col-sm">
            <v-data-table
              :headers="headers_ege_subjects"
              :items="person.ege_info"
              class="elevation-1 text-xs-center"
              hide-actions
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.item.tab_ege_selectedSubject}}</td>
                <td class="text-xs-center">
                  <!--TODO маска 65-100-->
                  <input v-if="props.item.tab_ege_score >=65 && props.item.tab_ege_score <= 100" v-model="props.item.tab_ege_score"  class="form__input col-sm-7" type="number" >
                  <input v-else v-model="props.item.tab_ege_score = 0"  class="form__input col-sm-7" type="number" >
                </td>
                <td class="text-xs-center">
                  <select  v-model="props.item.tab_ege_year" class="minimal col-sm">
                    <option v-for="item in academyYear" v-bind:value="item">
                      {{item.academyYearId}}
                    </option>
                  </select>
                </td>
                <td class="text-xs-center">
                  <input v-model="props.item.tab_ege_changePaspInf" class="checkbox col-sm" type="checkbox" >
                </td>
              </template>
              <template slot="no-data">
                <div></div>
              </template>
            </v-data-table>

          </div>
        </div>
      </tab>
      <tab id="ege_info" name="Изменение паспортных данных">
        <div class="inner_tab row">
          <div v-if="person.ege_info[0].tab_ege_changePaspInf" class="col-sm-4">
            <div>
              <p>Паспортные данные при сдаче химии</p>
            </div>
            <hr>
            <div>
              <label class="row">
                <div class="form__label-text col-sm">Фамилия:</div>
                <input  v-model="person.ege_info[0].tab_ege_lastname" class="form__input col-sm" type="text" name="lastname2" placeholder="" required />
              </label>

              <span class="alarm_label">{{ errors.first('lastname2') }}</span>

              <label class="row">
                <div class="form__label-text col-sm">Имя:</div>
                <input v-model="person.ege_info[0].tab_ege_firstname" class="form__input col-sm" type="text" name="firstname2" placeholder="" required/>
              </label>

              <span class="alarm_label">{{ errors.first('firstname2') }}</span>

              <label class="row">
                <div class="form__label-text col-sm">Отчество:</div>
                <input  v-model="person.ege_info[0].tab_ege_middlename" class="form__input col-sm" type="text" name="middlename2" placeholder=""/>
              </label>

              <span class="alarm_label">{{ errors.first('middlename2') }}</span>

              <label class="row">
                <div class="form__label-text col-sm">Документ</div>
                <select v-if="person.ege_info[0].tab_ege_changePaspInf" v-model="person.ege_info[0].tab_ege_selectedIdentityCardCode" class="minimal col-sm">
                  <option v-for="item in identityCardCode" v-bind:value="item">
                    {{item.identityCardCode}}
                  </option>
                </select>
                <select v-else v-model="person.ege_info[0].tab_ege_selectedIdentityCardCode = tab_personal_selectedIdentityCardCode" class="minimal col-sm">
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
                <input name="pspseries" v-if="tab_ege_selectedIdentityCardCode.identityCardCode === 'Паспорт РФ'" v-model="person.ege_info[0].tab_ege_identityCardSeries" class="form__input col-sm" type="text" placeholder="****" v-mask="'####'" required/>
                <input v-else v-model="person.ege_info[0].tab_ege_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial"required/>
              </label>

              <span class="alarm_label">{{ errors.first('pspseries') }}</span>
              <span class="alarm_label">{{ errors.first('doc_serial') }}</span>

              <label class="row">
                <div class="form__label-text col-sm">Номер:</div>
                <!--<input v-model="identityCardNumber" class="form__input col-sm" type="text" name="" placeholder=""/>-->
                <input name="pspnum"   v-if="tab_ege_selectedIdentityCardCode.identityCardCode == 'Паспорт РФ'" v-model="person.ege_info[0].tab_ege_identityCardNumber" class="form__input col-sm" type="text"  placeholder="******" v-mask="'######'" required/>
                <input v-else v-model="person.ege_info[0].tab_ege_identityCardNumber" class="form__input col-sm" type="text" name="doc_num"required/>
              </label>


              <span class="alarm_label">{{ errors.first('pspnum') }}</span>
              <span class="alarm_label">{{ errors.first('doc_num') }}</span>


              <label class="row">
                <div class="form__label-text col-sm">Дата выдачи:</div>
                <input v-model="person.ege_info[0].tab_ege_identityCardIssueDate" class="form__input col-sm" type="date" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm-2">Кем выдан:</div>
                <textarea v-model="person.ege_info[0].tab_ege_identityCardIssueBy" class="col-sm-10" name=""></textarea>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Гражданство:</div>

                <select v-if="person.ege_info[0].tab_ege_changePaspInf" v-model="person.ege_info[0].tab_ege_info_selectedCitizenship" class="minimal col-sm">
                  <option v-for="item in addressCountryRegion" v-bind:value="item">
                    {{item.countryRegionId}}
                  </option>
                </select>
                <select v-else v-model="person.ege_info[0].tab_ege_info_selectedCitizenship = tab_personal_selectedCitizenship" class="minimal col-sm">
                  <option v-for="item in addressCountryRegion" v-bind:value="item">
                    {{item.countryRegionId}}
                  </option>
                </select>
              </label>
              <button class="copy_address col-sm-6" @click="onCopyInfoFromProfileTab">
                Копировать из личных сведений
              </button>
            </div>
          </div>

          <div v-if="person.ege_info[1].tab_ege_changePaspInf" class="col-sm-4">
            <div>
              <p>Паспортные данные при сдаче биологии</p>
            </div>
            <hr>
            <div>
              <label class="row">
                <div class="form__label-text col-sm">Фамилия:</div>
                <input  v-model="person.ege_info[1].tab_ege_lastname" class="form__input col-sm" type="text" name="lastname2" placeholder="" required />
              </label>
              <span class="alarm_label">{{ errors.first('lastname2') }}</span>
              <label class="row">
                <div class="form__label-text col-sm">Имя:</div>
                <input v-model="person.ege_info[1].tab_ege_firstname" class="form__input col-sm" type="text" name="firstname2" placeholder="" required/>
              </label>
              <span class="alarm_label">{{ errors.first('firstname2') }}</span>
              <label class="row">
                <div class="form__label-text col-sm">Отчество:</div>
                <input  v-model="person.ege_info[1].tab_ege_middlename" class="form__input col-sm" type="text" name="middlename2" placeholder=""/>
              </label>
              <span class="alarm_label">{{ errors.first('middlename2') }}</span>
              <label class="row">
                <div class="form__label-text col-sm">Документ</div>
                <select v-if="person.ege_info[1].tab_ege_changePaspInf" v-model="person.ege_info[1].tab_ege_selectedIdentityCardCode" class="minimal col-sm">
                  <option v-for="item in identityCardCode" v-bind:value="item">
                    {{item.identityCardCode}}
                  </option>
                </select>
                <select v-else v-model="person.ege_info[1].tab_ege_selectedIdentityCardCode = tab_personal_selectedIdentityCardCode" class="minimal col-sm">
                  <option v-for="item in identityCardCode" v-bind:value="item">
                    {{item.identityCardCode}}
                  </option>
                </select>
              </label>
              <span class="alarm_label" v-if="tab_ege_selectedIdentityCardCode===''">Не выбран тип документа</span>
              <label class="row">
                <div class="form__label-text col-sm">Серия:</div>
                <input name="pspseries" v-if="tab_ege_selectedIdentityCardCode.identityCardCode === 'Паспорт РФ'" v-model="person.ege_info[1].tab_ege_identityCardSeries" class="form__input col-sm" type="text" placeholder="****" v-mask="'####'" required/>
                <input v-else v-model="person.ege_info[1].tab_ege_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial"required/>
              </label>
              <span class="alarm_label">{{ errors.first('pspseries') }}</span>
              <span class="alarm_label">{{ errors.first('doc_serial') }}</span>
              <label class="row">
                <div class="form__label-text col-sm">Номер:</div>
                <input name="pspnum" v-if="tab_ege_selectedIdentityCardCode.identityCardCode == 'Паспорт РФ'" v-model="person.ege_info[1].tab_ege_identityCardNumber" class="form__input col-sm" type="text"  placeholder="******" v-mask="'######'" required/>
                <input v-else v-model="person.ege_info[1].tab_ege_identityCardNumber" class="form__input col-sm" type="text" name="doc_num"required/>
              </label>
              <span class="alarm_label">{{ errors.first('pspnum') }}</span>
              <span class="alarm_label">{{ errors.first('doc_num') }}</span>
              <label class="row">
                <div class="form__label-text col-sm">Дата выдачи:</div>
                <input v-model="person.ege_info[1].tab_ege_identityCardIssueDate" class="form__input col-sm" type="date" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm-2">Кем выдан:</div>
                <textarea v-model="person.ege_info[1].tab_ege_identityCardIssueBy" class="col-sm-10" name=""></textarea>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Гражданство:</div>
                <select v-if="person.ege_info[1].tab_ege_changePaspInf" v-model="person.ege_info[1].tab_ege_info_selectedCitizenship" class="minimal col-sm">
                  <option v-for="item in addressCountryRegion" v-bind:value="item">
                    {{item.countryRegionId}}
                  </option>
                </select>
                <select v-else v-model="person.ege_info[1].tab_ege_info_selectedCitizenship = tab_personal_selectedCitizenship" class="minimal col-sm">
                  <option v-for="item in addressCountryRegion" v-bind:value="item">
                    {{item.countryRegionId}}
                  </option>
                </select>
              </label>
              <button class="copy_address col-sm-6" @click="onCopyInfoFromProfileTab">
                Копировать из личных сведений
              </button>
            </div>
          </div>

          <div v-if="person.ege_info[2].tab_ege_changePaspInf" class="col-sm-4">
            <div>
              <p>Паспортные данные при сдаче русского языка</p>
            </div>
            <hr>
            <div>
              <label class="row">
                <div class="form__label-text col-sm">Фамилия:</div>
                <input  v-model="person.ege_info[2].tab_ege_lastname" class="form__input col-sm" type="text" name="lastname2" placeholder="" required />
              </label>
              <span class="alarm_label">{{ errors.first('lastname2') }}</span>
              <label class="row">
                <div class="form__label-text col-sm">Имя:</div>
                <input v-model="person.ege_info[2].tab_ege_firstname" class="form__input col-sm" type="text" name="firstname2" placeholder="" required/>
              </label>
              <span class="alarm_label">{{ errors.first('firstname2') }}</span>
              <label class="row">
                <div class="form__label-text col-sm">Отчество:</div>
                <input  v-model="person.ege_info[2].tab_ege_middlename" class="form__input col-sm" type="text" name="middlename2" placeholder=""/>
              </label>
              <span class="alarm_label">{{ errors.first('middlename2') }}</span>
              <label class="row">
                <div class="form__label-text col-sm">Документ</div>
                <select v-if="person.ege_info[2].tab_ege_changePaspInf" v-model="person.ege_info[2].tab_ege_selectedIdentityCardCode" class="minimal col-sm">
                  <option v-for="item in identityCardCode" v-bind:value="item">
                    {{item.identityCardCode}}
                  </option>
                </select>
                <select v-else v-model="person.ege_info[2].tab_ege_selectedIdentityCardCode = tab_personal_selectedIdentityCardCode" class="minimal col-sm">
                  <option v-for="item in identityCardCode" v-bind:value="item">
                    {{item.identityCardCode}}
                  </option>
                </select>
              </label>
              <span class="alarm_label" v-if="person.ege_info[2].tab_ege_selectedIdentityCardCode===''">Не выбран тип документа</span>
              <label class="row">
                <div class="form__label-text col-sm">Серия:</div>
                <input name="pspseries" v-if="tab_ege_selectedIdentityCardCode.identityCardCode === 'Паспорт РФ'" v-model="person.ege_info[2].tab_ege_identityCardSeries" class="form__input col-sm" type="text" placeholder="****" v-mask="'####'" required/>
                <input v-else v-model="person.ege_info[2].tab_ege_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial"required/>
              </label>
              <span class="alarm_label">{{ errors.first('pspseries') }}</span>
              <span class="alarm_label">{{ errors.first('doc_serial') }}</span>
              <label class="row">
                <div class="form__label-text col-sm">Номер:</div>
                <!--<input v-model="identityCardNumber" class="form__input col-sm" type="text" name="" placeholder=""/>-->
                <input name="pspnum"   v-if="tab_ege_selectedIdentityCardCode.identityCardCode == 'Паспорт РФ'" v-model="person.ege_info[2].tab_ege_identityCardNumber" class="form__input col-sm" type="text"  placeholder="******" v-mask="'######'" required/>
                <input v-else v-model="person.ege_info[2].tab_ege_identityCardNumber" class="form__input col-sm" type="text" name="doc_num"required/>
              </label>
              <span class="alarm_label">{{ errors.first('pspnum') }}</span>
              <span class="alarm_label">{{ errors.first('doc_num') }}</span>
              <label class="row">
                <div class="form__label-text col-sm">Дата выдачи:</div>
                <input v-model="person.ege_info[2].tab_ege_identityCardIssueDate" class="form__input col-sm" type="date" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm-2">Кем выдан:</div>
                <textarea v-model="person.ege_info[2].tab_ege_identityCardIssueBy" class="col-sm-10" name=""></textarea>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Гражданство:</div>
                <select v-if="person.ege_info[2].tab_ege_changePaspInf" v-model="person.ege_info[2].tab_ege_info_selectedCitizenship" class="minimal col-sm">
                  <option v-for="item in addressCountryRegion" v-bind:value="item">
                    {{item.countryRegionId}}
                  </option>
                </select>
                <select v-else v-model="person.ege_info[2].tab_ege_info_selectedCitizenship = tab_personal_selectedCitizenship" class="minimal col-sm">
                  <option v-for="item in addressCountryRegion" v-bind:value="item">
                    {{item.countryRegionId}}
                  </option>
                </select>
              </label>
              <button class="copy_address col-sm-6" @click="onCopyInfoFromProfileTab">
                Копировать из личных сведений
              </button>
            </div>
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


  export default {
    name: "TabEvidenceEge",
    mounted () {
      this.$store.dispatch('dictionary/onLoadIdentityCardCode');
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
        'tab_edu_military_endMilitary',]),

      ...mapState('dictionary',['addressCountryRegion','identityCardCode','subject','academyYear',]),
      ...mapGetters('dictionary',['GET_ADDRESS_COUNTRY_REGION','GET_IDENTITY_CARD_CODE','GET_subject','GET_ACADEMY_YEAR']),
      ...mapState('enums',['examForm']),
      ...mapGetters('enums',['GET_EXAM_FORM']),
      ...tab_evidence_ege_info_fields(['tab_ege_lastname', 'tab_ege_firstname', 'tab_ege_middlename',
        'tab_ege_identityCardSeries','tab_ege_identityCardNumber','tab_ege_identityCardIssueDate',
        'tab_ege_identityCardIssueBy','tab_ege_documentNumber','tab_ege_typographyNumber', 'tab_ege_info_selectedCitizenship',
        'tab_ege_sumScores','tab_ege_score','tab_ege_selectedSubject', 'tab_ege_selectedIdentityCardCode',
        'tab_ege_selectedExamForm','tab_ege_year','tab_ege_score_fis', 'tab_ege_appelation','biology_score',
        'russian_score','chemistry_score','tab_ege_changePaspInf'
      ]),

      table_show() {
        return this.person.ege_info;
      },

      checkScore(value){
        if(value >= 65 && value <= 100){
          return value;
        }else{
          return 0
        }
        // return result = value && value >= 65 && value <= 100;
      }

    },

    data() {
      return {

        customTokens: {
          'Y': {pattern: /(4[5-9])/},
          'Z':{pattern: /[0-9]/}

        },
        // customTokens: {
        //   'Y': {pattern: /[0-9]/},
        //   '#': {pattern: /\d/},
        //   'X': {pattern: /[0-9a-zA-Z]/},
        //   'S': {pattern: /[a-zA-Z]/},
        //   'A': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()},
        //   'a': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()},
        //   '!': {escape: true}
        // },

        editedIndex: -1,
        editedItem:{},

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



        headers_ege_subjects: [
          {text: 'Предмет', value: 'tab_ege_selectedSubject', sortable: false, align: 'center'},
          {text: 'Балл', value: 'tab_ege_score', sortable: false, align: 'center'},
          {text: 'Год', value: 'tab_ege_year', sortable: false, align: 'center'},
          {text: 'Пасп.данные изменились', value: 'tab_ege_changePaspInf', sortable: false, align: 'center'},
          // {text: 'Балл(ФИС)', value: 'ege_ball_2', sortable: false, align: 'center'},
          // {text: 'Статус апелляция', value: 'ege_appeal_status', sortable: false, align: 'center'},
          // {text: 'Действия', value: 'actions', sortable: false, align: 'center'}
        ],
        info_ege_subjects: [],
      }
    },

    methods: {

      onDelete(item) {
        const index = this.person.ege_info.indexOf(item);
        console.log(index);
        this.person.ege_info.splice(index,1);

        // this.tests.splice(index,1);

      },

      onCopyInfoFromProfileTab() {
        let i = 0;
        for(i; i<3;i++){
          this.person.ege_info[i].tab_ege_lastname = this.tab_personal_lastname;
          this.person.ege_info[i].tab_ege_firstname =  this.tab_personal_firstname;
          this.person.ege_info[i].tab_ege_middlename =  this.tab_personal_middlename;
          this.person.ege_info[i].tab_ege_identityCardSeries = this.tab_personal_identityCardSeries;
          this.person.ege_info[i].tab_ege_identityCardNumber = this.tab_personal_identityCardNumber;
          this.person.ege_info[i].tab_ege_identityCardIssueDate = this.tab_personal_identityCardIssueDate;
          this.person.ege_info[i].tab_ege_identityCardIssueBy = this.tab_personal_identityCardIssueBy;
          this.person.ege_info[i].tab_ege_selectedIdentityCardCode = this.tab_personal_selectedIdentityCardCode;
          this.person.ege_info[i].tab_ege_info_selectedCitizenship = this.tab_personal_selectedCitizenship;
        }
      }
    }
  }
</script>

<style scoped>

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
