import shop from '../../api/store'
import Tools from '../../common/Tools'

// initial state
const state = () => ({
  companies: [],
  pagination: {
    page: 1,
    limit: 50,
    totalPages: 0
  }
})

// getters
const getters = {
  companies: (state) => state.companies.slice(state.pagination.page - 1, state.pagination.limit),
  pagination: (state) => state.pagination
}

// mutations
const mutations = {
  setCompanies (state, companies) {
    state.companies = companies
  },
  setPaginationLimit (state, payload) {
    state.pagination.limit = payload
  }
}

// actions
const actions = {
  getAllCompanies ({ commit, state }) {
    shop.getCompanies(companies => {
      commit('setCompanies', Tools.sortedData(companies, 'name', true))
    })
  },
  setPaginationLimit ({ commit }, payload) {
    console.log('setpaginationLimit function', payload, typeof payload)
    commit('setPaginationLimit', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
