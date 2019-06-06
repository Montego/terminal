import { getField, updateField } from 'vuex-map-fields';
export default {
  namespaced: true,
  state: {
    tab_address_registrationAddress: '',
    tab_address_factAddress: '',
    tab_address_templateRegistrationAddress: '',
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
