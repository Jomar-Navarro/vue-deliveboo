<script>
export default {};
</script>

<template>
	<div class="container-fluid big">
		<div class="container">
			<div class="phone-hei row">
				<div class="col-12 col-md-6 d-flex justify-content-center">
					<img class="object-fit-contain" src="/img/phone2.png" alt="" />
				</div>
				<div
					class="col-12 col-md-6 d-flex justify-content-center align-items-center"
				>
					<div class="">
						<h1 class="text-uppercase fw-bold pt-4">
							Il bello è prenderci gusto
						</h1>
						<p class="fw-bold desc-text">
							Scarica l'app di DeliveBoo e ordina dove vuoi, qualunque cosa
							desideri.
						</p>
						<div>
							<div class="btn btn-outline-dark me-3 p-0 mb-2">
								<span class="btn-phone">
									<div class="icon-phone d-flex align-items-center play">
										<i class="fa-brands fa-google-play"></i>
									</div>
									<div>
										<p>Disponibile su</p>
										<span>GooglePlay</span>
									</div>
								</span>
							</div>
							<div class="btn btn-outline-dark p-0 mb-2">
								<span class="btn-phone">
									<div class="icon-phone d-flex align-items-center apple">
										<i class="fa-brands fa-apple"></i>
									</div>
									<div>
										<p>Scarica da</p>
										<span>App Store</span>
									</div>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.big {
	background-color: #f5e7c1;
}
.phone-hei {
	height: 800px;
	padding: 60px 0px;
	.btn-phone {
		display: flex;
		padding: 2px 32px;
		width: 250px;
		p {
			text-align: left;
			margin: 0;
		}
		span {
			font-size: 1.5rem;
			font-weight: bold;
		}
		.icon-phone {
			margin-right: 16px;
		}
		.play {
			font-size: 2rem;
		}
		.apple {
			font-size: 2.5rem;
		}
	}

	h1 {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
	}
	.desc-text {
		font-size: clamp(1rem, 3vw, 1.5rem);
	}
	@media (max-width: 520px) {
		div.col-12:nth-child(2) > div:nth-child(1) > div:nth-child(3) {
			margin: 0;
			text-align: center;
		}
		h1 {
			text-align: center;
		}

		.desc-text {
			text-align: center;
		}

		div.btn:nth-child(1) {
			margin-right: 0px !important;
		}
	}
}
</style>
