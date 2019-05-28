export default {
  namespaced: true,
  state: {
    lastname_evidence_ege: 'test test ege'
  },
  // getters: {
  //   GET_LASTNAME_EVIDENCE_EGE: (state) => {
  //     return state.lastname_evidence_ege
  //   },
  // },
  mutations: {
    UPDATE_LASTNAME_EVIDENCE_EGE: (state, payload) => {
      state.lastname_evidence_ege = payload
    },
  },
  actions: {
    // ON_SET_LASTNAME_EVIDENCE_EGE (context, payload) {
    //   context.commit('SET_LASTNAME_EVIDENCE_EGE', payload)
    // },
  },
  computed: {
  }
}
