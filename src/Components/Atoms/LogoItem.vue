<template>
  <img :src="imageSrc" :alt="alt" class="max-h-12 w-full object-contain object-left" />
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageSrc: String,
  alt: String,
});
</script>
