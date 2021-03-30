const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      confirmName: '',
      lastName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0
      }
    }
  },
  computed: {
    fullName() {
      if (this.firstName === '' || this.lastName === '') {
        return ''
      }
      else {
        return this.firstName + ' ' + this.lastName
      }
    }
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
