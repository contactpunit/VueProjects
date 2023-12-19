let planComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        }
    }
}

let planPickerComponent = {
    template: '#planpicker-template',
    components: {
        plan: planComponent
    },
    data() {
        return {
            plans: ['The Addict','The Curious', 'The Single', 'The Hilarious']
        }
    }
}

Vue.createApp({
    components: {
        planpicker: planPickerComponent
    }
})
.mount('#app')