const app = Vue.createApp({
  data() {
    return {
      detailIsVisible: true,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleButton() {
        this.detailIsVisible = !this.detailIsVisible
    },
  },
});
app.mount("#app");
