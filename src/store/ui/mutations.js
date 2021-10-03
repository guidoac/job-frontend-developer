const mutations = {
    showOverlay (state) {
        state.overlay = true
    },
    hideOverlay (state) {
        state.overlay = false
    },
    showNotification (state, message) {
        state.notification.visible = true
        state.notification.message = message
    },
    hideNotification (state) {
        state.notification.visible = false
        state.notification.message = ''
    }
}

export default mutations;