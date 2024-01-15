<template>
    <v-form @submit.prevent="handleSubmit">
        <v-row>
            <v-col cols="3">
                <v-switch label="Published" v-model="form.published"></v-switch>
            </v-col>
            <v-col cols="3">
                <v-checkbox
                  indeterminate
                  label="Published"
                  v-model="form.published"></v-checkbox>
            </v-col>
        </v-row>

        <v-text-field 
          v-model="form.title"
          label="Title"
          :rules="[isRequired]"
        ></v-text-field>

        <v-combobox
          v-model="form.tags"
          :items="['New', 'Tutorial', 'Event']"
          label="Tags"
          multiple
          chips
          :rules="[arrayIsEmpty]"
          >
        </v-combobox>
        <v-file-input
        accept="image/png image/jpeg image/bmp"
        placeholder="Upload a feature Image"
        prepend-icon="mdi-camera"
        label="Feature Image"
        v-model="form.image"
        ></v-file-input>

        <v-textarea
        label="Post Body"
        v-model="form.body"></v-textarea>

        <button type="submit" ref="submitBtn" class="d-none">Submit</button>
    </v-form>
</template>

<script setup lang="ts">
import {reactive, defineProps, ref} from 'vue'

const props = defineProps<({
    post: Record<string, any>;
})>()

const form = reactive({
    title: '',
    published: null,
    tags: [],
    body: '',
    image: [],
    ...props.post
})

const handleSubmit = () => {
    console.log(form)
}

const submitBtn = ref()

const submit = () => submitBtn.value.click()

const isRequired = (value: string) => {
    if(value) return true
    else return 'Title field is required'
}

const arrayIsEmpty = (value) => {
    if(!value.length) return 'No tags selected'
    else return true
}
// async function asyncValidation(value: string) {
//     const res = await fetch(`http://httpbin.org/status/${value}`)
//     if(res.status === 200) return true
//     else return 'Unable to fetch post title'
// }

defineExpose({ submit })
</script>