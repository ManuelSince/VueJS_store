<template>
    <div class="fortune500chart">
      <h1>Fortune 500 by year</h1>
      <div class="container center">
        <div class="square left"></div>
        <div @click="restartChart" class="btn">Restart</div>
        <div class="square right"></div>
      </div>
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
      this.year = year
      this.dataByYear = this.data[year]
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
.fortune500chart {
  text-align: center;
}
.btn {
  margin: 0 50%;
  padding: 3px 15px;
  text-align: center;
  width: 200px;
  border: 2px solid gray;
  border-radius: 7px;
  background-color: grey;
  color: white;
}
.btn:hover {
  border-color: rgb(148, 148, 212);
  background-color: rgb(182, 182, 182);
  cursor: pointer;
}
.square {
  width: 50px;
  height: 50px;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  z-index: 999;
}
.left {
  transform: rotate(90);
}
.right {

}
</style>
