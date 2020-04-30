// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/styles/reset.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.baseUrl = 'https://baoanapp.sznews.com'

Vue.prototype.$http = axios.create({
  baseURL: this.baseURL
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
