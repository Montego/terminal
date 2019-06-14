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
    onSavePerson({ commit, dispatch }, person) {
    // this.person.lastname = this.tab_personal_lastname;
    // this.person.firstname = this.tab_personal_firstname;
    const postData = JSON.stringify(person);
    AXIOS.post(`/persons`,this.person)
    .then(response => {
      // commit('UPLOAD_PERSON', response.data)
      this.backendAnswers.push(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })
}

    // onSavePerson({ commit, dispatch }, person) {
    //   // AXIOS.get('/enums/gender')
    //   AXIOS.get('/json/gender')
    //     .then((response) => {
    //       commit('UPLOAD_GENDER', response.data)
    //     }).catch(e => {
    //     this.errors.push(e)
    //   })
    // },
  },
  computed: {

  }
}
