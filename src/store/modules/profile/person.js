import {getField, updateField} from 'vuex-map-fields';


export default {
  namespaced: true,
  state: {
    agreementId: '',
    applicationId: '',
    contactPersonId: '',
    //TODO массив для проверки всех обязательных форм на заполнение и корректность
    fullValidations:[],

    personInfoSavedId: '',
    successMessage: "",
    errorMesages: [],

    showProfile: true,
    profiles: [],

    isModalAgreementVisible: false,
    isModalVisible: false,
    tab_ege_changePaspInf: false,

    tab_personal_lastname: "",
    tab_personal_firstname: '',
    tab_personal_middlename: '',
    tab_personal_lastname_genitive: '',
    tab_personal_firstname_genitive: '',
    tab_personal_middlename_genitive: '',
    tab_personal_selectedGender: {"id": 1, "name": "Мужской"},
    tab_personal_birthDate: '',
    tab_personal_INIPA: '',
    tab_personal_INIPADate: '',
    tab_personal_note: '',

    tab_personal_selectedIdentityCardCode:
      {
        "identityCardCode": "Паспорт РФ", "identityCardNamemiddle":
          "Паспорт РФ", "identityCardNameFull": "Паспорт РФ", "identityCardNameShort": "",
        "isUniversity": 1, "isMandatory_Number": 1, "isMandatory_Series": 1, "sort": 1
      },
    tab_personal_identityCardSeries: '',
    tab_personal_identityCardNumber: '',
    tab_personal_identityCardIssueBy: '',
    tab_personal_identityCardIssueDate: '',
    tab_personal_identityCardIssueDep: '',
    tab_personal_identityCardDocType: {"id": 0, "name": "Копия"},
    tab_personal_selectedCitizenship: {"countryRegionId": "РФ", "name": "Россия"},
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
    tab_personal_selectedForeignLanguageInfo: {"id": 0, "name": "Нет данных"},
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
    tab_edu_military_selectedCountryRegion: {"countryRegionId": "РФ", "name": "Россия"},
    tab_edu_military_selectedState: null,
    tab_edu_military_selectedAcademyYear: null,
    tab_edu_military_selectedEduDoc: {
      "eduDocId": "ДиплСПО",
      "name": "Диплом о среднем профессиональном образовании",
      "namePrint": "Диплом о СПО",
      "namePrintGen": "диплома СПО"
    },
    tab_edu_military_eduDocSerial: '',
    tab_edu_military_eduDocNumber: '',
    tab_edu_military_eduDocDate: '',
    tab_edu_military_eduDocName: '',
    tab_edu_military_attachment_serial: '',
    tab_edu_military_attachment_number: '',
    score_five: 0,
    score_four: 0,
    score_three: 0,
    averageScore: '',
    score_full: '',
    tab_edu_military_selectedSoldiery: {"soldieryId": "Невоеннообязанный"},
    tab_edu_military_selectedSoldieryStatus: {"id": 0, "name": "Не служил"},
    tab_edu_military_selectedMilitaryFormDoc: {"id": 0, "name": "Не определено"},
    tab_edu_military_militaryNumber: '',
    tab_edu_military_militarySeries: '',
    tab_edu_military_militaryIssueDate: '',
    tab_edu_military_militaryIssueBy: '',
    tab_edu_military_militaryRank: '',
    tab_edu_military_selectedDocType: {"id": 0, "name": "Копия"},
    tab_edu_military_docMilitaryShowDate: '',
    tab_edu_military_startMilitary: '',
    tab_edu_military_endMilitary: '',
    selectedExtraInfos1: '',
    selectedExtraInfos2: '',
    extraInfosDescription1: '',
    extraInfosDescription2: '',
    image: '',
    showimage: '',

    person_info_id: '',

    //for docTable
    docTableFullname: '',
    docTableDocType: '',
    docTableDate: '',
    docTableCount: '',

    resultAcceptPerson: '',
    saved: '',
    savedResult: '',

    documentByEduDoc: {},



    person: {
      id: '',
      axaptaIds: {},
      saved: 'Не сохранено',
      acceptedPerson: "",
      person_info: {
        fisSettlementTypeId: "",
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

        tab_personal_selectedIdentityCardCode: null,
        tab_personal_identityCardSeries: '',
        tab_personal_identityCardNumber: '',
        tab_personal_identityCardIssueBy: '',
        tab_personal_identityCardIssueDate: '',
        tab_personal_identityCardIssueDep: '',
        tab_personal_selectedCitizenship: {"countryRegionId": "РФ", "name": "Россия"},
        tab_personal_isCompatriot: false,
        tab_personal_isEquatedForeign: false,
        tab_personal_birthplace: '',
        tab_personal_isHostel: false,
        tab_personal_isForeignLikeRussian: false,
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
        score_five: '',
        score_four: '',
        score_three: '',
        averageScore: '',
        tab_edu_military_selectedSoldiery: {"soldieryId": "Невоеннообязанный"},
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
        image: '',
        acceptedPerson: '',
        saved: ''
      },

      ege_info: [
        {
          tab_ege_selectedSubject: 'Химия',
          tab_ege_score: 0,
          tab_ege_year: {
            "academyYearId": "2019",
            "description": "2019-ый учебный год",
            "beginPeriod": "2019-01-01",
            "endPeriod": "2019-12-31"
          },
          tab_ege_changePaspInf: false,
          tab_ege_lastname: '',
          tab_ege_firstname: '',
          tab_ege_middlename: '',
          tab_ege_selectedIdentityCardCode: {
            "identityCardCode": "Паспорт РФ",
            "identityCardNamemiddle": "Паспорт РФ",
            "identityCardNameFull": "Паспорт РФ",
            "identityCardNameShort": "",
            "isUniversity": 1,
            "isMandatory_Number": 1,
            "isMandatory_Series": 1,
            "sort": 1
          },
          tab_ege_identityCardSeries: '',
          tab_ege_identityCardNumber: '',
          tab_ege_identityCardIssueDate: '',
          tab_ege_identityCardIssueBy: '',
          tab_ege_info_selectedCitizenship: {"countryRegionId": "РФ", "name": "Россия"},
        },


        {
          tab_ege_selectedSubject: 'Биология',
          tab_ege_score: 0,
          tab_ege_year: {
            "academyYearId": "2019",
            "description": "2019-ый учебный год",
            "beginPeriod": "2019-01-01",
            "endPeriod": "2019-12-31"
          },
          tab_ege_changePaspInf: false,
          tab_ege_lastname: '',
          tab_ege_firstname: '',
          tab_ege_middlename: '',
          tab_ege_selectedIdentityCardCode: {
            "identityCardCode": "Паспорт РФ",
            "identityCardNamemiddle": "Паспорт РФ",
            "identityCardNameFull": "Паспорт РФ",
            "identityCardNameShort": "",
            "isUniversity": 1,
            "isMandatory_Number": 1,
            "isMandatory_Series": 1,
            "sort": 1
          },
          tab_ege_identityCardSeries: '',
          tab_ege_identityCardNumber: '',
          tab_ege_identityCardIssueDate: '',
          tab_ege_identityCardIssueBy: '',
          tab_ege_info_selectedCitizenship: {"countryRegionId": "РФ", "name": "Россия"},
        },
        {
          tab_ege_selectedSubject: 'Русский язык',
          tab_ege_score: 0,
          tab_ege_year: {
            "academyYearId": "2019",
            "description": "2019-ый учебный год",
            "beginPeriod": "2019-01-01",
            "endPeriod": "2019-12-31"
          },
          tab_ege_changePaspInf: false,
          tab_ege_lastname: '',
          tab_ege_firstname: '',
          tab_ege_middlename: '',
          tab_ege_selectedIdentityCardCode: {
            "identityCardCode": "Паспорт РФ",
            "identityCardNamemiddle": "Паспорт РФ",
            "identityCardNameFull": "Паспорт РФ",
            "identityCardNameShort": "",
            "isUniversity": 1,
            "isMandatory_Number": 1,
            "isMandatory_Series": 1,
            "sort": 1
          },
          tab_ege_identityCardSeries: '',
          tab_ege_identityCardNumber: '',
          tab_ege_identityCardIssueDate: '',
          tab_ege_identityCardIssueBy: '',
          tab_ege_info_selectedCitizenship: {"countryRegionId": "РФ", "name": "Россия"},
        }
      ],
      parents_info: [],
      futures_info: [],

      application: {
        saved: '',
        application_number: '',
        application_date: '',
        application_selectedDeliveryReturnType: {"id": 0, "name": "Лично"},
        application_selectedDeliveryType: {"id": 0, "name": "Лично"},
        application_selectedDocType: {"id": 0, "name": "Копия"},
        application_person_name: '',
        choosenWizards: [],
        application_documents: [],
      },
    }
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    updateCurrentField(state, payload) {
      state.person[payload.objName] = payload.value
    },
    clearCurrentField(state, objName) {
      state.person[objName] = '';
    }
  },
  actions: {
    // async go(ctx, payload = null){
    //   let id = payload ? payload : '852';
    //   let url = '/operator_api/profile/personByPersonInfo/' + id;
    //   let r = await AXIOS.get(url);
    //   let result = await r.data;
    //   // console.log(result);
    //   converter(r.data);
    //
    // }
  },
  computed: {
    function(state){

    }
  }
}
