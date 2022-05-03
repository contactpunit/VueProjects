const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            listDisplay: true,
            buttonText: 'Hide List'
        }
    },
    methods: {
        addTask(task) {
            this.tasks.push(task)
        },
        manageListView() {
            this.listDisplay = !this.listDisplay
            if (this.listDisplay) this.buttonText = 'Hide List'
            else this.buttonText = 'Show List'
        }
    }
})

app.mount('#assignment')