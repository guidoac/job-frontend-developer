import config from '@/config.json'

const axios = require('axios')

const actions = {
    pickAllCategories (context) {
        axios.get(`${config.api_url}${config.categories_endpoint}`)
        .then( resp => {
            console.log(resp)
            context.commit('pickAllCategories', resp.data)
        })
    }
}

export default actions;