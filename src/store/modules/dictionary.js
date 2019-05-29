import {AXIOS} from "../../components/plugins/APIService.js"

export default {
  namespaced: true,
  state: {
    identityCardCode: [],
    otherCountryRegion: [],

  },
  getters: {

    GET_IDENTITY_CARD_CODE: state => {
      return state.identityCardCode;
    },
    GET_OTHER_COUNTRY_REGION: state => {
      return state.otherCountryRegion;
    },

  },
  mutations: {

    UPLOAD_IDENTITY_CARD_CODE(state, payload) {
      state.identityCardCode = payload
    },
    UPLOAD_OTHER_COUNTRY_REGION(state, payload) {
      state.otherCountryRegion = payload
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

  },
  computed: {}
}
