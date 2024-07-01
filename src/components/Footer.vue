<script>

</script>

<template>

	<footer class="text-center pt-5">
		<div class="container p-4 ">

			<!-- Social media -->
			<section class="social_ mb-4">
				<!-- Facebook -->
				<a class="btn border m-1 text-white" href="https://www.facebook.com/?locale=it_IT" role="button"><i
						class="fab fa-facebook-f"></i></a>

				<!-- Twitter -->
				<a class="btn border m-1 text-white" href="#!" role="button"><i class="fab fa-twitter"></i></a>

				<!-- Google -->
				<a class="btn border m-1 text-white" href="https://www.google.it/?pli=1" role="button"><i
						class="fab fa-google"></i></a>

				<!-- Instagram -->
				<a class="btn border m-1 text-white" href="https://www.instagram.com/" role="button"><i
						class="fab fa-instagram"></i></a>

				<!-- Linkedin -->
				<a class="btn border m-1 text-white" href="https://www.linkedin.com/home" role="button"><i
						class="fab fa-linkedin-in"></i></a>

				<!-- Github -->
				<a class="btn border m-1 text-white" href="https://github.com/login" role="button"><i
						class="fab fa-github"></i></a>
			</section>
			<!-- / -->

			<!-- Section: Text -->
			<section class="mb-4">
				<p class="description_ text-white">
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

					<div class="box_ col-lg-4 col-md-12 mb-4 mb-md-0">
						<h5 class="text-uppercase text-white fw-bolder  text-center">Indirizzo</h5>
						<ul class="list-unstyled mb-0 text-center ">
							<li>
								<a class="text-white text-decoration-none" href="#">
									<div class="pe-2">
										<i class="fa-solid fa-location-dot"></i>
										<span class="card-subtitle text-center"> Via Monte Napoleone,12 20121 Milano (MI)</span>
									</div>
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



					<div class="box_ col-lg-4 col-md-12 mb-4 mb-md-0">
						<h5 class="text-uppercase text-white fw-bolder  text-center">chi siamo</h5>

						<ul class="list-unstyled mb-0  text-center lh-lg">
							<li>
								<router-link class="text-white text-decoration-none" to="/la-nostra-storia">La Nostra
									Storia</router-link>
							</li>
							<li>
								<router-link class="text-white text-decoration-none" to="/il-nostro-team">Il Nostro
									Team</router-link>
							</li>
							<li>
								<router-link class="text-white text-decoration-none" to="/lavora-con-noi">Lavora con
									noi</router-link>
							</li>
							<li>
								<router-link class="text-white text-decoration-none" to="/informazioni-legali">Informazioni
									legali</router-link>
							</li>
						</ul>
					</div>

					<div class="box_ col-lg-3 col-md-12 mb-4 mb-md-0">
						<h5 class="text-uppercase text-white fw-bolder  text-center">servizio clienti</h5>
						<ul class="list-unstyled mb-0  text-center lh-lg">
							<li>
								<router-link class="text-white text-decoration-none" to="/domande-frequenti">Domande
									frequenti</router-link>
							</li>
							<li>
								<router-link class="text-white text-decoration-none" to="/informazioni-legali">Termini e
									Condizioni</router-link>
							</li>
							<li>
								<a class="text-white text-decoration-none" href="#!">Scarica l'app Deliveboo</a>
							</li>
							<li>
								<router-link class="text-white text-decoration-none" to="/segnalaci-un-problema">Segnala un
									problema</router-link>
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
			<router-link class="text-reset fw-bold" to="/">Deliveboo.com</router-link>
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

	.row {

		.box_:nth-of-type(2) li:hover,
		.box_:nth-of-type(3) li:hover {
			transition: all 0.4s ease;
			text-decoration: underline white;
		}
		li {
			line-height: 170%;
		}
	}
	h5 {
		text-align: start;
		margin-bottom: 10px;
	}
}



/* da 992px in giù */
@media (max-width: 992px) {
	.description_ {
		margin-bottom: 50px;
	}

	.box_ {
		padding-bottom: 10px;
		border-bottom: 1px solid rgba(188, 188, 188, 0.772);
	}
}
</style>
