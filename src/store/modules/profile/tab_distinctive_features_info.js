import {getField, updateField} from "vuex-map-fields";

export default {
  namespaced: true,
  state: {
    tab_features_selectedAttrType:'',
    tab_features_selectedPreference:'',
    tab_features_selectedPreferencePoint: '',
    tab_features_selectedYypeDiploma:'',
    tab_features_selectedDocType1:'',
    tab_features_selectedDocType2:'',
    tab_features_selectedDocType3:'',
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
  actions: {},
  computed: {

  }
}
