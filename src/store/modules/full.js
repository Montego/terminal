import {AXIOS} from "../../components/plugins/APIService.js"
//
export default {
  namespaced: true,
  state: {
    lastname_personal_info: 'test personal info',
    gender: [],
    identityCardCode: [],
    otherCountryRegion: [],
    langInfo: [],
    language_name: [],

  },
  getters: {
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
