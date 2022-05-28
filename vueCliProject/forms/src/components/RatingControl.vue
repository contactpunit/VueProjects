<template>
  <ul>
    <li>
      <button
        type="button"
        @click="activate('poor')"
        :class="{ active: activeOption === 'poor' }"
      >
        Poor
      </button>
    </li>
    <li>
      <button
        type="button"
        @click="activate('avg')"
        :class="{ active: activeOption === 'avg' }"
      >
        Average
      </button>
    </li>
    <li>
      <button
        type="button"
        @click="activate('good')"
        :class="{ active: activeOption === 'good' }"
      >
        Good
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  //   data() {
  //     return {
  //       activeOption: this.modelValue,
  //     };
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scope>
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  border: 1px solid #ccc;
  margin: 0 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  border-color: transparent;
  cursor: pointer;
}

.active {
  color: white;
  background-color: green;
}

.active button {
  color: red;
}
</style>