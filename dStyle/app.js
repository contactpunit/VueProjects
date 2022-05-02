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
            if (name === 'A') this.boxASelected = !this.boxASelected
            else if (name === 'B') this.boxBSelected = !this.boxBSelected
            else if (name === 'C') this.boxCSelected = !this.boxCSelected
        }
    }
})
app.mount('#styling')