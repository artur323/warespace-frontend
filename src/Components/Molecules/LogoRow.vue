<template>
  <div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
    <LogoItem v-for="(logo, index) in logoRows" :key="index" :classProps="logo.class"
      :imageSrc="darkMode ? logo.dark : logo.light" :alt="logo.alt"  :width="logo.width" :height="logo.height"
    />
  </div>
</template>

<script setup>
import LogoItem from '@/Components/Atoms/LogoItem.vue';
import { logoRows } from '@/data';
import { defineProps } from 'vue';

const props = defineProps({
  darkMode: Boolean,
});
</script>

