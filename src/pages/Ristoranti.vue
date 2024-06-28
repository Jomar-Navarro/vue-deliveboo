<script>
import Loader from "../components/partials/Loader.vue";
import Jumbo from "../components/partials/Jumbo.vue";
import Restaurant from "../components/partials/Restaurant.vue";
export default {
	components: {
		Loader,
		Jumbo,
		Restaurant,
	},
	data() {
		return {
			isLoading: false,
		};
	},
};
</script>

<template>
	<div class="main-wrapper">
		<div v-if="isLoading" class="loader-container">
			<Loader />
		</div>
		<div v-else>
			<div class="junbo-header">
				<div class="fries-container">
					<span><img class="fries" src="/img/Fries.png" alt="Fries" /></span>
					<span><img class="fries_2" src="/img/Fries.png" alt="Fries" /></span>
				</div>
				<Jumbo />
			</div>
			<Restaurant />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.main-wrapper {
	position: relative;
}

.junbo-header {
	height: 70vh;
	width: 100%;
}

.fries-container {
	position: absolute;
	overflow: hidden;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none; /* Rende il contenitore trasparente agli eventi del mouse */
	display: flex;
	justify-content: space-between; /* Spazia le immagini a sinistra e a destra */
	align-items: center; /* Centra le immagini verticalmente */
}

.fries,
.fries_2 {
	position: relative;
	z-index: 2; /* Assicurati che questo valore sia superiore a quello di .fries-container */
	max-width: 100%; /* Assicura che l'immagine non superi la larghezza del contenitore */
	animation: moveFries 5s ease-in-out infinite alternate;
	pointer-events: none; /* Rende le immagini trasparenti agli eventi del mouse */
}

.fries {
	position: absolute;
	top: 0%;
	width: 50%;
	right: 80%;
}

.fries_2 {
	position: absolute;
	top: 10%;
	width: 50%;
	left: 80%;
}

@keyframes moveFries {
	0% {
		transform: translate(-2%, -2%); /* Movimento iniziale in percentuale */
	}
	100% {
		transform: translate(2%, 2%); /* Movimento finale in percentuale */
	}
}

@media screen and (max-width: 768px) {
	.junbo-header {
		height: 85vh;
		width: 100%;
	}

	.fries,
	.fries_2 {
		width: 70%; /* Esempio di ridimensionamento per schermi più piccoli */
	}

	.fries {
		top: 3%;
		right: 75%;
	}

	.fries_2 {
		top: 8%;
		left: 70%;
	}
}
</style>
