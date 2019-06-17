import { getField, updateField } from 'vuex-map-fields';
export default {
  namespaced: true,
  state: {
    tab_document_selectedDocumentType: '',
    tab_document_count: '',
    tab_document_series: '',
    tab_document_number: '',
    tab_document_selectedCopy: '',
    tab_document_date: '',
    tab_document_issuedBy: '',
    tab_document_fullName: '',

    tab_document_selectedDocType: null,
    document: [],
    tab_document_allDocuments: [],
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
