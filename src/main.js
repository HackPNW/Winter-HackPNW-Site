// import { createApp } from "vue";
import { ViteSSG } from "vite-ssg/single-page";
import "./assets/style.css";
import App from "./App.vue";

export const createApp = ViteSSG(App);

// createApp(App).mount("#app")
