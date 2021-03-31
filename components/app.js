const app = Vue.createApp({
    data() {
        return {
            // friends: [
            //     {
            //         id: 'punit',
            //         name: 'Punit Jain',
            //         age: 40,
            //         phone: '112232534676',
            //         email: 'punit@example.com'
            //     },
            //     {
            //         id: 'rahul',
            //         name: 'Rahul Jain',
            //         age: 30,
            //         phone: '5453454366',
            //         email: 'rahul@example.com'
            //     },
            // ],
        }
    },
})

app.component('friend-contact', {
    template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">
            {{this.visible ? 'Hide' : 'Show'}} Details
          </button>
          <ul v-if="visible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            visible: false,
            friend: {
                id: 'punit',
                name: 'Punit Jain',
                age: 40,
                phone: '112232534676',
                email: 'punit@example.com'
            },
        }
    },
    methods: {
        toggleDetails() {
            this.visible = !this.visible
        }
    }
})

app.mount('#app')