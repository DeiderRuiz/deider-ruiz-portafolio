<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

// cargar imagenes desde componente padre
defineProps({
  imagenes: {
    type: Array,
    required: true,
  },
})

const carouselConfig = {
  itemsToShow: 1, // mostrar un item (imagen)
  wrapAround: true, // para volver a la primera imagen si llegas a final
}
</script>
<template>
  <div>
    <Carousel v-bind="carouselConfig">
      <Slide v-for="(slide, index) in imagenes" :key="index">
        <img :src="slide" class="w-full h-auto object-cover" alt="Imagen" />
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>
