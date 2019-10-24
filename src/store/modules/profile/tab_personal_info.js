import {getField, updateField} from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    tab_personal_name: '',
    tab_personal_lastname: '',
    tab_personal_firstname: '',
    tab_personal_middlename: '',
    tab_personal_birthDate: '',
    tab_personal_age: '',
    tab_personal_INIPA: '',
    tab_personal_INIPADate: '',
    tab_personal_note: '',
    tab_personal_seniority: '',
    tab_personal_employYears: '',
    tab_personal_employMonths: '',
    tab_personal_employDays: '',
    tab_personal_lastname_genitive: '',
    tab_personal_firstname_genitive: '',
    tab_personal_middlename_genitive: '',
    tab_personal_contactPersonNameGenitive: '',
    tab_personal_identityCardSeries: '',
    tab_personal_identityCardNumber: '',
    tab_personal_identityCardIssueDate: '',
    tab_personal_identityCardIssueDep: '',
    tab_personal_identityCardIssueBy: '',
    tab_personal_birthplace: '',
    tab_personal_homePhoneNumber: '',
    tab_personal_cellularPhone: '',
    tab_personal_email: '',

    tab_personal_isCompatriot: false,
    tab_personal_isEquatedForeign: false,
    tab_personal_isHostel: false,
    tab_personal_isForeignLikeRussian: false,

    tab_personal_selectedGender: null,
    tab_personal_selectedIdentityCardCode: null,
    tab_personal_selectedForeignLanguageInfo: null,
    tab_personal_selectedCitizenship: null,
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
  actions: {},
  computed: {}
}
