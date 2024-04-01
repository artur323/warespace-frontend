<template>
  <li class="flex flex-col gap-6 xl:flex-row" v-for="person in people" :key="person.name">
    <PersonAvatar :imageUrl="person.imageUrl" :name="person.name" />
    <div class="flex-auto">
      <h3 class="text-lg font-semibold leading-8 tracking-tight text-wsblue-900 dark:text-snowwhite">{{ person.name }}
      </h3>
      <p class="text-base leading-7 text-quicksilver-600 dark:text-quicksilver-500">{{ person.role }}</p>
      <p class="mt-6 text-base leading-7 text-quicksilver-600 dark:text-quicksilver-500">{{ person.bio }}</p>
    </div>
  </li>
</template>

<script setup>
import PersonAvatar from '@/Components/Atoms/PersonAvatar.vue';
import { defineProps } from 'vue';

const props = defineProps({
  people: Array
});
</script>