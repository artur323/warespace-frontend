<template>
  <img :src="imageUrl" :alt="name" class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" draggable="false" />
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageUrl: String,
  name: String
});
</script>