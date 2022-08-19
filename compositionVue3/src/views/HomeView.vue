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
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    decrement() {
      this.counter -= 1;
    },
    increment() {
      this.counter += 1;
    },
  },
};
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
