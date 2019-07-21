import {getField, updateField} from "vuex-map-fields";

export default {
  namespaced: true,
  state: {
    tab_features_selectedAttrType:'',
    tab_features_selectedPreference:'',
    tab_features_selectedPreferencePoint: '',
    tab_features_selectedTypeDiploma:'',
    doc1:'',
    doc1_serial:'',
    doc1_number:'',
    tab_features_selectedDocType1:  {"id":0,"name":"Копия"},
    tab_featuresShowDate1:'',
    doc1_IssuDate:'',
    doc1_IssueBy:'',
    doc1_full_info:'',
    doc2:'',
    doc2_serial:'',
    doc2_number:'',
    tab_features_selectedDocType2:  {"id":0,"name":"Копия"},
    tab_featuresShowDate2:'',
    doc2_IssuDate:'',
    doc2_IssueBy:'',
    doc2_full_info:'',
    doc3:'',
    doc3_serial:'',
    doc3_number:'',
    tab_features_selectedDocType3:  {"id":0,"name":"Копия"},
    tab_featuresShowDate3:'',
    doc3_IssuDate:'',
    doc3_IssueBy:'',
    doc3_full_info:'',

    // tab_features_serial:'',
    // tab_features_number:''
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
