// Import libraries
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "./components/UI";

// Create server
import { makeServer } from "./server";
if (process.env.NODE_ENV === "development") makeServer();

// Create App
const app = createApp(App);
components.forEach((component) => app.component(component.name, component));
app.use(store).use(router).mount("#app");
