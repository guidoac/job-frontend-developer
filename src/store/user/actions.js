import config from '@/config.json'

const axios = require('axios')

const actions = {
    getCurrentUser ({ dispatch, commit }, userId) {
        axios.get(`${config.api_url}${config.users_endpoint}/${userId}`)
        .then( resp => {
            commit('changeCurrentUser', resp.data)
            
            axios.get(`${config.api_url}${config.user_cart_endpoint.replace('{userId}', userId)}`)
            .then( resp => {
                commit('changeCurrentUserCarts', resp.data)

                // ao logar, altera o carrinho do state para o ultimo carrinho do usuario
                if (resp.data.length > 0) {
                    dispatch('cart/getCartById', resp.data[resp.data.length - 1].id, { root: true })
                }
            })
        })
    }
}

export default actions;