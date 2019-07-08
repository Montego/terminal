import { getField, updateField } from 'vuex-map-fields';
import {AXIOS} from "../../../components/plugins/APIService";

export default {
  namespaced: true,
  state: {
    showProfile: true,
    profiles:[],

    tab_personal_lastname: "",
    tab_personal_firstname: '',
    tab_personal_middlename: '',
    tab_personal_lastname_genitive: '',
    tab_personal_firstname_genitive: '',
    tab_personal_middlename_genitive: '',
    tab_personal_selectedGender: '',
    tab_personal_birthDate: '',
    tab_personal_INIPA: '',
    tab_personal_INIPADate: '',
    tab_personal_note: '',

    tab_personal_selectedIdentityCardCode: '',
    tab_personal_identityCardSeries: '',
    tab_personal_identityCardNumber: '',
    tab_personal_identityCardIssueBy: '',
    tab_personal_identityCardIssueDate: '',
    tab_personal_identityCardIssueDep: '',
    tab_personal_selectedCitizenship: '',
    tab_personal_isCompatriot: '',
    tab_personal_isEquatedForeign: '',
    tab_personal_birthplace: '',
    tab_personal_isHostel: '',
    tab_personal_isForeignLikeRussian: '',
    tab_personal_homePhoneNumber: '',
    tab_personal_cellularPhone: '',
    tab_personal_email: '',
    tab_personal_company_name: '',
    tab_personal_company_address: '',
    tab_personal_seniority: '',
    tab_personal_employYears: '',
    tab_personal_employMonths: '',
    tab_personal_employDays: '',
    tab_personal_selectedForeignLanguageInfo: '',
    selected_foreignLanguageName1: '',
    language_score1: '',
    selected_foreignLanguageName2: '',
    language_score2: '',
    selected_foreignLanguageName3: '',
    language_score3: '',

    tab_address_registrationAddress: '',
    tab_address_factAddress: '',
    tab_address_templateRegistrationAddress: '',

    tab_edu_military_educationLevel: '',
    tab_edu_military_univer: '',
    tab_edu_military_selectedCountryRegion: '',
    tab_edu_military_selectedState: '',
    tab_edu_military_selectedAcademyYear: '',
    tab_edu_military_selectedEduDoc: '',
    tab_edu_military_eduDocSerial: '',
    tab_edu_military_eduDocNumber: '',
    tab_edu_military_eduDocDate: '',
    tab_edu_military_eduDocName: '',
    tab_edu_military_attachment_serial: '',
    tab_edu_military_attachment_number: '',
    averageScore: '',
    tab_edu_military_selectedSoldiery: '',
    tab_edu_military_selectedSoldieryStatus: '',
    tab_edu_military_selectedMilitaryFormDoc: '',
    tab_edu_military_militaryNumber: '',
    tab_edu_military_militarySeries: '',
    tab_edu_military_militaryIssueDate: '',
    tab_edu_military_militaryIssueBy: '',
    tab_edu_military_militaryRank: '',
    tab_edu_military_selectedDocType: '',
    tab_edu_military_docMilitaryShowDate: '',
    tab_edu_military_startMilitary: '',
    tab_edu_military_endMilitary: '',



    person : {
      ege_info:[],
      parents_info:[],
      futures_info: [],
      applications:[],
      // application_condition:[],
      // application_documents:[],
    }
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
