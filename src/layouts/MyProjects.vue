<script setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/useProfileStore'
import AccordionHead from '@/components/AccordionHead.vue'
import AccordionBody from '@/components/AccordionBody.vue'
import ScaleFadeTransition from '@/components/ScaleFadeTransition.vue'

// se obtiene la instancia del store "profile"
const profile = useProfileStore()
// extraer las propiedades reactivas del store usando storeToRefs.
const { datos } = storeToRefs(profile)
const acordeon = reactive({})

//Cambiar sombra del div contenedor de los proyectos dinamicamente
const sombrasClasses = (proyecto) => {
  return acordeon[proyecto.id]
    ? 'shadow-md/40 transition duration-300' // Con sombra
    : '' // sin sombra
}
</script>
<template>
  <section class="px-6 sm:px-12 py-6 space-y-6 scroll-mt-17" id="proyectos">
    <h1 class="text-2xl sm:text-4xl-plus font-bold">{{ datos.secciones.proyectos }}</h1>
    <div>
      <div v-for="proyecto in datos.proyectos" :key="proyecto.id" :class="sombrasClasses(proyecto)">
        <AccordionHead
          :proyecto="proyecto"
          :more="datos.seccion_proyectos.ver_mas"
          :open="acordeon[proyecto.id]"
          @toggle="acordeon[proyecto.id] = !acordeon[proyecto.id]"
        ></AccordionHead>
        <scale-fade-transition>
          <AccordionBody
            :open="acordeon[proyecto.id]"
            :proyecto="proyecto"
            :developer="datos.seccion_proyectos.developer"
            :designer="datos.seccion_proyectos.designer"
            :seccion_proyecto="datos.seccion_proyectos"
          ></AccordionBody>
        </scale-fade-transition>
      </div>
    </div>
  </section>
</template>
