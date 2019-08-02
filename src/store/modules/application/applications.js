import { getField, updateField } from 'vuex-map-fields';


export default {
  namespaced: true,
  state: {
    countContract: 0,
    countBudget: 0,


    agree:'',
    agreeDate:'',
    special_right:'',
    typeOfSpecialRight: null,
    proofSpecialRight1: '',
    descriptionSpecialRight1: '',
    serialSpecialRight1: '',
    numberSpecialRight1: '',
    docTypeSpecialRight1: null,
    dateSpecialRight1: '',

    proofSpecialRight2: '',
    descriptionSpecialRight2: '',
    serialSpecialRight2: '',
    numberSpecialRight2: '',
    docTypeSpecialRight2: null,
    dateSpecialRight2: '',

    // proofSpecialRight3: '',
    // descriptionSpecialRight3: '',
    // serialSpecialRight3: '',
    // numberSpecialRight3: '',
    // docTypeSpecialRight3: null,
    // dateSpecialRight3: '',


    checkTargCount: false,
    checkSpecCount: false,
    apls:[],
    chooseAppls: [],
    resultApl:{},
    application: {
      saved:'',

      application_number:'',
      application_date: '',
      application_selectedDeliveryReturnType:{"id":0,"name":"Лично"},
      application_selectedDeliveryType:{"id":0,"name":"Лично"},
      application_condition:[],
      application_documents:[],
      applicationTable:[],
      choosenWizards:[]
    },
    application_person_id:'',
    application_person_name:'',
    application_number:'',
    application_date:'',
    application_selectedDeliveryType: {"id":0,"name":"Лично"},
    application_selectedDocType:null,
    applicationId:'',

    applId:'',
    applTableName:'',
    applTableNumber:'',
    applTableDate:'',
    applTableDeliveryType:'',

    fillDocuments: [],

    name:'',
    serial:'',
    number :'',
    fullname:'',
    selected_docType:'',
    dateOfIssue:'',
    count:'',
    issuedBy:'',

    message:'',

    // applicationTable:[]
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
    now: function () {
      return Date.now()
    }
  }
}
