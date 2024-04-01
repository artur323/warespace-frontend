<template>
  <div class="bg-snowwhite py-12 sm:py-20 font-poppins" :class="{ 'dark:bg-darkBackground': darkMode }">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <LogoRow :darkMode="darkMode" />
      <div class="mt-16 flex justify-center">
        <p
          class="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
          <span class="hidden md:inline">Over 2500 companies use our tools to better their business.</span>
          <a href="#" class="font-semibold text-wsblue-600"><span class="absolute inset-0" aria-hidden="true" /> 
            Read our customer stories 
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoRow from '@/Components/Molecules/LogoRow.vue';
import { darkMode } from '@/theme';
</script>