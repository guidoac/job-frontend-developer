<template>
  <div class="container max-w-6xl mx-auto py-10">
    <product-list :title="$route.params.categoryId" :products="getCurrentCategoryProducts" :has-sorter="true" />
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
    this.pickProductsinCategory(this.$route.params.categoryId)
  },
  computed: {
    ...mapGetters('category', [
      'getCurrentCategoryProducts'
    ])
  },
  components: {
      ProductList
  },
  watch: {
    $route () {
      this.pickProductsinCategory(this.$route.params.categoryId)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>