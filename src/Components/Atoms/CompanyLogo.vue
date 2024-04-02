<template>
  <div class="h-[24px] w-[165.09px] sm:h-[32px] sm:w-[220.13px] bg-light-logo dark:bg-dark-logo bg-contain" :alt="alt" />
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  alt: String,
})
</script>