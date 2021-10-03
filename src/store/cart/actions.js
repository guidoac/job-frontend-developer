import config from '@/config.json'

const axios = require('axios')

const actions = {
    getCartById (context, id) {
        console.log(context)
        axios.get(`${config.api_url}${config.carts_endpoint}/${id}`)
        .then( resp => {
            let cartObject = resp.data
            cartObject.products = cartObject.products.map( prodR => {
                let fullProduct = context.rootGetters['product/getProductById'](prodR.productId)

                return {
                    ...fullProduct,
                    quantity: prodR.quantity
                }
            });

            context.commit('changeCurrentCart', cartObject)
        } )
    },
    addToCart (context, { product, qty }) {
        let d = new Date()
        let payload = {
            userId: context.rootState.user.currentUser.id,
            date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
            products: [
                {
                    productId: product.id,
                    quantity: qty
                }
            ]
        }

        if (!context.state.currentCart) {
            axios.post(`${config.api_url}${config.carts_endpoint}`, payload)
            .then( resp => {
                console.log(resp.data)
                let cartObject = resp.data
                cartObject.products = cartObject.products.map( prodR => {
                    let fullProduct = context.rootGetters['product/getProductById'](prodR.productId)

                    return {
                        ...fullProduct,
                        quantity: prodR.quantity
                    }
                });
                context.commit('changeCurrentCart', cartObject)
            })
        }
        else {
            // junto o carrinho current com o produto adicionado
            payload.products = payload.products.concat(context.state.currentCart.products)
            
            axios.put(`${config.api_url}${config.carts_endpoint}/${context.state.currentCart.id}`, payload)
            .then( resp => {
                let cartObjectResp = resp.data
                console.log(cartObjectResp.products)
                cartObjectResp.products = cartObjectResp.products.map( prodR => {
                    let fullProduct = context.rootGetters['product/getProductById'](prodR.productId || prodR.id)

                    return {
                        ...fullProduct,
                        quantity: prodR.quantity
                    }
                });
                context.commit('changeCurrentCart', cartObjectResp)
            } )
        }
    }
}

export default actions;