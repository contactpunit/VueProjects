Vue.createApp({}).
component('notification-message', {
    template: '#notification-message-template',
    props: {
        type: String
    }
})
.mount('#app')