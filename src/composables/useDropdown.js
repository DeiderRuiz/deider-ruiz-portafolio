import { ref, onMounted, onUnmounted } from 'vue'

export function useDropdown() {
  const modal = ref(null)
  const dropdownRef = ref(null)

  // abrir dorpdown
  const openModal = (item) => {
    // click sobre el dorpdown abirto y se cierra
    modal.value === item ? closeModal() : (modal.value = item)
  }

  // cierra los dropdowns
  const closeModal = () => {
    modal.value = null
  }

  // cerrar dropdown abierto al hacer click fuera de el
  const handleClickOutside = (e) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
      closeModal()
    }
  }

  onMounted(() => {
    //escuchar clicks globales
    document.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  return {
    modal,
    dropdownRef,
    openModal,
    closeModal,
  }
}
