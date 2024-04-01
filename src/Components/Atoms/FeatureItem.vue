<template>
  <div class="relative pl-9">
    <dt class="inline font-semibold text-gray-900 dark:text-snowwhite">
      <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-wsblue-600 dark:text-wsblue-300"
        aria-hidden="true" />
      {{ feature.name }}
    </dt>
    {{ ' ' }}
    <dd class="inline dark:text-gray-500">{{ feature.description }}</dd>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  feature: {
    type: Object,
    required: true,
  },
});
</script>