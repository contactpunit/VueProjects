<template>
<base-dialog v-if="invalidInput === true" title="Invalid Input. Kindly Correct" @close="closeDialog">
    <template #default>
        <p>Unfortunately atleast one value is invalid</p>
    </template>
    <template #actions>
        <base-button @click="closeDialog">Okay</base-button>
    </template>
</base-dialog>
<base-card>
    <form>
        <div class="form-control">
            <label for="title">Title</label>
            <input id="title" name="title" type="text" ref="titleInput" />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea name="description" id="description" ref="descriptionInput"></textarea>
        </div>
        <div class="form-control">
            <label for="link">Link</label>
            <input id="link" name="link" type="url" ref="linkInput"/>
        </div>
        <div>
            <base-button type="submit"  @click.prevent="readInputs">Add Resource</base-button>
        </div>
    </form>
</base-card>
    

    
</template>

<script>
export default {
    data() {
        return {
            invalidInput: false
        }
    },
    methods: {
        readInputs() {
            const titleInput = this.$refs.titleInput.value
            const descInput = this.$refs.descriptionInput.value
            const linkInput = this.$refs.linkInput.value
            if (titleInput.trim() === '' || descInput.trim() === '' || linkInput.trim() === '') {
                this.invalidInput = true
                return
            }
            this.addResource(titleInput, descInput, linkInput)
        },

        closeDialog() {
            this.invalidInput = false
        }
    },
    inject: ['addResource']
}

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