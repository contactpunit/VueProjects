<template>
  <base-dialog v-if="isInvalid" title="Invalid Input" @close="resetInvalid">
    <template #default>
      <p>Atleast one value is invalid</p>
    </template>
    <template #actions>
      <base-button @click="resetInvalid">OK</base-button>
    </template>
  </base-dialog>
  <base-card>
    <h2>Add Resource</h2>
    <form @submit.prevent="saveData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          ref="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" ref="link" />
      </div>
      <div>
        <base-button>Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: {
    BaseCard,
    BaseButton,
    BaseDialog,
  },
  data() {
    return {
      isInvalid: false,
    };
  },
  inject: ['addResources'],
  methods: {
    resetInvalid() {
      this.isInvalid = false;
    },
    saveData() {
      const title = this.$refs.title.value;
      const description = this.$refs.description.value;
      const link = this.$refs.link.value;
      if (!title.trim() || !description.trim() || !link.trim()) {
        this.isInvalid = true;
        return;
      }
      this.addResources(title, description, link);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>