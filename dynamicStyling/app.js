const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            activeValue: true,
            bgColor: '#8ddba4'

        }
    },
    computed: {
        renderClass() {
            // return this.userInput
            return { [this.userInput]: this.userInput, active: this.activeValue, hidden: !this.activeValue }
        }
    },
    methods: {
        togglePara() {
            this.activeValue = !this.activeValue
        },
        readColor(event) {
            this.bgColor = event.target.value
        }
    }
})

app.mount('#assignment')