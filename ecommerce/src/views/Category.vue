<template>
  <div class="container max-w-6xl mx-auto py-10">
    <product-list :title="$route.params.categoryId" :products="getCurrentCategory.products" />
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
  computed: {
      ...mapGetters('category', [
          'getCurrentCategory'
      ])
  },
  beforeMount () {
      this.pickProductsinCategory(this.$route.params.categoryId)
  },
  components: {
      ProductList
  }
};
</script>

<style lang="scss" scoped>
</style>