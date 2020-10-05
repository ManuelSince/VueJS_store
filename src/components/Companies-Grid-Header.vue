<template>
    <div class="companies-grid-header">
        <div class="header-item">{{ 'name' }}</div>
        <div class="header-item">{{ 'products' }}</div>
        <div class="header-item">{{ 'permalink' }}</div>
        <div class="header-item">{{ 'crunchbase' }}</div>
        <div class="header-item">{{ 'homepage' }}</div>
        <div class="header-item">{{ 'category' }}</div>
        <div class="header-item">{{ 'founded' }}</div>
        <div class="header-item">{{ 'employees' }}</div>
        <div class="header-item">{{ 'description' }}</div>
        <div class="header-item">{{ 'updated' }}</div>
        <div class="header-item">
          <select v-model="limit">
            <option disabled value="">page</option>
            <option>10</option>
            <option>20</option>
            <option selected="pagination.limit">50</option>
            <option>100</option>
            <option>200</option>
            <option>500</option>
          </select>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'commpanies-grid-header',
  props: [],
  computed: {
    ...mapGetters('companies', { reactivePagination: 'pagination' }),
    ...mapGetters('companies', { pagination: 'pagination' })
  },
  data () {
    return {
      limit: 50
    }
  },
  watch: {
    limit: function (val) {
      // this.limit = this.reactivePagination.limit
      this.$store.dispatch('companies/setPaginationLimit', parseInt(this.limit))
    }
  },
  methods: {
    method (page) {
      this.$store.dispatch('navitem_selection', page)
    }
  }
}
</script>
<style scoped lang="scss" >
.companies-grid-header{
    height: 50px;
    background-color: rgb(51, 51, 51);
    display: grid;
    grid-template-columns: repeat(10, 1fr) 2%;
}
.header-item{
    color: white;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    border-right: 1px dotted rgb(97, 97, 97);
}
.cell-item{
    font-weight: 600;
    font-size: 15px;
}
</style>
