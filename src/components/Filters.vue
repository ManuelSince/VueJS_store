<template>
    <div class="filters" :style="{ gridTemplateColumns: styleGrid }">
        <div class="filter-item" v-for="column in filteredColumns" :key="column.name" >
          <input v-if="column.type === 'text' || column.type === 'number'" :type="column.type" :placeholder="column.prettyName" v-model="Filters[column.name]">
          <input v-if="column.type === 'computed'" :type="column.type" :placeholder="column.prettyName" v-model="ComputedFilters[column.name]">
        </div>
        <div>
          <PaginatorLimit />
        </div>
    </div>
</template>
<script>
import PaginatorLimit from '@/components/Paginator-Limit'
import { mapGetters } from 'vuex'

export default {
  name: 'Filters',
  components: { PaginatorLimit },
  props: ['columns'],
  computed: {
    ...mapGetters(['navitems']),
    filteredColumns: function () { return this.columns.filter(column => column.isVisible) },
    styleGrid: function () { return `repeat(${this.filteredColumns.length}, 1fr) 4%` }
  },
  data () {
    return {
      Filters: {},
      ComputedFilters: {}
    }
  },
  watch: {
    Filters: function (val) {
      this.$store.dispatch('companies/filters', val)
    },
    ComputedFilters: function (val) {
      this.$store.dispatch('companies/computedFilters', val)
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
.filters{
    height: 30px;
    background-color: rgb(151, 151, 151);
    display: grid;
    // grid-template-columns: repeat(10, 1fr) 2%;
}
.filter-item{
    color: white;
    font-weight: 600;
    text-align: center;
    line-height: 30px;
}
input{
  width: 90%;
  text-decoration: none;
  border-radius: 5px;
  padding: 3px 5px;
  box-sizing: border-box;
}
</style>
