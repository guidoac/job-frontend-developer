<template>
  <div id="app">
    <main-header />
    <router-view class="my-10"/>
    <overlay />
    <notification />
  </div>
</template>

<script>
  import MainHeader from './components/Header/MainHeader'
  import Overlay from './components/Overlay'
  import Notification from './components/Notification'

  import { mapActions } from 'vuex'
  
  export default {
      name: 'App',
      components: {
        MainHeader,
        Overlay,
        Notification
      },
      methods: {
        ...mapActions({
          pickAllProducts: 'product/pickAllProducts',
          pickAllCategories: 'category/pickAllCategories',
          getCurrentUser: 'user/getCurrentUser',
          getCurrentUserCarts: 'cart/getCurrentUserCarts'
        })
      },
      async mounted () {
        await this.pickAllProducts()
        await this.pickAllCategories()
        await this.getCurrentUser(1)
      }
  }
</script>

<style lang="scss">
</style>
