const app = Vue.createApp({
  data() {
    return {
      goals: [],
      inputGoal: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoal)
      console.log(this.goals)
    }
  }
});

app.mount('#user-goals');
