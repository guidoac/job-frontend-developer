import config from '@/config.json'

const axios = require('axios')

const actions = {
    getCurrentUserCarts (context) {
        axios.get(`${config.api_url}${config.user_cart_endpoint.replace('{userId}', context.rootState.user.currentUser.id)}`)
        .then( resp => {
            context.commit('changeCurrentUserCarts', resp.data)
        })
    },
    addToCart (context, product, qty) {
        let payload = JSON.stringify({
            userId: context.rootState.user.currentUser.id,
            products: [
                {
                    productId: product.id,
                    quantity: qty
                }
            ]
        })

        console.log(context, payload)
        if (context.state.currentCart === {} && !context.state.currentCart.id) {
            axios.post(`${config.api_url}${config.carts_endpoint}`, payload)
            .then( resp => {
                context.commit('changeCurrentCart', resp.data)
            })
        }
        else {
            axios.put(`${config.api_url}${config.carts_endpoint}/${context.state.currentCart.id}`, payload)
            .then( resp => {
                context.commit('changeCurrentCart', resp.data)
            } )
        }
    }
}

export default actions;