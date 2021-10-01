<template>
  <div class="absolute w-screen h-screen z-5 bg-overlay top-0" v-if="getOverlay" ></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Overlay",
    computed: {
        ...mapGetters('ui', [
            'getOverlay'
        ])
    }
};
</script>

<style lang="scss" scoped>
</style>