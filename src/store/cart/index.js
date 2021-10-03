import actions from './actions'
import mutations from './mutations';
import getters from './getters'

const cartModule = {
    namespaced: true,
    state: {
        currentCart: {}
    },
    actions,
    mutations,
    getters
}

export default cartModule;