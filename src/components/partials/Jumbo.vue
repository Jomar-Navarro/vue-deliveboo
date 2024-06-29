<script>
import { store } from "../../data/store";

export default {
	data() {
		return {
			store,
		};
	},
};
</script>

<template>
	<div
		class="container-fluid jumbo d-flex justify-content-center align-items-center flex-column"
	>
		<!-- <img class="pizza" src="/img/pizza.png" alt="" /> -->
		<div>
			<h1 class="fw-bold jumbo-title text-warning text-center">
				Il Tuo Gusto <br />
				la Nostra Missione <br />
				Ordina Ora e Gusta la Felicità!
			</h1>
		</div>

		<div class="d-flex justify-content-center">
			<!-- onde -->
			<!-- <div class="custom-shape-divider-bottom">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						opacity=".25"
						class="shape-fill"
					></path>
					<path
						d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
						opacity=".5"
						class="shape-fill"
					></path>
					<path
						d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
						class="shape-fill"
					></path>
				</svg>
			</div> -->

			<!-- frecce -->
			<div class="indicator mt-5">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$jumbotron-color: rgb(255, 237, 176);
$shape-fill-color: #292626;
$indicator-color: #fff;
$indicator-active-color: #ffd64a;

.jumbo {
	color: $jumbotron-color;

	height: 80vh;
	max-height: 100%;
	font-family: "Bangers", system-ui;
	background-color: rgba($color: #000000, $alpha: 0.5);
	.indicator {
		position: relative;
		transform: rotate(45deg);
		display: grid;
		place-items: center;
		z-index: 999;

		span {
			position: absolute;
			width: 5vw;
			height: 5vw;
			box-sizing: border-box;
			border: none;
			border-bottom: 3px solid $indicator-color;
			border-right: 3px solid $indicator-color;
			animation: animate 1s linear infinite;

			&:nth-child(1) {
				top: -20%;
				left: -20%;
				animation-delay: 0s;
			}

			&:nth-child(2) {
				top: -10%;
				left: -10%;
				animation-delay: 0.2s;
			}

			&:nth-child(3) {
				top: 0;
				left: 0;
				animation-delay: 0.4s;
			}

			&:nth-child(4) {
				top: 10%;
				left: 10%;
				animation-delay: 0.6s;
			}

			&:nth-child(5) {
				top: 20%;
				left: 20%;
				animation-delay: 0.8s;
			}
		}
	}

	@keyframes animate {
		0% {
			border-color: $indicator-color;
			transform: translate(0, 0);
		}

		20% {
			border-color: $indicator-color;
			transform: translate(10%, 10%);
		}

		100% {
			border-color: $indicator-active-color;
		}
	}

	.jumbo-title {
		margin-bottom: 8%;
		font-size: clamp(1.5rem, 4vw, 4rem);
		letter-spacing: 3px;
		font-size: 70px;
	}

	.custom-shape-divider-bottom {
		position: absolute;
		bottom: 1%;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);

		svg {
			position: relative;
			display: block;
			width: calc(139% + 1.3px);
			height: 12rem;

			.shape-fill {
				fill: $shape-fill-color;
			}
		}
	}
}

// da 992px in su
@media (min-width: 992px) {
	.indicator {
		width: 10vw;
		height: 10vw;
	}
}

// da 992px in giu
@media (max-width: 992px) {
	.indicator {
		width: 25vw;
		height: 25vw;
		top: 30%;
	}
}
</style>
