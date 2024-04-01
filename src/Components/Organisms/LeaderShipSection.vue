<template>
  <div class="bg-snowwhite py-12 sm:py-20 font-poppins" :class="{ 'dark:bg-darkBackground': darkMode }">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-snowwhite">Meet our leadership</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-500">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
        <PersonCardList :people="people" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { darkMode } from "@/theme";
import { people } from "@/data";
import PersonCardList from '@/Components/Molecules/PersonCardList.vue';
</script>