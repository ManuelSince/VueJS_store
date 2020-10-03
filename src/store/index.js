import Vue from 'vue'
import Vuex from 'vuex'
import companies from './modules/companies.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navitems: [
      { name: 'companies', description: 'list', isActive: false },
      { name: 'companies charts', description: 'charts', isActive: false }
    ],
    isCompanies: false
  },
  getters: {
    navitems: (state) => { return state.navitems },
    isCompanies: (state) => { return state.isCompanies }
  },
  mutations: {
    navitems: (state, payload) => {
      state.navitems.forEach(x => {
        if (x.isActive === true) {
          x.isActive = false
        }
      })
      const index = state.navitems.findIndex(x => x.name === payload.name)
      console.log(state.navitems[index])
      state.navitems[index].isActive = true
    },
    isCompanies: (state, payload) => {
      state.isCompanies = payload
    }
  },
  actions: {
    navitem_selection ({ commit, mutations, state }, item) {
      if (item.name === 'companies') {
        commit('isCompanies', true)
      } else {
        commit('isCompanies', false)
      }
      console.log(item.name)
      commit('navitems', item)
    }
  },
  modules: {
    companies
  }
})
