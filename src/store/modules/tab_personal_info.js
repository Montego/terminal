export default {
  namespaced: true,
  state: {
    form: {},
    snp:'',
    surname:'',
    name:'',
    patronymic:'',
    surname_genitive:'',
    name_genitive:'',
    patronymic_genitive:'',
    snp_genitive:'',
    gender:[],
    birthday:'',
    age:'',
    snils:'',
    snils_date:'',
    note:'',

    doc_type:[],
    doc_serial:'',
    doc_number:'',
    doc_issued_by:'',
    doc_issued_date:'',
    doc_code_unit:'',

    citizenship: [],
    compatriot: false,
    equate_foreign: false,
    birth_place:'',
    hostel: false,
    foreign_like_russian: false,

    home_phone_number:'',
    mobile_number: '',
    email: '',
    organization_name: '',
    organization_address: '',
    organization_profession: '',
    seniority: '',
    seniority_year: '',
    seniority_month: '',
    seniority_day: '',

    foreign_language: [],
    language_name: [],
    language_score: ''
  },
  getters: {
    form (state) {
      return state.form
    }
  },
  mutations: {},
  actions: {},
  computed: {}
}
