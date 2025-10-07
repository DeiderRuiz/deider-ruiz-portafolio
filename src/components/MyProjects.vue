<script setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/useProfileStore'
import GaleryCarousel from '@/components/GaleryCarousel.vue'

// se obtiene la instancia del store "profile"
const profile = useProfileStore()
// extraer las propiedades reactivas del store usando storeToRefs.
const { datos } = storeToRefs(profile)
const acordeon = reactive({})
const modal = ref()

// Cambiar clases del acordeon dinamicamente
const proyectoClasses = (proyecto) => {
  return acordeon[proyecto.id]
    ? 'bg-morado-scorpios text-white' // acordeon abierto
    : 'bg-cosmic-latte text-black' // acordeon cerrado
}

// Girar flecha del acordeon en 180
const arrowClasses = (proyecto) => {
  return acordeon[proyecto.id]
    ? 'rotate-180 duration-300' // normal
    : 'rotate-0 duration-300' // girada
}

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
  <section class="px-6 sm:px-12 py-6 space-y-6 scroll-mt-17" id="proyectos">
    <h1 class="text-2xl sm:text-4xl-plus font-bold">{{ datos.secciones.proyectos }}</h1>
    <div>
      <div v-for="proyecto in datos.proyectos" :key="proyecto.id">
        <button
          type="button"
          class="w-full p-3 cursor-pointer hover:bg-morado-scorpios hover:text-white transition duration-300"
          :class="proyectoClasses(proyecto)"
          @click="acordeon[proyecto.id] = !acordeon[proyecto.id]"
          :aria-expanded="acordeon[proyecto.id] ? 'true' : 'false'"
          :aria-controls="`panel-${proyecto.id}`"
        >
          <div class="w-full p-5 border-l-8 space-y-3" :style="{ borderColor: proyecto.color }">
            <div class="text-sm sm:text-base sm:flex sm:items-center sm:justify-between">
              <div class="flex items-center justify-start space-x-3 font-bold">
                <div class="w-10 h-10"><img :src="proyecto.logo" :alt="proyecto.titulo" /></div>
                <span>{{ proyecto.titulo }}</span>
              </div>
              <p class="text-left">{{ proyecto.fecha_inicio }} - {{ proyecto.fecha_fin }}</p>
            </div>
            <div class="text-sm sm:text-base flex items-end justify-between">
              <div class="text-left">
                <p><span class="font-bold">Roles:</span> {{ proyecto.rol }}</p>
                <p>{{ proyecto.descripcion }}</p>
                <p>{{ proyecto.logro_general }}</p>
                <p><span class="font-bold">Stack:</span> {{ proyecto.stack.join(' • ') }}</p>
              </div>
              <svg
                data-accordion-icon
                class="w-3 h-3 shrink-0"
                :class="arrowClasses(proyecto)"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </div>
          </div>
        </button>
        <Transition
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="scale-y-0 opacity-0"
          enter-to-class="scale-y-100 opacity-100"
          leave-active-class="transition-all duration-500 ease-in"
          leave-from-class="scale-y-100 opacity-100"
          leave-to-class="scale-y-0 opacity-0"
        >
          <div
            :id="`panel-${proyecto.id}`"
            role="region"
            :aria-labelledby="`accordion-${proyecto.id}`"
            v-show="acordeon[proyecto.id]"
            class="origin-top p-8 mb-2 bg-cosmic-latte-dark text-black text-sm sm:text-base space-y-3 shadow-md/30"
          >
            <div class="space-y-2">
              <h3 class="font-bold text-base sm:text-lg">
                {{ datos.seccion_proyectos.developer }}
              </h3>
              <ul class="list-disc list-outside space-y-1 ps-6">
                <li v-for="logro in proyecto.logros_dev" :key="logro">
                  <span>{{ logro }}</span>
                </li>
              </ul>
            </div>
            <div class="space-y-2">
              <h3 class="font-bold text-base sm:text-lg">
                {{ datos.seccion_proyectos.designer }}
              </h3>
              <ul class="list-disc list-outside space-y-1 ps-6">
                <li v-for="logro in proyecto.logros_designer" :key="logro">
                  <span>{{ logro }}</span>
                </li>
              </ul>
            </div>
            <div
              class="relative p-3 sm:p-5 rounded-xl group overflow-hidden cursor-pointer"
              @click="showModal(proyecto.id)"
            >
              <div
                class="absolute inset-0 bg-morado-scorpios/50 flex items-center justify-center text-white text-lg font-bold opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300 z-10"
              >
                <div class="space-y-4">
                  <img :src="proyecto.logo" :alt="proyecto.titulo" class="w-24 h-auto mx-auto" />
                  <p class="text-xl sm:text-2xl text-center">
                    {{ datos.seccion_proyectos.carousel }} {{ proyecto.titulo }}
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5">
                <img
                  v-for="vista in proyecto.imagenes"
                  :key="vista"
                  :src="vista"
                  :alt="proyecto.titulo"
                  class="rounded-xl shadow"
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
            <div
              class="sm:flex sm:items-center sm:justify-start sm:space-x-5 space-y-5 sm:space-y-0"
            >
              <a
                v-if="proyecto.github"
                :href="proyecto.github"
                target="_blank"
                class="py-2 px-3 border-4 bg-morado-scorpios border-morado-scorpios text-white hover:bg-morado-scorpios-light hover:border-morado-scorpios-light rounded-lg transition transform hover:scale-110 ease-in-out duration-300 flex items-center justify-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
                <span>{{ datos.seccion_proyectos.github }}</span>
              </a>
              <a
                v-if="proyecto.figma"
                :href="proyecto.figma"
                target="_blank"
                class="py-2 px-3 border-4 border-morado-scorpios text-black hover:border-morado-scorpios-light rounded-lg transition transform hover:scale-110 ease-in-out duration-300 flex items-center justify-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ datos.seccion_proyectos.figma }}</span>
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
