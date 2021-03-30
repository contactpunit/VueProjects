const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      confirmName: '',
      fullName: '',
      lastName: ''
    };
  },
  watch: {
    firstName(value) {
      if (this.firstName === '') {
        this.fullName = ''
      }
      else {
        this.fullName = value + ' ' + this.lastName
      }
    },
    lastName(value) {
      if (this.lastName === '') {
        this.fullName = ''
      }
      else {
        this.fullName = this.firstName + ' ' + value
      }
    }
  },
  // computed: {
  //   fullName() {
  //     if (this.name === '') {
  //       return ''
  //     }
  //     else {
  //       return this.name + ' ' + 'Jain '
  //     }
  //   }
  // },
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
