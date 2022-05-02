const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    methods: {
        add1() {
            this.result = this.result + 1
        },
        add5() {
            this.result = this.result + 5
        }
    },
    computed: {
        resultText() {
            if (this.result < 37) {
                return 'Not there yet'
            }
            else if (this.result === 37) {
                return 37
            }
            else return 'Too much!'
        }
    },
    watch: {
        resultText() {
            setTimeout(() => {
                this.result = 0
            }, 5000)
        }
    }
})

app.mount('#assignment')
