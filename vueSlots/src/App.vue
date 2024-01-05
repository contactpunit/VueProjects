<template>
  <AppUserList>
    <template #secondRow="{item, remove}">
      <button @click="remove(item)">{{ item.name.first }}</button>
    </template>
  </AppUserList>
</template>

<script>
import AppUserList from "@/components/AppUserList";
// import AppSpinner from "@/components/AppSpinner"

export default {
  components: {
    AppUserList,
}
};
</script>
