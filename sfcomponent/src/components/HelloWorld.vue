<template>
  <div class="hello">
    <button @click="toggleUsername">Toggle Username</button>
    <h1 class="username">{{  msg }}</h1>
    <div v-if="showUsername">
      <display-username username="contactpunit"></display-username>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    DisplayUsername: defineAsyncComponent(() => import(/* webpackChunkName: 'DisplayUsername' */'./DisplayUsername.vue'))
  },
  data () {
    return {
      showUsername: false
    }
  },
  methods: {
    toggleUsername () {
      this.showUsername = !this.showUsername
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
