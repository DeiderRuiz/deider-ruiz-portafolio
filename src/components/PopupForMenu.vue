<script setup>
defineProps({
  secciones: Object,
})
</script>
<template>
  <div
    class="absolute right-0 z-10 mt-2 w-fit origin-top-right bg-gris-scorpios shadow-lg/30 focus:outline-none overflow-hidden"
  >
    <a
      href="#perfil"
      class="w-full block flex items-center justify-between px-4 py-2 text-black hover:bg-gris-scorpios-dark transition duration-300"
    >
      <div class="flex items-center justify-start space-x-3">
        <iconify-icon icon="mingcute:profile-fill"></iconify-icon>
        <span>{{ secciones.perfil }}</span>
      </div>
    </a>
    <a
      href="#proyectos"
      class="w-full block flex items-center justify-between px-4 py-2 text-black hover:bg-gris-scorpios-dark transition duration-300"
    >
      <div class="flex items-center justify-start space-x-3">
        <iconify-icon icon="fluent:code-block-16-filled"></iconify-icon>
        <span>{{ secciones.proyectos }}</span>
      </div>
    </a>
    <a
      href="#educacion"
      class="w-full block flex items-center justify-between px-4 py-2 text-black hover:bg-gris-scorpios-dark transition duration-300"
    >
      <div class="flex items-center justify-start space-x-3">
        <iconify-icon icon="solar:diploma-bold"></iconify-icon>
        <span>{{ secciones.educacion }}</span>
      </div>
    </a>
  </div>
</template>
