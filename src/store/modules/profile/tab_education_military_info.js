import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    tab_edu_military_educationLevel: '',
    tab_edu_military_militaryNumber: '',
    tab_edu_military_militarySeries: '',
    tab_edu_military_militaryIssueBy: '',
    tab_edu_military_militaryIssueDate: '',
    tab_edu_military_militaryRank: '',
    tab_edu_military_soldieryBegDate: '',
    tab_edu_military_soldieryEndDate: '',

    tab_edu_military_eduDocSerial:'',
    tab_edu_military_eduDocNumber:'',
    tab_edu_military_selectedEduDoc: '',
    // tab_edu_military_selectedEduLevel: '',
    tab_edu_military_selectedSoldiery: '',
    tab_edu_military_selectedSoldieryStatus: '',
    tab_edu_military_selectedMilitaryFormDoc: '',

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
