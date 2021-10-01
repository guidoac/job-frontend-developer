<template>
    <carousel v-bind="bannerConfig" class="z-5">
        <slide 
            v-for="(banner, index) in banners"
            :key="`banner-${index}`"
        >
            <img :src="banner.img" />
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
                    url: ''
                },
                {
                    img: '/banners/banner-2.jpg',
                    url: ''
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