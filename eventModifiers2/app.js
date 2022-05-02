const app = Vue.createApp({
    data() {
        return {
            word: '',
            completedWord: ''

        }
    },
    methods: {
        showAlert() {
            alert('hello')
        },
        inputEveryChar(event) {
            this.word = event.target.value
        },
        inputFinalText(event) {
            this.completedWord = event.target.value
        }
    }
})
app.mount('#assignment')