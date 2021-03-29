const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: ''
    };
  },
  methods: {
    confirmedInput() {
      this.confirmName = this.name
    },
    increment(num) {
      this.counter = this.counter + num
    },
    decrement(num) {
      if (this.counter > 0) {
        this.counter = this.counter - num
      }
    },
    readName(event) {
      this.name = event.target.value
    },
    submitForm() {
      // pass
    },
    clearInput() {
      this.name = ''
    }
  }
})

app.mount('#events')
