<script>
export default {
	name: "Loader",
};
</script>

<template>
	<div class="loader-container">
		<span class="loader"></span>
		<span class="fire"><img src="/img/fire.png" alt="" /></span>
	</div>
</template>

<style lang="scss" scoped>
.loader-container {
	height: 100vh;
	position: relative;
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(254, 127, 127, 0.123)),
		url("/img/jumbo_2.jpeg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	z-index: 999;
}

.loader {
	position: absolute;
	width: 120px;
	height: 14px;
	border-radius: 0 0 15px 15px;
	background-color: #3e494d;
	box-shadow: 0 -1px 4px #5d6063 inset;
	animation: panex 0.5s linear alternate infinite;
	transform-origin: 170px 0;
	z-index: 10;
	perspective: 300px;
	top: 50%;
	left: 44.5%;
	transform: translate(-40%, -40%);
}

.fire {
	img {
		position: absolute;
		width: 150px;
		height: 120px;
		top: 50%;
		left: 52.5%;
		animation: flicker 1s infinite alternate;
	}
}

@keyframes flicker {
	0% {
		transform: translate(-80%, -10%) scale(1);
	}
	50% {
		transform: translate(-80%, -10%) scale(1.1);
	}
	100% {
		transform: translate(-80%, -10%) scale(1);
	}
}

.loader::before {
	content: "";
	position: absolute;
	left: calc(100% - 2px);
	top: 0;
	z-index: -2;
	height: 10px;
	width: 70px;
	border-radius: 0 4px 4px 0;
	background-repeat: no-repeat;
	background-image: linear-gradient(#6c4924, #4b2d21),
		linear-gradient(#4d5457 24px, transparent 0),
		linear-gradient(#9f9e9e 24px, transparent 0);
	background-size: 50px 10px, 4px 8px, 24px 4px;
	background-position: right center, 17px center, 0px center;
}
.loader::after {
	content: "";
	position: absolute;
	left: 50%;
	top: 0;
	z-index: -2;
	transform: translate(-50%, -20px) rotate3d(75, -2, 3, 78deg);
	width: 55px;
	height: 53px;
	background: #fff;
	background-image: radial-gradient(circle 3px, #fff6 90%, transparent 10%),
		radial-gradient(circle 12px, #ffc400 90%, transparent 10%),
		radial-gradient(circle 12px, #ffae00 100%, transparent 0);
	background-repeat: no-repeat;
	background-position: -4px -6px, -2px -2px, -1px -1px;
	box-shadow: -2px -3px #0002 inset, 0 0 4px #0003 inset;
	border-radius: 47% 36% 50% 50% / 49% 45% 42% 44%;
	animation: eggRst 1s ease-out infinite;
}

@keyframes eggRst {
	0%,
	100% {
		transform: translate(-50%, -20px) rotate3d(90, 0, 0, 90deg);
		opacity: 0;
	}
	10%,
	90% {
		transform: translate(-50%, -30px) rotate3d(90, 0, 0, 90deg);
		opacity: 1;
	}
	25% {
		transform: translate(-50%, -40px) rotate3d(85, 17, 2, 70deg);
	}
	75% {
		transform: translate(-50%, -40px) rotate3d(75, -3, 2, 70deg);
	}
	50% {
		transform: translate(-55%, -50px) rotate3d(75, -8, 3, 50deg);
	}
}
@keyframes panex {
	0% {
		transform: rotate(-5deg);
	}
	100% {
		transform: rotate(10deg);
	}
}

@media (max-width: 1200px) {
	.loader {
		width: 100px;
		height: 12px;
	}
	.loader::before {
		width: 60px;
		height: 9px;
	}
	.loader::after {
		width: 45px;
		height: 43px;
	}
	.fire img {
		width: 130px;
		height: 100px;
		left: 52.5%;
	}
}

@media (max-width: 992px) {
	.loader {
		width: 90px;
		height: 10px;
	}
	.loader::before {
		width: 50px;
		height: 8px;
	}
	.loader::after {
		width: 40px;
		height: 38px;
	}
	.fire img {
		width: 110px;
		height: 90px;
		left: 54%;
	}
}

@media (max-width: 768px) {
	.loader {
		width: 80px;
		height: 9px;
	}
	.loader::before {
		width: 45px;
		height: 7px;
	}
	.loader::after {
		width: 35px;
		height: 33px;
	}
	.fire img {
		width: 90px;
		height: 80px;
		left: 54%;
	}
}

@media (max-width: 576px) {
	.loader {
		width: 70px;
		height: 8px;
	}
	.loader::before {
		width: 40px;
		height: 6px;
	}
	.loader::after {
		width: 30px;
		height: 28px;
	}
	.fire img {
		width: 70px;
		height: 60px;
		left: 56.5%;
	}
}

@media (max-width: 480px) {
	.loader {
		width: 60px;
		height: 7px;
	}
	.loader::before {
		width: 35px;
		height: 5px;
	}
	.loader::after {
		width: 25px;
		height: 23px;
	}
	.fire img {
		width: 60px;
		height: 50px;
		left: 56.5%;
	}
}
</style>
