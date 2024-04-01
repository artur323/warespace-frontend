<template>
  <div class="overflow-hidden bg-snowwhite py-12 sm:py-20 font-poppins dark:bg-wsblue-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-wsblue-600 dark:text-wsblue-300">Deploy faster</h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-warespaceblue-900 dark:text-snowwhite sm:text-4xl font-poppins">
              A better workflow</p>
            <p class="mt-6 text-lg leading-8 text-quicksilver-600 dark:text-quicksilver-500">Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </p>
            <FeatureList :features="features" />
          </div>
        </div>
        <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot"
          class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-quicksilver-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width="2432" height="1442" />
      </div>
    </div>
  </div>
</template>

<script setup>

import FeatureList from '@/Components/Molecules/FeatureList.vue';
import { features } from '@/data';

</script>
