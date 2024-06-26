import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import about from "./pages/Chi-siamo.vue";
import Contacts from "./pages/Contatti.vue";
import Error404 from "./pages/Error404.vue";
import Menu from "./pages/Menu.vue";
import Order from "./pages/Order.vue";
import ThankYou from "./pages/Thank-you.vue";

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
			path: "/ordine",
			name: "order",
			component: Order,
		},
		{
			path: "/thank-you",
			name: "thank-you",
			component: ThankYou,
			props: (route) => ({
				orderDetails: route.query.orderDetails
					? JSON.parse(route.query.orderDetails)
					: null,
			}),
		},
		{
			path: "/:patchMatch(.*)*",
			name: "errore404",
			component: Error404,
		},
	],
});

export { router };
