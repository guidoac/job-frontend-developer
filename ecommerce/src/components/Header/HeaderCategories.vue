<template>
    <div class="flex items-center justify-between flex-row mt-4 px-4">
        <router-link 
            class="category uppercase text-md flex-1 font-semibold text-center text-gray-700 py-4 hover:bg-primary-light-3 rounded-t-2xl transition duration-300 ease" 
            v-for="category in getAllCategories" 
            :key="`category-${category}`"
            :to="`/category/${category}`"
        >
            {{ category }}
        </router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'HeaderCategories',
    computed: {
        ...mapGetters('category', [
            'getAllCategories'
        ]),
    }
}
</script>

<style lang="scss" scoped>

</style>