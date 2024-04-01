<template>
  <button type="button" @click="toggleDarkMode" class="mr-[10px]">
    <img v-if="!darkMode" :src="lightIcon" alt="Dark Mode Icon" width="24" height="24" />
    <img v-else :src="darkIcon" alt="Light Mode Icon" width="24" height="24" />
  </button>
</template>

<script setup>
import { darkMode } from '@/main'
import { defineProps } from 'vue';
const props = defineProps({
  darkMode: Boolean,
  toggleDarkMode: Function,
  lightIcon: String,
  darkIcon: String,
  alt: String
})

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkMode', darkMode.value);
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>