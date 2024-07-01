import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Contacts from "./pages/Contatti.vue";
import Error404 from "./pages/Error404.vue";
import Menu from "./pages/Menu.vue";
import Order from "./pages/Order.vue";
import Ristoranti from "./pages/Ristoranti.vue";

// footer
import Lavoraconnoi from "./pages/Lavoraconnoi.vue";
import Lanostrastoria from "./pages/Lanostrastoria.vue";
import Nostroteam from "./pages/Nostroteam.vue";
import Informazionilegali from "./pages/Informazionilegali.vue";
import Domandefrequenti from "./pages/Domandefrequenti.vue";
import Segnalazioni from "./pages/Segnalazioni.vue";
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
			path: "/ristoranti",
			name: "ristoranti",
			component: Ristoranti,
		},
		{
			path: "/menu/:id",
			name: "menu",
			component: Menu,
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
			path: "/lavora-con-noi",
			name: "lavoraConNoi",
			component: Lavoraconnoi,
		},
		{
			path: "/la-nostra-storia",
			name: "laNostraStoria",
			component: Lanostrastoria,
		},
		{
			path: "/il-nostro-team",
			name: "ilNostroTeam",
			component: Nostroteam,
		},
		{
			path: "/informazioni-legali",
			name: "informazioniLegali",
			component: Informazionilegali,
		},
		{
			path: "/domande-frequenti",
			name: "domandeFrequenti",
			component: Domandefrequenti,
		},
		{
			path: "/segnalaci-un-problema",
			name: "segnalazioni",
			component: Segnalazioni,
		},
		{
			path: "/:patchMatch(.*)*",
			name: "errore404",
			component: Error404,
		},
	],
});

export { router };
