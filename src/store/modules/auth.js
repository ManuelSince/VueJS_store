import shop from '../../api/store'
import Tools from '../../common/Tools'

// initial state
const state = () => ({
  isAuthModal: '',
  user: {},
  errors: {}
})

// getters
const getters = {
  isAuthModal: (state) => state.isAuthModal,
  user: (state) => state.user,
  errors: (state) => state.errors
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
  },
  errors (state, payload) {
    Object.keys(payload).forEach(key => {
      state.errors[key] = payload[key]
    })
  }
}

// actions
const actions = {
  setIsAuthModal ({ commit }, payload) {
    commit('isAuthModal', payload)
  },
  signin ({ commit }, payload) {
    console.log('vuex/auth/sigin', payload.email + ' ' + payload.password)
    shop.login(payload, response => {
      if (response) {
        console.warn(response)
        localStorage.setItem('user', response)
        commit('signin', response)
      } else {
        commit('errors', { user: 'no user found, wrong email or password' })
      }
    })
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
