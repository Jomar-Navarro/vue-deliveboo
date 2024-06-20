import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import about from "./pages/Chi-siamo.vue";
import Contacts from "./pages/Contatti.vue";
import Error404 from "./pages/Error404.vue";

const router = createRouter({
	history: createWebHistory(),

	router: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/chi-siamo",
			name: "about",
			component: about,
		},
		{
			path: "/contatti",
			name: "contacts",
			component: Contacts,
		},
		{
			path: "/:patchMatch(.*)*",
			name: "errore404",
			component: Error404,
		},
	],
});

export { router };
