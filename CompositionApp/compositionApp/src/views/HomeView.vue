<template>
  <div class="home">
    <h3>{{ counterData.counterTitleValue }}</h3>
    <div>
      <button class="btn" @click="decrement">-</button>
      <span class="counter">{{ counterData.counterValue }}</span>
      <button class="btn" @click="increment">+</button>
    </div>

    <div class="edit">
      <p>This counter is {{ oddOrEven }}</p>
      <h4>Edit counter title: </h4>
      <input v-model="counterData.counterTitleValue" type="text">
    </div>


  </div>
</template>


<script setup>
import { computed, reactive, ref } from 'vue'

const counterData = reactive({
  counterValue: 10,
  counterTitleValue: 'My Test App'
})

const oddOrEven = computed(() => {
  if(counterData.counterValue % 2 === 0) return 'even'
  else return 'odd'
})

const counter = ref( 0 )

const counterTitle = ref( 'My App' )

function increment() {
  return counterData.counterValue++
}

function decrement() {
  return counterData.counterValue--
}
</script>


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

.edit {
  margin-top: 60px;
}

.edit p {
  margin-bottom: 30px;
}
</style>
