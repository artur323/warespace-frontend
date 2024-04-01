<template>
  <img v-if="!darkMode" :src="lightLogoSrc" class="h-6 sm:h-8 w-auto" :alt="alt" />
  <img v-else :src="darkLogoSrc" class="h-6 sm:h-8 w-auto" :alt="alt" />
</template>
<script setup>
import { darkMode } from '@/main'
import { defineProps } from 'vue';

const props = defineProps({
  lightLogoSrc: String,
  darkLogoSrc: String,
  alt: String,
})
</script>