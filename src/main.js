import "./assets/scss/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fontsource/bungee-shade';
import '@fontsource-variable/nunito-sans';
import '@fontsource/ubuntu';
import '@fontsource/bangers';
import '@fontsource/fredoka-one';
import '@fontsource/rampart-one';
import '@fontsource/cabin-sketch';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fontsource/luckiest-guy';
import { router } from "./router";

createApp(App).use(router).mount("#app");
