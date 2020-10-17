<template>
    <div class="companies-grid-header" :style="{ gridTemplateColumns: styleGrid }">
        <div v-for="column in filteredColumns" :key="column.name" class="header-item" @click="sortColumn(column)">{{ column.prettyName }}<span :class="column.name === sort.name?(sort.direction?'sort-logo desc': 'sort-logo asc'): ''" ></span></div>
        <div class="header-item">
          <ColumnSelectionButton />
        </div>
    </div>
</template>
<script>
import ColumnSelectionButton from '@/components/Columns-Selection-Button'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'commpanies-grid-header',
  components: { ColumnSelectionButton },
  props: ['columns'],
  computed: {
    ...mapGetters('companies', { reactivePagination: 'pagination' }),
    ...mapGetters('companies', { pagination: 'pagination' }),
    ...mapGetters('companies', { sort: 'sort' }),
    filteredColumns: function () { return this.columns.filter(column => column.isVisible) },
    styleGrid: function () { return `repeat(${this.filteredColumns.length}, 1fr) 4%` }
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('companies', ['sortColumn'])
  }
}
</script>
<style scoped lang="scss" >
.companies-grid-header{
    height: 40px;
    display: grid;
    // grid-template-columns: repeat(10, 1fr) 4%;
}
.header-item{
    color: white;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    line-height: 40px;
    background-color: rgb(51, 51, 51);
    border-right: 1px dotted rgb(97, 97, 97);
}
.header-item:hover{
    cursor: pointer;
    background-color: rgb(75, 75, 75);
}
.cell-item{
    font-weight: 600;
    font-size: 13px;
}
.sort-logo{
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 5px;
}
.asc{
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  border-color: red;
}
.desc{
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  border-color: green;
}
</style>
