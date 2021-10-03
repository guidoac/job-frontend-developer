<template>
    <div class="container px-4 md:px-0 max-w-6xl mx-auto ">
        <div 
            class="w-full mt-10 border-b-4 border-primary-light-2 uppercase font-semibold text-2xl md:text-3xl text-center text-gray-500 pb-4 mb-4 flex justify-around md:justify-between" 
        >
            <span class="">Meu Carrinho</span>
        </div>
        <div class="w-full flex flex-col md:flex-row">
            <div class="w-full md:w-4/5">
                <div class="products-in-cart md:mr-4" v-if="getCurrentCart.products.length > 0">
                    <div 
                        class="product-in-cart flex flex-row w-full p-2 md:p-4 border-b-4 border-primary-light-2" 
                        v-for="(product, index) in getCurrentCart.products" 
                        :key="`product-${index}`"
                        :class="{
                            'my-8': index > 0
                        }"
                    >
                        <div class="w-32">
                            <img class="w-full" :src="product.image" />
                        </div>
                        <div class="flex-1 ml-10 flex flex-col justify-around items-end">
                            <div class="text-lg text-gray-700">
                                {{ product.title }}
                            </div>
                            <qty-selector class="flex w-3/5 md:w-2/5 justify-self-end" v-model="product.quantity" />
                            <div class="w-full text-right text-2xl font-semibold text-primary-dark">
                                {{ product.price * product.quantity | price }}
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p>Seu carrinho está vazio.</p>
                </div>
            </div>
            <div class="w-full md:w-2/5 bg-gray-100 rounded-3xl h-min flex flex-col p-8">
                <p class="text-xl flex justify-around">
                    <span>SUBTOTAL</span>
                    <span class="font-semibold text-2xl text-primary-dark ">{{ calculateSubTotal | price }}</span>
                </p>
                <base-button
                    class="mt-8"
                >
                    Finalizar Pedido
                </base-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import QtySelector from '../components/Product/QtySelector'
import BaseButton from '../components/Form/BaseButton'

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
    components: {
        QtySelector,
        BaseButton
    }
    
}
</script>

<style lang="scss" scoped>

</style>