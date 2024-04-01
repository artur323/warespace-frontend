<template>
  <dl
    class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
    <StatItem v-for="stat in stats" :key="stat.id" :name="stat.name" :value="stat.value" />
  </dl>
</template>

<script setup>
import StatItem from '@/Components/Atoms/StatItem.vue';
import { defineProps } from 'vue';

const props = defineProps({
  stats: Array,
});
</script>