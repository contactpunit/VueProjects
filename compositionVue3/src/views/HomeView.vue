<template>
  <h2>{{ appTitle }}</h2>
  <div class="home">
    <h3>{{ counterData.title }}</h3>
    <div>
      <button class="btn" @click="decrement(2)">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increment(5)">+</button>
    </div>
    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-model="counterData.title" type="text" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const appTitle = "My App";
const counterData = reactive({
  count: 0,
  title: "CounterApp",
});

function increment(amount) {
  counterData.count = counterData.count + amount;
}

function decrement(amount) {
  counterData.count -= amount;
}
</script>

<style>
h2 {
  text-align: center;
  padding: 20px;
}
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>
