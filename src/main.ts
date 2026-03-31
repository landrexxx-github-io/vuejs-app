import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import '@fontsource/inter'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import Aura from '@primeuix/themes/aura'
// import Material from '@primeuix/themes/material'
// import Lara from '@primeuix/themes/lara'
// import Nora from '@primeuix/themes/nora'

const app = createApp(App)

app.use(ToastService)
app.use(router).use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.mount('#app')
