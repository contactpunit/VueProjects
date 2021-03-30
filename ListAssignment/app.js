const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            task: '',
            visible: true,
        }
    },
    computed: {
        toggleDisplay() {
            return {
                hidden: this.visible ? '' : 'none'
            }
        },
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