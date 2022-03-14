import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/style.scss'
import './assets/js/app.js'

createApp(App).use(router).use(store).mount('#app')
