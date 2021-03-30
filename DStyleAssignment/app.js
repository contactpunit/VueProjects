const app = Vue.createApp({
    data() {
        return {
            classInput: '',
            paraColor: '',
            paraClass: true
        }
    },
    computed: {
        classAssign() {
            console.log(this.paraClass)
            return {
                user1: this.classInput === 'user1',
                user2: this.classInput === 'user2',
                visible: this.paraClass,
                hidden: !this.paraClass
            }
        }
    },
    methods: {
        togglePara() {
            this.paraClass = !this.paraClass
        }
    }

})

app.mount('#assignment')