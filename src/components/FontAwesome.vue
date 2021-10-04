<template>
    <font-awesome-icon :icon="icon" />
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faSearch,
    faShoppingCart,
    faPlus,
    faMinus,
    faTrash
 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faSearch,
    faShoppingCart,
    faPlus,
    faMinus,
    faTrash
)

    export default {
        name: 'FontAwesome',
        components: {
            FontAwesomeIcon
        },
        props: {
            icon: {
                required: true,
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>