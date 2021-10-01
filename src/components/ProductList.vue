<template>
  <div class="flex flex-col w-full mt-10">
    <div 
        class="w-full uppercase border-b-4 border-primary-light-2 font-semibold text-2xl md:text-3xl text-center text-gray-500 pb-4 mb-4 flex justify-around md:justify-between" 
        v-if="title !== ''"
    >
      <div class="hidden md:inline-block" />
      <span>{{ title }}</span>
      <base-select class="w-1/3 md:w-1/6" @change="sortBy" placeholder="Ordenar por" :options="sortOptions" />
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
import BaseSelect from './Form/BaseSelect';
import config from '@/config.json'

export default {
  name: "ProductList",
  data () {
    return {
      currentSort: 'rate'
    }
  },
  components: {
    ProductTile,
    BaseSelect
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
  methods: {
    sortBy(sort) {
      this.currentSort = sort

      this.products = this.$util.sortBy(this.products, sort, 'asc')
    }
  },
  computed: {
    sortOptions() {
      return config.products_sort_options
    }
  }
};
</script>

<style lang="scss" scoped>
</style>