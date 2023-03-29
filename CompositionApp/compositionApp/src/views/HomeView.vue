<template>
  <div class="home">
    <div>
      <button class="btn" @click="decrement">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increment">+</button>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default({
  setup() {
    const counter = ref(0)

    function increment() {
      return counter.value++
    }

    function decrement() {
      return counter.value--
    }

    return {
      counter, increment, decrement
    }
  },
})
</script>


<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 400px;
}

.btn, .counter {
  flex-basis: auto;
  width: 80px;
  justify-content: space-between;
  margin: 0 10px;
  font-size: 40px;

}
</style>
