<template>
  <div id="app">
    <main-header />
    <router-view class="mb-10"/>
    <overlay />
    <notification />
    <main-footer />
  </div>
</template>

<script>
  import MainHeader from './components/Header/MainHeader'
  import MainFooter from './components/Footer/MainFooter'
  import Overlay from './components/Overlay'
  import Notification from './components/Notification'

  import { mapActions } from 'vuex'
  
  export default {
      name: 'App',
      components: {
        MainHeader,
        MainFooter,
        Overlay,
        Notification
      },
      methods: {
        ...mapActions({
          pickAllProducts: 'product/pickAllProducts',
          pickAllCategories: 'category/pickAllCategories',
          getCurrentUser: 'user/getCurrentUser'
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
