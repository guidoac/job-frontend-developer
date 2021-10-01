<template>
  <div class="container max-w-6xl mx-auto py-10">
    <product-list :title="$route.params.categoryId" :products="getCurrentCategoryProducts" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ProductList from "../components/ProductList";

export default {
  name: "Category",
  methods: {
      ...mapActions('category', [
          'pickProductsinCategory'
      ])
  },
  data () {
    return {
      currentProducts: []
    }
  },
  beforeMount () {
    this.currentProducts = this.getCurrentCategoryProducts
  },
  computed: {
    ...mapGetters('category', [
      'getCurrentCategoryProducts'
    ])
  },
  components: {
      ProductList
  },
  beforeUpdate () {
    this.pickProductsinCategory(this.$route.params.categoryId)
  }
};
</script>

<style lang="scss" scoped>
</style>