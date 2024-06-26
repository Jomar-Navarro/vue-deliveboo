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
	<div class="junbo-header">
		<Jumbo />
  </div>
	<Restaurant />
	<!-- <Review /> -->

</template>

<style lang="scss" scoped>
.junbo-header{
	background-image: url('https://t3.ftcdn.net/jpg/03/66/73/36/360_F_366733676_qTLsnBUZqNflzkE9bGgiMpurlkiUwUQc.jpg');
	background-size: contain;
	background-position: center;
}

</style>
