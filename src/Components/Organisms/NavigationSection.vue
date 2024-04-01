<template>
  <header class="absolute inset-x-0 top-0 z-50 font-noir">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <CompanyLogo :lightLogoSrc="lightLogo" :darkLogoSrc="darkLogo" alt="Your Company" />
      </div>
      <div class="flex lg:hidden">
        <DarkModeToggle :lightIcon="lightModeSvg" :darkIcon="darkModeSvg" />
        <MobileMenuButton @click="toggleMenu"/>
      </div>
      <NavigationLinks :navigation="navigation" />
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <DarkModeToggle :lightIcon="lightModeSvg" :darkIcon="darkModeSvg" />
        <LoginLink href="#" />
      </div>
    </nav>
    <MobileMenu :navigation="navigation" :mobileMenuOpen="mobileMenuOpen" :logoSrc="darkLogo" :closeMenu="closeMenu" :lightLogoSrc="lightLogo" :darkLogoSrc="darkLogo"/>
  </header>
</template>

<script setup>
import { navigation, lightLogo, darkLogo, lightModeSvg, darkModeSvg } from '@/data.js'
import { ref } from 'vue'
import CompanyLogo from '@/Components/Atoms/CompanyLogo.vue'
import MobileMenuButton from '@/Components/Atoms/MobileMenuButton.vue'
import NavigationLinks from '@/Components/Molecules/NavigationLinks.vue'
import DarkModeToggle from '@/Components/Atoms/DarkModeToggle.vue'
import MobileMenu from '@/Components/Molecules/MobileMenu.vue'
import LoginLink from '@/Components/Atoms/LoginLink.vue'

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false;
}

</script>
