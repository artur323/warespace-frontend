<template>
  <div class="flex flex-col gap-y-3 border-l border-snowwhite/10 pl-6">
    <dt class="text-sm leading-6">{{ name }}</dt>
    <dd class="order-first text-3xl font-semibold tracking-tight">{{ value }}</dd>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
  value: String,
});
</script>