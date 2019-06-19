import { getField, updateField } from 'vuex-map-fields';
import {AXIOS} from "../../../components/plugins/APIService";

export default {
  namespaced: true,
  state: {
    application_person_id:'',
    application_person_name:'',
    application_number:'',
    application_date:'',
    application_selectedDeliveryType:null,
    application_selectedDocType:null,
    contacts: {},
    application : {
      ege:[],
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
