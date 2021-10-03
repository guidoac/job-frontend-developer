import config from '@/config.json'

const actions = {
    showOverlay (context) {
        context.commit('showOverlay')
    },
    hideOverlay (context) {
        context.commit('hideOverlay')
    },
    showNotification (context, message) {
        context.commit('showNotification', message)
        setTimeout( () => {
            context.commit('hideNotification')
        }, config.notificationTimeout)
    }
}

export default actions;