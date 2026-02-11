<script setup>
import { ref } from 'vue'
import GaleryCarousel from './GaleryCarousel.vue'
import PrimaryButton from './PrimaryButton.vue'

defineProps({
  open: Boolean,
  proyecto: Object,
  developer: String,
  designer: String,
  seccion_proyecto: Object,
})

const modal = ref()

// abrir el acordeon en base al item seleccionado
const showModal = (item) => {
  // otro click para cerrarlo
  if (modal.value === item) {
    closeModal()
  } else {
    modal.value = item
  }
}
// cerrar elemento del acordeon que estpe abierto
const closeModal = () => {
  modal.value = null
}
</script>
<template>
  <div
    :id="`panel-${proyecto.id}`"
    role="region"
    :aria-labelledby="`accordion-${proyecto.id}`"
    v-show="open"
    class="origin-top p-8 bg-gris-scorpios-dark text-black text-sm sm:text-base space-y-3"
  >
    <div class="space-y-2">
      <h3 class="font-bold text-base sm:text-lg">
        {{ developer }}
      </h3>
      <ul class="list-disc list-outside space-y-1 ps-6">
        <li v-for="logro in proyecto.logros_dev" :key="logro">
          <span>{{ logro }}</span>
        </li>
      </ul>
    </div>
    <div class="space-y-2">
      <h3 class="font-bold text-base sm:text-lg">
        {{ designer }}
      </h3>
      <ul class="list-disc list-outside space-y-1 ps-6">
        <li v-for="logro in proyecto.logros_designer" :key="logro">
          <span>{{ logro }}</span>
        </li>
      </ul>
    </div>
    <div
      class="relative p-3 sm:p-5 group overflow-hidden cursor-pointer"
      @click="showModal(proyecto.id)"
    >
      <div
        class="absolute inset-0 bg-morado-scorpios/50 flex items-center justify-center text-white text-lg font-bold opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300 z-10"
      >
        <div class="space-y-4">
          <img :src="proyecto.logo" :alt="proyecto.titulo" class="w-24 h-auto mx-auto" />
          <p class="text-xl sm:text-2xl text-center">
            {{ seccion_proyecto.carousel }} {{ proyecto.titulo }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5">
        <img
          v-for="vista in proyecto.imagenes"
          :key="vista"
          :src="vista"
          :alt="proyecto.titulo"
          class="shadow"
        />
      </div>
    </div>
    <div
      v-show="modal === proyecto.id"
      @click.self="showModal(proyecto.id)"
      class="w-screen h-screen p-6 sm:p-12 overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-black/50"
    >
      <div class="relative w-full h-auto sm:h-full sm:w-auto aspect-[16/9]">
        <div class="relative h-full rounded-lg">
          <GaleryCarousel :imagenes="proyecto.imagenes"></GaleryCarousel>
        </div>
      </div>
    </div>
    <div class="sm:flex sm:items-center sm:justify-start sm:space-x-5 space-y-5 sm:space-y-0">
      <primary-button
        v-if="proyecto.github"
        :icono="'mdi:github'"
        :enlace="proyecto.github"
        :texto="seccion_proyecto.github"
        class="hover:ring-offset-gris-scorpios-dark"
      ></primary-button>
      <primary-button
        v-if="proyecto.figma"
        :icono="'gg:figma'"
        :enlace="proyecto.figma"
        :texto="seccion_proyecto.figma"
        class="hover:ring-offset-gris-scorpios-dark"
      ></primary-button>
    </div>
  </div>
</template>
