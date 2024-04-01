<template>
  <div class="flex gap-x-4 rounded-xl bg-snowwhite/5 p-6 ring-1 ring-inset ring-snowwhite/10">
    <component :is="icon" class="h-7 w-5 flex-none text-wsblue-400" aria-hidden="true" />
    <div class="text-base leading-7">
      <h3 class="font-semibold text-snowwhite">{{ name }}</h3>
      <p class="mt-2 text-gray-300">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
  description: String,
  icon: Function,
});
</script>
