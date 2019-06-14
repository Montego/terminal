import { getField, updateField } from 'vuex-map-fields';
import {AXIOS} from "../../../components/plugins/APIService";

export default {
  namespaced: true,
  state: {
    info:[],
    persons:[],
    person : {}
  },
  getters: {
    getField,

  },
  mutations: {
    updateField,

  },
  actions: {
    // onSavePerson(){
    //   this.person.lastname = this.tab_personal_lastname;
    //   this.person.firstname = this.tab_personal_firstname;
    //   AXIOS.post(`/persons`,this.person)
    //     .then(response => {
    //       this.info.push(response.data)
    //     })
    //     .catch(e => {
    //       this.errors.push(e)
    //     })
    // }
  },
  computed: {

  }
}
