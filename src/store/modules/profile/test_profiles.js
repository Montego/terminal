import { getField, updateField } from 'vuex-map-fields';
export default {
  namespaced: true,
  state: {
    // profiles: [],
    // profiles: [
      // {
      //   profile_1_personal_name: '',
      //   profile_1_personal_lastname: 'Алексеев',
      //   profile_1_personal_firstname: 'Иван',
      //   profile_1_personal_middlename: 'Андреевич',
      //   profile_1_personal_selectedGender: 'Мужской',
      //   profile_1_personal_birthDate: '1991-12-11',
      //   profile_1_personal_age: '',
      //   profile_1_personal_INIPA: '333-333-333',
      //   profile_1_personal_INIPADate: '1992-05-11',
      //   profile_1_personal_note:'Какое-то примечание',
      //   profile_1_personal_selectedIdentityCardCode: 'Паспорт РФ',
      //   profile_1_personal_identityCardSeries: '4444',
      //   profile_1_personal_identityCardNumber: '666666',
      //   profile_1_personal_identityCardIssueBy: 'ТП № 28 отдела УФМС',
      //   profile_1_personal_identityCardIssueDate:'2011-12-12',
      //   profile_1_personal_identityCardIssueDep:'333-444',
      //   profile_1_personal_selectedCitizenship:'РФ',
      //   profile_1_personal_isCompatriot:false,
      //   profile_1_personal_isEquatedForeign:false,
      //   profile_1_personal_isHostel:true,
      //   profile_1_personal_isForeignLikeRussian:false,
      //
      //   profile_1_personal_homePhoneNumber: '',
      //   profile_1_personal_cellularPhone:'9110456789',
      //   profile_1_personal_email: "raf@mail.ru",
      //   profile_1_personal_seniority: 'Лаборант',
      //   profile_1_personal_employYears: '2',
      //   profile_1_personal_employMonths: '3',
      //   profile_1_personal_employDays: '5',
      //   profile_1_personal_selectedForeignLanguageInfo:'не изучал',
      //
      //   profile_1_registrationAddress: '',
      //   profile_1_factAddress: '',
      //   profile_1_templateRegistrationAddress: '',
      //
      //   profile_1_ege_lastname:'',
      //   profile_1_ege_firstname:'',
      //   profile_1_ege_middlename:'',
      //   profile_1_ege_identityCardSeries:'',
      //   profile_1_ege_identityCardNumber:'',
      //   profile_1_ege_identityCardIssueDate:'',
      //   profile_1_ege_identityCardIssueBy:'',
      //
      //   profile_1_ege_documentNumber:'',
      //   profile_1_ege_typographyNumber:'',
      //   profile_1_ege_sumScores: '',
      //   profile_1_ege_score1:'',
      //   profile_1_ege_score2:'',
      //   profile_1_ege_score3:'',
      //
      //   profile_1_ege_selectedSubject1: '',
      //   profile_1_ege_selectedSubject2: '',
      //   profile_1_ege_selectedSubject3: '',
      //   profile_1_ege_selectedIdentityCardCode: '',
      //
      //   profile_1_educationLevel: '',
      //   profile_1_militaryNumber: '',
      //   profile_1_militarySeries: '',
      //   profile_1_militaryIssueBy: '',
      //   profile_1_militaryIssueDate: '',
      //   profile_1_militaryRank: '',
      //   profile_1_soldieryBegDate: '',
      //   profile_1_soldieryEndDate: '',
      //   profile_1_eduDocSerial:'',
      //   profile_1_eduDocNumber:'',
      //   profile_1_selectedEduDoc: '',
      //   // tab_edu_military_selectedEduLevel: '',
      //   profile_1_selectedSoldiery: '',
      //   profile_1_selectedSoldieryStatus: '',
      //   profile_1_selectedMilitaryFormDoc: '',
      //
      //   profile_1_documentNumber:'',
      //   profile_1_typographyNumber:'',
      //   profile_1_sumScores: '',
      //   profile_1_selectedSubject1: '',
      //   profile_1_selectedSubject2: '',
      //   profile_1_selectedSubject3: '',
      //   profile_1_score1:'',
      //   profile_1_score2:'',
      //   profile_1_score3:'',
      //
      //   profile_1_parent_name: '',
      //   profile_1parent_lastname: '',
      //   profile_1_parent_firstname: '',
      //   profile_1_parent_middlename: '',
      //   profile_1_parent_birthDate: '',
      //   profile_1_parent_seniority: '',
      //   profile_1_parent_homePhoneNumber: '',
      //   profile_1_parent_cellularPhone:'',
      //   profile_1_parent_factAddress: '',
      //
      //   profile_1_parent_selectedFamRelationShip: '',
      //   profile_1_parent_selectedGender: '',
      // },
      // {
      //   profile_1_personal_name: '',
      //   profile_1_personal_lastname: 'Иванова',
      //   profile_1_personal_firstname: 'Александра',
      //   profile_1_personal_middlename: 'Васильевна',
      //   profile_1_personal_selectedGender: 'Женский',
      //   profile_1_personal_birthDate: '1995-05-05',
      //
      //   profile_1_personal_age: '',
      //   profile_1_personal_INIPA: '333-333-333',
      //   profile_1_personal_INIPADate: '1992-05-05',
      //   profile_1_personal_note:'Какое-то примечание',
      //   profile_1_personal_selectedIdentityCardCode: 'Паспорт РФ',
      //   profile_1_personal_identityCardSeries: '411',
      //   profile_1_personal_identityCardNumber: '666666',
      //   profile_1_personal_identityCardIssueBy: 'ТП № 28 отдела УФМС',
      //   profile_1_personal_identityCardIssueDate:'12.12.2011',
      //   profile_1_personal_identityCardIssueDep:'333-444',
      //   profile_1_personal_selectedCitizenship:'РФ',
      //   profile_1_personal_isCompatriot:false,
      //   profile_1_personal_isEquatedForeign:false,
      //   profile_1_personal_isHostel:true,
      //   profile_1_personal_isForeignLikeRussian:false,
      //
      //   profile_1_personal_homePhoneNumber: '',
      //   profile_1_personal_cellularPhone:'9110456789',
      //   profile_1_personal_email: "raf@mail.ru",
      //   profile_1_personal_seniority: 'Лаборант',
      //   profile_1_personal_employYears: '2',
      //   profile_1_personal_employMonths: '3',
      //   profile_1_personal_employDays: '5',
      //   profile_1_personal_selectedForeignLanguageInfo:'не изучал',
      //
      //   profile_1_registrationAddress: '',
      //   profile_1_factAddress: '',
      //   profile_1_templateRegistrationAddress: '',
      //
      //   profile_1_ege_lastname:'',
      //   profile_1_ege_firstname:'',
      //   profile_1_ege_middlename:'',
      //   profile_1_ege_identityCardSeries:'',
      //   profile_1_ege_identityCardNumber:'',
      //   profile_1_ege_identityCardIssueDate:'',
      //   profile_1_ege_identityCardIssueBy:'',
      //
      //   profile_1_ege_documentNumber:'',
      //   profile_1_ege_typographyNumber:'',
      //   profile_1_ege_sumScores: '',
      //   profile_1_ege_score1:'',
      //   profile_1_ege_score2:'',
      //   profile_1_ege_score3:'',
      //
      //   profile_1_ege_selectedSubject1: '',
      //   profile_1_ege_selectedSubject2: '',
      //   profile_1_ege_selectedSubject3: '',
      //   profile_1_ege_selectedIdentityCardCode: '',
      //
      //   profile_1_educationLevel: '',
      //   profile_1_militaryNumber: '',
      //   profile_1_militarySeries: '',
      //   profile_1_militaryIssueBy: '',
      //   profile_1_militaryIssueDate: '',
      //   profile_1_militaryRank: '',
      //   profile_1_soldieryBegDate: '',
      //   profile_1_soldieryEndDate: '',
      //   profile_1_eduDocSerial:'',
      //   profile_1_eduDocNumber:'',
      //   profile_1_selectedEduDoc: '',
      //   // tab_edu_military_selectedEduLevel: '',
      //   profile_1_selectedSoldiery: '',
      //   profile_1_selectedSoldieryStatus: '',
      //   profile_1_selectedMilitaryFormDoc: '',
      //
      //   profile_1_documentNumber:'',
      //   profile_1_typographyNumber:'',
      //   profile_1_sumScores: '',
      //   profile_1_selectedSubject1: '',
      //   profile_1_selectedSubject2: '',
      //   profile_1_selectedSubject3: '',
      //   profile_1_score1:'',
      //   profile_1_score2:'',
      //   profile_1_score3:'',
      //
      //   profile_1_parent_name: '',
      //   profile_1parent_lastname: '',
      //   profile_1_parent_firstname: '',
      //   profile_1_parent_middlename: '',
      //   profile_1_parent_birthDate: '',
      //   profile_1_parent_seniority: '',
      //   profile_1_parent_homePhoneNumber: '',
      //   profile_1_parent_cellularPhone:'',
      //   profile_1_parent_factAddress: '',
      //
      //   profile_1_parent_selectedFamRelationShip: '',
      //   profile_1_parent_selectedGender: '',
      // },
      // {
      //   profile_1_personal_name: '',
      //   profile_1_personal_lastname: 'Жабенко',
      //   profile_1_personal_firstname: 'Ольга',
      //   profile_1_personal_middlename: 'Вячеславовна',
      //   profile_1_personal_selectedGender: 'Женский',
      //   profile_1_personal_birthDate: '2000-05-05',
      //
      //   profile_1_personal_age: '',
      //   profile_1_personal_INIPA: '333-333-333',
      //   profile_1_personal_INIPADate: '1992-03-04',
      //   profile_1_personal_note:'Какое-то примечание',
      //   profile_1_personal_selectedIdentityCardCode: 'Паспорт РФ',
      //   profile_1_personal_identityCardSeries: '4444',
      //   profile_1_personal_identityCardNumber: '666666',
      //   profile_1_personal_identityCardIssueBy: 'ТП № 28 отдела УФМС',
      //   profile_1_personal_identityCardIssueDate:'2011-01-01',
      //   profile_1_personal_identityCardIssueDep:'333-444',
      //   profile_1_personal_selectedCitizenship:'Казахстан',
      //   profile_1_personal_isCompatriot:true,
      //   profile_1_personal_isEquatedForeign:false,
      //   profile_1_personal_isHostel:false,
      //   profile_1_personal_isForeignLikeRussian:false,
      //
      //   profile_1_personal_homePhoneNumber: '',
      //   profile_1_personal_cellularPhone:'9110456789',
      //   profile_1_personal_email: "raf@mail.ru",
      //   profile_1_personal_seniority: 'Лаборант',
      //   profile_1_personal_employYears: '2',
      //   profile_1_personal_employMonths: '3',
      //   profile_1_personal_employDays: '5',
      //   profile_1_personal_selectedForeignLanguageInfo:'не изучал',
      //
      //   profile_1_registrationAddress: '',
      //   profile_1_factAddress: '',
      //   profile_1_templateRegistrationAddress: '',
      //
      //   profile_1_ege_lastname:'',
      //   profile_1_ege_firstname:'',
      //   profile_1_ege_middlename:'',
      //   profile_1_ege_identityCardSeries:'',
      //   profile_1_ege_identityCardNumber:'',
      //   profile_1_ege_identityCardIssueDate:'',
      //   profile_1_ege_identityCardIssueBy:'',
      //
      //   profile_1_ege_documentNumber:'',
      //   profile_1_ege_typographyNumber:'',
      //   profile_1_ege_sumScores: '',
      //   profile_1_ege_score1:'',
      //   profile_1_ege_score2:'',
      //   profile_1_ege_score3:'',
      //
      //   profile_1_ege_selectedSubject1: '',
      //   profile_1_ege_selectedSubject2: '',
      //   profile_1_ege_selectedSubject3: '',
      //   profile_1_ege_selectedIdentityCardCode: '',
      //
      //   profile_1_educationLevel: '',
      //   profile_1_militaryNumber: '',
      //   profile_1_militarySeries: '',
      //   profile_1_militaryIssueBy: '',
      //   profile_1_militaryIssueDate: '',
      //   profile_1_militaryRank: '',
      //   profile_1_soldieryBegDate: '',
      //   profile_1_soldieryEndDate: '',
      //   profile_1_eduDocSerial:'',
      //   profile_1_eduDocNumber:'',
      //   profile_1_selectedEduDoc: '',
      //   // tab_edu_military_selectedEduLevel: '',
      //   profile_1_selectedSoldiery: '',
      //   profile_1_selectedSoldieryStatus: '',
      //   profile_1_selectedMilitaryFormDoc: '',
      //
      //   profile_1_documentNumber:'',
      //   profile_1_typographyNumber:'',
      //   profile_1_sumScores: '',
      //   profile_1_selectedSubject1: '',
      //   profile_1_selectedSubject2: '',
      //   profile_1_selectedSubject3: '',
      //   profile_1_score1:'',
      //   profile_1_score2:'',
      //   profile_1_score3:'',
      //
      //   profile_1_parent_name: '',
      //   profile_1parent_lastname: '',
      //   profile_1_parent_firstname: '',
      //   profile_1_parent_middlename: '',
      //   profile_1_parent_birthDate: '',
      //   profile_1_parent_seniority: '',
      //   profile_1_parent_homePhoneNumber: '',
      //   profile_1_parent_cellularPhone:'',
      //   profile_1_parent_factAddress: '',
      //
      //   profile_1_parent_selectedFamRelationShip: '',
      //   profile_1_parent_selectedGender: '',
      // },
    // ]


    //
    // profile_1_registrationAddress: '',
    // profile_1_factAddress: '',
    // profile_1_templateRegistrationAddress: '',




    // profile_1_educationLevel: '',
    // profile_1_militaryNumber: '',
    // profile_1_militarySeries: '',
    // profile_1_militaryIssueBy: '',
    // profile_1_militaryIssueDate: '',
    // profile_1_militaryRank: '',
    // profile_1_soldieryBegDate: '',
    // profile_1_soldieryEndDate: '',
    // profile_1_eduDocSerial:'',
    // profile_1_eduDocNumber:'',
    // profile_1_selectedEduDoc: '',
    // // tab_edu_military_selectedEduLevel: '',
    // profile_1_selectedSoldiery: '',
    // profile_1_selectedSoldieryStatus: '',
    // profile_1_selectedMilitaryFormDoc: '',
    // profile_1_lastname:'',
    // profile_1_firstname:'',
    // profile_1_middlename:'',
    // profile_1_identityCardSeries:'',
    // profile_1_identityCardNumber:'',
    // profile_1_identityCardIssueDate:'',
    // profile_1_identityCardIssueBy:'',
    //
    // profile_1_documentNumber:'',
    // profile_1_typographyNumber:'',
    // profile_1_sumScores: '',
    // profile_1_score1:'',
    // profile_1_score2:'',
    // profile_1_score3:'',
    //
    // profile_1_selectedSubject1: '',
    // profile_1_selectedSubject2: '',
    // profile_1_selectedSubject3: '',
    // profile_1_selectedIdentityCardCode: '',
    // profile_1_parent_name: '',
    // profile_1parent_lastname: '',
    // profile_1_parent_firstname: '',
    // profile_1_parent_middlename: '',
    // profile_1_parent_birthDate: '',
    // profile_1_parent_seniority: '',
    // profile_1_parent_homePhoneNumber: '',
    // profile_1_parent_cellularPhone:'',
    // profile_1_parent_factAddress: '',
    //
    // profile_1_parent_selectedFamRelationShip: '',
    // profile_1_parent_selectedGender: '',



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
