<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/companies">Companies</router-link> |
      <router-link to="/about">About</router-link> |
      <LoginBtn />
    </div>
    <AuthModal v-if="isAuthModal !== ''"/>
    <router-view/>
    <!-- <Login />
    <Register />
    <Profil /> -->
  </div>
</template>
<script>
import Vuex from './store'
import LoginBtn from './components/Auth/Login-btn'
import AuthModal from './components/Auth/Auth-Modal'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: { LoginBtn, AuthModal },
  computed: {
    ...mapGetters('auth', { isAuthModal: 'isAuthModal' })
  },
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
  display: flex;
  text-align: center;
  flex-direction: end;
  justify-content: flex-end;
  align-content: flex-end;
  column-gap: 10px;

  padding: 0 30px;
  text-align: center;
  background-image: url('./assets/stage-company.jpg');
  background-color:rgba(222, 184, 135, 0.281);

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #bfdbff;
    }

  }
  .login-btn{
    font-weight: bold;
    color: rgb(185, 231, 197);
    text-justify: auto;
  }
}
</style>
