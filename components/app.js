const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'punit',
                    name: 'Punit Jain',
                    age: 40,
                    phone: '112232534676',
                    email: 'punit@example.com'
                },
                {
                    id: 'rahul',
                    name: 'Rahul Jain',
                    age: 30,
                    phone: '5453454366',
                    email: 'rahul@example.com'
                },
            ],
            visible: false
        }
    },
    methods: {
        toggleDetails() {
            this.visible = !this.visible
        }
    },
})

app.mount('#app')