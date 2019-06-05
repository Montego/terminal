import { getField, updateField } from 'vuex-map-fields';
export default {
  namespaced: true,
  state: {
    tab_parent_parents:[],

    tab_parent_name: '',
    tab_parent_lastname: '',
    tab_parent_firstname: '',
    tab_parent_middlename: '',
    tab_parent_birthDate: '',
    tab_parent_homePhoneNumber: '',
    tab_parent_cellularPhone:'',
    tab_parent_factAddress: '',

    tab_parent_organization_name: '',
    tab_parent_organization_adress: '',
    tab_parent_organization_seniority: '',
    tab_parent_organization_employYears: '',

    tab_parent_selectedFamRelationShip: '',
    tab_parent_selectedGender: '',


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
