<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Awesome Shop</v-toolbar-title>

      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-btn> Menu </v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>
          <v-icon small left>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn to="/store" text>
          <v-icon small left>mdi-store</v-icon>
          Store
        </v-btn>
        <v-btn to="/cart" text>
          <v-icon small left>mdi-cart</v-icon>
          Cart
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", link: "/", icon: "home" },
        { title: "Store", link: "/store", icon: "shopping-basket" },
        { title: "Cart", link: "cart", icon: "shopping-cart" },
      ],
    };
  },
};
</script>

<style>
</style>