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
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('before upate')
  },
  updated() {
    console.log('updated')
  },
});

app.mount('#app');
