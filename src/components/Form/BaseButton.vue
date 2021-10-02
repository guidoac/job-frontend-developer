<template>
    <button class="bg-primary-light hover:bg-primary-dark transition duration-300 ease uppercase text-white font-semibold text-xl px-4 py-3 rounded-xl">
        <slot />
    </button>
</template>

<script>
    export default {
        name: 'BaseButton',
    }
</script>

<style lang="sass" scoped>

</style>