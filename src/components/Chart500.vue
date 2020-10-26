<template>
    <div class="chart">
        <h1 style="color: black;">{{ year }}</h1>
        <!-- <p v-for="d in data" :key="d">{{ d.company }}</p> -->
        <svg class="chart" width="100%" height="50000" aria-labelledby="title desc" role="img">
            <title id="title">{{ 'Fortune 500 for the year ' + year }}</title>
            <desc id="desc">{{ '' }}</desc>
            <g class="tutor">
              <rect width="80%" height="2"></rect>
            </g>
            <g class="bar" v-for="(row, index) in data" :key="index">
                <rect class="" :width="revenuetoPourcentage(row.revenue? row.revenue : 0) + '%'" height="19" :y="19 + index * 20"></rect>
                <text class="company-rank" x="0.5%" :y="19 + 9.5 + (index * 20)" dy=".15em">{{ row.rank }}</text>
                <text class="company-name" x="4%" :y="19 + 9.5 + (index * 20)" dy=".15em">{{ row.company }}</text>
                <text x="80%" :y="19 + (9.5) + (index * 20)" dy=".15em">{{ row.revenue? row.revenue + ' millions': 'N/A' }}</text>
            </g>
        </svg>
    </div>
</template>
<script>
export default {
  name: '',
  props: ['year', 'data', 'd'],
  computed: { max: function () { return this.data[0].revenue } },
  data () { return { } },
  methods: {
    revenuetoPourcentage: function (revenue) {
      // for (let i = 0; i < (revenue * 80) / this.max; i++) {
      //   return i
      // }
      return revenue * 70 / this.max
    }
  },
  mounted () { },
  created () {}
}
</script>
<style lang="scss" scoped>
.bar {
  fill: rgb(75, 137, 161); /* changes the background */
  height: 21px;
  transition: fill .3s ease;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
  animation: grow 2s linear 2s;
}
.bar text {
  color: black;
}
.bar:hover,
.bar:focus {
  fill: rgba(122, 122, 122, 0.507);
}
.bar:hover text,
.bar:focus text {
  fill: rgb(0, 119, 255);
}
.tutor{
  fill: black;
}
.company-name{
  fill: white;
}
.company-rank{
  fill: white;
}
@keyframes grow {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
