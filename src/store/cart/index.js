import actions from './actions'
import mutations from './mutations';
import getters from './getters'

const cartModule = {
    namespaced: true,
    state: {
        currentUserCarts: [],
        currentCart: {}
    },
    actions,
    mutations,
    getters
}

export default cartModule;