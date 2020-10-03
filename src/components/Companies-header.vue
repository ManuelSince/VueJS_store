<template>
  <div class="companies-header">
    <h1 class="title">{{ title }}</h1>
    <Navigator />
  </div>
</template>

<script>
import Navigator from './Navigator'
export default {
  name: 'companies-header',
  components: { Navigator },
  props: ['title', 'navitems'],
  computed: {
    // navitems () { return this.$store.getters.get_navitems }
  },
  methods: {
    someshit () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.companies-header {
  background-image: url('../assets/stage-company.jpg');
  .title{
    font-size: 1.4em;
    font-weight: 600;
    color: white;
    margin: 0px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
