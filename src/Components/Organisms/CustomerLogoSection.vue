<template>
  <div class="bg-snowwhite py-12 sm:py-20 font-poppins dark:bg-wsblue-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div class="mx-auto w-full max-w-xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-warespaceblue-900 dark:text-snowwhite">Trusted by the most innovative
            teams</h2>
          <p class="mt-6 text-lg leading-8 text-quicksilver-600 dark:text-quicksilver-500">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
            fermentum, augue.</p>
          <div class="mt-8 flex items-center gap-x-6">
            <PrimaryButton label="Create account"/>
            <LinkButton label="Contact us" />
          </div>
        </div>
        <LogoList :darkMode="darkMode" :logos="logos" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { darkMode } from '@/main';
import LogoList from '@/Components/Molecules/LogoList.vue';
import LinkButton from '@/Components/Atoms/LinkButton.vue';
import PrimaryButton from '@/Components/Atoms/PrimaryButton.vue';
import { logos } from "@/data";
</script>
