<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
	mounted() {
		AOS.init();
	},
};
</script>

<template>
	<section id="reviews" class="py-5">
		<div class="main-wrapper">
			<!-- Onda superiore -->
			<div class="wave wave-top">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#f5e7c1"
						fill-opacity="1"
						d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,90.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
					></path>
				</svg>
			</div>
			<div class="container-fluid">
				<h1 class="titolo text-center py-4">Recensioni</h1>
				<div class="row justify-content-center flex-column align-items-center">
					<div class="col-lg-8 col-md-12 my-5">
						<div class="mb-3 review-card" data-aos="fade-right">
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
										<p class="card-text text-sm-center text-md-start">
											"Grazie a questa app ho scoperto ristoranti fantastici! Ho
											ordinato il mio pasto preferito senza problemi e la
											consegna è stata rapida. Consiglio vivamente a tutti di
											provare questa piattaforma."
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
						<div class="mb-3 review-card" data-aos="fade-left">
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
										<p class="card-text text-sm-center text-md-end">
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
						<div class="mb-3 review-card" data-aos="fade-right">
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
										<p class="card-text text-sm-center text-md-start">
											"Sono rimasto molto soddisfatto dell'applicazione. Mi ha
											aiutato a trovare ristoranti che offrono piatti deliziosi
											e la possibilità di ordinare comodamente da casa. Davvero
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
					<div class="col-lg-8 col-md-12 my-5 pb-5">
						<div class="mb-3 review-card" data-aos="fade-left">
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
										<p class="card-text text-sm-center text-md-end">
											"Fantastica app! Ho potuto esplorare una varietà di
											ristoranti nella mia zona e ho sempre ricevuto il mio
											ordine puntualmente. Perfetta per chi ama ordinare cibo di
											qualità con semplicità."
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
			<!-- Onda inferiore -->
			<div class="wave wave-bottom">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#f5e7c1"
						fill-opacity="1"
						d="M0,192L80,192C160,192,320,192,480,213.3C640,235,800,277,960,272C1120,267,1280,213,1360,186.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
					></path>
				</svg>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
#reviews {
	position: relative;
	background-color: #f5e7c1;
	height: auto;

	.main-wrapper {
		overflow: hidden;
	}

	.wave {
		position: absolute;
		width: 100%;
		height: 160px; // Altezza delle onde, adatta secondo necessità
		fill: #f5e7c1; // Colore delle onde
		z-index: 1;

		&.wave-top {
			top: -2.4%;
			transform: translateY(-100%);
		}

		&.wave-bottom {
			bottom: 0%;
		}

		svg {
			display: block;
			width: 100%;
			height: auto;
		}
	}

	.container-fluid {
		position: relative;
		z-index: 2;
	}

	// Altri stili per il contenuto della sezione
	.titolo {
		font-size: 10rem;
		font-family: "Bangers", system-ui;
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

	.card-text {
		font-size: 1.7rem;
		font-family: "Ubuntu", sans-serif;
	}

	@media (max-width: 992px) {
		.wave {
			height: 80px; // Adatta altezza delle onde per schermi più piccoli
			&.wave-top {
				top: 0%;
				transform: translateY(-100%);
			}

			&.wave-bottom {
				bottom: 0;
			}
		}
		.titolo {
			font-size: 4rem;
		}
	}

	@media (max-width: 768px) {
		.wave {
			height: 80px; // Adatta altezza delle onde per schermi più piccoli
			&.wave-top {
				top: 0%;
				transform: translateY(-100%);
			}

			&.wave-bottom {
				bottom: 0;
			}
		}

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

		.wave {
			height: 60px; // Altezza onde per schermi più piccoli

			&.wave-top {
				top: 0%;
				transform: translateY(-100%);
			}

			&.wave-bottom {
				bottom: -0.5%;
			}
		}

		.review-card {
			.row {
				.image-wrapper {
					margin-bottom: 2rem;
				}
			}

			.card-body {
				text-align: center !important;
			}
		}

		.card-img {
			max-width: 100%;
			height: 300px;
			object-fit: cover;
		}
	}

	@media (min-width: 1024px) and (max-width: 1440px) {
		.card-img {
			max-width: 100%;
			height: 400px;
			object-fit: cover;
		}
	}
}
</style>
