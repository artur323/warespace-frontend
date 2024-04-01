<template>
  <a :href="href"
    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-wsblue-900 dark:text-snowwhite">{{
    label }}</a>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  href: String,
  label: String
})
</script>