<template>
  <h2 ref="appTitleRef">{{ appTitle }}</h2>
  <div class="home">
    <h3>{{ counter.title }}</h3>
    <div>
      <button class="btn" @click="counter.decrease(1)">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.increase(4)">+</button>
    </div>
    <p>This counter is {{ counter.oddOrEven }}</p>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counter.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, onMounted, ref } from "vue";
import { useCounterStore } from "../stores/counter.js";
import { vAutofocus } from "../directives/vAutofocus.js";

const appTitle = "My App";

const appTitleRef = ref(null);

onMounted(() => {
  // counterData.count = 0
  console.log(`App title is ${appTitleRef.value}`);
});

onActivated(() => console.log("on activated"));

onDeactivated(() => console.log("on deactivated hook"));

const counter = useCounterStore();
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