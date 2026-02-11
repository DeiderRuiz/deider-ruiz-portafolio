<script setup>
defineProps({
  proyecto: Object,
  more: String,
  open: Boolean,
})

const emit = defineEmits(['toggle'])
</script>
<template>
  <button
    type="button"
    class="w-full p-3 cursor-pointer hover:bg-morado-scorpios hover:text-white transition duration-300"
    :class="{
      'bg-morado-scorpios text-white': open,
      'hover:shadow-md/40 text-black': !open,
    }"
    @click="emit('toggle')"
    :aria-expanded="open"
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
        <div class="text-left space-y-1">
          <p>{{ proyecto.descripcion }}</p>
          <p><span class="font-bold">Roles:</span> {{ proyecto.rol }}</p>
          <p><span class="font-bold">Stack:</span> {{ proyecto.stack.join(' • ') }}</p>
        </div>
      </div>
      <div class="flex items-center justify-end space-x-1">
        <span class="w-fit underline">{{ more }}</span>
        <iconify-icon
          icon="mingcute:down-fill"
          class="sm:text-xl"
          :class="{
            'rotate-0 duration-300': !open,
            'rotate-180 duration-300': open,
          }"
        ></iconify-icon>
      </div>
    </div>
  </button>
</template>
