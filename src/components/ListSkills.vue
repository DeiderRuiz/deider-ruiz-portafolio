<script setup>
defineProps({
  titulo: String,
  habilidades: Array,
})
</script>
<template>
  <div class="text-sm sm:text-base font-medium">
    <h3 class="font-bold">{{ titulo }}:</h3>
    <p>
      <template v-for="(habilidad, index) in habilidades" :key="habilidad">
        {{ habilidad }} <span v-if="index < habilidades.length - 1"> • </span>
      </template>
    </p>
  </div>
</template>
