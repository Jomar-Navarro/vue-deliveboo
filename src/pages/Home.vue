<script>
import axios from "axios";
import { store } from "../data/store";
import Jumbo from "../components/partials/Jumbo.vue";
import Restaurant from "../components/partials/Restaurant.vue";
import Review from "../components/partials/Review.vue";
import Loader from "@/components/partials/Loader.vue";

export default {
	name: "Home",

	components: {
		Jumbo,
		Restaurant,
		Review,
		Loader,
	},

	data() {
		return {
			store,
			isLoading: false,
		};
	},

	methods: {
		getApi() {
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
		},
	},

	mounted() {
		this.getApi();
	},
};
</script>

<template>
	<div>
		<div v-if="isLoading" class="loader-container">
			<Loader />
		</div>
		<div v-else>
			<div class="junbo-header">
				<Jumbo />
			</div>
			<Review />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.junbo-header {
	background-image: url("/img/jumbo_1.jpeg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
