<template>
    <div class="container px-4 md:px-0 max-w-6xl mx-auto ">
        <div 
            class="w-full mt-10 border-b-4 border-primary-light-2 uppercase font-semibold text-2xl md:text-3xl text-center text-gray-500 pb-4 mb-4 flex justify-around md:justify-between" 
        >
            <span class="">Meu Carrinho</span>
        </div>
        <div class="w-full flex flex-col md:flex-row">
            <div class="w-full md:w-4/5">
                <div class="products-in-cart md:mr-8" v-if="getCurrentCart.products.length > 0">
                    <div 
                        class="product-in-cart flex flex-row w-full p-2 md:p-4 border-b-4 border-primary-light-2" 
                        v-for="(product, index) in getCurrentCart.products" 
                        :key="`product-${index}`"
                        :class="{
                            'my-8': index > 0
                        }"
                    >
                        <router-link 
                            class="w-24 md:w-32 hover:transform hover:scale-110" 
                            :to="{ name: 'Product', params: { productId: product.id }}"
                        >
                            <img class="w-full" :src="product.image" />
                        </router-link>
                        <div class="flex-1 ml-10 flex flex-col justify-around items-end">
                            <div class="w-full flex flex-row justify-between">
                                <router-link 
                                    :to="{ name: 'Product', params: { productId: product.id } }"
                                    class="text-lg text-gray-700 hover:text-primary-dark transition duration-300 ease"
                                >
                                    {{ product.title }}
                                </router-link>
                                <div 
                                    class="text-gray-400 text-2xl hover:text-red-500 transition duration-300 ease cursor-pointer"
                                    @click="deleteItem(index)"
                                >
                                    <font-awesome icon="trash" />
                                </div>
                            </div>
                            <qty-selector class="flex w-4/5 md:w-2/5 justify-self-end my-4 md:my-0" v-model="product.quantity" />
                            <div class="w-full text-right text-2xl font-semibold text-primary-dark">
                                {{ product.price * product.quantity | price }}
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p class="text-lg mt-10">Seu carrinho está vazio. <router-link class="text-primary-light hover:text-primary-dark transition duration-300 ease" :to="{ name: 'Home' }">Visite nosso catálogo</router-link> para encontrar algo legal para você!</p>
                </div>
            </div>
            <div class="w-full md:w-2/5 bg-gray-100 rounded-3xl h-min flex flex-col p-8">
                <p class="text-xl flex justify-around">
                    <span>SUBTOTAL</span>
                    <span class="font-semibold text-2xl text-primary-dark ">{{ calculateSubTotal | price }}</span>
                </p>
                <base-button
                    class="mt-8 bg-secondary hover:bg-secondary-dark"
                >
                    Finalizar Pedido
                </base-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import QtySelector from '../components/Product/QtySelector'
import BaseButton from '../components/Form/BaseButton'
import FontAwesome from '../components/FontAwesome'

export default {
    name: 'Cart',
    data () {
        return {
            subTotal: 0
        }
    },
    computed: {
        ...mapGetters('cart', [
            'getCurrentCart'
        ]),
        ...mapGetters('product', [
            'getAllProducts',
            'getProductById'
        ]),
        calculateSubTotal () {
            let subTotal = this.$util.sumBy(this.getCurrentCart.products, product => product.price * product.quantity);

            return subTotal
        }
    },
    methods: {
        ...mapActions('cart', [
            'deleteItem'
        ])
    },
    components: {
        QtySelector,
        BaseButton,
        FontAwesome
    }
    
}
</script>

<style lang="scss" scoped>

</style>