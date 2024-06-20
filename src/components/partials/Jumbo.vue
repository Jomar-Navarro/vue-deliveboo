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
	<div
		class="container-fluid jumbo d-flex justify-content-center align-items-center flex-column"
	>
		<div class=" ">
			<h1 class="fw-bold d-flex jumbo-title">
				Il Tuo Gusto, <br />
				la Nostra Missione. <br />
				Ordina Ora e Gusta la Felicità!
			</h1>
		</div>
		<div class="d-flex justify-content-center">
			<div class="custom-shape-divider-bottom-1718892344">
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
			</div>
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
.jumbo {
	color: rgb(255, 237, 176);
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(65, 65, 65, 0.3)),
		url("/img/italian-food-background-1.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	height: calc(100vh - 80px);
	max-height: 100%;
	font-family: "Luckiest Guy", system-ui;
	// font-family: 'Bungee Shade', system-ui;
	.indicator {
		position: relative;
		width: 50px;
		height: 50px;

		transform: rotate(45deg);
		span {
			position: absolute;
			// left:0;
			right: 0;
			top: 0;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			border: none;
			border-bottom: 3px solid #fff;
			border-right: 3px solid #fff;
			animation: animate 1s linear infinite;
			&:nth-child(1) {
				top: -30px;
				left: -30px;
				animation-delay: 0s;
			}
			&:nth-child(2) {
				top: -15px;
				left: -15px;
				animation-delay: 0.2s;
			}
			&:nth-child(3) {
				top: 0;
				left: 0;
				animation-delay: 0.4s;
			}
			&:nth-child(4) {
				top: 15px;
				left: 15px;
				animation-delay: 0.6s;
			}
			&:nth-child(5) {
				top: 30px;
				left: 30px;
				animation-delay: 0.8s;
			}
		}
	}
}
@keyframes animate {
	0% {
		border-color: #fff;
		transform: translate(0, 0);
	}
	20% {
		border-color: #fff;
		transform: translate(15px, 15px);
	}
	20.1%,
	100% {
		border-color: #ffd64a;
	}
}

.jumbo-title {
	// margin-top: 250px;
	// margin-left: 100px;
	// width: 1300px;
	font-size: 4rem;
	letter-spacing: 3px;
}

.custom-shape-divider-bottom-1718892344 {
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
	transform: rotate(180deg);
}

.custom-shape-divider-bottom-1718892344 svg {
	position: relative;
	display: block;
	width: calc(139% + 1.3px);
	height: 183px;
}

.custom-shape-divider-bottom-1718892344 .shape-fill {
	fill: #8b0101;
}
</style>
