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
    tab_edu_military_selectedCountryRegion: { "countryRegionId": "РФ", "name": "Россия" },
    tab_edu_military_selectedState: '',
    tab_edu_military_selectedAcademyYear: '',
    tab_edu_military_selectedDocType:'',

    extraInfosDescription1:'',
    extraInfosDescription2:'',
    extraInfosDescription3:'',
    extraInfosDescription4:'',

    selectedExtraInfos1:'',
    selectedExtraInfos2:'',
    selectedExtraInfos3:'',
    selectedExtraInfos4:'',
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
