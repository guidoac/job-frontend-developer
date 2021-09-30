<template>
    <div class="hover:shadow-xl transition duration-300 ease p-6 flex flex-col cursor-pointer items-center justify-between rounded-2xl">
        <div class="product-tile-img mb-8 h-44 w-28">
            <img :src="product.image" />
        </div>
        <div class="h-1/4 text-center text-lg max-h-18 overflow-y-hidden flex flex-col">
            <p class="h-10 overflow-y-hidden">{{ product.title }}</p>
            <h3 class="font-semibold text-xl text-primary-dark mt-2">{{ product.price | price }}</h3>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'ProductTile',
        props: {
            product: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>