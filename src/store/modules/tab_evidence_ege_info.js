export default {
  namespaced: true,
  state: {
    // lastname_evidence_ege: 'test test ege'
    name:'',

  },
  getters: {
      GET_NAME: (state) => {
        return state.name
      },
    },
  mutations: {
    SET_NAME: (state, payload) => {
      state.name = payload
    }
  }
  ,

  actions: {
    ON_UPDATE_NAME({commit}, payload){
      commit('SET_NAME',payload)
    },

    test(){
      'console.log(‘we trust in god’)';
    },
    Test({commit}){
      Console.log('tatatat');
    }

    // ON_UPDATE_NAME (context, payload) {
    //   context.commit('SET_NAME', payload)
    // },
  },

  // getters: {
  //   GET_LASTNAME_EVIDENCE_EGE: (state) => {
  //     return state.lastname_evidence_ege
  //   },
  // },

  // mutations: {
  //   UPDATE_LASTNAME_EVIDENCE_EGE: (state, payload) => {
  //     state.lastname_evidence_ege = payload
  //   },
  // },
  // actions: {
  //   // ON_SET_LASTNAME_EVIDENCE_EGE (context, payload) {
  //   //   context.commit('SET_LASTNAME_EVIDENCE_EGE', payload)
  //   // },
  // },
  computed: {
  }
}
