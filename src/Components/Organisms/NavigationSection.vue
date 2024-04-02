<template>
  <header class="absolute inset-x-0 top-0 z-50 font-noir">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <CompanyLogo :lightLogoSrc="lightLogo" :darkLogoSrc="darkLogo" alt="Your Company" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <MobileMenuButton @click="toggleMenu"/>
      </div>
      <NavigationLinks :navigation="navigation" />
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <LinkButton href="#" />
      </div>
    </nav>
    <MobileMenu :navigation="navigation" :mobileMenuOpen="mobileMenuOpen" :logoSrc="darkLogo" :closeMenu="closeMenu" :lightLogoSrc="lightLogo" :darkLogoSrc="darkLogo"/>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { navigation, lightLogo, darkLogo } from '@/data.js'
import CompanyLogo from '@/Components/Atoms/CompanyLogo.vue'
import MobileMenuButton from '@/Components/Atoms/MobileMenuButton.vue'
import NavigationLinks from '@/Components/Molecules/NavigationLinks.vue'
import MobileMenu from '@/Components/Molecules/MobileMenu.vue'
import LinkButton from '@/Components/Atoms/LinkButton.vue'

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false;
}

</script>
