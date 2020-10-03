<template>
    <div class="companies-grid-header">
        <div class="header-item">{{ 'name' }}</div>
        <div class="header-item">{{ 'products' }}</div>
        <div class="header-item">{{ '' }}</div>
        <div class="header-item">{{ '' }}</div>
        <div class="header-item">{{ '' }}</div>
        <div class="header-item">{{ '' }}</div>
        <div class="header-item">{{ '' }}</div>
        <div class="header-item">{{ "" }}</div>
        <div class="header-item">{{ '' }}</div>
        <div class="header-item">{{ '' }}</div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'commpanies-grid-header',
  props: [],
  computed: {
    ...mapGetters(['navitems'
    ])
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
    grid-template-columns: repeat(10, 1fr);
}
.grid-body{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}
.header-item{
    color: white;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
}
.cell-item{
    font-weight: 600;
    font-size: 15px;
}
</style>
