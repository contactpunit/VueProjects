<template>
  <div>
    <FormKit type="form" :value="formData" @submit="submitData">
      <FormKitSchema :schema="[
    {
      $el: 'h1',
      children: 'Login'
    },
    {
      $formkit: 'text',
      username: 'username',
      name: 'username',
      label: 'username',
      validation: 'required|(200)isUsernameValid',
      'validation-rules': validateRules(),
      'validation-messages': validateMessage()
    },
    {
      $formkit: 'password',
      name: 'password',
      label: 'password',
      validation: validatePassword()
    }
  ]">
  </FormKitSchema>
    </FormKit>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {wait} from './utils/index.ts'
import { FormKitSchema } from '@formkit/vue'

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

function validateMessage() {
  return {
    isUsernameValid({args, name, node}) {
      console.log(args, name)
      return `Username ${node.value} is not valid. Please enter valid username`
    }
  }
}

function validateRules() {
  return { isUsernameValid }
}

function validatePassword() {
  return 'required|length: 8, 20'
  // return "[['required'], ['length', 8, 20]]"
}
</script>