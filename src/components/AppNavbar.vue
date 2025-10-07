<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/useProfileStore'

// se obtiene la instancia del store "profile"
const profile = useProfileStore()
// extraer las propiedades reactivas del store usando storeToRefs.
const { datos } = storeToRefs(profile)

// router
const router = useRouter()

// para desplzarse al inicio
function goTop() {
  router.push('/') // ruta raiz
  const app = document.getElementById('app') // el scroll pasa en el div de id app
  app?.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollProgress = ref(0)
// calcula y actualiza el porcentaje de la barra de progreso al scrollear en #app
const updateScrollProgress = () => {
  const app = document.getElementById('app')
  if (!app) return
  const scrollTop = app.scrollTop
  const scrollHeight = app.scrollHeight - app.clientHeight
  const progress = (scrollTop / scrollHeight) * 100
  scrollProgress.value = Math.min(Math.max(progress, 0), 100)
}

// dropdowns
const modal = ref(null)
// abrir dorpdown
const openModal = (item) => {
  // click sobre el dorpsown abirto y se cierra
  if (modal.value === item) {
    closeModal()
  } else {
    modal.value = item
  }
}
const closeModal = () => (modal.value = null) // cierra los dropdowns

const dropdownRef = ref(null)

// cambia el idioma en el store
const setLanguage = (lang) => {
  profile.changeLanguage(lang)
  // cierra el dropdown del idioma cuando se cambia
  closeModal()
}

// cerrar dropdown abierto al hacer click fuera de el
const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    closeModal()
  }
}

onMounted(() => {
  // vincula el evento de scroll para actualizar la barra de progreso
  const app = document.getElementById('app')
  if (app) {
    app.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress() // calcula el valor inicial de scroll
  }
  document.addEventListener('click', handleClickOutside) //escuchar clicks globales
})
</script>

<template>
  <nav
    class="bg-morado-scorpios flex items-center text-white sticky w-full z-20 top-0 start-0 h-17"
  >
    <div class="w-full">
      <div
        class="absolute top-0 left-0 h-1 bg-gradient-to-r from-cosmic-latte to-white transition-all duration-200"
        :style="{ width: `${scrollProgress}%` }"
      ></div>
      <div class="w-full flex flex-wrap items-center justify-between mx-auto py-4 px-6 sm:px-12">
        <button
          type="button"
          class="flex items-center cursor-pointer"
          @click="goTop"
          aria-label="Inicio"
        >
          <img src="/images/Scorpios.png" class="h-8" alt="Scorpios" draggable="false" />
        </button>
        <div class="hidden md:flex">
          <div
            class="px-3 flex items-center justify-between font-medium space-x-5 sm:space-x-10 text-sm sm:text-base"
          >
            <a
              href="#perfil"
              class="flex items-center justify-center space-x-1 hover:text-cosmic-latte-dark transition transform hover:scale-110 ease-in-out duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <g fill="none">
                  <path
                    d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                  />
                  <path
                    fill="currentColor"
                    d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-3 12H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2m-7-8H8a2 2 0 0 0-1.995 1.85L6 9v2a2 2 0 0 0 1.85 1.995L8 13h2a2 2 0 0 0 1.995-1.85L12 11V9a2 2 0 0 0-1.85-1.995zm7 4h-3a1 1 0 0 0-.117 1.993L14 13h3a1 1 0 0 0 .117-1.993zm-7-2v2H8V9zm7-2h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"
                  />
                </g>
              </svg>
              <span>{{ datos.secciones.perfil }}</span>
            </a>
            <a
              href="#proyectos"
              class="flex items-center justify-center space-x-1 hover:text-cosmic-latte-dark transition transform hover:scale-110 ease-in-out duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm5.354 3.646l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.793 8L9.146 6.354a.5.5 0 1 1 .708-.708m-3 .708L5.207 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708"
                />
              </svg>
              <span>{{ datos.secciones.proyectos }}</span>
            </a>
            <a
              href="#educacion"
              class="flex items-center justify-center space-x-1 hover:text-cosmic-latte-dark transition transform hover:scale-110 ease-in-out duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
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
              <span>{{ datos.secciones.educacion }}</span>
            </a>
          </div>
        </div>
        <div class="flex items-center justify-end text-sm sm:text-base space-x-3 md:space-x-0">
          <div class="relative">
            <button
              type="button"
              @click.stop="openModal('idioma')"
              class="cursor-pointer font-semibold px-4 py-2 bg-morado-scorpios-light rounded-lg hover:bg-cosmic-latte hover:text-black focus:bg-cosmic-latte focus:text-black flex items-center justify-end space-x-3 hover:scale-110 ease-in-out delay-150 duration-300"
            >
              <img :src="datos.language.bandera" :alt="datos.language.lengua" class="w-6 h-6" />
              <span>{{ datos.language.lengua }}</span>
            </button>
            <!-- Dropdown -->
            <Transition
              enter-active-class="transition-all duration-500 ease-out"
              enter-from-class="scale-y-0 opacity-0"
              enter-to-class="scale-y-100 opacity-100"
              leave-active-class="transition-all duration-500 ease-in"
              leave-from-class="scale-y-100 opacity-100"
              leave-to-class="scale-y-0 opacity-0"
            >
              <div
                v-show="modal === 'idioma'"
                ref="dropdownRef"
                class="absolute right-0 z-10 mt-2 py-2 w-fit origin-top-right bg-cosmic-latte-dark rounded-lg shadow-lg/30 focus:outline-none overflow-hidden"
              >
                <button
                  @click="setLanguage('es')"
                  class="cursor-pointer w-full block flex items-center justify-between px-4 py-2 text-black hover:bg-morado-scorpios hover:text-white transition duration-300"
                >
                  <div class="flex items-center justify-start space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 36 36"
                    >
                      <path fill="#FBD116" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4" />
                      <path fill="#22408C" d="M0 18h36v7H0z" />
                      <path fill="#CE2028" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2H0z" />
                    </svg>
                    <span>Español</span>
                  </div>
                </button>
                <button
                  @click="setLanguage('en')"
                  class="cursor-pointer w-full block flex items-center justify-between px-4 py-2 text-black hover:bg-morado-scorpios hover:text-white transition duration-300"
                >
                  <div class="flex items-center justify-start space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="#B22334"
                        d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2h17.445zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2zM18 9h18v2H18z"
                      />
                      <path
                        fill="#EEE"
                        d="M.068 27.679c.017.093.036.186.059.277c.026.101.058.198.092.296c.089.259.197.509.333.743L.555 29h34.89l.002-.004a4.22 4.22 0 0 0 .332-.741a3.75 3.75 0 0 0 .152-.576c.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679zM0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM0 9zm.555-2l-.003.005L.555 7zM.128 8.044c.025-.102.06-.199.092-.297a3.78 3.78 0 0 0-.092.297zM18 9h18c0-.233-.028-.459-.069-.68a3.606 3.606 0 0 0-.153-.576A4.21 4.21 0 0 0 35.445 7H18v2z"
                      />
                      <path fill="#3C3B6E" d="M18 5H4a4 4 0 0 0-4 4v10h18V5z" />
                      <path
                        fill="#FFF"
                        d="M2.001 7.726l.618.449l-.236.725L3 8.452l.618.448l-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2l.618.449l-.236.725l.617-.448l.618.448l-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 9l-.235.726zm-8 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L5 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 13l-.235.726zm-6-6l.618.449l-.236.725L7 8.452l.618.448l-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 7l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 11l-.235.726zM6.383 12.9L7 12.452l.618.448l-.236-.725l.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 11l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 11l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 15l-.235.726zM6.383 16.9L7 16.452l.618.448l-.236-.725l.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 15l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 15l-.235.726z"
                      />
                    </svg>
                    <span>English</span>
                  </div>
                </button>
              </div>
            </Transition>
          </div>
          <div class="relative md:hidden">
            <button
              type="button"
              @click.stop="openModal('menu')"
              class="h-10 cursor-pointer font-semibold px-4 py-2 bg-morado-scorpios-light rounded-lg hover:bg-cosmic-latte hover:text-black focus:bg-cosmic-latte focus:text-black flex items-center justify-end space-x-3 hover:scale-110 ease-in-out delay-150 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="48"
                  d="M88 152h336M88 256h336M88 360h336"
                />
              </svg>
            </button>
            <!-- Dropdown -->
            <Transition
              enter-active-class="transition-all duration-500 ease-out"
              enter-from-class="scale-y-0 opacity-0"
              enter-to-class="scale-y-100 opacity-100"
              leave-active-class="transition-all duration-500 ease-in"
              leave-from-class="scale-y-100 opacity-100"
              leave-to-class="scale-y-0 opacity-0"
            >
              <div
                v-show="modal === 'menu'"
                ref="dropdownRef"
                class="absolute right-0 z-10 mt-2 py-2 w-fit origin-top-right bg-cosmic-latte-dark rounded-md shadow-lg/30 focus:outline-none overflow-hidden"
              >
                <a
                  href="#perfil"
                  class="w-full block flex items-center justify-between px-4 py-2 text-black hover:bg-morado-scorpios hover:text-white transition duration-300"
                >
                  <div class="flex items-center justify-start space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        />
                        <path
                          fill="currentColor"
                          d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-3 12H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2m-7-8H8a2 2 0 0 0-1.995 1.85L6 9v2a2 2 0 0 0 1.85 1.995L8 13h2a2 2 0 0 0 1.995-1.85L12 11V9a2 2 0 0 0-1.85-1.995zm7 4h-3a1 1 0 0 0-.117 1.993L14 13h3a1 1 0 0 0 .117-1.993zm-7-2v2H8V9zm7-2h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"
                        />
                      </g>
                    </svg>
                    <span>{{ datos.secciones.perfil }}</span>
                  </div>
                </a>
                <a
                  href="#proyectos"
                  class="w-full block flex items-center justify-between px-4 py-2 text-black hover:bg-morado-scorpios hover:text-white transition duration-300"
                >
                  <div class="flex items-center justify-start space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm5.354 3.646l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.793 8L9.146 6.354a.5.5 0 1 1 .708-.708m-3 .708L5.207 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708"
                      />
                    </svg>
                    <span>{{ datos.secciones.proyectos }}</span>
                  </div>
                </a>
                <a
                  href="#educacion"
                  class="w-full block flex items-center justify-between px-4 py-2 text-black hover:bg-morado-scorpios hover:text-white transition duration-300"
                >
                  <div class="flex items-center justify-start space-x-3">
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
                    <span>{{ datos.secciones.educacion }}</span>
                  </div>
                </a>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="relative w-full h-32 sm:h-40 overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full -z-10">
      <defs>
        <pattern
          id="a"
          width="100"
          height="100"
          patternTransform="rotate(120)scale(2)"
          patternUnits="userSpaceOnUse"
        >
          <rect width="100%" height="100%" fill="#fff" />
          <path
            fill="#1d095d"
            d="M100 20.234v41.641q-6.719 7.656-10.234 17.812-3.36 9.766-3.125 20.313h-3.438v-4.531q0-2.657.39-4.532l.626-3.359.703-3.281 2.265-7.656q1.329-4.22 2.813-7.344.781-1.719 2.812-4.453l2.891-4.297.86-2.578.312-2.735q.156-5-.547-13.203l-2.344-20.937Q92.656 8.516 92.422 0h6.797q-.078 6.172.078 10.156.156 5.547.703 10.078m0 49.532v20.468q-.469 2.11-.703 4.844L99.063 100H92.5l-.078-8.594q0-5.156.547-8.515.469-3.047 2.89-6.797zM79.219 100h-3.672l.39-8.36.938-8.359q1.016-6.953 1.875-10.781 1.328-5.86 3.36-10.313l2.5-6.015 1.562-6.328.547-5q.078-2.813-.703-4.844l-3.282-9.531-3.28-9.531q-1.876-6.094-2.735-10.313Q75.547 4.922 75.547 0h3.672q.078 8.516 2.422 17.031 2.343 8.282 6.718 15.782l-2.03-11.016-1.876-11.016-.86-5.312L83.126 0h3.516l.234 4.531.547 4.532 2.5 16.25 2.422 16.328q1.015 8.125.156 15.625l-.625 3.28q-.547 1.798-1.562 2.97l-1.875 1.953q-1.094 1.172-1.641 2.187-1.64 2.735-2.89 7.813l-2.423 8.047q-1.406 3.515-1.875 8.125-.39 3.125-.39 8.359m-6.406 0H64.53q-2.11-9.922-1.718-18.828.39-4.922 1.796-8.203l2.97-7.5q1.405-4.219 1.718-7.89.312-2.735-.39-5.313-.704-2.657-2.345-4.844-2.343-3.125-5.78-6.328l-.938 2.5-.86 2.656q-2.343 6.797-4.922 11.953-3.125 6.25-7.03 10.86-1.485 2.265-2.579 5.312-.781 2.344-1.484 5.781Q41.25 88.75 41.25 100h-6.484l.312-12.266q.39-6.718 1.64-12.265 1.72-7.344 4.844-11.407l2.344-2.5 2.344-2.5q2.5-2.968 3.906-6.875 1.328-3.671 1.485-7.734.156-5.156-.86-12.5L48.906 19.61Q47.578 8.516 47.97 0h10.078q-.625 12.188 1.875 22.11 2.422 9.218 8.515 16.25l5 5.234q3.047 3.203 4.375 5.781 2.657 4.922.938 12.266-1.016 4.609-3.906 10.859-1.172 2.578-1.797 5.86-.547 2.5-.781 6.093-.391 7.266.546 15.547m-14.765 0H47.969V89.453q.312-5.937 1.718-10.39 4.297-12.657 10.157-22.813l1.797-3.047 2.109-2.812q1.25 4.687-1.094 11.562-5.625 16.953-4.61 38.047m-29.296 0H17.969l.234-5.781.469-5.782L21.25 65.86l2.422-22.578q1.172-12.031-1.875-21.797-1.719 3.047-2.969 7.5l-2.031 7.813q-.469 1.719-.547 4.219l.078 4.218-.547 11.094-1.797 10.469Q12.5 74.062 12.11 77.266q-.39 2.734-.312 6.406l.234 6.406.39 5q.235 2.813.704 4.922H5.781V81.25l-.078-6.016Q1.563 81.797 0 89.844v-20.39q5.86-10.47 7.422-22.657 1.25-9.14.078-23.36L6.406 11.72Q5.86 4.844 5.781 0h7.344l1.406 11.328 1.094 11.328q1.25-2.422 1.797-6.015l.625-6.25.078-5.157L17.969 0h10.86q.077 2.969.702 6.953l1.172 6.797 1.64 11.094q.626 6.172.157 11.172-.547 4.297-2.031 9.687L27.5 55.078q-2.031 6.719-2.344 14.531-.078 3.75.625 8.36l1.563 8.203.703-2.422 4.531-18.672q2.344-10.312 3.594-18.828.625-3.984.625-9.062l-.313-9.141-1.093-13.984Q34.688 5.547 34.766 0h6.484q-.078 8.984 1.953 19.688l1.64 8.75q.938 5.078.938 8.75 0 3.828-1.015 7.5-.938 3.671-2.813 6.874-4.61 9.375-7.812 20.47-2.813 9.687-4.766 21.405-.703 3.75-.625 6.563M0 61.797V19.766l.781 4.375.703 4.453 2.344 13.984.235 1.563.234 2.343Q5.078 54.61 0 61.797M64.61 0h8.202q-.39 7.266.157 11.953l.86 4.531 1.25 4.532 3.593 13.672 3.36 13.671.546 2.657.156 2.656-2.343-6.406q-1.407-3.516-3.047-6.172l-4.14-6.64-4.298-6.563q-1.172-1.953-1.875-4.61-.547-1.875-.937-4.922Q64.844 9.453 64.609 0"
          />
        </pattern>
      </defs>
      <rect width="800%" height="800%" fill="url(#a)" />
    </svg>
    <div class="relative z-10 h-full flex items-center justify-start px-12">
      <img
        src="/images/Me2.jpg"
        class="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-full shadow-md/30"
        alt="Deider"
      />
    </div>
  </div>
</template>
