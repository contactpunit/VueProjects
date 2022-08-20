<template>
  <h2>{{ appTitle }}</h2>
  <div class="home">
    <h3>{{ counterData.title }}</h3>
    <div>
      <button class="btn" @click="decrement(2)">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increment(5)">+</button>
    </div>
    <p>This counter is {{ oddOrEven }}</p>
    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-model="counterData.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
import { computed, onActivated, onDeactivated, onMounted, reactive, watch } from "vue";
import {vAutofocus} from '../directives/vAutofocus.js'

const appTitle = "My App";
const counterData = reactive({
  count: 0,
  title: "CounterApp",
});

watch(() => counterData.count, (newCount) => {
  if(newCount >= 20) counterData.count = 1
})

const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? "even" : "odd";
});

function increment(amount) {
  counterData.count = counterData.count + amount;
}

function decrement(amount) {
  counterData.count -= amount;
}

onMounted(() => {
  counterData.count = 0
  console.log('reset counter to 0')
})

onActivated(() => console.log('on activated'))

onDeactivated(() => console.log('on deactivated hook'))

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
