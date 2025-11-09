import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './assets/css/tailwind.css'
import router from '@/router'

import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
app.use(router)
app.use(createPinia())

// ✨ 全域註冊 ApexCharts
app.use(VueApexCharts)
// ✨ 讓 template 可直接使用 <apexchart>
app.component('apexchart', VueApexCharts)

app.mount('#app')
