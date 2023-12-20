Vue.createApp({}).
component('notification-message', {
    template: '#notification-message-template',
    props: {
        type: String,
        default: 'info'
    },
    data(){
        return {
            hidden: false
        }
    },
    methods: {
        hideNotification() {
            this.hidden = true
        }
    }
})
.mount('#app')