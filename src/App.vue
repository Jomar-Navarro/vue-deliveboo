<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import Jumbo from "./components/partials/Jumbo.vue";

export default {
	components: {
		Header,
		Main,
		Footer,
		Jumbo,
	},
};
</script>

<template>
	<div>

		<Header />
		<Main />
		<Footer />

	</div>
</template>

<style lang="scss" scoped>

</style>
