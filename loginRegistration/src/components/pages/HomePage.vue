<template>
  <div class="container">
    <h1>Hi {{ title }}</h1>
    <p>You're logged in with Vue + Vuex & JWT!!</p>
    <h2>Users from secure api end point:</h2>
    <li>{{ fullname }} - <a>Delete</a></li>
    <button class="btn-link btn">Logout</button>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>