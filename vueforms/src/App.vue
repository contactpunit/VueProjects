<template>
  <div>
    <FormKit type="form" :value="formData" @submit="submitData">
      <template #default>
        <h1>Login</h1>
        <FormKit 
          type="text"
          username="username"
          name="username"
          validation="required|(200)isUsernameValid"
          :validation-rules="{ isUsernameValid }"
        ></FormKit>
        <FormKit type="password" username="password" name="password" :validation="[['required'], ['length', 8, 20]]"></FormKit>
    </template>
    </FormKit>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {wait} from './utils/index.ts'

const formData = ref({
  username: "punit_j",
  password: ""
})

async function submitData(data) {
  await wait(3000)
  console.log(data)
}

async function isUsernameValid(node) {
  const usernames = [
    'punit_j',
    'punitj'
  ]
  return usernames.includes(node.value)
}
</script>