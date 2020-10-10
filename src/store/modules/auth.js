import shop from '../../api/store'
import Tools from '../../common/Tools'

// initial state
const state = () => ({
  isAuthModal: '',
  user: { lastname: 'since', firstname: 'manuel', email: 'manuelsince@gmail.com' }
})

// getters
const getters = {
  isAuthModal: (state) => state.isAuthModal,
  user: (state) => state.user
}

// mutations
const mutations = {
  isAuthModal (state, payload) {
    state.isAuthModal = payload
  },
  signin (state, payload) {
    state.user = payload
  },
  signup (state, payload) {
    state.user = payload
  }
}

// actions
const actions = {
  setIsAuthModal ({ commit }, payload) {
    commit('isAuthModal', payload)
  },
  signin ({ commit }, payload) {
  },
  signup ({ commit }, payload) {
    console.log(Tools)
    shop.login(payload).then(isUser => commit('sigup', payload))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
