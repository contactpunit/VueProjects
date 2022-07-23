<template>
  <div>
    <li>{{ todo }}</li>
    <button @click="removeTodo(id)">remove</button>
  </div>
</template>

<script>
export default {
  props: ['todo', 'id'],
  methods: {
    removeTodo(id) {
      this.$emit('delete-todo', id);
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid hsla(0, 0%, 100%, 0.35);
  border-radius: 6px;
  margin-bottom: 0;
}

button {
  cursor: pointer;
  border: 1px solid #88005b;
  color: white;
  font-weight: 700;
  border-radius: 6px;
  font-size: 12px;
  background-color: #88005b;
}
</style>