<template>
    <transition name="bounce">
        <div class="absolute top-64 md:top-60 flex justify-center w-full md:w-auto h-screen z-5 md:right-12 mx-auto md:mx-0 " v-if="getNotification.visible" >
            <div class="p-8 rounded-2xl bg-primary-dark text-white shadow-2xl text-xl h-min">
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