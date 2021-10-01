<template>
    <div class="flex relative">
        <input
            class="px-6 h-12 border-2 rounded-md border-primary-light hover:border-primary-dark transition duration-300 ease w-full flex"
            type="text"
            :value="value"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
            @blur="$emit('blur')"
            @focus="$emit('focus')"
        />
        <slot name="icon" />
    </div>
</template>

<script>
    export default {
        name: 'BaseInput',
        props: {
            value: {
                type: String,
                required: false,
                default: ''
            },
            placeholder: {
                type: String,
                required: false,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>