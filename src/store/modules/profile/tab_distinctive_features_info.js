import {getField, updateField} from "vuex-map-fields";

export default {
  namespaced: true,
  state: {
    tab_features_selectedAttrType:'',
    tab_features_selectedPreference:{"preferenceId":"AT002","name":"Наличие аттестата о среднем общем образовании с отличием","attrType":1,"prefType":0,"prefGroupId":"Отличник","prefDocQty":0,"educationLevel":1,"points":10,"isMultipleSelect":0,"priority":0,"olympYear":"","isManual":0,"documents":[]},
    tab_features_selectedPreferencePoint: '',
    tab_features_selectedTypeDiploma:{"id":0,"name":""},
    doc1: {},
    doc1_newName:'',
    doc1_serial:'',
    doc1_number:'',
    tab_features_selectedDocType1:  {"id":0,"name":"Копия"},
    tab_featuresShowDate1:'',
    doc1_IssuDate:'',
    doc1_IssueBy:'',
    doc1_full_info:'',
    doc2:{},
    doc2_newName:'',
    doc2_serial:'',
    doc2_number:'',
    tab_features_selectedDocType2:  {"id":0,"name":"Копия"},
    tab_featuresShowDate2:'',
    doc2_IssuDate:'',
    doc2_IssueBy:'',
    doc2_full_info:'',
    doc3:{},
    doc3_newName:'',
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
