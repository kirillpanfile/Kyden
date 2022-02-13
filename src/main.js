import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
import './assets/js/app.js'


createApp(App).use(router).mount('#app')
