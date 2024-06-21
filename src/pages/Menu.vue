<script>
import { store } from "../data/store";
import axios from "axios";
export default {
	name: "menu",

	data() {
		return {
			store,
			restaurantName: "",
			dishes: [],
		};
	},

	methods: {
		getApi(id) {
			axios.get(this.store.apiUrl + "menu/" + id).then((res) => {
				this.restaurantName = res.data;
				console.log(this.restaurantName);
				this.dishes = res.data.dishes;
				console.log(this.dishes);
			});
		},
	},

	mounted() {
		this.getApi(this.$route.params.id);
	},
};
</script>

<template>
	<div class="container">
		<h1>{{ this.restaurantName.name }}</h1>

		<div class="row">
			<div
				v-for="dish in this.dishes"
				:key="dish.id"
				class="card"
				style="width: 18rem"
			>
				<img :src="dish.image_url" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">{{ dish.dish_name }}</h5>
					<p class="card-text">
						{{ dish.description }}
					</p>
					<p class="card-text">
						{{ dish.price }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
