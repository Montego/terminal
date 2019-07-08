import {getField, updateField} from "vuex-map-fields";

export default {
  namespaced: true,
  state: {
    tab_features_selectedAttrType:'',
    tab_features_selectedPreference:'',
    tab_features_selectedPreferencePoint: '',
    tab_features_selectedTypeDiploma:'',
    doc1:'',
    tab_features_selectedDocType1: null,
    doc2:'',
    tab_features_selectedDocType2: null,
    doc3:'',
    tab_features_selectedDocType3: null,
    tab_features_serial:'',
    tab_features_number:''
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
