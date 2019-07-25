import {AXIOS} from "../../components/plugins/APIService.js"

export default {
  namespaced: true,
  state: {
    identityCardCode: [],
    otherCountryRegion: [],
    addressCountryRegion: [],
    addressState: [],
    academyYear: [],
    eduLevel: [],
    eduDoc: [],
    soldiery: [],
    language: [],
    preference: [],
    famRelationShip: [],
    subject: [],
    targOrg: [],
    speciality: [],
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
    GET_eduLevel: state => {
      return state.eduLevel;
    },
    GET_SOLDIERY: state => {
      return state.soldiery;
    },
    GET_LANGUAGE: state => {
      return state.language;
    },
    GET_preference: state => {
      return state.preference;
    },
    GET_famRelationShip: state => {
      return state.famRelationShip;
    },
    GET_subject: state => {
      return state.subject;
    },
    GET_targOrg: state => {
      return state.targOrg;
    },
    GET_speciality: state => {
      return state.speciality;
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
    UPLOAD_eduLevel(state, payload) {
      state.eduLevel = payload
    },
    UPLOAD_SOLDIERY(state, payload) {
      state.soldiery = payload
    },
    UPLOAD_LANGUAGE(state, payload) {
      state.language = payload
    },
    UPLOAD_preference(state, payload) {
      state.preference = payload
    },
    UPLOAD_famRelationShip(state, payload) {
      state.famRelationShip = payload
    },
    UPLOAD_subject(state, payload) {
      state.subject = payload
    },
    UPLOAD_targOrg(state, payload) {
      state.targOrg = payload
    },
    UPLOAD_speciality(state, payload) {
      state.speciality = payload
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
    // onLoadOtherCountryRegion({commit}) {
    //   AXIOS.get('/dictionary/otherCountryRegion')
    //     .then((response) => {
    //       commit('UPLOAD_OTHER_COUNTRY_REGION', response.data)
    //     }).catch(e => {
    //     this.errors.push(e)
    //   })
    // },
    onLoadAddressCountryRegion({commit}) {
      AXIOS.get('/dictionary/addressCountryRegion')
      // AXIOS.get('/json/addressCountryRegion')
        .then((response) => {
          commit('UPLOAD_ADDRESS_COUNTRY_REGION', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadAddressState({commit}) {
      AXIOS.get('/dictionary/addressState')
      // AXIOS.get('/json/addressState')
        .then((response) => {
          commit('UPLOAD_ADDRESS_STATE', response.data)
        }).catch(e => {
        this.errors.push(e)
      })

    },

    onLoadAcademyYear({commit}) {
      AXIOS.get('/dictionary/academyYear')
      // AXIOS.get('/json/acadamyYear')
        .then((response) => {
          commit('UPLOAD_ACADEMY_YEAR', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadEduLevel({commit}) {
      AXIOS.get('/dictionary/eduLevel')
      // AXIOS.get('/json/eduDoc')
        .then((response) => {
          commit('UPLOAD_eduLevel', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadEduDoc({commit}) {
      AXIOS.get('/dictionary/eduDoc')
      // AXIOS.get('/json/eduDoc')
        .then((response) => {
          commit('UPLOAD_EDU_DOC', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadSoldiery({commit}) {
      AXIOS.get('/dictionary/soldiery')
      // AXIOS.get('/json/soldiery')
        .then((response) => {
          commit('UPLOAD_SOLDIERY', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadLanguage({commit}) {
      AXIOS.get('/dictionary/language')
        .then((response) => {
          commit('UPLOAD_LANGUAGE', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadPreference({commit}) {
      AXIOS.get('/dictionary/preference')
        .then((response) => {
          commit('UPLOAD_preference', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadFamRelationShip({commit}) {
      AXIOS.get('/dictionary/famRelationShip')
        .then((response) => {
          commit('UPLOAD_famRelationShip', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadSubject({commit}) {
      AXIOS.get('/dictionary/subject')
        .then((response) => {
          commit('UPLOAD_subject', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadTargOrg({commit}) {
      AXIOS.get('/dictionary/targOrg')
        .then((response) => {
          commit('UPLOAD_targOrg', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },
    onLoadSpeciality({commit}) {
      AXIOS.get('/dictionary/speciality')
        .then((response) => {
          commit('UPLOAD_speciality', response.data)
        }).catch(e => {
        this.errors.push(e)
      })
    },

  },
  computed: {}
}
