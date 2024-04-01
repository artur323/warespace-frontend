<template>
  <div :class="class">
    <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-snowwhite">{{ title }}</h3>
    <ul role="list" class="mt-6 space-y-4">
      <li v-for="item in items" :key="item.name">
        <a :href="item.href"
          class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-400">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  items: Array,
  class: {
    type: String,
    default: ""
  }
});
</script>