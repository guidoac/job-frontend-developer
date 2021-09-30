import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './css/main.css'

var _ = require('lodash')

Vue.config.productionTip = false

Vue.filter('price', value => {
  return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
})

Vue.prototype.$util = _

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
