<template>
  <div>
    <select v-model="selected">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <AppUserList #userlist="{list: users}">
      <template>
        <AppUserCardsList :list="users">
          <template #[selected]="{text}">
            <h4>{{ text }}</h4>
          </template>
          <!-- <template #secondrow="{item}">
            <button @click="remove(item)">{{ item.name.first }}</button>
          </template> -->
        </AppUserCardsList>
      </template>
    </AppUserList>
  </div>
</template>

<script>
import AppUserList from "@/components/AppUserList";
// import AppSpinner from "@/components/AppSpinner"
import AppUserCardsList from "./components/AppUserCardsList.vue";

export default {
  components: {
    AppUserList,
    AppUserCardsList
},
data() {
  return {
    selected: 'firstname',
    options: [
      {value: 'firstname', label: 'first name'},
      {value: 'lastname', label: 'last name'},
      {value: 'fullname', label: 'full name'},
      {value: 'titlename', label: 'title name'},
   ]
  }
}
};
</script>
