<template>
  <a :href="href" class="text-sm font-semibold leading-6 dark:text-snowwhite">
    {{ label + ' &rarr;' }} 
  </a>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  href: {
    type: String,
    default: '#'
  },
  label: {
    type: String, 
    default: "Log in"
  }
})
</script>