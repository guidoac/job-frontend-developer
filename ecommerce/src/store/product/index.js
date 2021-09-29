import actions from './actions'
import mutations from './mutations';
import getters from './getters'

const productModule = {
    namespaced: true,
    state: {
        allProducts: []
    },
    actions,
    mutations,
    getters
}

export default productModule;