<template>
  <div class="bg-snowwhite py-12 sm:py-20 font-poppins" :class="{ 'dark:bg-darkBackground': darkMode }">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div class="mx-auto w-full max-w-xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-snowwhite">Trusted by the most innovative
            teams</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-500">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
            fermentum, augue.</p>
          <div class="mt-8 flex items-center gap-x-6">
            <a href="#"
              class="rounded-md bg-gradient-to-r from-[#0C338D] to-[#4F5BD3] px-3.5 py-2.5 text-sm font-semibold text-snowwhite shadow-sm hover:bg-wsblue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wsblue-600">Create
              account</a>
            <a href="#" class="text-sm font-semibold text-gray-900 dark:text-snowwhite">Contact us <span
                aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <LogoList :darkMode="darkMode" :logos="logos" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { darkMode } from '@/theme';
import LogoList from '@/Components/Molecules/LogoList.vue';
import { logos } from "@/data";

</script>
