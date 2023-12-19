Vue.createApp({
})
.component('planpicker', {
    template: '#planpicker-template',
    data() {
        return {
            plans: ['The Addict','The Curious', 'The Single', 'The Hilarious']
        }
    }
})
.component('plan', {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        }
    }
})
.mount('#app')