<script>
import axios from "axios";
import { store } from "../data/store";
import Jumbo from "../components/partials/Jumbo.vue";
import Restaurant from "../components/partials/Restaurant.vue";
import Review from "../components/partials/Review.vue";

export default {
	name: "Home",

	components:{
		Jumbo,
		Restaurant,
		Review
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
	
	
	<Restaurant />
	<!-- <Review /> -->

</template>

<style lang="scss" scoped>

</style>
