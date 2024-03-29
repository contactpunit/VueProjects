const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + 5
        },
        substract() {
            this.counter = this.counter - 5
        },
        setName(event) {
            this.name = event.target.value
        }
    }
})

app.mount('#events')