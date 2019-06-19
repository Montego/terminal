import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    tab_entrance_test_score:'',
    tab_entrance_test_score1:'',
    tab_entrance_test_score2:'',
    tab_entrance_test_score3:'',

    tab_entrance_test_subject: '',
    tab_entrance_test_subject1: '',
    tab_entrance_test_subject2: '',
    tab_entrance_test_subject3: '',

    ege_result: [],
    tab_entrance_ege_results: [],
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
