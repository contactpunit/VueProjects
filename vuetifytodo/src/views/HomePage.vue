<template>
  <v-list flat class="pt-0">
    <div v-for="task in tasks" :key="task.id">
      <v-list-item>
        <template #default="{ active }">
          <v-list-item-action>
            <v-checkbox :input-value="active"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ task.title }}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </div>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Learn Vue!",
        },
        {
          id: 2,
          title: "Master Vue!",
        },
        {
          id: 3,
          title: "Learn Vuetify!",
        },
        {
          id: 4,
          title: "Master Nodejs",
        },
      ],
    };
  },
};
</script>