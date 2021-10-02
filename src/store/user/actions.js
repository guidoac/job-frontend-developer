import config from '@/config.json'

const axios = require('axios')

const actions = {
    getCurrentUser (context, userId) {
        axios.get(`${config.api_url}${config.users_endpoint}/${userId}`)
        .then( resp => {
            context.commit('changeCurrentUser', resp.data)
        })
    }
}

export default actions;