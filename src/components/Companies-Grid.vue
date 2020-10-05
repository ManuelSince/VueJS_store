<template>
    <div class="companies-grid">
        <CompaniesGridHeader />
        <Filters />
        <CompanyCell v-for="company in companies" :key="company.name" :company="company" />
        <Paginator :length="companies.length" />
    </div>
</template>
<script>
import Filters from '@/components/Filters'
import CompaniesGridHeader from '@/components/Companies-Grid-Header'
import CompanyCell from '@/components/Company-Cell'
import Paginator from '@/components/Paginator'
import { mapGetters } from 'vuex'

export default {
  name: 'commpanies-grid',
  components: { CompanyCell, CompaniesGridHeader, Filters, Paginator },
  props: ['companies'],
  computed: {
    ...mapGetters(['navitems'
    ])
  },
  data () {
    return { isExpandCompany: '' }
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
