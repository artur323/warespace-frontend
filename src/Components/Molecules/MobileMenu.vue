<template>
  <Dialog as="div" class="lg:hidden" @close="closeMenu" :open="mobileMenuOpen">
    <!-- Dialog overlay -->
    <div class="fixed inset-0 z-50" />

    <!-- Dialog panel -->
    <DialogPanel
      class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-snowwhite dark:bg-wsblue-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-quicksilver-900/10">
      <div class="flex items-center justify-between">
        <CompanyLogo :alt="logoAlt" />
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-wsblue-700 dark:text-snowwhite" @click="closeMenu">
          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-wsblue-500/10 dark:divide-wsblue-100/10">
          <div class="space-y-2 py-6">
            <NavLink v-for="(item, index) in navigation" :key="index" :href="item.href" :label="item.name" />
          </div>
          <div class="py-6">
            <LinkButton :href="loginHref" />
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script setup>
import { Dialog, DialogPanel } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import CompanyLogo from '@/Components/Atoms/CompanyLogo.vue'
import NavLink from '@/Components/Atoms/NavLink.vue'
import LinkButton from '@/Components/Atoms/LinkButton.vue'
import { defineProps } from 'vue';

const props = defineProps({
  navigation: Array,
  mobileMenuOpen: {
    type: Boolean,
    default: false
  },
  lightLogoSrc: String,
  darkLogoSrc: String,
  closeMenu: Function,
  logoAlt: {
    type: String,
    default: "alt"
  },
  loginHref: {
    type: String,
    default: "#"
  }
})
</script>
