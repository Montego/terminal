import {AXIOS} from "../../components/plugins/APIService.js"

export default {
  namespaced: true,
  state: {
    gender: [],
    langInfo: [],
    language_name: [],

  },
  getters: {

    GET_GENDER: state => {
      return state.gender;
    },

    GET_LANGINFO: state => {
      return state.langInfo;
    },
    GET_LANGUAGE_NAME: state => {
      return state.language_name;
    },


  },
  mutations: {

    UPLOAD_GENDER(state, payload) {
      state.gender = payload
    },

    UPLOAD_LANG_INFO(state, payload) {
      state.langInfo = payload
    },
    UPLOAD_LANGUAGE_NAME(state, payload) {
      state.language_name = payload
    },


  },
  actions: {

    onLoadGender({commit}) {
      AXIOS.get('/enums/gender')
        .then((response) => {
          commit('UPLOAD_GENDER', response.data)
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
