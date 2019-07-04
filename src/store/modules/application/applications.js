import { getField, updateField } from 'vuex-map-fields';


export default {
  namespaced: true,
  state: {
    application: {
      application_condition:[],
      application_documents:[],
    },
    application_person_id:'',
    application_person_name:'',
    application_number:'',
    application_date:'',
    application_selectedDeliveryType:null,
    application_selectedDocType:null,
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
