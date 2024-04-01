<template>
  <Dialog as="div" class="lg:hidden" @close="closeMenu" :open="mobileMenuOpen">
    <!-- Dialog overlay -->
    <div class="fixed inset-0 z-50" />

    <!-- Dialog panel -->
    <DialogPanel
      class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-snowwhite dark:bg-darkBackground px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <CompanyLogo :lightLogoSrc="lightLogoSrc" :darkLogoSrc="darkLogoSrc"  :alt="logoAlt" />
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="closeMenu">
          <span class="sr-only">Close menu</span>
          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <NavLink v-for="(item, index) in navigation" :key="index" :href="item.href" :label="item.name" />
          </div>
          <div class="py-6">
            <LoginLink :href="loginHref" />
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
import LoginLink from '@/Components/Atoms/LoginLink.vue'


</script>

<script>
export default {
  props: {
    navigation: Array,
    mobileMenuOpen: {
      type:Boolean,
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
  }
}
</script>
