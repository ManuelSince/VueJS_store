<template>
    <div class="filters">
        <div class="header-item"><input type="text" placeholder="name" v-model="Filters.name"></div>
        <div class="header-item"><input type="text" placeholder="products"></div>
        <div class="header-item"><input type="text" placeholder="permalink"></div>
        <div class="header-item"><input type="text" placeholder="crunchbase"></div>
        <div class="header-item"><input type="text" placeholder="homepage"></div>
        <div class="header-item"><input type="text" placeholder="category"></div>
        <div class="header-item"><input type="text" placeholder="founded"></div>
        <div class="header-item"><input type="text" placeholder="employees"></div>
        <div class="header-item"><input type="text" placeholder="description"></div>
        <div class="header-item"><input type="text" placeholder="updated"></div>
        <div class="header-item"></div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Filters',
  props: [],
  computed: {
    ...mapGetters(['navitems'
    ])
  },
  data () {
    return {
      Filters: {
        name: ''
      }
    }
  },
  watch: {
    Filters: function (val) {
      console.log(val)
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
    grid-template-columns: repeat(10, 1fr) 2%;
}
.grid-body{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}
.header-item{
    color: white;
    font-weight: 600;
    text-align: center;
    line-height: 30px;
}
.cell-item{
    font-weight: 600;
    font-size: 15px;
}
</style>
