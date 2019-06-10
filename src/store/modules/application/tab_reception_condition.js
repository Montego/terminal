import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    tab_reception_condition_faculty:'',
    tab_reception_condition_specialty:'',
    tab_reception_condition_educationType:'',
    tab_reception_condition_educationForm:'',
    tab_reception_condition_specialRight:'',
    tab_reception_condition_consent:'',

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