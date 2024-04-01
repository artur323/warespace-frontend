<template>
  <dl class="mt-10 space-y-6 divide-y divide-quicksilver-900/10 dark:divide-quicksilver-400/10">
    <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
      <dt>
        <DisclosureButton class="flex w-full items-start justify-between text-left text-warespaceblue-200 dark:text-snowwhite">
          <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
          <span class="ml-6 flex h-7 items-center">
            <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
            <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
          </span>
        </DisclosureButton>
      </dt>
      <DisclosurePanel as="dd" class="mt-2 pr-12">
        <p class="text-base leading-7 text-quicksilver-600 dark:text-quicksilver-500">{{ faq.answer }}</p>
      </DisclosurePanel>
    </Disclosure>
  </dl>
</template>

<script setup>
import { defineProps } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  faqs: {
    type: Array,
    required: true,
  },
});
</script>