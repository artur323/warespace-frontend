<template>
  <!-- <div class="bg-snowwhite"> -->
  <div class="dark:bg-wsblue-900">
    <Index />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Index from "./Pages/Palletspace/Landingpage/Index.vue";
import { darkMode } from './theme.js';

onMounted(() => {
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

</script>