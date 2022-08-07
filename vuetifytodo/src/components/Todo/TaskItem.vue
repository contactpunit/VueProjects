<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-4': task.done }"
      @click="toggleDone(task.id)"
    >
      <template #default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
          >
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click.stop="enableDialog(task.id)">
            <v-icon color="primary">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
    <base-dialog
      :dialogProp="dialogProp"
      v-if="dialogProp.dialogShow"
      @cancel-dialog="dialogProp.dialogShow = false"
    ></base-dialog>
  </div>
</template>

<script>
import BaseDialog from "../UI/BaseDialog.vue";

export default {
  data() {
    return {
      dialogProp: {
        dialogTitle: "",
        dialogText: "",
        dialogShow: false,
        dialogTaskId: "",
      },
    };
  },
  components: {
    BaseDialog,
  },
  provide() {
    return {
      deleteTask(id) {
        this.$store.dispatch("deleteTask", id);
      },
    };
  },
  props: ["task"],
  computed: {
    showDialog() {
      return this.dialogProp.dialogShow;
    },
  },
  methods: {
    toggleDone(id) {
      this.$store.dispatch("selectChange", id);
    },
    enableDialog(id) {
      this.dialogProp.dialogShow = true;
      this.dialogProp.dialogTitle = "Delete Task";
      this.dialogProp.dialogText = "Do you want to delete the task ?";
      this.dialogProp.dialogTaskId = id;
    },
  },
};
</script>