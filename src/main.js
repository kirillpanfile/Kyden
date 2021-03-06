// Import libraries
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components/UI'
import server from './server'
import './scss/style.scss'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Create App
const app = createApp(App)
components.forEach((component) => app.component(component.name, component))
app.use(store).use(router).use(server).use(VueSweetalert2).mount('#app')
