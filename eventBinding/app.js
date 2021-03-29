const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      if (this.counter > 0) {
        this.counter--
      }
    }
  }
});

app.mount('#events');
