// Import libraries
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "./components/UI";
import server from "./server";
// import "./styles/style.scss";
import "./scss/style.scss";

// Create App
const app = createApp(App);
components.forEach((component) => app.component(component.name, component));
app.use(store).use(router).use(server).mount("#app");
