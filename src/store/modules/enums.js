import {AXIOS} from "../../components/plugins/APIService.js"

export default {
  namespaced: true,
  state: {
    gender: [],
    langInfo: [],
    // language_name: [],
    accreditationDocType: [],
    deliveryType: [],
    docType: [],
    educationLevel: [],
    eduCrimea: [],
    examForm: [],
    isAccreditationLikeExam: [],
    isDublicate: [],
    isForeigners: [],
    isHotel: [],
    languageLevel: [],
    militaryDocType: [],
    militaryFormDoc: [],
    soldieryStatus: [],
    typeDiploma: [],
  },
  getters: {

    GET_GENDER: state => {
      return state.gender;
    },


    GET_LANGINFO: state => {
      return state.langInfo;
    },
    // GET_LANGUAGE_NAME: state => {
    //   return state.language_name;
    // },
    GET_ACCREDITATION_DOC_TYPE: state => {
      return state.accreditationDocType;
    },
    GET_DELIVERY_TYPE: state => {
      return state.deliveryType;
    },
    GET_DOC_TYPE: state => {
      return state.docType;
    },
    GET_EDUCATION_LEVEL: state => {
      return state.educationLevel;
    },
    GET_EDU_CRIMEA: state => {
      return state.eduCrimea;
    },
    GET_EXAM_FORM: state => {
      return state.examForm;
    },
    GET_IS_ACCREDITATION_LIKE_EXAM: state => {
      return state.isAccreditationLikeExam;
    },
    GET_IS_DUBLICATE: state => {
      return state.isDublicate;
    },
    GET_IS_FOREIGNERS: state => {
      return state.isForeigners;
    },
    GET_IS_HOTEL: state => {
      return state.isHotel;
    },
    GET_LANGUAGE_LEVEL: state => {
      return state.languageLevel;
    },
    GET_MILITARY_DOC_TYPE: state => {
      return state.militaryDocType;
    },
    GET_MILITARY_FORM_DOC: state => {
      return state.militaryFormDoc;
    },
    GET_SOLDIERY_STATUS: state => {
      return state.soldieryStatus;
    },
    GET_TYPE_DIPLOMA: state => {
      return state.typeDiploma;
    },

  },
  mutations: {

    UPLOAD_GENDER(state, payload) {
      state.gender = payload
    },


    UPLOAD_LANG_INFO(state, payload) {
      state.langInfo = payload
    },
    // UPLOAD_LANGUAGE_NAME(state, payload) {
    //   state.language_name = payload
    // },
    UPLOAD_ACCREDITATION_DOC_TYPE(state, payload) {
      state.accreditationDocType = payload
    },
    UPLOAD_DELIVERY_TYPE(state, payload) {
      state.deliveryType = payload
    },
    UPLOAD_DOC_TYPE(state, payload) {
      state.docType = payload
    },
    UPLOAD_EDUCATION_LEVEL(state, payload) {
      state.educationLevel = payload
    },
    UPLOAD_EDU_CRIMEA(state, payload) {
      state.eduCrimea = payload
    },
    UPLOAD_EXAM_FORM(state, payload) {
      state.examForm = payload
    },
    UPLOAD_IS_ACCREDITATION_LIKE_EXAM(state, payload) {
      state.isAccreditationLikeExam = payload
    },
    UPLOAD_IS_DUBLICATE(state, payload) {
      state.isDublicate = payload
    },
    UPLOAD_IS_FOREIGNERS(state, payload) {
      state.isForeigners = payload
    },
    UPLOAD_IS_HOTEL(state, payload) {
      state.isHotel = payload
    },
    UPLOAD_LANGUAGE_LEVEL(state, payload) {
      state.languageLevel = payload
    },
    UPLOAD_MILITARY_DOC_TYPE(state, payload) {
      state.militaryDocType = payload
    },
    UPLOAD_MILITARY_FORM_DOC(state, payload) {
      state.militaryFormDoc = payload
    },
    UPLOAD_SOLDIERY_STATUS(state, payload) {
      state.soldieryStatus = payload
    },
    UPLOAD_TYPE_DIPLOMA(state, payload) {
      state.typeDiploma = payload
    },

  },
  actions: {

    onLoadGender({commit}) {
      AXIOS.get('/enums/gender')
      // AXIOS.get('/json/gender')
        .then((response) => {
          commit('UPLOAD_GENDER', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },

    onLoadLangInfo({commit}) {
      AXIOS.get('/enums/langInfo')
      // AXIOS.get('/json/langInfo')
        .then((response) => {
          commit('UPLOAD_LANG_INFO', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    // onLoadLangInfo({commit}) {
    //   AXIOS.get('/enums/language_name')
    //     .then((response) => {
    //       commit('UPLOAD_LANG_INFO', response.data)
    //     }).catch(e => {
    //     this.errors.push(e)
    //   })
    // },
    onLoadAccreditationDocType({commit}) {
      AXIOS.get('/enums/accreditationDocType')
        .then((response) => {
          commit('UPLOAD_ACCREDITATION_DOC_TYPE', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadDeliveryType({commit}) {
      AXIOS.get('/enums/deliveryType')
      // AXIOS.get('/json/deliveryType')
        .then((response) => {
          commit('UPLOAD_DELIVERY_TYPE', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },

    onLoadDocType ({ commit }) {
      AXIOS.get('/enums/docType')
      // AXIOS.get('/json/docType')
        .then((response) => {
          commit('UPLOAD_DOC_TYPE', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadEducationLevel ({ commit }) {
      AXIOS.get('/enums/educationLevel')
      // AXIOS.get('/json/educationLevel')
        .then((response) => {
          commit('UPLOAD_EDUCATION_LEVEL', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },

    onLoadEduCrimea ({ commit }) {
      AXIOS.get('/enums/eduCrimea')
        .then((response) => {
          commit('UPLOAD_EDU_CRIMEA', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadExamForm ({ commit }) {
      AXIOS.get('/enums/examForm')
      // AXIOS.get('/json/examForm')
        .then((response) => {
          commit('UPLOAD_EXAM_FORM', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadIsAccreditationLikeExam ({ commit }) {
      AXIOS.get('/enums/isAccreditationLikeExam')
        .then((response) => {
          commit('UPLOAD_IS_ACCREDITATION_LIKE_EXAM', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },

    onLoadIsDublicate ({ commit }) {
      AXIOS.get('/enums/isDublicate')
        .then((response) => {
          commit('UPLOAD_IS_DUBLICATE', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadIsForeigners ({ commit }) {
      AXIOS.get('/enums/isForeigners')
        .then((response) => {
          commit('UPLOAD_IS_FOREIGNERS', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadIsHotel ({ commit }) {
      AXIOS.get('/enums/isHotel')
        .then((response) => {
          commit('UPLOAD_IS_HOTEL', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadMilitaryDocType ({ commit }) {
      AXIOS.get('/enums/militaryDocType')
        .then((response) => {
          commit('UPLOAD_MILITARY_DOC_TYPE', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadLanguageLevel ({ commit }) {
      AXIOS.get('/enums/languageLevel')
        .then((response) => {
          commit('UPLOAD_LANGUAGE_LEVEL', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadMilitaryFormDoc ({ commit }) {
      AXIOS.get('/enums/militaryFormDoc')
      // AXIOS.get('/json/militaryFormDoc')
        .then((response) => {
          commit('UPLOAD_MILITARY_FORM_DOC', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadSoldieryStatus ({ commit }) {
      AXIOS.get('/enums/soldieryStatus')
      // AXIOS.get('/json/soldieryStatus')
        .then((response) => {
          commit('UPLOAD_SOLDIERY_STATUS', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadTypeDiploma ({ commit }) {
      AXIOS.get('/enums/typeDiploma')
        .then((response) => {
          commit('UPLOAD_TYPE_DIPLOMA', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },


    // onLoadEduDoc ({ commit }) {
    //   AXIOS.get('/dictionary/eduDoc')
    //     .then((response) => {
    //       commit('UPLOAD_EDU_DOC', response.data)
    //     }).catch(e => {
    //     this.errors.push(e)
    //   })
    // },
    //
    //
    // onLoadSoldiery ({ commit }) {
    //   AXIOS.get('/dictionary/soldiery')
    //     .then((response) => {
    //       commit('UPLOAD_SOLDIERY', response.data)
    //     }).catch(e => {
    //     this.errors.push(e)
    //   })
    // },


  },
  computed: {}
}
