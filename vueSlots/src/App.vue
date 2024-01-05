<template>
  <AppUserList>
    <template #userList="{count, list}">
      <pre>
        {{ count }}
        {{ list }}
      </pre>
    </template>
  </AppUserList>
</template>

<script>
import AppUserList from "@/components/AppUserList";
// import AppSpinner from "@/components/AppSpinner"

export default {
  components: {
    AppUserList,
    // AppSpinner
  }
};
</script>
