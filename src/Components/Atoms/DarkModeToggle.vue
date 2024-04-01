<template>
  <button type="button" @click="toggleDarkMode" class="mr-[10px]">
    <img v-if="!darkMode" :src="lightIcon" alt="Dark Mode Icon"  width="24" height="24"/>
    <img v-else :src="darkIcon" alt="Light Mode Icon" width="24" height="24"/>
  </button>
</template>

<script setup>
import { darkMode, toggleDarkMode } from '@/theme.js'
</script>

<script>
export default {
  props: {
    darkMode: Boolean,
    toggleDarkMode: Function,
    lightIcon: String,
    darkIcon: String,
    alt: String
  }
}
</script>