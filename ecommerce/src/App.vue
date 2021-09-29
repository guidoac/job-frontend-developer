<template>
  <div id="app">
    <main-header />
  </div>
</template>

<script>
  import MainHeader from './components/Header/MainHeader'
  
  export default {
      name: 'App',
      components: {
        MainHeader
      },
      created () {
        this.$store.dispatch('product/pickAllProducts')
        this.$store.dispatch('category/pickAllCategories')
      }
  }
</script>

<style lang="scss">
</style>
