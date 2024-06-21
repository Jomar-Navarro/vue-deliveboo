import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import about from "./pages/Chi-siamo.vue";
import Contacts from "./pages/Contatti.vue";
import Error404 from "./pages/Error404.vue";
import Menu from "./pages/Menu.vue";

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/menu/:id",
			name: "menu",
			component: Menu,
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
