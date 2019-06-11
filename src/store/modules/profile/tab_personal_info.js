import {AXIOS} from "../../../components/plugins/APIService.js"
import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    tab_personal_name: '',
    tab_personal_lastname: '',
    tab_personal_firstname: '',
    tab_personal_middlename: '',
    tab_personal_birthDate: '',
    tab_personal_age: '',
    tab_personal_INIPA: '',
    tab_personal_INIPADate: '',
    tab_personal_note:'',
    tab_personal_seniority: '',
    tab_personal_employYears: '',
    tab_personal_employMonths: '',
    tab_personal_employDays: '',
    tab_personal_lastname_genitive: '',
    tab_personal_firstname_genitive: '',
    tab_personal_middlename_genitive: '',
    tab_personal_contactPersonNameGenitive: '',
    tab_personal_identityCardSeries: '',
    tab_personal_identityCardNumber: '',
    tab_personal_identityCardIssueDate:'',
    tab_personal_identityCardIssueDep:'',
    tab_personal_identityCardIssueBy: '',
    tab_personal_bithplace:'',
    tab_personal_homePhoneNumber: '',
    tab_personal_cellularPhone:'',
    tab_personal_email:'',

    tab_personal_isCompatriot:false,
    tab_personal_isEquatedForeign:false,
    tab_personal_isHostel:false,
    tab_personal_isForeignLikeRussian:false,


    tab_personal_selectedGender: '',
    tab_personal_selectedIdentityCardCode: '',
    tab_personal_selectedForeignLanguageInfo:'',
    tab_personal_selectedCitizenship:'',

    // gender: [],
    // identityCardCode: [],
    // otherCountryRegion: [],
    // langInfo: [],
    // language_name: [],

  },
  getters: {
    getField,

    // GET_LASTNAME_PERSONAL_INFO: (state) => {
    //   return state.lastname_personal_info
    // },
    //
    // GET_GENDER: state => {
    //   return state.gender;
    // },
    // GET_IDENTITY_CARD_CODE: state => {
    //   return state.identityCardCode;
    // },
    // GET_OTHER_COUNTRY_REGION: state => {
    //   return state.otherCountryRegion;
    // },
    // GET_LANGINFO: state => {
    //   return state.langInfo;
    // },
    // GET_LANGUAGE_NAME: state => {
    //   return state.language_name;
    // },


  },
  mutations: {
    updateField,


    // SET_LASTNAME_PERSONAL_INFO: (state, payload) => {
    //   state.lastname_personal_info = payload
    // },
    //
    // UPLOAD_GENDER(state, payload) {
    //   state.gender = payload
    // },
    // UPLOAD_IDENTITY_CARD_CODE(state, payload) {
    //   state.identityCardCode = payload
    // },
    // UPLOAD_OTHER_COUNTRY_REGION(state, payload) {
    //   state.otherCountryRegion = payload
    // },
    // UPLOAD_LANG_INFO(state, payload) {
    //   state.langInfo = payload
    // },
    // UPLOAD_LANGUAGE_NAME(state, payload) {
    //   state.language_name = payload
    // },


  },
  actions: {
    // SET_LASTNAME_PERSONAL_INFO(context, payload) {
    //   context.commit('SET_LASTNAME_PERSONAL_INFO', payload)
    // },
    //
    // // SET_LASTNAME_PERSONAL_INFO: ({commit, state}, payload) => {
    // //   commit('SET_LASTNAME_PERSONAL_INFO', payload)
    // //   return state.lastname_personal_info
    // // },
    //

    // onLoadGender({commit}) {
    //   AXIOS.get('/json/gender')
    //     .then((response) => {
    //       commit('UPLOAD_GENDER', response.data)
    //     }).catch(e => {
    //     this.errors.push(e)
    //   })
    // },

    // onLoadGender({commit}) {
    //   AXIOS.get('/enums/gender')
    //     .then((response) => {
    //       commit('UPLOAD_GENDER', response.data)
    //     }).catch(e => {
    //     this.errors.push(e)
    //   })
    // },
    // onLoadIdentityCardCode({commit}) {
    //   AXIOS.get('/dictionary/identityCardCode')
    //     .then((response) => {
    //       commit('UPLOAD_IDENTITY_CARD_CODE', response.data)
    //     }).catch(e => {
    //     this.errors.push(e)
    //   })
    // },
    // onLoadOtherCountryRegion({commit}) {
    //   AXIOS.get('/dictionary/otherCountryRegion')
    //     .then((response) => {
    //       commit('UPLOAD_OTHER_COUNTRY_REGION', response.data)
    //     }).catch(e => {
    //     this.errors.push(e)
    //   })
    // },
    // onLoadLangInfo({commit}) {
    //   AXIOS.get('/enums/langInfo')
    //     .then((response) => {
    //       commit('UPLOAD_LANG_INFO', response.data)
    //     }).catch(e => {
    //     this.errors.push(e)
    //   })
    // },

  },
  computed: {}
}
