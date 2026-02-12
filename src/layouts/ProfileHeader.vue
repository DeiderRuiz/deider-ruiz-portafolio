<script setup>
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/useProfileStore'

// se obtiene la instancia del store "profile"
const profile = useProfileStore()
// extraer las propiedades reactivas del store usando storeToRefs.
const { datos } = storeToRefs(profile)
</script>
<template>
  <div class="px-6 sm:px-12 py-6 bg-morado-scorpios text-white space-y-2">
    <h1 class="text-2xl sm:text-4xl-plus font-bold">Deider Yofret Ruiz Acosta</h1>
    <div class="w-full text-sm sm:text-base sm:flex sm:items-start sm:justify-between">
      <div>
        <ul class="space-y-1">
          <li class="w-fit flex items-center justify-start font-medium space-x-1">
            <iconify-icon icon="typcn:location" class="inline-block align-middle"></iconify-icon>
            <span>{{ datos.ubicacion }}</span>
          </li>
          <li class="w-fit">
            <a
              href="mailto:ruizdeider09@gmail.com"
              target="_blank"
              class="flex items-center justify-start font-medium space-x-1 hover:text-gris-scorpios-dark transition transform hover:scale-110 ease-in-out duration-300 underline"
            >
              <iconify-icon icon="mdi:email" class="inline-block align-middle"></iconify-icon>
              <span>{{ datos.email }}</span>
            </a>
          </li>
          <li class="w-fit flex items-center justify-start font-medium space-x-1">
            <iconify-icon icon="ri:whatsapp-line" class="inline-block align-middle"></iconify-icon>
            <span>{{ datos.telefono }}</span>
          </li>
        </ul>
      </div>
      <div>
        <ul class="space-y-1">
          <li class="w-fit">
            <a
              :href="datos.links.linkedin"
              target="_blank"
              class="flex items-center justify-start font-medium space-x-1 hover:text-gris-scorpios-dark transition transform hover:scale-110 ease-in-out duration-300 underline"
            >
              <iconify-icon icon="mdi:linkedin" class="inline-block align-middle"></iconify-icon>
              <span>LinkedIn</span>
            </a>
          </li>
          <li class="w-fit">
            <a
              :href="datos.links.github"
              target="_blank"
              class="flex items-center justify-start font-medium space-x-1 hover:text-gris-scorpios-dark transition transform hover:scale-110 ease-in-out duration-300 underline"
            >
              <iconify-icon icon="mdi:github" class="inline-block align-middle"></iconify-icon>
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p class="text-sm sm:text-base font-medium">{{ datos.resumen }}</p>
  </div>
</template>
