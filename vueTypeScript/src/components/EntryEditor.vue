<script lang="ts" setup>
import {v1} from "uuid";
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import { ref, computed } from "vue"
import type Emoji from "../types/Emoji"
import type Entry from "@/types/Entry";

const body = ref("")

const emoji = ref<Emoji|null>(null)

const charCount = computed(()=> body.value.length)

const emit = defineEmits<{
  (e: "create", entry: Entry): void
}>()


const handleTextLength = (e: Event) => {
  const textData = e.target as HTMLTextAreaElement
  if(textData.value.length > 280) textData.value = body.value = textData.value.substring(0, 280)
  else body.value = textData.value
}

const submitForm = () => {
  emit('create', {id: 1, body: body.value, createdAt: new Date(), userId:v1(), emoji: emoji.value})
  body.value = ''
  emoji.value = null
}

</script>
<template>
  <form class="entry-form" @submit.prevent="submitForm">
    <textarea :value="body" @keyup="handleTextLength" placeholder="New Journal Entry for danielkelly_io"></textarea>
    <EmojiField v-model="emoji"/>
    <div class="entry-form-footer">
      <span>{{ charCount }} / 280</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
