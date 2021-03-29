const app = Vue.createApp({
    data() {
        return {
            output: '',
            enterKeyOutput: ''
        }
    },
    methods: {
        showAlert() {
            alert('clicked on button')
        },
        readInput(event) {
            this.output = event.target.value
        },
        readEnterInput(event) {
            this.enterKeyOutput = event.target.value
        }
    }
})

app.mount('#assignment')