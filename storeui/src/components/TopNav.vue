<template>
  <div>TopNav</div>
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