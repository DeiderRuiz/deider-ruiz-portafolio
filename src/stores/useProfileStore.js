import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    datos: null,
    // idioma actual de la app se inicializa desde el local storage o se usa español por defecto
    language: localStorage.getItem('language') || 'es',
  }),
  actions: {
    async fetchDatos() {
      try {
        // determinar idioma: null o 'es' será español, 'en' o culquier otro valor será inglés
        let lang =
          this.language === null || this.language === 'es'
            ? 'es'
            : this.language === 'en'
              ? 'en'
              : 'en'
        // cargar el json del idioma seleccionado
        const res = await fetch(`/about-me/about-me-${lang}.json`)
        if (!res.ok) throw new Error('Error al cargar el JSON')
        // Guardar los datos cargados en el estado
        this.datos = await res.json()
      } catch (error) {
        console.error('Error al consumir el JSON:', error)
      }
    },

    changeLanguage(lang) {
      // cambar el idioma, si es null o 'es' usará español, cualquier otra cosa será inglés
      this.language = lang === null || lang === 'es' ? 'es' : 'en'
      // guardar el idioma seleccionado en el local storage
      localStorage.setItem('language', this.language)
      // Recargar los datos del nuevo idioma
      this.fetchDatos()
    },
  },
})
