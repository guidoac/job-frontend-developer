import Vue from 'vue'
import Vuex from 'vuex'

// custom modules
import categoryModule from './category'
import uiModule from './ui'
import productModule from './product'
import cartModule from './cart'
import userModule from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category: categoryModule,
    cart: cartModule,
    product: productModule,
    user: userModule,
    ui: uiModule
  }
})
