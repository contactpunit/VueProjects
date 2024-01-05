<template>
  <AppUserList #userlist="{list: users, remove}">
    <template>
      <AppUserCardsList :list="users">
        <template #secondrow="{item}">
          <button @click="remove(item)">{{ item.name.first }}</button>
        </template>
      </AppUserCardsList>
    </template>
  </AppUserList>
</template>

<script>
import AppUserList from "@/components/AppUserList";
// import AppSpinner from "@/components/AppSpinner"
import AppUserCardsList from "./components/AppUserCardsList.vue";

export default {
  components: {
    AppUserList,
    AppUserCardsList
}
};
</script>
