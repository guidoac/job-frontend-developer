<template>
<div class="border-b-4 border-primary-light-3 bg-gray-100">
    <header class="main-header container mx-auto md:max-w-6xl flex flex-col">
        <div class="flex flex-row justify-around md:justify-between items-center px-4">
            <div class="logo-container w-full md:w-2/5">
                <img class="" width="200" src="@/assets/logo.png" />
            </div>
            <search-input class="w-3/5 hidden md:block" />
            <search-input-mobile class="" />
            <div class="w-full md:w-2/5 flex justify-end">
                <div class="w-4/5 md:w-3/5 p-4 mt-2 bg-primary-light-2 flex flex-col items-center rounded-2xl shadow-lg">
                    <font-awesome icon="shopping-cart" class="text-3xl text-primary" />
                    <p class="mt-4 text-md">Carrinho vazio</p>
                </div>
            </div>
        </div>
        <header-categories />
    </header>
</div>
</template>

<script>
import SearchInput from '../SearchInput'
import SearchInputMobile from '../SearchInputMobile'
import FontAwesome from '../FontAwesome'
import HeaderCategories from './HeaderCategories'

    export default {
        name: 'MainHeader',
        components: {
            SearchInput,
            SearchInputMobile,
            FontAwesome,
            HeaderCategories
        }
    }
</script>

<style lang="scss" scoped>
</style>