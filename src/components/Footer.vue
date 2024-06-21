<script>
export default {};
</script>

<template>
	<!-- Footer -->
	<footer class="text-center pt-5">
		<!-- Grid container -->
		<div class="container p-4">
			<!-- Section: Social media -->
			<section class="mb-4">
				<!-- Facebook -->
				<a
					data-mdb-ripple-init
					class="btn btn-outline-light btn-floating m-1 text-white"
					href="#!"
					role="button"
					><i class="fab fa-facebook-f"></i
				></a>

				<!-- Twitter -->
				<a
					data-mdb-ripple-init
					class="btn btn-outline-light btn-floating m-1 text-white"
					href="#!"
					role="button"
					><i class="fab fa-twitter"></i
				></a>

				<!-- Google -->
				<a
					data-mdb-ripple-init
					class="btn btn-outline-light btn-floating m-1 text-white"
					href="#!"
					role="button"
					><i class="fab fa-google"></i
				></a>

				<!-- Instagram -->
				<a
					data-mdb-ripple-init
					class="btn btn-outline-light btn-floating m-1 text-white"
					href="https://www.instagram.com/"
					role="button"
					><i class="fab fa-instagram"></i
				></a>

				<!-- Linkedin -->
				<a
					data-mdb-ripple-init
					class="btn btn-outline-light btn-floating m-1 text-white"
					href="#!"
					role="button"
					><i class="fab fa-linkedin-in"></i
				></a>

				<!-- Github -->
				<a
					data-mdb-ripple-init
					class="btn btn-outline-light btn-floating m-1 text-white"
					href="#!"
					role="button"
					><i class="fab fa-github"></i
				></a>
			</section>
			<!-- Section: Social media -->

			<!-- Section: Text -->
			<section class="mb-4">
				<p class="text-white">
					Benvenuti su <strong>Deliveboo</strong>, il vostro servizio di food
					delivery di fiducia a Milano. Offriamo una vasta gamma di ristoranti
					autentici, preparati con ingredienti freschi e consegnati
					direttamente a casa vostra.
				</p>
			</section>
			<!-- Section: Text -->

			<!-- Section: Links -->
			<section class="">
				<!--Grid row-->
				<div class="row">
					<!--Grid column-->
					<div class="col-lg-3 col-md-6 mb-4 mb-md-0 me-5">
						<h5 class="text-uppercase text-white fw-bolder">Indirizzo</h5>

						<ul class="list-unstyled mb-0 text-start">
							<li>
								<a class="text-white text-decoration-none d-flex" href="#!">
									<div class="pe-2">
										<i class="fa-solid fa-location-dot"></i>
									</div>
									<span class="card-subtitle"
										>Via Monte Napoleone, 12 20121 Milano MI, Italia</span
									>
								</a>
							</li>
							<li>
								<a class="text-white text-decoration-none" href="#!">
									<span class="pe-2">
										<i class="fa-regular fa-clock"></i>
									</span>
									<span class="card-subtitle">Lun-Dom: 7/24 </span>
								</a>
							</li>
							<li>
								<a class="text-white text-decoration-none" href="#!">
									<span class="pe-2">
										<i class="fa-solid fa-bag-shopping"></i>
									</span>
									<span>Lun-Dom: 7/24</span>
								</a>
							</li>
							<li>
								<a class="text-white text-decoration-none" href="#!">
									<span class="pe-2">
										<i class="fa-solid fa-phone-volume"></i>
									</span>
									<span>+39 02 1234 5678</span>
								</a>
							</li>
						</ul>
					</div>
					<!--Grid column-->

					<!--Grid column-->
					<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
						<h5 class="text-uppercase text-white fw-bolder">chi siamo</h5>

						<ul class="list-unstyled mb-0 text-start lh-lg">
							<li>
								<a class="text-white text-decoration-none" href="#!"
									>La nostra storia</a
								>
							</li>
							<li>
								<a class="text-white text-decoration-none" href="#!"
									>Il nostro team</a
								>
							</li>
							<li>
								<a class="text-white text-decoration-none" href="#!"
									>Il nostro cibo</a
								>
							</li>
							<li>
								<a class="text-white text-decoration-none" href="#!"
									>Lavora con noi</a
								>
							</li>
						</ul>
					</div>
					<!--Grid column-->

					<!--Grid column-->
					<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
						<h5 class="text-uppercase text-white fw-bolder">
							servizio clienti
						</h5>

						<ul class="list-unstyled mb-0 text-start lh-lg">
							<li>
								<a class="text-white text-decoration-none" href="#!"
									>Domande frequenti</a
								>
							</li>
							<li>
								<a class="text-white text-decoration-none" href="#!"
									>Termini e Condizioni</a
								>
							</li>
							<li>
								<a class="text-white text-decoration-none" href="#!"
									>Scarica l'app Deliveboo</a
								>
							</li>
							<li>
								<a class="text-white text-decoration-none" href="#!"
									>Segnala un problema</a
								>
							</li>
						</ul>
					</div>
					<!--Grid column-->
				</div>
				<!--Grid row-->
			</section>
			<!-- Section: Links -->
		</div>
		<!-- Grid container -->

		<!-- Copyright -->
		<div
			class="text-center p-3 text-white"
			style="background-color: rgba(0, 0, 0, 0.05)"
		>
			© 2024 Copyright:
			<a class="text-reset fw-bold text-white" href="#">Deliveboo.com</a>
		</div>
		<!-- Copyright -->
	</footer>
	<!-- Footer -->
</template>

<style lang="scss" scoped>
footer {
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(65, 65, 65, 0.3)),
		url("/img/italian-food-background-1.jpg");
	background-size: cover;
	background-repeat: no-repeat;
}
</style>
