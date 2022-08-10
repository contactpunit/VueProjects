<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="primary" v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, idx) in items"
          :key="idx"
          @click="items[idx].click"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <base-dialog
      :dialogProp="dialogProp"
      v-if="dialogProp.dialogShow"
      @cancel-dialog="dialogProp.dialogShow = false"
      :task="task"
    ></base-dialog>
    <!-- <duedate-dialog></duedate-dialog> -->
  </div>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";
import DuedateDialog from "../UI/DuedateDialog.vue";

export default {
  components: {
    BaseDialog,
    DuedateDialog,
  },
  props: ["task"],
  data() {
    return {
      dialogProp: {
        dialogTitle: "",
        dialogText: "",
        dialogShow: false,
        dialogTaskId: "",
        type: "",
      },
      items: [
        {
          title: "Delete",
          icon: "mdi-delete",
          click: () => {
            this.enableDeleteDialog(this.task.id);
          },
        },
        {
          title: "Edit",
          icon: "mdi-pencil",
          click: () => {
            this.enableEditDialog(this.task.id);
          },
        },
        {
          title: "Due Date",
          icon: "mdi-calendar",
          click: () => {
            this.enableDueDateDialog(this.task.id);
          },
        },
      ],
    };
  },
  methods: {
    enableDeleteDialog(id) {
      this.dialogProp.dialogShow = true;
      this.dialogProp.dialogTitle = "Delete Task";
      this.dialogProp.dialogText = "Do you want to delete the task ?";
      this.dialogProp.type = "confirm";
      this.dialogProp.dialogTaskId = id;
    },
    enableEditDialog(id) {
      this.dialogProp.dialogShow = true;
      this.dialogProp.dialogTitle = "Edit Task";
      this.dialogProp.dialogText = "Do you want to edit this task ?";
      this.dialogProp.type = "input";
      this.dialogProp.dialogTaskId = id;
    },
    enableDueDateDialog(id) {
      this.dialogProp.dialogShow = true;
      this.dialogProp.dialogTitle = "";
      this.dialogProp.dialogText = "";
      this.dialogProp.type = "dateselect";
      this.dialogProp.dialogTaskId = id;
    },
  },
};
</script>

<style>
</style>