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
      <input v-model="counterData.counterTitleValue" type="text" v-AutoFocus>
    </div>


  </div>
</template>


<script setup>
import { computed, onActivated, onDeactivated, onMounted, onUnmounted, reactive, ref, watch } from 'vue'

const counterData = reactive({
  counterValue: 10,
  counterTitleValue: 'My Test App'
})

const oddOrEven = computed(() => {
  if(counterData.counterValue % 2 === 0) return 'even'
  else return 'odd'
})

watch(() => counterData.counterValue, (newValue, oldValue) => {
  if(newValue > 20) counterData.counterValue = 0
})

onMounted(() => {
  console.log('mounted')
})

onUnmounted(()=> {
  console.log('unmounted')
})

onActivated(() => {
  console.log('activated')
})

onDeactivated(() => {
  console.log('deactivated')
})

// const counter = ref( 0 )

// const counterTitle = ref( 'My App' )

const vAutoFocus = {
  mounted: (el) => {
    el.focus()
  }
}

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
