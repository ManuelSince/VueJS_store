<template>
    <div class="auth-modal">
        <div class="auth-modal-header">
            <div class="auth-nav-item" :class="isAuthModal === 'in' ? 'active' : ''" @click="setIsAuthModal('in')">Sign in</div>
            <div class="auth-nav-item" :class="isAuthModal === 'up' ? 'active' : '' " @click="setIsAuthModal('up')">Sign up</div>
            <div class="close" @click="setIsAuthModal('')"> X </div>
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
    }
  },
  methods: {
    ...mapActions('auth', ['setIsAuthModal'])
  }
}
</script>
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
</style>
