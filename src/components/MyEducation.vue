<script setup>
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/useProfileStore'

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
            <img :src="idioma.bandera" :alt="idioma.lengua" class="w-6 h-6" />
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
                <a
                  :href="certificado.link"
                  target="_blank"
                  class="w-full sm:max-w-fit text-sm sm:text-base text-center py-2 px-3 bg-morado-scorpios text-white hover:bg-morado-scorpios-light rounded-lg transition transform hover:scale-110 ease-in-out duration-300 flex items-center justify-center space-x-2"
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
                      d="M2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121c-.476.477-1.11.695-2.04.795a3 3 0 0 0-.195-.234a11 11 0 0 0-.406-.414l-1.493-1.472l-.551-.558a4.501 4.501 0 0 0-8.872 0l-.55.558l-1.494 1.472c-.143.141-.29.286-.406.414c-.05.055-.12.134-.194.234c-.931-.1-1.565-.318-2.041-.795C2 16.243 2 14.828 2 12m7-6.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM6.25 9.5A.75.75 0 0 1 7 8.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
                      clip-rule="evenodd"
                    />
                    <path fill="currentColor" d="M15 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                    <path
                      fill="currentColor"
                      d="M9.001 15.917L9 16a3 3 0 1 0 .001-.083M7.676 17.25l-1.08 1.065c-.325.32-.487.48-.543.614a.643.643 0 0 0 .26.813c.122.071.342.093.783.138c.248.025.373.037.477.075a.84.84 0 0 1 .5.494c.039.103.052.225.077.47c.045.435.068.652.14.773a.66.66 0 0 0 .824.256c.137-.056.3-.215.623-.535l1.08-1.07a4.51 4.51 0 0 1-3.141-3.094m5.507 3.094l1.08 1.07c.324.32.486.48.623.535c.313.126.66.018.824-.256c.072-.12.095-.338.14-.772c.025-.246.038-.368.077-.47a.84.84 0 0 1 .5-.495c.105-.038.229-.05.477-.075c.44-.045.661-.067.783-.138a.643.643 0 0 0 .26-.812c-.056-.136-.218-.296-.542-.615l-1.08-1.066a4.51 4.51 0 0 1-3.142 3.094"
                    />
                  </svg>
                  <span>{{ datos.ver_certificado }}</span>
                </a>
              </div>
            </div>
          </div>
          <hr v-if="index < datos.certificados.length - 1" />
        </div>
      </div>
    </div>
  </section>
</template>
