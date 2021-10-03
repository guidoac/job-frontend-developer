<template>
    <base-button @click="$emit('add-to-cart')">
        Comprar
    </base-button>
</template>

<script>
import BaseButton from '../Form/BaseButton'

export default {
    name: 'AddToCart',
    components: {
        BaseButton
    }
}
</script>

<style lang="scss" scoped>

</style>