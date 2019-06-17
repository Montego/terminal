import {AXIOS} from "../../components/plugins/APIService.js"

export default {
  namespaced: true,
  state: {
    backendAnswers: [],
    errors: []
  },
  getters: {
    GET_PERSON: state => {
      return state.person;
    },

  },
  mutations: {
    UPLOAD_PERSON(state, payload) {
      state.person = payload
    },

  },
  actions: {


  },
  computed: {

  }
}
