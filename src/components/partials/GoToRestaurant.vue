<script>
import { store } from "../../data/store";
export default {};
</script>

<template>
	<section id="vai-ristoranti" class="section-container">
		<div class="wave wave-top">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#e84242"
					fill-opacity="1"
					d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,90.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
				></path>
			</svg>
		</div>
		<div class="sub-jumbo d-flex justify-content-center">
			<!-- <button class="button-78" role="button">Vai a Ristoranti</button> -->
			<router-link
				:to="{ name: 'ristoranti' }"
				class="space-btn fw-bold text-center"
				>VAI AI RISTORANTI</router-link
			>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Electrolize);

$btn-color: #ffb902;

.section-container {
	position: relative; // Posizionamento relativo per contenere gli elementi assoluti
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #e84242;
}

.wave {
	position: absolute;
	width: 100%;
	height: 100px; // Altezza delle onde, adatta secondo necessità
	fill: #e84242; // Colore delle onde
	z-index: 0;

	&.wave-top {
		top: -17%;
		transform: translateY(-100%);
	}

	svg {
		display: block;
		width: 100%;
		height: auto;
	}
}

.sub-jumbo {
	width: 100%;
	padding: 150px; // Spazio intorno alla sezione "Vai ai Ristoranti"
	background-color: #e84242;
}

@media (max-width: 576px) {
	.wave {
		height: 40px; // Altezza onde per schermi più piccoli

		&.wave-top {
			top: -2%;
			transform: translateY(-100%);
		}
	}

	.sub-jumbo {
		width: 100%;
		padding-top: 70px !important;
		padding-bottom: 100px !important;
	}
}

@media (min-width: 768px) {
	.wave {
		height: 40px; // Altezza onde per schermi più piccoli

		&.wave-top {
			top: -17%;
			transform: translateY(-100%);
		}
	}

	.sub-jumbo {
		width: 100%;
		padding-top: 90px !important;
		padding-bottom: 110px !important;
	}
}

@media (min-width: 992px) {
	.wave {
		height: 100px; // Altezza onde per schermi più piccoli

		&.wave-top {
			top: -25%;
			transform: translateY(-100%);
		}
	}

	.sub-jumbo {
		width: 100%;
		padding-top: 70px !important;
		padding-bottom: 170px !important;
	}
}

@media (min-width: 1024px) and (max-width: 1440px) {
	.wave {
		height: 40px; // Altezza onde per schermi più piccoli

		&.wave-top {
			top: -17%;
			transform: translateY(-100%);
		}
	}

	.sub-jumbo {
		width: 100%;
		padding-top: 100px !important;
	}
}

* {
	box-sizing: border-box;
}

body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: #111;
}

.space-btn {
	text-decoration: none;
	position: relative;
	font-family: "Electrolize", sans-serif;
	// font-family: 'Ubuntu', sans-serif;

	font-size: clamp(1.5rem, 4vw, 3rem);

	text-transform: uppercase;
	letter-spacing: 0.125em;
	line-height: 1;
	color: $btn-color;
	margin: 0;
	padding: 1em;
	background: none;
	border: none;
	cursor: pointer;
	transition: all 1s ease;

	&:hover {
		color: lighten($btn-color, 20%);
		transition: all 0.5 ease-in;
	}
	&:focus {
		color: lighten($btn-color, 10%);
		outline: none;
	}
	&:active {
		color: $btn-color;
	}

	&:before,
	&:after {
		content: "";
		display: block;
		position: absolute;
		width: 100%;
		height: 1px;
	}

	&:before {
		top: 0;
		left: 0;
		box-shadow: inset 1px 1px 0 0 $btn-color;
	}
	&:after {
		right: 0;
		bottom: 0;
		box-shadow: inset -1px -1px 0 0 $btn-color;
	}
}

.space-btn:hover {
	&:before {
		animation: hoverShadowBefore 1s forwards;
	}
	&:after {
		animation: hoverShadowAfter 1s forwards;
	}
}

@keyframes hoverShadowBefore {
	0% {
		width: 100%;
		height: 1px;

		top: 0;
		left: 0;
	}
	33% {
		width: 1px;
		height: 100%;

		top: 0;
		left: 0;
	}
	66% {
		width: 1px;
		height: 1px;

		top: calc(100% - 1px);
		left: 0;
	}
	100% {
		width: 100%;
		height: 1px;

		top: calc(100% - 1px);
		left: 0;
	}
}

@keyframes hoverShadowAfter {
	0% {
		width: 100%;
		height: 1px;
	}
	33% {
		width: 1px;
		height: 100%;

		bottom: 0;
		right: 0;
	}
	66% {
		width: 1px;
		height: 1px;

		bottom: calc(100% - 1px);
		right: 0;
	}
	100% {
		width: 100%;
		height: 1px;

		bottom: calc(100% - 1px);
		right: 0;
	}
}

.sub-jumbo {
	padding: 150px;
	background-color: #e84242;
}
</style>
