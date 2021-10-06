<template>
<div class="border-b-4 border-primary-light-3 bg-gray-100">
    <header class="main-header container mx-auto md:max-w-6xl flex flex-col">
        <div class="flex flex-row justify-around md:justify-between items-center px-4">
            <div class="logo-container w-full md:w-2/5">
                <router-link to="/">
                    <img class="" width="200" src="@/assets/logo.png" />
                </router-link>
            </div>
            <search-input class="w-3/5 hidden md:block mx-4" />
            <search-input-mobile class="block md:hidden w-2/5" />
            <div class="w-full md:w-2/5 flex justify-end">
                <div 
                    class="w-4/5 md:w-3/5 p-4 mt-2 bg-primary-light-2 hover:bg-primary-light-3 transition duration-300 ease cursor-pointer flex flex-col items-center rounded-2xl shadow-lg"
                    @click="$router.push({ name: 'Cart' })"
                >
                    <font-awesome icon="shopping-cart" class="text-3xl text-primary" />
                    <p v-if="!getCurrentCart || (getCurrentCart.products && getCurrentCart.products.length === 0)" class="mt-4 text-md text-center">
                        Carrinho vazio
                    </p>
                    <p v-else-if="getCurrentCart.products && getCurrentCart.products.length > 0" class="mt-4 text-md text-center">
                        {{ getCurrentCart.products.length }} itens
                        <span class="block">{{ calculateSubTotal | price }}</span>
                    </p>
                </div>
            </div>
        </div>
        <header-categories />
    </header>
</div>
</template>

<script>
import SearchInput from '../Form/SearchInput'
import SearchInputMobile from '../Form/SearchInputMobile'
import FontAwesome from '../FontAwesome'
import HeaderCategories from './HeaderCategories'

import { mapGetters } from 'vuex'

    export default {
        name: 'MainHeader',
        components: {
            SearchInput,
            SearchInputMobile,
            FontAwesome,
            HeaderCategories
        },
        computed: {
            ...mapGetters('cart', [
                'getCurrentCart'
            ]),
            calculateSubTotal () {
                let subTotal = this.$util.sumBy(this.getCurrentCart.products, product => product.price * product.quantity);

                return subTotal
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>