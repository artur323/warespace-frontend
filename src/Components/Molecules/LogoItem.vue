<template>
  <img :src="lightImageSrc" :alt="alt" :class="classProps" :width="width" :height="height" class="dark:hidden"/>
  <img :src="darkImageSrc" :alt="alt" :class="classProps" :width="width" :height="height" class="hidden dark:block"/>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  darkImageSrc: String,
  lightImageSrc: String,
  alt: String,
  classProps: {
    type: String,
    default: "max-h-12 w-full object-contain object-left"
  },
  width: {
    type: String,
    default: "auto"
  },
  height: {
    type: String,
    default: "auto"
  }
});
</script>
