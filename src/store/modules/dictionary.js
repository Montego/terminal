import {AXIOS} from "../../components/plugins/APIService.js"

export default {
  namespaced: true,
  state: {
    identityCardCode: [],
    otherCountryRegion: [],
    addressCountryRegion: [],
    addressState: [],
    academyYear: [],
    eduDoc: [],
    soldiery: [],


  },
  getters: {

    GET_IDENTITY_CARD_CODE: state => {
      return state.identityCardCode;
    },
    GET_OTHER_COUNTRY_REGION: state => {
      return state.otherCountryRegion;
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

  },
  mutations: {

    UPLOAD_IDENTITY_CARD_CODE(state, payload) {
      state.identityCardCode = payload
    },
    UPLOAD_OTHER_COUNTRY_REGION(state, payload) {
      state.otherCountryRegion = payload
    },
    UPLOAD_ADDRESS_COUNTRY_REGION(state, payload) {
      state.addressCountryRegion = payload
    },
    UPLOAD_ADDRESS_STATE(state, payload) {
      state.addressState = payload
    },
    UPLOAD_ACADEMY_YEAR(state, payload) {
      state.academyYear = payload
    },
    UPLOAD_EDU_DOC(state, payload) {
      state.eduDoc = payload
    },
    UPLOAD_SOLDIERY(state, payload) {
      state.soldiery = payload
    },

  },
  actions: {

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
    onLoadAddressCountryRegion({commit}) {
      AXIOS.get('/dictionary/addressCountryRegion')
        .then((response) => {
          commit('UPLOAD_ADDRESS_COUNTRY_REGION', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadAddressState({commit}) {
      AXIOS.get('/dictionary/addressState')
        .then((response) => {
          commit('UPLOAD_ADDRESS_STATE', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },

    onLoadAcademyYear({commit}) {
      AXIOS.get('/dictionary/academyYear')
        .then((response) => {
          commit('UPLOAD_ACADEMY_YEAR', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadEduDoc({commit}) {
      AXIOS.get('/dictionary/eduDoc')
        .then((response) => {
          commit('UPLOAD_EDU_DOC', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadSoldiery({commit}) {
      AXIOS.get('/dictionary/soldiery')
        .then((response) => {
          commit('UPLOAD_SOLDIERY', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },

  },
  computed: {}
}
