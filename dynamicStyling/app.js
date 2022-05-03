const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            activeValue: true,
            hiddenValue: false,
            bgColor: '#8ddba4'

        }
    },
    computed: {
        renderClass() {
            return this.userInput
        }
    },
    methods: {
        togglePara() {
            this.activeValue = !this.activeValue
            this.hiddenValue = !this.hiddenValue
        },
        readColor(event) {
            this.bgColor = event.target.value
        }
    }
})

app.mount('#assignment')