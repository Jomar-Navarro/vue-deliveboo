import "./assets/scss/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { router } from "./router";

createApp(App).use(router).mount("#app");
