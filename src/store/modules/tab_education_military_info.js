import {AXIOS} from "../../components/plugins/APIService";

export default {
  namespaced: true,
  state: {
    eduLevel:[],
    addressCountryRegion: [],
    addressState: [],
    academyYear: [],
    eduDoc: [],
    soldiery: [],
    soldieryStatus: [],
    militaryFormDoc: [],
    docType: [],

  },
  getters: {
    GET_EDU_LEVEL: state => {
      return state.eduLevel;
    },
    GET_ADDRESS_COUNTRY_REGION: state => {
      return state.addressCountryRegion;
    },
    GET_ADDRESS_STATE: state => {
      return state.addressState;
    },
    GET_ACADEMY_YEAR: state => {
      return state.academyYear;
    },
    GET_EDU_DOC: state => {
      return state.eduDoc;
    },
    GET_SOLDIERY: state => {
      return state.soldiery;
    },
    GET_SOLDIERY_STATUS: state => {
      return state.soldieryStatus;
    },
    GET_MILITARY_FORM_DOC: state => {
      return state.militaryFormDoc;
    },
    GET_DOC_TYPE: state => {
      return state.docType;
    },

  },
  mutations: {
    UPLOAD_EDU_LEVEL (state, payload) {
      state.eduLevel = payload
    },
    UPLOAD_ADDRESS_COUNTRY_REGION (state, payload) {
      state.addressCountryRegion = payload
    },
    UPLOAD_ADDRESS_STATE (state, payload) {
      state.addressState = payload
    },
    UPLOAD_ACADEMY_YEAR (state, payload) {
      state.academyYear = payload
    },
    UPLOAD_EDU_DOC (state, payload) {
      state.eduDoc = payload
    },
    UPLOAD_SOLDIERY (state, payload) {
      state.soldiery = payload
    },
    UPLOAD_SOLDIERY_STATUS (state, payload) {
      state.soldieryStatus = payload
    },
    UPLOAD_MILITARY_FORM_DOC (state, payload) {
      state.militaryFormDoc = payload
    },
    UPLOAD_DOC_TYPE (state, payload) {
      state.docType = payload
    },

  },
  actions: {
    onLoadEduLevel ({ commit }) {
      AXIOS.get('/dictionary/eduLevel')
        .then((response) => {
          commit('UPLOAD_EDU_LEVEL', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadAddressCountryRegion ({ commit }) {
      AXIOS.get('/dictionary/addressCountryRegion')
        .then((response) => {
          commit('UPLOAD_ADDRESS_COUNTRY_REGION', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadAddressState ({ commit }) {
      AXIOS.get('/dictionary/addressState')
        .then((response) => {
          commit('UPLOAD_ADDRESS_STATE', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadAcademyYear ({ commit }) {
      AXIOS.get('/dictionary/academyYear')
        .then((response) => {
          commit('UPLOAD_ACADEMY_YEAR', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadEduDoc ({ commit }) {
      AXIOS.get('/dictionary/eduDoc')
        .then((response) => {
          commit('UPLOAD_EDU_DOC', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadSoldiery ({ commit }) {
      AXIOS.get('/dictionary/soldiery')
        .then((response) => {
          commit('UPLOAD_SOLDIERY', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadSoldieryStatus ({ commit }) {
      AXIOS.get('/enums/soldieryStatus')
        .then((response) => {
          commit('UPLOAD_SOLDIERY_STATUS', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadMilitaryFormDoc ({ commit }) {
      AXIOS.get('/enums/militaryFormDoc')
        .then((response) => {
          commit('UPLOAD_MILITARY_FORM_DOC', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadDocType ({ commit }) {
      AXIOS.get('/enums/docType')
        .then((response) => {
          commit('UPLOAD_DOC_TYPE', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
  },
  computed: {

  }
}
