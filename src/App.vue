<template>
  <div id="app">
    <main-header />
    <router-view class="my-10"/>
    <overlay />
  </div>
</template>

<script>
  import MainHeader from './components/Header/MainHeader'
  import Overlay from './components/Overlay.vue'

  import { mapActions } from 'vuex'
  
  export default {
      name: 'App',
      components: {
        MainHeader,
        Overlay
      },
      methods: {
        ...mapActions({
          pickAllProducts: 'product/pickAllProducts',
          pickAllCategories: 'category/pickAllCategories',
          getCurrentUser: 'user/getCurrentUser'
        })
      },
      created () {
        this.pickAllProducts()
        this.pickAllCategories()
        this.getCurrentUser(1)
      }
  }
</script>

<style lang="scss">
</style>
