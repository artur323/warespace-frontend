<template>
  <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-quicksilver-600 lg:max-w-none">
    <FeatureItem v-for="feature in features" :key="feature.name" :feature="feature" />
  </dl>
</template>

<script setup>
import FeatureItem from '@/Components/Atoms/FeatureItem.vue';
import { defineProps } from 'vue';

const props = defineProps({
  features: {
    type: Array,
    required: true,
  },
});
</script>