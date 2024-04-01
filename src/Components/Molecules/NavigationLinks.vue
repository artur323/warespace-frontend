<template>
  <div class="hidden lg:flex lg:gap-x-12">
    <NavLink v-for="(item, index) in navigation" :key="index" :href="item.href" :label="item.name" />
  </div>
</template>

<script setup>
import NavLink from '@/Components/Atoms/NavLink.vue'
import { defineProps } from 'vue'

const props = defineProps({
  navigation: Array
})
</script>