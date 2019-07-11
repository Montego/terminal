import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    tab_reception_condition_faculty:'',
    tab_reception_condition_speciality:'',
    tab_reception_condition_educationType:'',
    tab_reception_condition_educationForm:'',
    tab_reception_condition_specialRight:'',
    tab_reception_condition_consent:'',

    selected_faculty:'',
    selected_speciality:'',
    selected_educationType:'',
    selected_agreement:'',
    date_agreement:'',
    selected_specialRight:'',
    selected_typeOfSpecialRight:'',

    documentBase64: '',
    proof_special_right:'',
    proof_special_right_serial:'',
    proof_special_right_number:'',
    condition_selectedDocType:'',
    tab_reception_condition_allConditions:[],

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
