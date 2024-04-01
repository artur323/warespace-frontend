<template>
  <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="toggleMenu">
    <span class="sr-only">{{ srText }}</span>
    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
  </button>
</template>

<script>
export default {
  props: {
    toggleMenu: Function,
    srText: String
  }
}
</script>