// import { createApp } from "vue";
import { ViteSSG } from "vite-ssg";
import { routes } from "./router";
import "./assets/style.css";
import App from "./App.vue";

export const createApp = ViteSSG(App, { routes });

// createApp(App).mount("#app")
