<template>
  <a :href="href" class="text-sm font-semibold leading-6 text-gray-900 dark:text-snowwhite">
    {{ label }}
    <span aria-hidden="true">&rarr;</span>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  href: String,
  label: {
    type: String, default: "Log in"
  }
})
</script>