<template>
    <div class="companies-grid">
      <ColumnSelection v-if="isColumnSelected" :columns="columns" />
      <Loading v-if="loading" />
      <div :class="{ fixed: fixedOrderPanel }">
        <CompaniesGridHeader v-if="!loading" :columns="columns"/>
        <Filters v-if="!loading" :columns="columns"/>
      </div>
      <CompanyCell v-for="company in companies" :key="company.name" :company="company" :columns="columns" />
      <Paginator v-if="!loading" :length="companies.length" />
    </div>
</template>
<script>
import Loading from '@/components/Loading'
import ColumnSelection from '@/components/Columns-Selection'
import Filters from '@/components/Filters'
import CompaniesGridHeader from '@/components/Companies-Grid-Header'
import CompanyCell from '@/components/Company-Cell'
import Paginator from '@/components/Paginator'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'commpanies-grid',
  components: { Loading, ColumnSelection, CompanyCell, CompaniesGridHeader, Filters, Paginator },
  props: ['companies', 'columns'],
  computed: {
    ...mapGetters(['navitems']),
    ...mapGetters('companies', { loading: 'loading' }),
    ...mapGetters('companies', { isColumnSelected: 'isColumnSelection' })
  },
  data () {
    return {
      isExpandCompany: '',
      fixedOrderPanel: false
    }
  },
  methods: {
    ...mapActions('companies', ['isColumnSelection']),
    setExpandCompany (name) {
      console.log(name)
      this.isExpandCompany = name
    },
    handleScroll: function () {
      const checkWindow = window !== undefined && window.scrollY
      if (checkWindow && window.scrollY > 160) {
        this.fixedOrderPanel = true
      } else {
        this.fixedOrderPanel = false
      }
    }
  },
  watch: {
    fixedOrderPanel: function (val) {
      if (window.scrollY > 160) {
        this.fixedOrderPanel = true
      } else {
        this.fixedOrderPanel = false
      }
    }
  },
  destroyed: function () {
    document.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll)
  },
  created () {
    this.$store.dispatch('companies/getAllCompanies')
  }
}
</script>
<style scoped lang="scss" >
.fixed{
  position: fixed;
  z-index: 999;
  top: -30px;
  padding: 1%;
 }
</style>
