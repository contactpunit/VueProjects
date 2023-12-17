<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";
import { provide, reactive } from "vue";
import type User from "./types/User"
import type Entry from "./types/Entry";
import { userInjectionKey } from './InjectionKey'


const user: User = reactive({
  id: 1,
  username: 'Punit',
  userSettings: []
})

provide(userInjectionKey, user)

const allEntries: Entry[] = reactive([])


const handleEmittedData = (entry: Entry) =>{
  allEntries.unshift(entry)
}


</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @create="handleEmittedData"/>
    <ul>
      <li v-for="entry in allEntries" :key="entry.id">
        <EntryCard :entry="entry" />
      </li>
    </ul>
  </main>
</template>
