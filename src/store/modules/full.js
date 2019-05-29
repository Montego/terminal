import {AXIOS} from "../../components/plugins/APIService.js"
//
export default {
  namespaced: true,
  state: {
    //DATA from TabPersonalInfo
    name_personal_info_tab: '',
    lastname_personal_info_tab: 'test personal info',
    firstname_personal_info_tab: '',
    middlename_personal_info_tab: '',
    birthDate_personal_info_tab: '',
    age_personal_info_tab: '',
    seniority_personal_info_tab: '',
    employYears_personal_info_tab: '',
    employMonths_personal_info_tab: '',
    lastname_genitive_personal_info_tab: '',
    firstname_genitive_personal_info_tab: '',
    middlename_genitive_personal_info_tab: '',
    contactPersonNameGenitive_personal_info_tab: '',
    identityCardSeries_personal_info_tab: '',
    identityCardNumber_personal_info_tab: '',
    identityCardIssueBy_personal_info_tab: '',
    cellularPhone_personal_info_tab:'',

    selectedGender_personal_info_tab: '',
    selectedIdentityCardCode_personal_info_tab: '',
    selectedForeignLanguageInfo_personal_info_tab:'',
    //DATA from TabEvidenceEgeInfo
    lastname_evidence_ege_tab: 'test',
    firstname_evidence_ege_tab: '',
    middlename_evidence_ege_tab: '',
    identityCardSeries_evidence_ege_tab: '',
    identityCardNumber_evidence_ege_tab: '',
    identityCardIssueDate_evidence_ege_tab:'',
    identityCardIssueBy_evidence_ege_tab: '',
    documentNumber_evidence_ege_tab:'',
    typographyNumber_evidence_ege_tab:'',

    selectedSubject1: '',
    selectedSubject2: '',
    selectedSubject3: '',
    selectedIdentityCardCode: '',






    gender: [],
    identityCardCode: [],
    otherCountryRegion: [],
    langInfo: [],
    language_name: [],

  },
  getters: {
    get_lastname_personal_info_tab: (state) => {
      return state.lastname_personal_info_tab
    },

    GET_LASTNAME_PERSONAL_INFO: (state) => {
      return state.lastname_personal_info
    },

    GET_GENDER: state => {
      return state.gender;
    },
    GET_IDENTITY_CARD_CODE: state => {
      return state.identityCardCode;
    },
    GET_OTHER_COUNTRY_REGION: state => {
      return state.otherCountryRegion;
    },
    GET_LANGINFO: state => {
      return state.langInfo;
    },
    GET_LANGUAGE_NAME: state => {
      return state.language_name;
    },


  },
  mutations: {
    set_lastname_personal_info_tab: (state, payload) => {
      state.lastname_personal_info_tab = payload
    },

    SET_LASTNAME_PERSONAL_INFO: (state, payload) => {
      state.lastname_personal_info = payload
    },

    UPLOAD_GENDER(state, payload) {
      state.gender = payload
    },
    UPLOAD_IDENTITY_CARD_CODE(state, payload) {
      state.identityCardCode = payload
    },
    UPLOAD_OTHER_COUNTRY_REGION(state, payload) {
      state.otherCountryRegion = payload
    },
    UPLOAD_LANG_INFO(state, payload) {
      state.langInfo = payload
    },
    UPLOAD_LANGUAGE_NAME(state, payload) {
      state.language_name = payload
    },


  },
  actions: {
    SET_LASTNAME_PERSONAL_INFO(context, payload) {
      context.commit('SET_LASTNAME_PERSONAL_INFO', payload)
    },

    // SET_LASTNAME_PERSONAL_INFO: ({commit, state}, payload) => {
    //   commit('SET_LASTNAME_PERSONAL_INFO', payload)
    //   return state.lastname_personal_info
    // },

    onLoadGender({commit}) {
      AXIOS.get('/enums/gender')
        .then((response) => {
          commit('UPLOAD_GENDER', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadIdentityCardCode({commit}) {
      AXIOS.get('/dictionary/identityCardCode')
        .then((response) => {
          commit('UPLOAD_IDENTITY_CARD_CODE', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadOtherCountryRegion({commit}) {
      AXIOS.get('/dictionary/otherCountryRegion')
        .then((response) => {
          commit('UPLOAD_OTHER_COUNTRY_REGION', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadLangInfo({commit}) {
      AXIOS.get('/enums/langInfo')
        .then((response) => {
          commit('UPLOAD_LANG_INFO', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },

  },
  computed: {}
}
