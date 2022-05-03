const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredValue: '',
            listDisplay: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredValue)
        },
        manageListView() {
            this.listDisplay = !this.listDisplay
        }
    },
    computed: {
        buttonCaption() {
            return this.listDisplay ? 'Hide List' : 'Show List'
        }
    }
})

app.mount('#assignment')