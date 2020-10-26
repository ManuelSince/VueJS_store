import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.prototype.$forceCompute = function (computedName, forceUpdate) {
  if (this._computedWatchers[computedName]) {
    this._computedWatchers[computedName].run()
    if (forceUpdate || typeof forceUpdate === 'undefined') {
      this.$forceUpdate()
    }
  }
}

// Vue.use(axios, VueAxios)

new Vue({
  router,
  store,
  VueAxios,
  axios,
  render: h => h(App)
}).$mount('#app')
