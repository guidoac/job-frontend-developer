import config from '@/config.json'

const axios = require('axios')

const actions = {
    pickAllCategories (context) {
        axios.get(`${config.api_url}${config.categories_endpoint}`)
        .then( resp => {
            context.commit('changeAllCategories', resp.data)
        })
    },
    async pickProductsinCategory (context, categoryId) {
        let resp = await axios.get(`${config.api_url}${config.categories_prods_endpoint.replace('{categoryId}', categoryId)}`)
        
        context.commit('changeProductsInCategory', resp.data)
        return resp.data
    }
}

export default actions;