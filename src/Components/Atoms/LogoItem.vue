<template>
  <img :src="imageSrc" :alt="alt" :class="class" :width="width" :height="height"/>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageSrc: String,
  alt: String,
  class: {
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
