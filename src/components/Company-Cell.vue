<template>
    <div class="company-cells">
        <div class="grid-body"  @click="check(company.name)" :style="{ gridTemplateColumns: styleGrid }">
            <div class="cell-item" v-for="column in filteredColumns" :key="column.name">{{ column.type === 'computed' ? company[column.name].length : company[column.name]}}</div>
            <div class="cell-item"><span class="arrow" :class="itemToExpand.includes(company.name) ? 'up' : 'down'"></span></div>
        </div>
        <transition name="smooth">
        <CompanyCellContent v-if="itemToExpand.includes(company.name)" :company="company" @checkname="check" />
        </transition>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CompanyCellContent from '@/components/Company-Cell-Content'

export default {
  name: 'commpanies-cells',
  components: { CompanyCellContent },
  props: ['company', 'columns'],
  computed: {
    ...mapGetters(['navitems']),
    filteredColumns: function () { return this.columns.filter(column => column.isVisible) },
    styleGrid: function () { return `repeat(${this.filteredColumns.length}, 1fr) 4%` }
  },
  data () {
    return {
      itemToExpand: []
    }
  },
  methods: {
    method (page) {
      this.$store.dispatch('navitem_selection', page)
    },
    check (name) {
      console.log(name)
      if (this.itemToExpand.includes(name)) {
        this.itemToExpand = this.itemToExpand.filter(item => item !== name)
      } else {
        this.itemToExpand.push(name)
      }
    }
  }
}
</script>
<style scoped lang="scss" >
.company-cells{
  margin: 2px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.company-cells:hover{
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 4px -0px, rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    margin: 1px 5px;
}
.grid-body{
    display: grid;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgb(223, 223, 223);
}
.grid-body:hover{
    background-color: rgba(191, 223, 250, 0.616);
}
.header-item{
    color: white;
}
.cell-item{
    font-weight: 600;
    font-size: 15px;
    padding: 0 10px;
    border-right: 1px solid rgb(223, 223, 223);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
// .expand{
//   height: 100px;
//   border: 2px solid black;
// }
.arrow {
  border: solid rgba(0, 0, 0, 0.650);
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.arrow.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.arrow.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.smooth-enter-active, .smooth-leave-active {
  transition: height .5s;
}
.smooth-enter, .smooth-leave-to {
  height: 0;
}
</style>
