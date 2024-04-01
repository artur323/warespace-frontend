<template>
  <div class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
    <LogoItem v-for="(logo, index) in logos" :key="index" :imageSrc="darkMode ? logo.dark : logo.light"
      :alt="logo.alt" />
  </div>
</template>

<script setup>
import LogoItem from '@/Components/Atoms/LogoItem.vue';
import { defineProps } from 'vue';

const props = defineProps({
  darkMode: Boolean,
  logos: Array,
});
</script>