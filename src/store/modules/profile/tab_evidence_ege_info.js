import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    tab_ege_lastname:'',
    tab_ege_firstname:'',
    tab_ege_middlename:'',
    tab_ege_identityCardSeries:'',
    tab_ege_identityCardNumber:'',
    tab_ege_identityCardIssueDate:'',
    tab_ege_identityCardIssueBy:'',
    tab_ege_year:'',
    tab_ege_score_fis:'',
    tab_ege_appelation:'',
    tab_ege_documentNumber:'',
    tab_ege_typographyNumber:'',
    tab_ege_sumScores: '',
    ege_info:[],

    tests: [],

    tab_ege_info_selectedCitizenship:'',
    tab_ege_score:'',

    biology_score:'',
    russian_score:'',
    chemistry_score:'',
    // tab_ege_score2:'',
    // tab_ege_score3:'',
    tab_ege_selectedExamForm: 'ЕГЭ',

    tab_ege_selectedSubject: '',
    // tab_ege_selectedSubject2: '',
    // tab_ege_selectedSubject3: '',
    tab_ege_selectedIdentityCardCode: { "identityCardCode": "Паспорт РФ", "identityCardNamemiddle": "Паспорт РФ", "identityCardNameFull": "Паспорт РФ", "identityCardNameShort": "", "isUniversity": 1, "isMandatory_Number": 1, "isMandatory_Series": 1, "sort": 1 },

  },
  getters: {

    getField,
  },
  mutations: {

    updateField,
  },

  actions: {

  },

  computed: {
    // checkBiology() {
    //   if (this.tab_ege_selectedSubject === 'Биология') {
    //     return this.biology_score = this.tab_ege_score;
    //   }
    // },
    // checkRussian() {
    //   if (this.tab_ege_selectedSubject === 'Русский язык') {
    //     return this.russian_score = this.tab_ege_score;
    //   }
    // }
    //   ,
    // checkChemistry() {
    //   if (this.tab_ege_selectedSubject==='Химия') {
    //     return this.chemistry_score = this.tab_ege_score;
    //   }
    // }

  }
}
