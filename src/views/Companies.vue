<template>
  <div class="companies">
    <Companies-header title="companies" :navitems="navitems"/>
    <Filters v-if="isCompanies"/>
    <CompaniesGrid :companies="companies" v-if="isCompanies" />
  </div>
</template>

<script>
// @ is an alias to /src
import CompaniesHeader from '@/components/Companies-header.vue'
import Filters from '@/components/Filters.vue'
import CompaniesGrid from '@/components/Companies-Grid.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    CompaniesHeader,
    Filters,
    CompaniesGrid
  },
  computed: {
    ...mapGetters([
      'navitems', 'isCompanies'
    ]),
    ...mapState({ companies: state => state.companies.companies })
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
