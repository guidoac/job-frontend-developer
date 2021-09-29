import config from '@/config.json'

const axios = require('axios')

const actions = {
    pickAllProducts (context) {
        axios.get(`${config.api_url}${config.products_endpoint}`)
        .then( resp => {
            console.log(resp)
            context.commit('pickAllProducts', resp.data)
        })
    }
}

export default actions;