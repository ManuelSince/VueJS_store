<template>
  <div class="dropdown">
    <button class="dropbtn">{{user? `${user.firstname} ${user.lastname}`: login/signup }}</button>
    <div class="dropdown-content">
      <a href="#" @click="setIsAuthModal('in')">Sign in</a>
      <a href="#" @click="setIsAuthModal('up')">Sign up</a>
      <a href="#">Signout</a>
    </div>
  </div>
    <!-- <div class="log-btn">{{ user? user.lastname: 'sign-in/up'}}</div> -->
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'login-btn',
  computed: {
    ...mapGetters('auth', { user: 'user' })
    // user: function () { return `${user.firstname} ${user.lastname}` }
  },
  methods: {
    ...mapActions('auth', ['setIsAuthModal'])
  }
}
</script>
<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #4ebddf;
  min-width: 140px;
  font-weight: 800;
  border: 2px solid white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content{
  a {
    color: black;
    font-size: 0.8rem;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

}

.dropdown-content a:hover {background-color: rgba(221, 221, 221, 0.541);}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color:  #4ebddf; cursor: pointer; color: white;}
</style>
