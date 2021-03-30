const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            task: '',
            visible: true,
            buttonText: 'Hide/Show List'
        }
    },
    computed: {
        toggleCaption() {
            if (this.tasks.length === 0) {
                return this.buttonText
            }
            else if (this.visible) {
                return 'Hide List'
            }
            else {
                return 'Show List'
            }
        }
    },
    methods: {
        addTask(value) {
            this.tasks.push(value)
        },
        hideShowTasks() {
            this.visible = !this.visible
        }
    }
})

app.mount('#assignment')