const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }

    },
    computed: {
        boxAClasses() {
            if (this.boxASelected) {
                return "demo active"
            }
            else {
                return "demo"
            }
        },
        boxBClasses() {
            if (this.boxBSelected) {
                return "demo active"
            }
            else {
                return "demo"
            }
        },
        boxCClasses() {
            if (this.boxCSelected) {
                return "demo active"
            }
            else {
                return "demo"
            }
        }
    },
    methods: {
        boxSelected(value) {
            if (value === 'A') {
                this.boxASelected = !this.boxASelected
            }
            else if (value === 'B') {
                this.boxBSelected = !this.boxBSelected
            }
            else if (value === 'C') {
                this.boxCSelected = !this.boxCSelected
            }
        }
    }
})

app.mount('#styling')