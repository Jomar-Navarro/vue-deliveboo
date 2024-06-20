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
		mounted() {},
	},
};
</script>

<template>
	<div class="jumbo"></div>
</template>

<style lang="scss" scoped>
.jumbo {
	background-color: #c1121f;
	background-image: url("/img/cook.png");
	background-size: cover;
	background-repeat: no-repeat;
	height: calc(100vh - 80px);
}
</style>
