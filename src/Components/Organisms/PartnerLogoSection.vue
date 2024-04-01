<template>
  <div class="bg-snowwhite py-12 sm:py-20 font-poppins" :class="{ 'dark:bg-darkBackground': darkMode }">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" :src="darkMode ? darkTransistorSVG : lightTransistorSVG" alt="Transistor" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" :src="darkMode ? darkReformSVG : lightReformSVG" alt="Reform" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" :src="darkMode ? darkTupleSVG : lightTupleSVG" alt="Tuple" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" :src="darkMode ? darkSavvycalSVG : lightSavvycalSVG" alt="SavvyCal" width="158" height="48" />
        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" :src="darkMode ? darkStatamicSVG : lightStatamicSVG" alt="Statamic" width="158" height="48" />
      </div>
      <div class="mt-16 flex justify-center">
        <p class="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
          <span class="hidden md:inline">Over 2500 companies use our tools to better their business.</span>
          <a href="#" class="font-semibold text-wsblue-600"><span class="absolute inset-0" aria-hidden="true" /> Read our customer stories <span aria-hidden="true">&rarr;</span></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { darkMode } from "../../theme.js";


const lightTupleSVG = "https://tailwindui.com/img/logos/tuple-logo-gray-900.svg";
const lightReformSVG = "https://tailwindui.com/img/logos/reform-logo-gray-900.svg";
const lightSavvycalSVG = "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg";
const lightLaravelSVG = "https://tailwindui.com/img/logos/laravel-logo-gray-900.svg";
const lightTransistorSVG = "https://tailwindui.com/img/logos/transistor-logo-gray-900.svg";
const lightStatamicSVG = "https://tailwindui.com/img/logos/statamic-logo-gray-900.svg";

const darkTupleSVG = "https://tailwindui.com/img/logos/tuple-logo-white.svg";
const darkReformSVG = "https://tailwindui.com/img/logos/reform-logo-white.svg";
const darkSavvycalSVG = "https://tailwindui.com/img/logos/savvycal-logo-white.svg";
const darkLaravelSVG = "https://tailwindui.com/img/logos/laravel-logo-white.svg";
const darkTransistorSVG = "https://tailwindui.com/img/logos/transistor-logo-white.svg";
const darkStatamicSVG = "https://tailwindui.com/img/logos/statamic-logo-white.svg";

</script>