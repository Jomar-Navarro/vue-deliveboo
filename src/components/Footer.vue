<script>

</script>

<template>

	<footer class="text-center pt-5">
		<div class="container p-4">

			<!-- Social media -->
			<section class="social_ mb-4">
				<!-- Facebook -->
				<a class="btn border m-1 text-white" href="https://www.facebook.com/?locale=it_IT" role="button"><i class="fab fa-facebook-f"></i></a>

				<!-- Twitter -->
				<a class="btn border m-1 text-white" href="#!" role="button"><i class="fab fa-twitter"></i></a>

				<!-- Google -->
				<a class="btn border m-1 text-white" href="https://www.google.it/?pli=1" role="button"><i class="fab fa-google"></i></a>

				<!-- Instagram -->
				<a class="btn border m-1 text-white" href="https://www.instagram.com/" role="button"><i
						class="fab fa-instagram"></i></a>

				<!-- Linkedin -->
				<a class="btn border m-1 text-white" href="https://www.linkedin.com/home" role="button"><i class="fab fa-linkedin-in"></i></a>

				<!-- Github -->
				<a class="btn border m-1 text-white" href="https://github.com/login" role="button"><i class="fab fa-github"></i></a>
			</section>
			<!-- / -->

			<!-- Section: Text -->
			<section class="mb-4">
				<p class="text-white">
					Benvenuti su <strong>Deliveboo</strong>, il vostro servizio di food
					delivery di fiducia a Milano. Offriamo una vasta gamma di piatti
					autentici, preparati con ingredienti freschi e consegnati
					direttamente a casa vostra, dai vostri ristoranti preferiti.
				</p>
			</section>
			<!-- / -->

			<!-- Links -->
			<section>
				<div class="row">
					<div class="col-lg-4 col-md-12 mb-4 mb-md-0 me-5">
						<h5 class="text-uppercase text-white fw-bolder">Indirizzo</h5>

						<ul class="list-unstyled mb-0 text-start">
							<li>
								<a class="text-white text-decoration-none d-flex" href="#!">
									<div class="pe-2">
										<i class="fa-solid fa-location-dot"></i>
									</div>
									<span class="card-subtitle">Via Monte Napoleone, 12 20121 Milano MI, Italia</span>
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



					<div class="col-lg-4 col-md-12 mb-4 mb-md-0">
						<h5 class="text-uppercase text-white fw-bolder">chi siamo</h5>

						<ul class="list-unstyled mb-0 text-start lh-lg">
							<li>
								<router-link class="text-white text-decoration-none" to="/la-nostra-storia">La Nostra
									Storia</router-link>
							</li>
							<li>
								<router-link class="text-white text-decoration-none" to="/il-nostro-team">Il Nostro Team</router-link>
							</li>
							<li>
								<router-link class="text-white text-decoration-none" to="/lavora-con-noi">Lavora con noi</router-link>
							</li>
							<li>
								<router-link class="text-white text-decoration-none" to="/informazioni-legali">Informazioni legali</router-link>
							</li>
						</ul>
					</div>



					<div class="col-lg-3 col-md-12 mb-4 mb-md-0">
						<h5 class="text-uppercase text-white fw-bolder">
							servizio clienti
						</h5>

						<ul class="list-unstyled mb-0 text-start lh-lg">
							<li>
								<router-link class="text-white text-decoration-none" to="/domande-frequenti">Domande frequenti</router-link>
							</li>
							<li>
								<router-link class="text-white text-decoration-none" to="/informazioni-legali">Termini e Condizioni</router-link>
							</li>
							<li>
							<a class="text-white text-decoration-none" href="#!">Scarica l'app Deliveboo</a>
							</li>
							<router-link class="text-white text-decoration-none" to="/segnalaci-un-problema">Segnala un problema</router-link>
							<li>
							</li>
						</ul>
					</div>

				</div>

			</section>
			<!-- / -->
		</div>


		<!-- Copyright -->
		<div class="text-center p-3 text-white" style="background-color: rgba(0, 0, 0, 0.05)">
			© 2024 Copyright:
			<a class="text-reset fw-bold text-white" href="#">Deliveboo.com</a>
		</div>
		<!-- / -->
	</footer>

</template>

<style lang="scss" scoped>
footer {
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(65, 65, 65, 0.3)),
		url("/img/italian-food-background-1.jpg");
	background-size: cover;
	background-repeat: no-repeat;

	.social_ {
		a:hover {
			background-color: rgb(94, 94, 94);
		}
	}
}

i:hover{
	color: #FFC108;
}
</style>
