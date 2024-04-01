<template>
  <div class="bg-snowwhite font-poppins" :class="{ 'dark:bg-darkBackground': darkMode }">
    <div class="mx-auto max-w-7xl px-6 py-12 sm:py-20 lg:px-8">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-400/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-snowwhite">Frequently asked questions</h2>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-400/10">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900 dark:text-snowwhite">
                <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600 dark:text-gray-500">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
import { darkMode } from "../../theme.js";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]
</script>