<template>
  <AppUserList>
    <template #secondRow="slotProps">
      <pre>
        {{ `${slotProps.item.name.title} ${slotProps.item.name.first} ${slotProps.item.name.last}` }}
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
