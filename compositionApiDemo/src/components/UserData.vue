<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from 'vue';
export default {
  props: ['firstName', 'lastName'],
  setup(props) {
    onBeforeMount(function () {
      console.log('on before mount called');
    });
    onMounted(function () {
      console.log('mounted called');
    });
    onBeforeUpdate(function () {
      console.log('before update');
    });
    onUpdated(function () {
      console.log('on updated called');
    });
    const userName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('age');

    return { userName, age };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   },
  // },
};
</script>