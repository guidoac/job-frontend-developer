const mutations = {
    changeCurrentUserCarts (state, currentUserCarts) {
        state.currentUserCarts = currentUserCarts
    },
    changeCurrentCart (state, currentCart) {
        state.currentCart = currentCart
    }
}

export default mutations;