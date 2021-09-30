import config from '@/config.json'

const axios = require('axios')

const actions = {
    pickAllCategories (context) {
        axios.get(`${config.api_url}${config.categories_endpoint}`)
        .then( resp => {
            console.log(resp)
            context.commit('changeAllCategories', resp.data)
        })
    },
    pickProductsinCategory (context, categoryId) {
        axios.get(`${config.api_url}${config.categories_prods_endpoint.replace('{categoryId}', categoryId)}`)
        .then( resp => {
            console.log(resp)
            context.commit('changeCurrentCategory', categoryId)
            context.commit('changeProductsInCategory', resp.data)
        })
    }
}

export default actions;