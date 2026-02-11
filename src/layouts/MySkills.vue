<script setup>
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/useProfileStore'
import PrimaryButton from '../components/PrimaryButton.vue'
import ListSkills from '../components/ListSkills.vue'

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
      <ListSkills
        :titulo="datos.secciones_habilidades.habilidades"
        :habilidades="rol.habilidades"
      ></ListSkills>
      <PrimaryButton
        :icono="'tabler:file-cv-filled'"
        :enlace="rol.curriculum"
        :texto="datos.secciones_habilidades.curriculum"
      ></PrimaryButton>
    </div>
  </div>
</template>
