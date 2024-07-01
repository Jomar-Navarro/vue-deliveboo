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
		class="container-fluid jumbo d-flex mt-0justify-content-center align-items-center flex-column"
	>
		<!-- <img class="pizza" src="/img/pizza.png" alt="" /> -->
		<div>
			<h1 class="fw-bold jumbo-title text-warning text-center">
				Il tuo viaggio culinario inizia qui: <br />
				esplora i ristoranti più amati della città <br />
				e ordina i tuoi piatti preferiti direttamente a casa tua.
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
			<!-- <div class="indicator mt-5">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div> -->

			<div class="ico animated mt-5">
				<div class="circle circle-top"></div>
				<div class="circle circle-main"></div>
				<div class="circle circle-bottom"></div>

				<svg
					class="svg"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 612 612"
					style="enable-background: new 0 0 612 612"
					xml:space="preserve"
				>
					<defs>
						<clipPath id="cut-off-arrow">
							<circle cx="306" cy="306" r="287" />
						</clipPath>

						<filter id="goo">
							<feGaussianBlur
								in="SourceGraphic"
								stdDeviation="10"
								result="blur"
							/>
							<feColorMatrix
								in="blur"
								mode="matrix"
								values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
								result="goo"
							/>
							<feBlend in="SourceGraphic" in2="goo" />
						</filter>
					</defs>
					<path
						class="st-arrow"
						d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
					l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
					c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
					c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z"
					/>
				</svg>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$jumbotron-color: rgb(255, 237, 176);
$shape-fill-color: #292626;
$indicator-color: #fff;
$indicator-active-color: #ffd64a;

$circle-w: 100px;
$circle-bg: #e84242;
$arrow-bg: #ffc107;
$body-bg: #9ddcdc;
$bezier: cubic-bezier(0.77, 0, 0.175, 1);
$bezier-bounce: cubic-bezier(0.87, -0.41, 0.19, 1.44);
$anim-timing: 3s;

html,
body {
	height: 100%;
	width: 100%;
	text-align: center;
}
body {
	background-color: $body-bg;
}

.ico {
	// margin-top: 200px;
	font-size: clamp(2rem, 3vw, 3rem);

	margin: 0 auto;
	text-align: center;
	width: $circle-w;
	height: $circle-w;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	filter: url("#goo");
	.circle {
		background: $circle-bg;
		border-radius: 50%;
		display: inline-block;
		height: $circle-w;
		width: $circle-w;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		transform-origin: 0%;

		&.circle-top {
			height: $circle-w / 3;
			width: $circle-w / 2.4;
			animation: blob-1-anim $anim-timing $bezier infinite;
			z-index: 0;
			top: 0;
		}
		&.circle-bottom {
			height: $circle-w / 3;
			width: $circle-w / 2.4;
			animation: blob-2-anim $anim-timing $bezier infinite;
			z-index: 9;
			bottom: 0px;
		}
	}

	.st-arrow {
		fill: $arrow-bg;
		animation: scrolly $anim-timing $bezier forwards infinite;
		perspective: 9000px;
		transform: translateZ(0);
		transform-origin: bottom;
	}
}

.svg {
	z-index: 9;
	position: relative;
}

@keyframes blob-1-anim {
	0% {
		transform: translateX(-50%) translateY(0);
	}
	14% {
		transform: translateX(-50%) translateY(-8px);
	}
	24% {
		transform: translateX(-50%) translateY(0);
	}
	100% {
		transform: translateX(-50%) translateY(0);
	}
}

@keyframes blob-2-anim {
	0% {
		//transform: scale(1) translate(-50%,-150%);
		transform: scale(1) translate(-50%, 10px);
	}
	30% {
		//transform: scale(1) translate(-50%,-50%);
		transform: scale(1) translate(-50%, 10px);
	}
	70% {
		//transform: scale(1) translate(-50%,-50%);
		transform: scale(1) translate(-50%, 10px);
	}
	95% {
		//transform: scale(1) translate(-50%,-50%);
		transform: scale(1) translate(-50%, 26px);
	}
	100% {
		//transform: scaleX(1.5) translate(-50%,140%);
		transform: scale(1) translate(-50%, 10px);
	}
}

@keyframes scrolly {
	0% {
		transform: translate3d(0, -150%, 0) rotateX(90deg) scale(0.5) skewX(3deg);
	}
	30% {
		transform: translate3d(0, 0, 0) rotateX(0deg) scale(1) skewX(0deg);
	}
	70% {
		transform: translate3d(0, 0, 0) rotateX(0deg) scale(1) skewX(0deg);
	}
	95% {
		transform: translate3d(0, 50%, 0) rotateX(-90deg) scale(0.5) skewX(-3deg);
	}
	100% {
		transform: translate3d(0, 50%, 0) rotateX(-90deg) scale(0.5) skewX(-3deg);
	}
}
.jumbo {
	color: $jumbotron-color;

	height: 80vh;
	max-height: 100%;
	font-family: "Bangers", system-ui;

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
		padding-top: 80px;
		margin-bottom: 8%;
		font-size: clamp(2rem, 4vw, 2.5rem);
		letter-spacing: 3px;
		// font-size: 70px;
		// width: 50%;
		margin: 0 auto;
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
	.jumbo {
		.indicator {
			width: 25vw;
			height: 25vw;
			top: 30%;
		}

		.jumbo-title {
			// font-size: 40px;
		}
	}
}
</style>
