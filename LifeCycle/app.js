const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');
