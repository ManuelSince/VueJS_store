<template>
  <div class="companies">
    <Companies-header title="companies" :navitems="navitems"/>
    <CompaniesGrid :companies="companies" v-if="isCompanies" />
  </div>
</template>

<script>
// @ is an alias to /src
import CompaniesHeader from '@/components/Companies-header.vue'
// import Filters from '@/components/Filters.vue'
import CompaniesGrid from '@/components/Companies-Grid.vue'
// import Paginator from '@/components/Paginator.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    CompaniesHeader,
    CompaniesGrid
  },
  computed: {
    ...mapGetters(['navitems', 'isCompanies', 'pagination']),
    ...mapGetters('companies', { companies: 'companies' })
    // ...mapState({ companies: state => state.companies.companies })
  },
  methods: {
    checkisCompanyGrid () {
      return false
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
