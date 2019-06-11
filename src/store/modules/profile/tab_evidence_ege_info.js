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

    tab_ege_documentNumber:'',
    tab_ege_typographyNumber:'',
    tab_ege_sumScores: '',
    ege_info:[],

    tab_ege_info_selectedCitizenship:'',
    tab_ege_score:'',
    // tab_ege_score2:'',
    // tab_ege_score3:'',

    tab_ege_selectedSubject: '',
    // tab_ege_selectedSubject2: '',
    // tab_ege_selectedSubject3: '',
    tab_ege_selectedIdentityCardCode: '',

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
  }
}
