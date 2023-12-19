let planComponent = {
    template: '#plan-template',
    methods: {
        select() {
            this.$emit('item-selected', this.name)
        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
        selected: Boolean
    }
}

let planPickerComponent = {
    template: '#planpicker-template',
    components: {
        plan: planComponent
    },
    data() {
        return {
            plans: ['The Addict','The Curious', 'The Single', 'The Hilarious'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(planName) { 
            this.selectedPlan = planName
        }
    }
}

Vue.createApp({
    components: {
        planpicker: planPickerComponent
    }
})
.mount('#app')