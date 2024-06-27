<script>
import axios from "axios";
import { store } from "../data/store";
import Jumbo from "../components/partials/Jumbo.vue";
import Restaurant from "../components/partials/Restaurant.vue";
import Review from "../components/partials/Review.vue";

export default {
	name: "Home",

	components: {
		Jumbo,
		Restaurant,
		Review,
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
	<div class="junbo-header">
		<Jumbo />
	</div>
	<Restaurant />
	<!-- <Review /> -->
</template>

<style lang="scss" scoped>
.junbo-header {
	background-image: url("/img/jumbo_1.jpeg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
