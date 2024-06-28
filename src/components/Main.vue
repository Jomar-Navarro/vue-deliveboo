<script>
import axios from "axios";
import { store } from "../data/store";
import Loader from "@/components/partials/Loader.vue";

export default {
	components: {
		Loader,
	},

	data() {
		return {
			store,
			isLoading: true,
		};
	},

	methods: {
		getApi() {
			// Simula un ritardo di 5 secondi
			setTimeout(() => {
				axios
					.get(this.store.apiUrl + "restaurants")
					.then((res) => {
						this.store.restaurants = res.data;
						this.isLoading = false; // Imposta lo stato di caricamento su false quando i dati sono caricati
						console.log(this.store.restaurants);
					})
					.catch((error) => {
						console.error(error);
						this.isLoading = false; // Imposta lo stato di caricamento su false anche in caso di errore
					});
			}, 2000);
		},
	},

	mounted() {
		this.getApi();
	},
};
</script>

<template>
	<main>
		<!-- Mostra il loader durante il caricamento -->
		<Loader v-if="isLoading" />

		<!-- Mostra il contenuto principale quando il caricamento è completato -->
		<router-view v-else></router-view>
	</main>
</template>

<style lang="scss" scoped></style>
