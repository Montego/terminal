import { getField, updateField } from 'vuex-map-fields';
import {AXIOS} from "../../../components/plugins/APIService";

export default {
  namespaced: true,
  state: {
    showProfile: true,
    profiles:[],
    person : {
      ege_info:[],
      parents_info:[],
      futures_info: [],
      applications:[],
      // application_condition:[],
      // application_documents:[],
    }
  },
  getters: {
    getField,

  },
  mutations: {
    updateField,

  },
  actions: {

  },
  computed: {

  }
}
