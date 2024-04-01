<template>
  <div class="flex space-x-6">
    <a v-for="item in socialLinks" :key="item.name" :href="item.href" class="text-quicksilver-400 hover:text-quicksilver-500">
      <span class="sr-only">{{ item.name }}</span>
      <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  socialLinks: Array
});
</script>