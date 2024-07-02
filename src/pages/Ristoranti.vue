<script>
import Loader from "../components/partials/Loader.vue";
import Jumbo from "../components/partials/Jumbo.vue";
import JumboRest from "../components/partials/JumboRest.vue";
import Restaurant from "../components/partials/Restaurant.vue";
export default {
	components: {
		Loader,
		JumboRest,
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
			<div class="image">
				<div class="junbo-header">
					<div class="fries-container">
						<span><img class="fries" src="/img/Fries.png" alt="Fries" /></span>
						<span
							><img class="fries_2" src="/img/Fries.png" alt="Fries"
						/></span>
					</div>
					<JumboRest class="jumbo" />
				</div>
			</div>
			<div>
				<div class="wave wave-top">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#ff7741"
							fill-opacity="1"
							d="M0,64L80,74.7C160,85,320,107,480,96C640,85,800,43,960,37.3C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
						></path>
					</svg>
				</div>
				<Restaurant />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.main-wrapper {
	position: relative;
}

.wave {
	position: absolute;
	width: 100%;
	height: 100px; // Altezza delle onde, adatta secondo necessità
	fill: #ff7741; // Colore delle onde
	z-index: 0;

	&.wave-top {
		top: 0%;
		transform: translateY(-100%);
	}

	svg {
		display: block;
		width: 100%;
		height: auto;
	}
}

@media (max-width: 576px) {
	.wave {
		height: 20px; // Altezza onde per schermi più piccoli

		&.wave-top {
			top: 14%;
			transform: translateY(-100%);
		}
	}
}

@media (min-width: 768px) {
	.wave {
		height: 20px; // Altezza onde per schermi più piccoli

		&.wave-top {
			top: 24%;
			transform: translateY(-100%);
		}
	}
}

@media (min-width: 992px) {
	.wave {
		height: 30px; // Altezza onde per schermi più piccoli

		&.wave-top {
			top: 30%;
			transform: translateY(-100%);
		}
	}
}

@media (min-width: 1024px) and (max-width: 1440px) {
	.wave {
		height: 40px; // Altezza onde per schermi più piccoli

		&.wave-top {
			top: 23%;
			transform: translateY(-100%);
		}
	}
}

.junbo-header {
	height: 90vh;
	width: 100%;
	// background-image: url("/img/piatto.jpg");
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(254, 127, 127, 0.123)),
		url("/img/piatto.jpg");
	background-size: cover;
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
		height: 100vh;
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
