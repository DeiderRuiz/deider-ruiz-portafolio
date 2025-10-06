import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtag from 'vue-gtag'
import './styles.css'

import App from './App.vue'
import router from './router'
import { useProfileStore } from '@/stores/useProfileStore'

const app = createApp(App) // crear instancia vue
const pinia = createPinia() // crear instancia pinia

app.use(pinia) // registrar pinia
app.use(router) // registrar router vue
app.use(
  VueGtag,
  {
    config: { id: 'G-XXXXXXXXXX' }, // <-- tu ID de medición de Google Analytics 4
  },
  router,
)

// usar store pasando la instancia pinia explícitamente
const profile = useProfileStore(pinia)

// montar la app cuando los datos del store se hayan cargado
profile.fetchDatos().then(() => {
  app.mount('#app')
})
