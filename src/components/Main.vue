<script>
import axios from "axios";
import { store } from "../data/store";

export default {
	components: {

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

		<router-view></router-view>
		
	</main>
</template>

<style lang="scss" scoped></style>
