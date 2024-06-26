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
		<div class="junbo-header">

			<Header />
			<Jumbo />
		</div>
		<Main />
		<Footer />

	</div>
</template>

<style lang="scss" scoped>
.junbo-header{
	background-image: url('https://t3.ftcdn.net/jpg/03/66/73/36/360_F_366733676_qTLsnBUZqNflzkE9bGgiMpurlkiUwUQc.jpg');
	background-size: contain;
	background-position: center;
}

</style>
