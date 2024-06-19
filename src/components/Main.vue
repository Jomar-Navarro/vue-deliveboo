<script>
import axios from "axios";
import { store } from "../data/store";

export default {
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
	<div>
		<h1>Main</h1>
		<div class="container">
			<div v-for="restaurant in store.restaurants" :key="restaurant.id">
				<p>{{ restaurant.name }}</p>
				<div v-for="type in restaurant.types" :key="type.id">
					<p>{{ type.type_name }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
