<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseData.goalVisibility">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { reactive, ref } from '@vue/reactivity';
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const courseData = ref({
      myGoal: 'Learn Vue Composition API',
      goalVisibility: true,
    });

    function toggleGoal() {
      courseData.value.goalVisibility = !courseData.value.goalVisibility;
    }

    return {
      goal: courseData.value.myGoal,
      courseData,
      toggleGoal,
    };
  },
  // data() {
  //   return {
  //     goal: 'Learn Vue Composition API',
  //     showGoal: true,
  //   };
  // },
  // methods: {
  //   toggleGoal() {
  //     this.showGoal = !this.showGoal;
  //   },
  // },
  // setup() {
  //   const goal = ref('Learn Vue Composition API');
  //   const myGoal = reactive({
  //     showGoal: true,
  //   });
  //   function toggleGoal() {
  //     myGoal.showGoal = !myGoal.showGoal;
  //   }
  //   return { goal, myGoal, toggleGoal };
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>