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
    ></base-dialog>
  </div>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";

export default {
  components: {
    BaseDialog,
  },
  props: ["task"],
  data() {
    return {
      dialogProp: {
        dialogTitle: "",
        dialogText: "",
        dialogShow: false,
        dialogTaskId: "",
      },
      items: [
        {
          title: "Delete",
          icon: "mdi-delete",
          click: () => {
            this.enableDialog(this.task.id);
          },
        },
        {
          title: "Edit",
          icon: "mdi-pencil",
          click() {
            console.log("edit");
          },
        },
        {
          title: "Due Date",
          icon: "mdi-calendar",
          click() {
            console.log("due date");
          },
        },
      ],
    };
  },
  methods: {
    enableDialog(id) {
      this.dialogProp.dialogShow = true;
      this.dialogProp.dialogTitle = "Delete Task";
      this.dialogProp.dialogText = "Do you want to delete the task ?";
      this.dialogProp.dialogTaskId = id;
    },
  },
};
</script>

<style>
</style>