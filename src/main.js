import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './assets/css/tailwind.css'
import router from '@/router'

import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
app.use(router)
app.use(createPinia())

app.use(VueApexCharts)
app.component('apexchart', VueApexCharts)

app.mount('#app')
