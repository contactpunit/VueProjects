const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount('#app');
