import actions from './actions'
import mutations from './mutations';
import getters from './getters'

const categoryModule = {
    namespaced: true,
    state: {
        allCategories: [],
    },
    actions,
    mutations,
    getters
}

export default categoryModule;