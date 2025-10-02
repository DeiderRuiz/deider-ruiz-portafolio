<script setup>
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/useProfileStore'

// se obtiene la instancia del store "profile"
const profile = useProfileStore()
// extraer las propiedades reactivas del store usando storeToRefs.
const { datos } = storeToRefs(profile)
</script>
<template>
  <div class="px-6 sm:px-12 py-6 space-y-6">
    <div v-for="rol in datos.roles" :key="rol.titulo" class="max-w-full space-y-3">
      <div>
        <h1 class="text-2xl sm:text-4xl-plus font-bold">{{ rol.titulo }}</h1>
        <p class="text-sm sm:text-base font-medium">{{ rol.descripcion }}</p>
      </div>
      <a
        :href="rol.curriculum"
        target="_blank"
        class="w-full sm:max-w-fit text-sm sm:text-base text-center py-2 px-3 bg-morado-scorpios text-white hover:bg-morado-scorpios-light rounded-lg transition transform hover:scale-110 ease-in-out duration-300 flex items-center justify-center space-x-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m12 2l.117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm-2.5 8A2.5 2.5 0 0 0 7 12.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0-2 0a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0a1 1 0 0 0 2 0A2.5 2.5 0 0 0 9.5 10m6.743.03a1 1 0 0 0-1.213.727l-.53 2.119l-.53-2.119a1 1 0 1 0-1.94.486l1.5 6c.252 1.01 1.688 1.01 1.94 0l1.5-6a1 1 0 0 0-.727-1.213m-1.244-7.031L19 7h-4z"
          />
        </svg>
        <span>{{ datos.secciones_habilidades.curriculum }}</span>
      </a>
      <div class="text-sm sm:text-base">
        <h3 class="font-bold">{{ datos.secciones_habilidades.destacadas }}:</h3>
        <div class="flex flex-wrap items-center justify-start gap-3">
          <div
            v-for="skill in rol.destacado"
            :key="skill"
            class="bg-morado-scorpios font-semibold text-white p-2 rounded-lg w-fit"
          >
            <span>{{ skill }}</span>
          </div>
        </div>
      </div>
      <div class="text-sm sm:text-base">
        <h3 class="font-bold">{{ datos.secciones_habilidades.habilidades }}:</h3>
        <div class="flex flex-wrap items-center justify-start gap-3">
          <div
            v-for="habilidad in rol.habilidades"
            :key="habilidad"
            class="bg-morado-scorpios font-semibold text-white p-2 rounded-lg w-fit"
          >
            <span>{{ habilidad }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
