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
  
  export default {
      name: 'App',
      components: {
        MainHeader,
        Overlay
      },
      created () {
        this.$store.dispatch('product/pickAllProducts')
        this.$store.dispatch('category/pickAllCategories')
      }
  }
</script>

<style lang="scss">
</style>
