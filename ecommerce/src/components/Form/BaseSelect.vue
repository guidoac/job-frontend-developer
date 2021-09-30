<template>
    <select
        class="bg-white text-lg md:text-xl p-2 border-2 border-primary-light hover:border-primary-dark rounded-lg text-gray-500 cursor-pointer"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event.target.value)"
    >
        <option :selected="!selected">{{ placeholder }}</option>
        <option
            v-for="(option, index) in options"
            :key="`option-${index}`"
            :value="option.value"
        >
            {{ option.label }}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'BaseSelect',
        props: {
            options: {
                type: Array,
                required: true
            },
            selected: {
                type: String || Number || Boolean,
                required: false,
                default: ''
            },
            placeholder: {
                type: String,
                required: false,
                default: 'Selecione uma opção'
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>