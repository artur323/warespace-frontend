<template>
    <a 
      :href="href" 
      class="rounded-md bg-gradient-to-r from-wsblue-500 to-violetblue-500 px-3.5 py-2.5 text-sm font-semibold text-snowwhite shadow-sm hover:bg-wsblue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wsblue-600"
    >
      {{ label }}
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
      required: true
    }
  })
  </script>