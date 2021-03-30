const app = Vue.createApp({
    data() {
        return {
            result: 0,
            // message: ''
        }
    },
    computed: {
        message() {
            if (this.result < 37) {
                return "Not there yet"
            }
            else if (this.result === 37) {
                return this.result
            }
            else {
                return "Too much!"
            }
        }
    },
    watch: {
        message() {
            setTimeout(() => {
                this.result = 0
            }, 5000)
        }
    },
    methods: {
        addBy5() {
            this.result = this.result + 5
        },
        addBy1() {
            this.result = this.result + 1
        }
    }
})

app.mount('#assignment')