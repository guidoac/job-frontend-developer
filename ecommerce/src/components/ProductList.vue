<template>
  <div class="flex flex-col w-full mt-10">
    <div 
        class="w-full uppercase border-b-4 border-primary-light-2 font-semibold text-2xl md:text-3xl text-center text-gray-700 pb-4" 
        v-if="title !== ''"
    >
        {{ title }}
    </div>
    <div class="product-list grid grid-cols-2 md:grid-cols-4 gap-4">
        <product-tile
            :product="product"
            v-for="(product, index) in products"
            :key="`product-${index}`"
        />
    </div>
  </div>
</template>

<script>
import ProductTile from "./ProductTile";

export default {
  name: "ProductList",
  components: {
    ProductTile,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    products: {
      type: Array,
      required: false,
      default: () => []
    }
  },
};
</script>

<style lang="scss" scoped>
</style>