<script>
import axios from "axios";
import { store } from "../data/store";
import Jumbo from "../components/partials/Jumbo.vue";
import Review from "../components/partials/Review.vue";
import Sconti from "../components/partials/Discount.vue";
import Mobile from "../components/partials/Mobile-app.vue";
import Loader from "@/components/partials/Loader.vue";
import GoToRestaurant from "../components/partials/GoToRestaurant.vue";

export default {
	name: "Home",

	components: {
		Jumbo,
		Review,
		Loader,
		Sconti,
		Mobile,
		GoToRestaurant,
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
			<div>
				<GoToRestaurant />
			</div>
			<Review />
			<Sconti />
			<Mobile />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.junbo-header {
	// background-image: url("/img/jumbo_1.jpeg");
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
		url("/img/jumbo_1.jpeg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
