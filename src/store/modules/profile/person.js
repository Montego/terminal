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
    tab_personal_selectedGender: null,
    tab_personal_birthDate: '',
    tab_personal_INIPA: '',
    tab_personal_INIPADate: '',
    tab_personal_note: '',

    tab_personal_selectedIdentityCardCode: { "identityCardCode": "Паспорт РФ", "identityCardNamemiddle": "Паспорт РФ", "identityCardNameFull": "Паспорт РФ", "identityCardNameShort": "", "isUniversity": 1, "isMandatory_Number": 1, "isMandatory_Series": 1, "sort": 1 },
    tab_personal_identityCardSeries: '',
    tab_personal_identityCardNumber: '',
    tab_personal_identityCardIssueBy: '',
    tab_personal_identityCardIssueDate: '',
    tab_personal_identityCardIssueDep: '',
    tab_personal_selectedCitizenship: null,
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
    tab_personal_selectedForeignLanguageInfo: null,
    selected_foreignLanguageName1: null,
    language_score1: '',
    selected_foreignLanguageName2: null,
    language_score2: '',
    selected_foreignLanguageName3: null,
    language_score3: '',

    tab_address_registrationAddress: '',
    tab_address_factAddress: '',
    tab_address_templateRegistrationAddress: '',

    tab_edu_military_educationLevel: null,
    tab_edu_military_univer: '',
    tab_edu_military_selectedCountryRegion: null,
    tab_edu_military_selectedState: null,
    tab_edu_military_selectedAcademyYear: null,
    tab_edu_military_selectedEduDoc: null,
    tab_edu_military_eduDocSerial: '',
    tab_edu_military_eduDocNumber: '',
    tab_edu_military_eduDocDate: '',
    tab_edu_military_eduDocName: '',
    tab_edu_military_attachment_serial: '',
    tab_edu_military_attachment_number: '',
    averageScore: '',
    tab_edu_military_selectedSoldiery: null,
    tab_edu_military_selectedSoldieryStatus: null,
    tab_edu_military_selectedMilitaryFormDoc: null,
    tab_edu_military_militaryNumber: '',
    tab_edu_military_militarySeries: '',
    tab_edu_military_militaryIssueDate: '',
    tab_edu_military_militaryIssueBy: '',
    tab_edu_military_militaryRank: '',
    tab_edu_military_selectedDocType: null,
    tab_edu_military_docMilitaryShowDate: '',
    tab_edu_military_startMilitary: '',
    tab_edu_military_endMilitary: '',
    selectedExtraInfos1: '',
    selectedExtraInfos2: '',
    extraInfosDescription1: '',
    extraInfosDescription2: '',
    image:'',


    person : {
      person_info:[],
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
    updateCurrentField (state, payload) {
      state.person[payload.objName] = payload.value
    },
    clearCurrentField(state, objName){
      state.person[objName] = '';
    }
  },
  actions: {

  },
  computed: {

  }
}
