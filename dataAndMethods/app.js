const app = Vue.createApp({
    data() {
        return {
            name: 'Punit Jain',
            age: '43',
            logo: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-dwglogo-19.png'
        }
    },
    methods: {
        ageInFiveYears() {
            return +this.age + 5
        },
        randomNumber() {
            return Math.random()
        }
    }
})
app.mount('#assignment')