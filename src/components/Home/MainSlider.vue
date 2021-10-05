<template>
    <carousel v-bind="bannerConfig" class="z-5">
        <slide 
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
            class="flex justify-center"
        >   
            <router-link :to="banner.url">
                <img class="block md:hidden" :src="banner.mobile" />
                <img class="hidden md:block" :src="banner.img" />
            </router-link>
        </slide>
    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'MainSlider',
    components: {
        Carousel,
        Slide
    },
    data () {
        return {
            banners: [
                {
                    img: '/banners/banner-1.jpg',
                    mobile: '/banners/banner-mobile-1.jpg',
                    url: '/category/electronics'
                },
                {
                    img: '/banners/banner-2.jpg',
                    mobile: '/banners/banner-mobile-2.jpg',
                    url: '/category/electronics'
                }
            ],
            bannerConfig: {
                perPage: 1,
                navigationEnabled: false,
                autoplay: true,
                autoplayTimeout: 3000,
                loop: true,
                paginationSize: 15,
                paginationActiveColor: '#725bc2',
                paginationColor: '#D1D5DB'
            }
        }
    }
}
</script>

<style lang="scss">
</style>