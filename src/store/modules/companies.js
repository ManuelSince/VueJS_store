import shop from '../../api/store'
import Tools from '../../common/Tools'

// initial state
const state = () => ({
  columns: [
    { name: 'name', prettyName: 'name', isVisible: true, type: 'text', value: '' },
    { name: 'products', prettyName: 'products', isVisible: true, type: 'computed', value: '' },
    { name: 'offices', prettyName: 'offices', isVisible: true, type: 'computed', value: '' },
    { name: 'homepage_url', prettyName: 'homepage', isVisible: true, type: 'link', value: '' },
    { name: 'tag_list', prettyName: 'tag', isVisible: true, type: 'text', value: '' },
    { name: 'category_code', prettyName: 'category', isVisible: true, type: 'text', value: '' },
    { name: 'founded_year', prettyName: 'founded', isVisible: true, type: 'text', value: '' },
    { name: 'number_of_employees', prettyName: 'employees', isVisible: true, type: 'text', value: '' },
    { name: 'description', prettyName: 'description', isVisible: true, type: 'text', value: '' },
    { name: 'investments', prettyName: 'investments', isVisible: true, type: 'computed', value: '' },
    { name: 'acquisitions', prettyName: 'acquisitions', isVisible: true, type: 'computed', value: '' },
    { name: 'funding_rounds', prettyName: 'fundings', isVisible: true, type: 'computed', value: '' },
    { name: 'providerships', prettyName: 'providers', isVisible: true, type: 'computed', value: '' },
    { name: 'competitions', prettyName: 'competitors', isVisible: true, type: 'computed', value: '' },
    { name: 'relationships', prettyName: 'relationships', isVisible: true, type: 'computed', value: '' }
    // { name: 'limit', prettyName: 'limit', isVisible: true, type: 'options', value: 50 }
  ],
  loading: false,
  companies: [],
  pagination: {
    page: 1,
    limit: 50,
    totalPages: 0
  },
  sort: {
    name: 'name',
    direction: true
  },
  isColumnSelection: false,
  filters: {}
})

// getters
const getters = {
  columns: (state) => state.columns,
  sort: (state) => state.sort,
  loading: (state) => state.loading,
  companies: (state) => {
    const companies = state.companies
    let filteredCompanies = companies
    const filters = state.filters
    console.log('page : ' + Number(state.pagination.page - 1) * Number(state.pagination.limit), 'limit :' + state.pagination.limit * state.pagination.page)
    Object.keys(filters).forEach(key => {
      console.log(String(filteredCompanies[0][key]), typeof String(filteredCompanies[0][key]))
      filteredCompanies = filteredCompanies.filter(company => String(company[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase()))
    })
    return Tools.sortedData(filteredCompanies, state.sort.name, state.sort.direction)
  },
  pagination: (state) => state.pagination,
  isColumnSelection: (state) => state.isColumnSelection
}

// mutations
const mutations = {
  setLoading (state, isLoading) {
    state.loading = isLoading
  },
  setCompanies (state, companies) {
    state.companies = companies
  },
  setPaginationLimit (state, payload) {
    state.pagination.limit = payload
  },
  setPaginationPage (state, payload) {
    state.pagination.page = payload
  },
  sortColumn (state, column) {
    if (state.sort.name === column.name) {
      state.sort.direction = !state.sort.direction
      console.log(state.sort.name, state.sort.direction)
    } else {
      state.sort.name = column.name
      state.sort.direction = false
      console.log(state.sort.name, state.sort.direction)
    }
    // state.sort.name === column.name ? (state.sort = 1; state.sort.name = column.name) : (state.sort.direction = 0)
  },
  isColumnSelection (state) {
    state.isColumnSelection = !state.isColumnSelection
  },
  isColumnActive (state, fieldName) {
    state.columns.find(field => field.name === fieldName).isVisible = !state.columns.find(field => field.name === fieldName).isVisible
  },
  setFilters (state, filters) {
    state.filters = filters
  },
  setColumnVisibility (state, columnName) {
    state.columns.filter(column => column.name === columnName).isVisible = !state.columns.filter(column => column.name === columnName).isVisible
  }
}

// actions
const actions = {
  setLoading ({ commit }, payload) {
    commit('setLoading', payload)
  },
  getAllCompanies ({ commit }) {
    commit('setLoading', true)
    shop.getCompanies(companies => {
      commit('setCompanies', companies)
      commit('setLoading', false)
    })
  },
  setPaginationLimit ({ commit }, limit) {
    // commit('setLoading', true)
    commit('setPaginationLimit', parseInt(limit))
  },
  setPaginationPage ({ commit }, page) {
    // commit('setLoading', true)
    commit('setPaginationPage', parseInt(page))
  },
  sortColumn ({ commit }, column) {
    commit('sortColumn', column)
    console.log(column.name, column.type)
  },
  columnVisibility ({ commit }, columnName) {
    commit('setColumnVisbility', columnName)
  },
  isColumnSelection ({ commit }) {
    commit('isColumnSelection')
  },
  isColumnActive ({ commit }, columnName) {
    console.log(columnName)
    commit('isColumnActive', columnName)
  },
  filters ({ commit }, payload) {
    console.log(payload, typeof payload)
    commit('setFilters', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
