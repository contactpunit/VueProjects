<template>
  <div>
    <the-header></the-header>
    <button @click="activate('active-goals')">Active Goals</button>
    <button @click="activate('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedtab === 'active-goal'"></active-goals>
    <manage-goals v-if="selectedtab === 'manage-goal'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedtab"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    "the-header": TheHeader,
    "active-goals": ActiveGoals,
    "manage-goals": ManageGoals,
  },
  data() {
    return {
      selectedtab: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    activate(value) {
      console.log(value);
      this.selectedtab = value;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>