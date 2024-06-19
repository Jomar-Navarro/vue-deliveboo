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
			<div class="row justify-content-center">
				<div
					v-for="type in store.types"
					:key="type.id"
					class="card m-2 rounded-5"
					style="width: 18rem"
				>
					<div class="card-body">
						<h5 class="card-title text-center">{{ type.type_name }}</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.jumbo {
	height: calc(100vh - 80px);
	// background-color: ;
	background-repeat: no-repeat;
}
</style>
