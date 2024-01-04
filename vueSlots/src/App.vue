<template>
  <AppUserList :secondRow="(user) => user.email">
    <!-- <template #loading>
    <app-spinner></app-spinner>
  </template> -->
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
