<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import { ref, computed } from "vue"
import type Emoji from "../types/Emoji"

const text = ref("")

const emoji = ref<Emoji|null>(null)

const charCount = computed(()=> text.value.length)

defineEmits<{
  (e: "create", entry: {text: string, emoji: Emoji| null}): void
}>()


const handleTextLength = (e: Event) => {
  const textData = e.target as HTMLTextAreaElement
  if(textData.value.length > 280) textData.value = text.value = textData.value.substring(0, 280)
}

</script>
<template>
  <form class="entry-form" @submit.prevent="$emit('create', {text, emoji})">
    <textarea :value="text" @keyup="handleTextLength" placeholder="New Journal Entry for danielkelly_io"></textarea>
    <EmojiField v-model="emoji"/>
    <div class="entry-form-footer">
      <span>{{ charCount }} / 280</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
