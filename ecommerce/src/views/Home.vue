<template>
  <div class="home">
    <main-slider />
    <div class="container max-w-6xl mx-auto">
      <product-list title="Destaques da Loja" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainSlider from '../components/Home/MainSlider'
import ProductList from '../components/ProductList'

export default {
  name: 'Home',
  components: {
    MainSlider,
    ProductList
  }
}
</script>
