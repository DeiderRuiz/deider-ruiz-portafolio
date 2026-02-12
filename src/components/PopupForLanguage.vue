<script setup>
const emit = defineEmits(['select'])
</script>
<template>
  <div
    class="absolute right-0 z-10 mt-2 w-fit origin-top-right bg-gris-scorpios shadow-lg/30 focus:outline-none overflow-hidden"
  >
    <button
      @click="emit('select', 'es')"
      class="cursor-pointer w-full block flex items-center justify-between px-4 py-2 text-black hover:bg-gris-scorpios-dark transition duration-300"
    >
      <div class="flex items-center justify-start space-x-3">
        <iconify-icon
          icon="twemoji:flag-colombia"
          class="text-2xl inline-block align-middle"
        ></iconify-icon>
        <span>Español</span>
      </div>
    </button>
    <button
      @click="emit('select', 'en')"
      class="cursor-pointer w-full block flex items-center justify-between px-4 py-2 text-black hover:bg-gris-scorpios-dark transition duration-300"
    >
      <div class="flex items-center justify-start space-x-3">
        <iconify-icon
          icon="twemoji:flag-for-flag-united-states"
          class="text-2xl inline-block align-middle"
        ></iconify-icon>
        <span>English</span>
      </div>
    </button>
  </div>
</template>
