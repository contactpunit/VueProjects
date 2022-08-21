<template>
  <h2 ref="appTitleRef">{{ appTitle }}</h2>
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
import { onActivated, onDeactivated, onMounted, ref } from "vue";
import {useCounter} from '../use/useCounter.js'
import {vAutofocus} from '../directives/vAutofocus.js'

const appTitle = "My App";

const appTitleRef = ref(null)

const {counterData, oddOrEven, increment, decrement} = useCounter()

onMounted(() => {
  counterData.count = 0
  console.log(`App title is ${appTitleRef.value}`)
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
