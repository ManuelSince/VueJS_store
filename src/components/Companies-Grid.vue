<template>
    <div class="companies-grid">
      <ColumnSelection v-if="isColumnSelected" :columns="columns"/>
      <Loading v-if="loading" />
      <CompaniesGridHeader v-if="!loading" :columns="columns"/>
      <Filters v-if="!loading" :columns="columns"/>
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
import { mapGetters } from 'vuex'

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
      isExpandCompany: ''
    }
  },
  methods: {
    setExpandCompany (name) {
      console.log(name)
      this.isExpandCompany = name
    }
  },
  created () {
    this.$store.dispatch('companies/getAllCompanies')
  }
}
</script>
<style scoped lang="scss" >

</style>
