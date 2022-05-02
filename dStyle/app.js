const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    methods: {
        boxSelected(name) {
            if (name === 'A') this.boxASelected = true
            else if (name === 'B') this.boxBSelected = true
            else if (name === 'C') this.boxCSelected = true
        }
    }
})
app.mount('#styling')