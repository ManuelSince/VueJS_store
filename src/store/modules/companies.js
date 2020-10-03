import shop from '../../api/store'
import Tools from '../../common/Tools'

// initial state
const state = () => ({
  companies: []
})

// getters
const getters = {
  companies: (state) => state.companies
}

// mutations
const mutations = {
  setCompanies (state, companies) {
    state.companies = companies
  }
}

// actions
const actions = {
  getAllCompanies ({ commit }) {
    shop.getCompanies(companies => {
      commit('setCompanies', Tools.sortedData(companies, 'name', true))
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
