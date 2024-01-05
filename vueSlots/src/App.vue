<template>
  <AppUserList>
    <template #listItem="{user}">
      <pre>
        {{ user.location.country }}
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
