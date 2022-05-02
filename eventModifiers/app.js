const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: ''
        }
    },
    methods: {
        confirmedInput() {
            this.confirmedName = this.name
        },
        submitData() {
            alert('submitted!!')
        },
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