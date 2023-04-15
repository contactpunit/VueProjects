<template>
  <div class="home">
    <h3>{{ counterTitle }}</h3>
    <div>
      <button class="btn" @click="decrement">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increment">+</button>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const counter = ref( 0 )

const counterTitle = ref( 'My App' )

function increment() {
  return counter.value++
}

function decrement() {
  return counter.value--
}

</script>
<!-- <script>
import {ref} from 'vue'

export default({
  setup() {
    const counter = ref(0)

    const counterTitle = ref('My App')

    function increment() {
      return counter.value++
    }

    function decrement() {
      return counter.value--
    }

    return {
      counter, increment, decrement, counterTitle
    }
  },
})
</script> -->


<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 400px;
  flex-wrap: wrap;
}

h3 {
  width: 100%;
  text-align: center;
}

.btn, .counter {
  flex-basis: auto;
  width: 80px;
  justify-content: space-between;
  margin: 0 10px;
  font-size: 40px;
  flex-grow: 1;

}
</style>
