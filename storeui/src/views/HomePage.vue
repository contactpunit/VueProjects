<template>
  <div>
    <header-page></header-page>
    <popular-products></popular-products>
    <footer-page></footer-page>
  </div>
</template>

<script>
import HeaderPage from "@/components/home/HeaderPage.vue";
import FooterPage from "@/components/home/FooterPage.vue";
import PopularProducts from "@/components/home/PopularProducts.vue";

export default {
  components: {
    HeaderPage,
    FooterPage,
    PopularProducts,
  },
};
</script>

<style>
</style>