<template>
  <li>
    <h2>{{ name }} {{ friendIsFav === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "emailAddress", "phoneNumber", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      friendIsFav: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if (this.friendIsFav === "1") {
        this.friendIsFav = "0";
      } else this.friendIsFav = "1";
    },
  },
};
</script>