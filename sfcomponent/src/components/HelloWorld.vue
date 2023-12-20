<template>
  <div class="hello">
    <display-username username="contactpunit"></display-username>
  </div>
</template>

<script>
import DisplayUsername from '@/components/DisplayUsername.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    DisplayUsername
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
