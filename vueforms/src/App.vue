<template>
  <div>
    <FormKit 
      type="text"
      label="Username"
      name="username"
      help="pick a new username"
      validation="required|matches:/^@[a-zA-Z]+$/|length:5"
      value="@useFormKit"
      prefix-icon="avatarMan"
      >
      <template #help></template>
      </FormKit>
    <FormKit type="select"></FormKit>
    <FormKit type="textarea"></FormKit>
  </div>
</template>
