<template>
    <div class="fortune500chart">
      <h1>Fortune 500 by year</h1>
      <div @click="restartChart" class="btn">Restart</div>
      <div >
          <Chart500 :d="computedData?'nice': 'bad'" :year="year" :data="dataByYear"/>
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
// import { mapGetters } from 'vuex'
import Chart500 from './Chart500.vue'
export default {
  name: 'fortune500-chart',
  components: { Chart500 },
  props: ['data'],
  computed: {
    // ...mapGetters('companies', { fortune500: 'fortune500' })
    computedData: function () {
      Object.keys(this.data).forEach((year, index) => {
        this.delay(year, index, 500)
      })
      return true
    }
  },
  data () {
    return {
      isTrue: false,
      year: '',
      dataByYear: [],
      index: 0
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
    },
    restartChart () {
      this.$forceCompute('computedData', true)
    },
    ...mapActions('companies', ['getFortune500'])
  },
  mounted () {},
  created () {
    this.$store.dispatch('companies/getFortune500')
  }
}
</script>
<style lang="scss" scoped>
.btn {
  margin: 0 48%;
  text-align: center;
  width: 15vh;
  border: 2px solid gray;
  border-radius: 7px;
  cursor: pointer;
  background-color: grey;
  color: white;
}
.btn:hover {
  border-color: rgb(104, 104, 168);
}
</style>
