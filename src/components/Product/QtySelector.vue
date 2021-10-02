<template>
    <div class="flex flex-row items-center">
        <span class="mr-2">Quantidade:</span> 
        <div class="bg-white py-2 px-4 items-stratch items-center rounded-xl border-primary hover:border-primary-dark transition duration-300 ease border-2 flex flex-row justify-around">
            <div class="cursor-pointer text-gray-500 w-1/3 hover:text-gray-700 text-left" @click="decrementEvent">
                <font-awesome icon="minus" class=""/>
            </div>
            <input type="number" class="w-1/3 bg-transparent text-center" @input="inputEvent" :value="value" />
            <div class="cursor-pointer text-gray-500 w-1/3 hover:text-gray-700 text-right" @click="incrementEvent">
                <font-awesome icon="plus" />
            </div>
            
        </div>
    </div>
</template>

<script>
import FontAwesome from '../FontAwesome'

export default {
    name: 'QtySelector',
    components: {
        FontAwesome
    },
    methods: {
        inputEvent ($event) {
            this.$emit('input', $event.target.value)
        },
        incrementEvent () {
            this.$emit('input', this.value + 1)
        },
        decrementEvent () {
            this.value === 1 ? this.$emit('input', this.value) : this.$emit('input', this.value - 1)
        }
    },
    props: {
        value: {
            type: Number,
            required: false,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>

input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

</style>