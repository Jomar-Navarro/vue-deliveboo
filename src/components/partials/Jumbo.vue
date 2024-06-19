<script>
import { store } from "../../data/store";
import axios from "axios";
export default {
	data() {
		return {
			store,
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
				.catch({});
		},
	},

	mounted() {
		this.getApi();
	},
};
</script>

<template>
	<div class="jumbo">
		<div class="container pt-5 d-flex">
			<div class="row justify-content-center type-menu">
				<div
					v-for="type in store.types"
					:key="type.id"
					class="card m-4 rounded-5 type-btn p-2"
					style="width: 18rem"
				>
					<div class="card-body">
						<a href="#"
							><h5 class="card-title text-center fw-bold text-uppercase">
								{{ type.type_name }}
							</h5></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.jumbo {
	height: calc(100vh - 80px);
	background-repeat: no-repeat;
	background-image: url('/img/delivery.jpeg');
	background-size: cover;
	offset-position: 30%;
	.type-menu {
		margin-top: 400px;
	}
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
