<script>
import { store } from "../../data/store";
import axios from "axios";

export default {
	data() {
		return {
			store,
			selectedTypes: [],
			searchQuery: ''
		};
	},

	methods: {
		getApi() {
			axios
				.get(this.store.apiUrl + "types")
				.then((res) => {
					this.store.types = res.data;
					console.log(this.store.types);
				})
				.catch((error) => {
					console.error(error);
				});
		},

		getFilteredRestaurants() {
			const params = {
				types: this.selectedTypes.join(',')
			};

			axios
				.get(this.store.apiUrl + "restaurants/filter", { params })
				.then((res) => {
					this.store.restaurants = res.data;
					console.log(this.store.restaurants);
				})
				.catch((error) => {
					console.error(error);
				});
		},

		searchRestaurantsByName() {
			const params = {
				query: this.searchQuery
			};

			axios
				.get(this.store.apiUrl + "restaurants/search", { params })
				.then((res) => {
					this.store.restaurants = res.data;
					console.log(this.store.restaurants);
				})
				.catch((error) => {
					console.error(error);
				});
		},

		toggleType(type) {
			const index = this.selectedTypes.indexOf(type);
			if (index === -1) {
				this.selectedTypes.push(type);
			} else {
				this.selectedTypes.splice(index, 1);
			}
			this.getFilteredRestaurants();
		},

		searchRestaurants() {
			if (this.searchQuery) {
				this.searchRestaurantsByName();
			} else {
				this.getFilteredRestaurants();
			}
		}
	},

	watch: {
		searchQuery() {
			this.searchRestaurants();
		}
	},

	mounted() {
		this.getApi();
	},
};
</script>

<template>
	<div class="jumbo d-flex align-items-center">
		<div class="container">
			<div class="d-flex justify-content-center text-center">
				<div>
					<div class="d-flex my-3">
						<input 
							class="form-control me-2"
							@input="searchRestaurants" 
							v-model="searchQuery"
							type="search" 
							placeholder="Search" 
							aria-label="Search">
					</div>

					<span 
						v-for="type in store.types" 
						:key="type.id" 
						class="rounded-5 me-2 my-2 d-inline-block"
					>
						<input 
							:value="type.type_name"
							@click="toggleType(type.type_name)" 
							type="checkbox" 
							class="btn-check" 
							:id="`btn-${ type.type_name }`">
						<label class="btn btn-primary" :for="`btn-${ type.type_name }`">{{ type.type_name }}</label>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.jumbo {
	height: 500px;
	background-repeat: no-repeat;
	background-image: url('/img/delivery.jpeg');
	background-size: cover;
	background-position: 30%;
	
	.type-btn {
		background-color: #ffa43c;
		transition: all 0.3s ease;
		&:hover {
			background-color: #fcc07c;
			cursor: pointer;
		}
		a {
			text-decoration: none;
			color: rgb(54, 54, 54);
		}
	}
}
</style>
