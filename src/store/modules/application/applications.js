import { getField, updateField } from 'vuex-map-fields';
import {AXIOS} from "../../../components/plugins/APIService";

export default {
  namespaced: true,
  state: {
    application_number:'',
    application_date:'',
    application_selectedDeliveryType:null,
    application_selectedDocType:null,
    application : {
      application_condition:[],
      application_documents:[],
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
