<template>
    <div class="chart">
        <h1 style="color: black;">{{ year }}</h1>
        <!-- <p v-for="d in data" :key="d">{{ d.company }}</p> -->
        <svg class="chart" width="100%" height="10040" aria-labelledby="title desc" role="img">
            <title id="title">{{ 'Fortune 500 for the year ' + year }}</title>
            <desc id="desc">{{ '' }}</desc>
            <g class="tutor">
              <rect width="70%" height="2" x="15%"></rect>
              <rect width="2" :x="revenuetoPourcentage(this.data[0].revenue)+ '%'" y="10" heigth="10"></rect>
            </g>
            <g class="bar" v-for="(row, index) in data" :key="index">
              <path d="M 90 0 H 5"></path>
              <path d="M 90 5 H 5"></path>
              <path d="M 90 10 H 5"></path>
              <path d="M 90 15 H 5"></path>
              <path d="M 90 20 H 5"></path>
              <path d="M 90 25 H 5"></path>
              <path d="M 90 30 H 5"></path>
              <line x1="15%" y1="0" x2="15%" y2="10040" class="bar_one"></line>
              <line x1="48" y1="30" x2="48" y2="20" class="bar_two"></line>
              <line x1="85" y1="30" x2="85" y2="10" class="bar_three"></line>
              <title id="title">{{ 'rank: ' + row.rank + ' | ' + row.company + ' | revenue (millions): ' + row.revenue + ' $ | profit (millions): ' + row.profit +' $'}}</title>
              <rect class="barchart" x="15%" :width="revenuetoPourcentage(row.revenue? row.revenue : 0) + '%'" height="19" :y="19 + index * 20"></rect>
              <text class="company-rank" x="0.5%" :y="19 + 9.5 + (index * 20)" dy=".15em">{{ row.rank }}</text>
              <text class="company-name" x="2%" :y="19 + 9.5 + (index * 20)" dy=".15em">{{ row.company }}</text>
              <text x="90%" :y="19 + (9.5) + (index * 20)" dy=".15em">{{ row.revenue? row.revenue + ' millions': 'N/A' }}</text>
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
  height: 5px;
  transition: fill .3s ease;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
}
.bar text {
  color: black;
}
.bar:hover,
.bar:focus {
  fill: rgba(102, 230, 230, 0.685);
}
.bar:hover text,
.bar:focus text {
  fill: rgb(0, 119, 255);
}
svg > .barchart {
    animation: grow 2s linear 2s;
}
svg > path {
  stroke: rgb(116, 197, 218); /* Color */
  stroke-width: 0.1; /* Thickness */
  stroke-miterlimit: 10;
}
.tutor{
  fill: black;
}
.company-name{
  fill: rgb(0, 119, 255);
}
.company-rank{
  fill: rgb(0, 119, 255);
}
.bar_one {
  fill: gray;
}
@keyframes grow {
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}
</style>
