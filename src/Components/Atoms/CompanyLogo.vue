<template>
  <img :src="!isDarkMode ? lightLogoSrc : darkLogoSrc" class="h-6 sm:h-8 w-auto" :alt="alt" />
</template>
<script setup>
import { defineProps, inject } from 'vue';

const props = defineProps({
  lightLogoSrc: String,
  darkLogoSrc: String,
  alt: String,
})

const isDarkMode = inject('isDarkMode');

</script>