<script setup></script>
<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="scale-y-0 opacity-0"
    enter-to-class="scale-y-100 opacity-100"
    leave-active-class="transition-all duration-500 ease-in"
    leave-from-class="scale-y-100 opacity-100"
    leave-to-class="scale-y-0 opacity-0"
  >
    <slot />
  </Transition>
</template>
