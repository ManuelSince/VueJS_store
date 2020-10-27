<template>
    <div class="paginator container center"> {{ companies.length }}
      <div v-if="pagination.page !== 1" class="btn state-button">{{ 'previous' }}</div>
      <div v-for="value in buttons" :key="value" class="btn page-button" :class="value === pagination.page ? 'highlight': ''" @click="setPaginationPage(value)">{{ value }}</div>
      <div v-if="pagination.page !== buttons" class="btn state-button">{{ 'next' }}</div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'paginator',
  props: ['length'],
  computed: {
    ...mapGetters('companies', { pagination: 'pagination' }),
    ...mapGetters('companies', { companies: 'companies' }),
    buttons: function () { return this.companies.length % this.pagination.limit === 0 ? parseInt(this.companies.length / this.pagination.limit) : Math.floor(parseInt(this.companies.length / this.pagination.limit)) + 1 },
    btnCarousel: () => this.buttons > 10 ? 10 : this.buttons
  },
  data () {
    return {}
  },
  methods: {
    method (page) {
      this.$store.dispatch('navitem_selection', page)
    },
    ...mapActions('companies', ['setPaginationPage']),
    paginateMethod () {
    }
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>

.paginator{
  max-width: 600px;
  margin: 0 auto;
  display: flex;
}
.btn{
  font-size: 0.8em;
  background-color: rgb(55, 55, 55);
  border: 1px solid grey;
  border-radius: 4px;
}
.btn:hover{
  // background-color: rgb(83, 83, 83);
  border-radius: 5px;
  cursor: pointer;
}
.state-button{
  margin: 0 5px;
  height: 25px;
  width: 60px;
  line-height: 25px;
  color: white;

}
.page-button{
  margin: 0 1px;
  height: 25px;
  width: 30px;
  line-height: 25px;
  color: white;
}
.highlight{
  background-color: rgb(42, 114, 207);
}
</style>
