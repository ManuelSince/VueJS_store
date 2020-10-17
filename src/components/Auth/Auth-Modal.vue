<template>
    <div class="auth-modal">
        <div class="auth-modal-header">
            <div class="auth-nav-item" :class="isAuthModal === 'in' ? 'active' : ''" @click="setIsAuthModal('in')">Sign in</div>
            <div class="auth-nav-item" :class="isAuthModal === 'up' ? 'active' : '' " @click="setIsAuthModal('up')">Sign up</div>
            <div class="close" @click="setIsAuthModal('')"> X </div>
        </div>
        <div v-if="isAuthModal === 'in'" class="auth-modal-body">
          <div class="wrap">
            <div class="pre-input" >email</div><input v-model="auth.email" type="text" placeholder="email">
          </div>
          <div class="wrap">
            <div class="pre-input" >password</div><input v-model="auth.password" type="text" placeholder="email">
          </div>
          <div @click="getPwd" style="font-size: 0.8rem; position: right;">Forgot password ?</div>
          <div @click="signin" class="regular-btn concave" value="">login in</div>
        </div>
        <div v-else>

        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Auth-Modal',
  computed: {
    ...mapGetters('auth', { isAuthModal: 'isAuthModal' })
  },
  data () {
    return {
      auth: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['setIsAuthModal']),
    getPwd: function () {
      console.log('get password')
    },
    // ...mapActions('auth', ['signin']),
    signin: function () {
      this.$store.dispatch('auth/signin', this.auth)
    },
    ...mapActions('auth', ['signup'])
  }
}
</script>
<style src="../../common/CSS/main.css"></style>
<style lang="scss" scoped>
.auth-modal{
    position: absolute;
    text-align: center;
    margin: 200px 40%;
    height: 200px;
    width: 400px;
    color: white;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.274);

}
.auth-modal-header{
    display: grid;
    grid-template-columns: repeat(2, 1fr) 40px;
    width: 100%;
}
.auth-modal-body{
  padding: 10px 15px;
  text-align: center;
}
.auth-nav-item{
    padding: 5px 20px;
    border: 1px solid white;
    cursor: pointer;
}
.close{
    width: 25px;
    position: 0px auto;
    padding: 5px;
    border: 2px solid white;
    cursor: pointer;
}
.active{
    background-color: blue;
}
.wrap{
  padding: 5px 10px;
  left: 30px;
  display: grid;
  width: 220px;
  grid-template-columns: 2fr 3fr;
}
.pre-input{
  padding: 3px 3px;
  width: 90px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}
</style>
