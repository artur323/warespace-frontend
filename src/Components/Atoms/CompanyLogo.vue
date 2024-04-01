<template>
  <a :href="link" class="-m-1.5 p-1.5">
    <span class="sr-only">{{ alt }}</span>
    <img v-if="!darkMode" :src="lightLogoSrc" class="h-6 sm:h-8 w-auto" :alt="alt" />
    <img v-else :src="darkLogoSrc" class="h-6 sm:h-8 w-auto" :alt="alt" />
  </a>
</template>
<script setup>
import { darkMode } from '@/theme.js'
</script>

<script>
export default {
  props: {
    lightLogoSrc: String,
    darkLogoSrc: String,
    alt: String,
    link: {
      type: String,
      default: "#"
    }
  }
}
</script>