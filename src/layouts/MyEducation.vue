<script setup>
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/useProfileStore'
import PrimaryButton from '@/components/PrimaryButton.vue'

// se obtiene la instancia del store "profile"
const profile = useProfileStore()
// extraer las propiedades reactivas del store usando storeToRefs.
const { datos } = storeToRefs(profile)
</script>
<template>
  <section class="px-6 sm:px-12 py-6 space-y-6 scroll-mt-17" id="educacion">
    <div class="max-w-full overflow-hidden space-y-6">
      <div>
        <h1 class="text-2xl sm:text-4xl-plus font-bold">{{ datos.secciones.educacion }}</h1>
        <div class="text-sm sm:text-base flex items-center justify-between">
          <div class="text-left space-y-1">
            <p class="font-bold">{{ datos.educacion.grado }}</p>
            <p>{{ datos.educacion.universidad }}</p>
          </div>
          <div class="text-right space-y-1">
            <p>{{ datos.educacion.ciudad }}</p>
            <p>{{ datos.educacion.inicio }} - {{ datos.educacion.fin }}</p>
          </div>
        </div>
      </div>
      <div>
        <h1 class="text-2xl sm:text-4xl-plus font-bold">{{ datos.secciones.idiomas }}</h1>
        <ul class="text-sm sm:text-base">
          <li
            v-for="idioma in datos.idiomas"
            :key="idioma"
            class="flex items-center justify-start space-x-2"
          >
            <iconify-icon
              :icon="idioma.bandera"
              class="text-2xl inline-block align-middle"
            ></iconify-icon>
            <p>
              <span class="font-bold">{{ idioma.lengua }}:</span> {{ idioma.nivel }}
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h1 class="text-2xl sm:text-4xl-plus font-bold">{{ datos.secciones.certificados }}</h1>
        <div v-for="(certificado, index) in datos.certificados" :key="index">
          <div class="w-full p-3">
            <div
              class="w-full p-5 text-sm sm:text-base border-l-8 border-morado-scorpios space-y-3"
            >
              <div class="sm:flex sm:items-center sm:justify-between space-y-3 space-x-3">
                <div class="text-left space-y-1">
                  <p class="font-bold">{{ certificado.titulo }}</p>
                  <p>{{ certificado.from }}</p>
                  <p>{{ certificado.fecha }}</p>
                </div>
                <PrimaryButton
                  :icono="'solar:diploma-bold'"
                  :enlace="certificado.link"
                  :texto="datos.ver_certificado"
                ></PrimaryButton>
              </div>
            </div>
          </div>
          <hr v-if="index < datos.certificados.length - 1" />
        </div>
      </div>
    </div>
  </section>
</template>
