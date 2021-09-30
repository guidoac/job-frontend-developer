import actions from './actions'
import mutations from './mutations';
import getters from './getters'

const uiModule = {
    namespaced: true,
    state: {
        overlay: false,
    },
    actions,
    mutations,
    getters
}

export default uiModule;