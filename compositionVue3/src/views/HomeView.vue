<template>
  <div class="home">
    <div>
      <button class="btn" @click="decrement">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increment">+</button>
    </div>
  </div>
</template>

<!--
<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);

    function increment() {
      return counter.value++;
    }

    function decrement() {
      return counter.value--;
    }

    return { counter, increment, decrement };
  },
};
</script>
-->
<script setup>
import { ref } from "vue";

const counter = ref(0);

function increment() {
  return counter.value++;
}

function decrement() {
  return counter.value--;
}
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
</style>
