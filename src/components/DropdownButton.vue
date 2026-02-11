<script setup>
defineProps({
  icono: String,
  texto: String,
  open: Boolean,
})

const emit = defineEmits(['toggle'])
</script>
<template>
  <button
    type="button"
    @click.stop="emit('toggle')"
    class="cursor-pointer font-semibold px-3 sm:px-4 py-2 bg-morado-scorpios-light hover:bg-gris-scorpios hover:text-black focus:bg-gris-scorpios focus:text-black flex items-center justify-end space-x-3 ease-in-out delay-150 duration-300"
  >
    <div class="flex items-center justify-end space-x-1.5">
      <iconify-icon :icon="icono" class="sm:text-2xl"></iconify-icon>
      <span class="text-xs sm:text-base">{{ texto }}</span>
    </div>
    <iconify-icon
      icon="mingcute:down-fill"
      class="sm:text-xl"
      :class="{
        'rotate-0 duration-300': !open,
        'rotate-180 duration-300': open,
      }"
    ></iconify-icon>
  </button>
</template>
