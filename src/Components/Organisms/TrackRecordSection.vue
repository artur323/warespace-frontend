<template>
  <div class="relative isolate overflow-hidden bg-quicksilver-900 py-12 my-12 sm:py-20 sm:my-20 font-poppins">
    <img
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
      alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
        aria-hidden="true">
        <div class="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <h2 class="text-base font-semibold leading-8 text-violetblue-400">Our track record</h2>
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-snowwhite  sm:text-4xl">Trusted by thousands of creators&nbsp;worldwide</h2>
        <p class="mt-6 text-lg leading-8 text-quicksilver-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
      </div>
      <StatsList :stats="stats" />
    </div>
  </div>
</template>

<script setup>
import StatsList from '@/Components/Molecules/StatsList.vue';
import { stats } from '@/data';


</script>
