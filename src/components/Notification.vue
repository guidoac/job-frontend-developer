<template>
    <transition name="bounce">
        <div class="absolute w-screen h-screen z-5 top-0" v-if="getNotification.visible" >
            <div class="relative md:absolute mx-4 md:mx-0 right-0 md:right-12 p-8 top-40 md:top-60 rounded-2xl bg-primary-dark text-white shadow-2xl text-xl">
                {{ getNotification.message }}
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Notification",
    computed: {
        ...mapGetters('ui', [
            'getNotification'
        ])
    }
};
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(-100%)
  }
  100% {
    transform: translateY(0)
  }
}
</style>