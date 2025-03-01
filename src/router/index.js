import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Category from '../views/Category'
import Product from '../views/Product'
import Cart from '../views/Cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:categoryId',
    name: 'Category',
    component: Category
  },
  {
    path: '/product/:productId',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
