<template>
  <div class="jumbotron">
    <div class="container">
      <div class="col-sm-6 offset-sm-3">
        <login-page></login-page>
        <register-page></register-page>
        <router-view></router-view>
      </div>
    </div>
  </div>
  <div>
    <base-footer></base-footer>
  </div>
</template>

<script>
export default {
  created() {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn) {
      this.$router.replace('/');
    }
  },
};
</script>