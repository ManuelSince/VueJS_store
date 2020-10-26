<template>
    <div class="fortune500chart">
        <p>HEllo charts ! </p>
        <div >
          <Chart500 :d="computedData?'nice': 'not good'" :year="year" :data="dataByYear"/>
        </div>
    </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import Chart500 from './Chart500.vue'
export default {
  name: 'fortune500-chart',
  components: { Chart500 },
  props: ['data'],
  computed: {
    // ...mapGetters('companies', { fortune500: 'fortune500' })
    computedData: function () {
      Object.keys(this.data).forEach((year, i) => {
        this.delay(year, i, 5000)
      })
      return true
    }
  },
  data () {
    return {
      isTrue: false,
      year: '',
      dataByYear: []
    }
  },
  methods: {
    display: function (year) {
      console.log(`year is ${year} and data length is ${this.data[year].length}`)
      this.year = year
      this.dataByYear = this.data[year]
      // return { year: year, data: dataByYear }
    },
    delay: function (param, i, delay) {
      setTimeout(() => {
        this.display(param)
      }, i * delay)
    }
  },
  mounted () {},
  created () {
    this.$store.dispatch('companies/getFortune500')
  }
}
</script>
<style lang="scss" scoped>

</style>
