<template>
    <div class="companies-grid">
        <CompaniesGridHeader />
        <CompanyCell v-for="company in companies" :key="company.name" :company="company" :isExpand="isExpandCompany" @click="setExpandCompany(company.name)"/>
    </div>
</template>
<script>
import CompaniesGridHeader from '@/components/Companies-Grid-Header'
import CompanyCell from '@/components/Company-Cell'

import { mapGetters } from 'vuex'

export default {
  name: 'commpanies-grid',
  components: { CompanyCell, CompaniesGridHeader },
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
