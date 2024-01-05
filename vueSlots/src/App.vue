<template>
  <AppUserList>
    <template #userList="{_, list}">
      <AppUserCardsList :list="list"/>
    </template>
  </AppUserList>
</template>

<script>
import AppUserList from "@/components/AppUserList";
// import AppSpinner from "@/components/AppSpinner"
import AppUserCardsList from './components/AppUserCardsList';

export default {
  components: {
    AppUserList,
    AppUserCardsList
}
};
</script>
