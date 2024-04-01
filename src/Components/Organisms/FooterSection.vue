<template>
  <footer class="bg-snowwhite font-poppins dark:bg-wsblue-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <CompanyLogo :lightLogoSrc="lightLogo" :darkLogoSrc="darkLogo" alt="Your Company" />
          <p class="text-sm leading-6 text-quicksilver-600 dark:text-quicksilver-500">Making the world a better place through constructing elegant hierarchies.</p>
          <SocialLinkList :socialLinks="footerNavigation.social"/>
        
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <FooterNavItemList :title="footerNavigation.solutions.title" :items="footerNavigation.solutions.items"/>
            <FooterNavItemList :title="footerNavigation.support.title" :items="footerNavigation.support.items" classProps="mt-10 md:mt-0"/>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <FooterNavItemList :title="footerNavigation.company.title" :items="footerNavigation.company.items"/>
            <FooterNavItemList :title="footerNavigation.legal.title" :items="footerNavigation.legal.items" classProps="mt-10 md:mt-0"/>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-quicksilver-900/10 pt-8 sm:mt-20 lg:mt-24 dark:border-quicksilver-500/10">
        <p class="text-xs leading-5 text-quicksilver-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import CompanyLogo from '@/Components/Atoms/CompanyLogo.vue'
import FooterNavItemList from '@/Components/Molecules/FooterNavItemList.vue'
import SocialLinkList from '@/Components/Molecules/SocialLinkList.vue'
import { lightLogo, darkLogo, footerNavigation } from '@/data.js'
</script>