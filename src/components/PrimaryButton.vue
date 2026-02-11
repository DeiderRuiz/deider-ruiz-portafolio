<script setup>
defineProps({
  icono: String,
  enlace: String,
  texto: String,
})
</script>
<template>
  <a
    :href="enlace"
    target="_blank"
    class="block w-full sm:max-w-fit font-bold text-sm sm:text-base text-center py-2 px-3 border-3 border-morado-scorpios text-morado-scorpios hover:ring-3 hover:ring-morado-scorpios hover:ring-offset-2 hover:ring-offset-gris-scorpios hover:bg-morado-scorpios hover:text-white transition transform ease-in-out duration-300 flex items-center justify-center space-x-2 cursor-pointer"
  >
    <iconify-icon :icon="icono"></iconify-icon>
    <span>{{ texto }}</span>
  </a>
</template>
