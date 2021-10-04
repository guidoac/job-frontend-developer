<template>
    <div class="px-8 py-10 bg-gray-100 text-gray-700">
        <div class="w-full flex flex-col md:flex-row container mx-auto max-w-6xl justify-start">
            <div class="flex justify-center w-full md:w-2/5">
                <img src="@/assets/logo.png" />
            </div>
            <div class="text-lg flex flex-col mb-4 md:mb-0 md:mr-8 items-center md:items-start">
                <p class="font-semibold mb-4">Institucional</p>
                <router-link class="hover:text-primary-dark transition duration-300 ease" :to="{ name: 'NotFound' }">Quem somos</router-link> 
                <router-link class="hover:text-primary-dark transition duration-300 ease" :to="{ name: 'NotFound' }">Política de privacidade</router-link> 
                <router-link class="hover:text-primary-dark transition duration-300 ease" :to="{ name: 'NotFound' }">Política de compra</router-link> 
                <router-link class="hover:text-primary-dark transition duration-300 ease" :to="{ name: 'NotFound' }">Política de troca e devolução</router-link> 
                <router-link class="hover:text-primary-dark transition duration-300 ease" :to="{ name: 'NotFound' }">Nossas lojas</router-link> 
            </div>
            <div class="text-lg flex flex-col items-center md:items-start">
                <p class="font-semibold mb-4">Ajuda</p>
                <router-link class="hover:text-primary-dark transition duration-300 ease" :to="{ name: 'NotFound' }">Fale conosco</router-link> 
                <router-link class="hover:text-primary-dark transition duration-300 ease" :to="{ name: 'NotFound' }">Perguntas frequentes</router-link> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainFooter'
    }
</script>

<style lang="scss" scoped>
</style>