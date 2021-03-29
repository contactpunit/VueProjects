const app2 = Vue.createApp({
    data() {
        return {
            name: 'Punit Jain',
            age: 31,
            imageUrl: 'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier'
        }
    },
    methods: {
        futureAge() {
            return this.age + 5
        }
    }
})

app2.mount('#assignment')