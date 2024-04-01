<template>
  <button type="button" class="-m-2.5 rounded-md p-2.5 text-quicksilver-700" @click="toggleMenu">
    <span class="sr-only">{{ srText }}</span>
    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  toggleMenu: Function,
  srText: String
})
</script>