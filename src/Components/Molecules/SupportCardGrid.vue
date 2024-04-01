<template>
  <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
    <SupportCard v-for="card in cards" :key="card.name" :name="card.name" :description="card.description" :icon="card.icon" />
  </div>
</template>

<script setup>
import SupportCard from '@/Components/Atoms/SupportCard.vue';
import { defineProps } from 'vue';

const props = defineProps({
  cards: Array
})
</script>
