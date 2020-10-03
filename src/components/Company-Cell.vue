<template>
    <div class="companies-cell">
        <div class="grid-body" v-if="company.name != isExpandCompany">
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.products? company.products.length: 'no products' }}</div>
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.name }}</div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'commpanies-cell',
  props: ['company', 'isExpandCompany'],
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
.companies-cell:hover{
    background-color: rgb(215, 197, 221);
}
.grid-body{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}
.header-item{
    color: white;
}
.cell-item{
    font-weight: 600;
    font-size: 15px;
}
</style>
