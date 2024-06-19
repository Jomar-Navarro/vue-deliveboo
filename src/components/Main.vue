<script>
import axios from "axios";
import { store } from "../data/store";
import Jumbo from "./partials/Jumbo.vue";
import Restaurant from "./partials/Restaurant.vue";

export default {
	components: {
		Jumbo,
		Restaurant,
	},

	data() {
		return {
			store,
		};
	},

	methods: {
		getApi() {
			axios.get(this.store.apiUrl + "restaurants").then((res) => {
				this.store.restaurants = res.data;
				console.log(this.store.restaurants);
			});
		},
	},

	mounted() {
		this.getApi();
	},
};
</script>

<template>
	<main>
		<Jumbo />
		<Restaurant />
	</main>
</template>

<style lang="scss" scoped></style>
