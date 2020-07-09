import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/CSS/reset.css'//css文件可以直接引用，不用暴漏
import './assets/js/rem.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
