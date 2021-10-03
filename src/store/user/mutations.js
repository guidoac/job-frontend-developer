const mutations = {
    changeCurrentUser (state, currentUser) {
        state.currentUser = currentUser
    },
    changeCurrentUserCarts (state, currentUserCarts) {
        state.currentUserCarts = currentUserCarts
    }
}

export default mutations;