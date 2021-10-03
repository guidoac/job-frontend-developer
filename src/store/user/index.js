import actions from './actions'
import mutations from './mutations';
import getters from './getters'

const userModule = {
    namespaced: true,
    state: {
        currentUser: {},
        currentUserCarts: []
    },
    actions,
    mutations,
    getters
}

export default userModule;