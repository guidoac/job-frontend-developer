<template>
    <div class="container max-w-6xl mx-auto ">
        <div 
            class="w-full mt-4 uppercase border-b-4 border-primary-light-2 font-semibold text-2xl md:text-3xl text-center text-gray-500 pb-4 mb-4 flex justify-around md:justify-between" 
            v-if="currentProduct.title !== ''"
        >
            <span>{{ currentProduct.title }}</span>
        </div>
        <zoom-on-hover :img-normal="currentProduct.image" :img-zoom="currentProduct.image"></zoom-on-hover>
        {{ currentProduct }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ZoomOnHover from "vue-zoom-on-hover";

export default {
    name: 'Product',
    computed: {
        ...mapGetters('product', [
            'getAllProducts',
            'getProductById'
        ]),
        currentProduct () {
            return this.getProductById(this.$route.params.productId)
        }
    },
    components: {
        ZoomOnHover
    }
}
</script>

<style lang="sass" scoped>

</style>