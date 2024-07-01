<script>
export default {};
</script>

<template>
	<section id="reviews" class="py-5">
		<div class="container-fluid">
			<h1 class="titolo text-center py-4">Recensioni</h1>

			<div class="row justify-content-center flex-column align-items-center">
				<div class="col-lg-8 col-md-12 my-5">
					<div class="mb-3 review-card">
						<div class="row no-gutters">
							<div
								class="col-md-6 image-wrapper col-lg-5 d-flex justify-content-center"
							>
								<img
									src="/img/nodless-man.jpg"
									class="card-img"
									alt="Persona che mangia"
								/>
							</div>
							<div class="col-md-6 col-lg-7 d-flex align-items-center">
								<div class="card-body">
									<p class="card-text">
										"Grazie a questa app ho scoperto ristoranti fantastici! Ho
										ordinato il mio pasto preferito senza problemi e la consegna
										è stata rapida. Consiglio vivamente a tutti di provare
										questa piattaforma."
									</p>
									<p class="card-text">
										<small class="text-muted">@Ugo_De_Ughi</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-8 col-md-12 my-5">
					<div class="mb-3 review-card">
						<div class="row no-gutters">
							<div
								class="col-md-6 order-md-2 image-wrapper col-lg-5 d-flex justify-content-center"
							>
								<img
									src="/img/sushi-girl.jpg"
									class="card-img"
									alt="Persona che mangia"
								/>
							</div>
							<div
								class="col-md-6 col-lg-7 order-md-1 d-flex align-items-center"
							>
								<div class="card-body">
									<p class="card-text text-end">
										"Ottima esperienza! Ho scoperto nuovi ristoranti e il
										servizio è stato impeccabile. L'applicazione è facile da
										usare e mi ha permesso di ordinare cibo delizioso con
										facilità."
									</p>
									<p class="card-text text-end">
										<small class="text-muted">@Anna_Rossi</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-8 col-md-12 my-5">
					<div class="mb-3 review-card">
						<div class="row no-gutters">
							<div
								class="col-md-6 image-wrapper col-lg-5 d-flex justify-content-center"
							>
								<img
									src="/img/pizza-man.jpg"
									class="card-img"
									alt="Persona che mangia"
								/>
							</div>
							<div class="col-md-6 col-lg-7 d-flex align-items-center">
								<div class="card-body">
									<p class="card-text">
										"Sono rimasto molto soddisfatto dell'applicazione. Mi ha
										aiutato a trovare ristoranti che offrono piatti deliziosi e
										la possibilità di ordinare comodamente da casa. Davvero
										pratica e intuitiva."
									</p>
									<p class="card-text">
										<small class="text-muted">@Luca_Verdi</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-8 col-md-12 my-5">
					<div class="mb-3 review-card">
						<div class="row no-gutters">
							<div
								class="col-md-6 order-md-2 image-wrapper col-lg-5 d-flex justify-content-center"
							>
								<img
									src="/img/mexican-girl.jpg"
									class="card-img"
									alt="Persona che mangia"
								/>
							</div>
							<div
								class="col-md-6 order-md-1 col-lg-7 d-flex align-items-center"
							>
								<div class="card-body">
									<p class="card-text text-end">
										"Fantastica app! Ho potuto esplorare una varietà di
										ristoranti nella mia zona e ho sempre ricevuto il mio ordine
										puntualmente. Perfetta per chi ama ordinare cibo di qualità
										con semplicità."
									</p>
									<p class="card-text text-end">
										<small class="text-muted">@Sofia_Bianchi</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
#reviews {
	background-color: #e4b235;
	height: auto;
	.titolo {
		font-size: 6rem;
	}

	.card-img {
		width: 500px;
		max-width: 100%;
		height: 500px;
		object-fit: cover;
		border-radius: 25px;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}

	// da 992px in giu
	@media (max-width: 992px) {
		.titolo {
			font-size: 4rem;
		}
	}

	@media (max-width: 768px) {
		.review-card {
			.row {
				.image-wrapper {
					margin-bottom: 1rem;
				}
			}
		}

		.card-img {
			max-width: 100%;
			height: 400px;
			object-fit: cover;
		}
	}

	@media (max-width: 576px) {
		.titolo {
			font-size: 2.5rem;
		}

		.review-card {
			.row {
				.image-wrapper {
					margin-bottom: 0.5rem;
				}
			}
		}

		.card-img {
			max-width: 100%;
			height: 400px;
			object-fit: cover;
		}
	}

	@media (max-width: 768px) {
		// iPhone and smaller Android devices
		.review-card {
			.row {
				flex-direction: column;
			}
			.card-body {
				text-align: center;
			}
		}
		.card-img {
			max-width: 100%;
			height: 400px;
			object-fit: cover;
		}
	}

	@media (min-width: 1024px) and (max-width: 1440px) {
		// MacBook
		.card-img {
			max-width: 100%;
			height: 400px;
			object-fit: cover;
		}
	}
}
</style>
