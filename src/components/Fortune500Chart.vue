<template>
    <div class="fortune500chart">
        <p>HEllo charts ! </p>
        <div v-for="year in Object.keys(data)" :key="year">
            {{ `${year} : ${data[year][0].company}` }}
        </div>
    </div>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'fortune500-chart',
  components: {},
  props: ['data'],
  computed: {
    // ...mapGetters('companies', { fortune500: 'fortune500' })
    computedData: function () {
    //   let year = ''
    //   Object.keys(this.data).forEach(year => {
    //     year = year
    //     return setTimeout(data[year], 500)
    // })
      return 0
    }
  },
  data () {
    return {
      isTrue: false
    }
  },
  methods: {},
  mounted () {},
  created () {
    this.$store.dispatch('companies/getFortune500')
  }
}
</script>
<style lang="scss" scoped>

</style>
