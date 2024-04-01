<template>
  <div class="bg-snowwhite font-poppins" :class="{ 'dark:bg-darkBackground': darkMode }">
    <div class="mx-auto max-w-7xl px-6 py-12 sm:py-20 lg:px-8">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-400/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-snowwhite">Frequently asked questions</h2>
        <FaqItem :faqs="faqs"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { darkMode } from "@/theme"
import FaqItem from '@/Components/Molecules/FaqItem.vue'
import { faqs } from "@/data"
</script>