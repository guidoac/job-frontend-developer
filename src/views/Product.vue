<template>
    <div class="container px-4 xl:px-0 max-w-6xl mx-auto" v-if="currentProduct" >
        <div 
            class="w-full mt-10 border-b-4 border-primary-light-2 uppercase font-semibold text-2xl md:text-3xl text-center text-gray-500 pb-4 mb-4 flex justify-around md:justify-between" 
            v-if="currentProduct.title"
        >
            <span class="">{{ currentProduct.title }}</span>
        </div>
        <div class="flex flex-col md:flex-row justify-between w-full">
            <div 
                class="w-full md:w-3/5 h-64 mt-10 relative flex justify-center" 
                @mouseenter="showRating = true" 
                @mouseleave="showRating = false"
            >
                <img :src="currentProduct.image" class="max-h-64 md:max-h-104"  />
                <transition name="fade">
                    <div class="absolute left-0 top-2 p-2 shadow-xl bg-gray-50 rounded-2xl" v-if="showRating">
                        <star-rating
                            class="w-full pb-1 pl-1"
                            v-model="currentProduct.rating.rate" 
                            :read-only="true" 
                            :show-rating="false"
                            :star-size="40"
                        />
                    </div>
                </transition>
            </div>
            <div class="w-1/2 mx-auto flex justify-center md:hidden">
                <star-rating
                    class=" pb-1 pl-1"
                    v-model="currentProduct.rating.rate" 
                    :read-only="true" 
                    :show-rating="false"
                    :star-size="28"
                />
            </div>
            <div class="flex flex-col w-full md:w-2/5 md:ml-8 ">
                <h5 class="my-10">
                    {{ currentProduct.description }}
                </h5>
                <div class="bg-gray-100 rounded-3xl flex flex-col items-end p-10 w-full">
                    <qty-selector class="w-3/5" v-model="qty"/>
                    <p class="text-2xl my-6 text-primary font-semibold">{{ currentProduct.price * qty | price }}</p>
                    <add-to-cart @add-to-cart="addToCart({ product: currentProduct, qty })" class="w-full" />
                </div>
            </div>
        </div>
        <product-list class="mt-20" title="Produtos Relacionados" :products="getCurrentCategoryProducts" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AddToCart from '../components/Product/AddToCart'
import QtySelector from '../components/Product/QtySelector'
import ProductList from '../components/ProductList'
import StarRating from 'vue-star-rating'

export default {
    name: 'Product',
    data () {
        return {
            qty: 1,
            showRating: false
        }
    },
    computed: {
        ...mapGetters('product', [
            'getAllProducts',
            'getProductById'
        ]),
        ...mapGetters('category', [
            'getCurrentCategoryProducts'
        ]),
        currentProduct () {
            return this.getProductById(this.$route.params.productId)
        }
    },
    mounted () {
        if(this.currentProduct) this.pickProductsinCategory(this.currentProduct.category)
    },
    methods: {
        ...mapActions('category', [
            'pickProductsinCategory'
        ]),
        ...mapActions('cart', [
            'addToCart'
        ])
    },
    components: {
        AddToCart,
        QtySelector,
        StarRating,
        ProductList
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>