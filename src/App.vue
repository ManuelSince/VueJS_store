<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/companies">Companies</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Vuex from './store'
export default {
  name: 'app',
  Vuex
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0 30px;
  text-align: right;
  background-image: url('./assets/stage-company.jpg');

  a {
    font-weight: bold;
    color: #8db6df;

    &.router-link-exact-active {
      color: #bff8ff;
    }
  }
}
</style>
