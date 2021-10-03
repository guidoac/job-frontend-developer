<template>
    <div class="w-full relative">
        <font-awesome icon="search" class="text-xl text-primary absolute right-4 top-1/4 md:hidden" @click.native="forceCloseSearch = false" />
        <base-input
            v-model="currentSearch"
            class="w-full"
            placeholder="O que você está procurando?"
            @blur="forceCloseSearch = true"
            @focus="forceCloseSearch = false"
        >
            <template v-slot:icon>
                <font-awesome icon="search" class="text-xl text-primary absolute right-4 top-1/4" />
            </template>
        </base-input>
        <transition name="fade">
            <div 
                class="products-search-container absolute top-full w-full p-4 border-2 border-primary rounded-b-3xl border-t-0 shadow-lg bg-white z-50" 
                v-if="currentSearch !== '' && !forceCloseSearch"
            >
                <div class="no-product-container" v-if="filteredOptions.length === 0">
                    <h5>Nenhum produto encontrado com esse termo.</h5>
                </div>
                <div v-else>
                    <div 
                        v-for="(product, index) in filteredOptions" 
                        class="product-search-item py-4 px-4 flex flex-row justify-start w-full hover:bg-gray-200 transition duration-300 ease cursor-pointer"
                        :class="{
                            'pb-6': index < filteredOptions.length - 1,
                            'border-b-2 border-gray-200': index < filteredOptions.length - 1
                        }"
                        :key="`product-search-item-${index}`"
                        @click="$router.push({ name: 'Product', params: { productId: product.id } })"
                    >
                        <div class="product-thumb w-1/5">
                            <img :src="product.image" width="80" height="100" />
                        </div>
                        <div class="flex flex-col items-end flex-1 justify-center">
                            <h4 class="text-right">{{ product.title }}</h4>
                            <h3 class="font-semibold text-xl text-primary-dark mt-2">{{ product.price | price }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import BaseInput from './Form/BaseInput'
import FontAwesome from './FontAwesome'

import { mapGetters } from 'vuex'

    export default {
        name: 'SearchInput',
        components: {
            BaseInput,
            FontAwesome
        },
        data () {
            return {
                currentSearch: '',
                maxItems: 5,
                forceCloseSearch: false
            }
        },
        computed: {
            ...mapGetters('product', [
                'getAllProducts'
            ]),
            filteredOptions() {
                const filtered = [];
                const regOption = new RegExp(this.currentSearch, 'ig');
                for (const option of this.getAllProducts) {
                    if (option.title.match(regOption)){
                        if (filtered.length <= this.maxItems) filtered.push(option)
                    }
                }
                return filtered;
            }
        }

    }
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>