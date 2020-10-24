<template>
  <div class="companies">
    <div v-if="Object.keys(errors) > 0">
      <div v-for="errorKey in Object.keys(errors)" :key="errorKey">
        {{ errors[errorKey] }}
      </div>
    </div>
    <Companies-header title="companies" :navitems="navitems"/>
    <CompaniesGrid v-if="isCompanies" :companies="companiesPaginate" :columns="columns" />
    <Fortune500Chart v-if="!isCompanies" :data="fortune500"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CompaniesHeader from '@/components/Companies-header.vue'
// import Filters from '@/components/Filters.vue'
import CompaniesGrid from '@/components/Companies-Grid.vue'
import Fortune500Chart from '@/components/Fortune500Chart.vue'
// import Paginator from '@/components/Paginator.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    CompaniesHeader,
    CompaniesGrid,
    Fortune500Chart
  },
  computed: {
    ...mapGetters(['navitems', 'isCompanies', 'pagination']),
    ...mapGetters('companies', { pagination: 'pagination' }),
    ...mapGetters('companies', { columns: 'columns' }),
    ...mapGetters('companies', { companies: 'companies' }),
    ...mapGetters('companies', { fortune500: 'fortune500' }),
    ...mapGetters('auth', { errors: 'errors' }),
    companiesPaginate: function () {
      return this.companies.slice(Number(this.pagination.page - 1) * Number(this.pagination.limit), Number(this.pagination.limit) * Number(this.pagination.page))
    }
    // ...mapState({ companies: state => state.companies.companies })
  },
  methods: {
    checkisCompanyGrid () {
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
  .companies{
    text-align: center;
  }
</style>
