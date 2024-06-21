<script>
export default {};
</script>

<template>
	<header class="px-3">
		<!-- <nav class="navbar navbar-expand-lg mx-3"> -->
		<div class="d-flex align-items-center justify-content-between justify-content-center h-100">
			<div class="">
				<img src="/img/logo-final.png" alt="" class="logo" />
				<!-- <h1>Logo</h1> -->
			</div>

			<div class="d-flex align-items-center h-100">
				<ul class="d-flex justify-content-between align-items-center h-100 m-0">
					<li class="nav-item">
						<router-link class="nav-link link-title p-3" :to="{ name: 'home' }">Home</router-link>
					</li>

					<li class="nav-item">
						<router-link class="nav-link link-title p-3" :to="{ name: 'contacts' }">Contatti</router-link>
					</li>

					<li class="nav-item">
						<router-link class="nav-link link-title p-3" :to="{ name: 'about' }">Chi Siamo</router-link>
					</li>
				</ul>
			</div>

			<div class="ms-5">
				<div class="text-white d-flex align-items-center">
					<div class="bottone btn btn-outline-warning me-3">
						<button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
							aria-controls="offcanvasRight">Vai al carrello</button>
					</div>
					<div class="text-warning fs-4">
						<i class="fa-solid fa-cart-shopping"></i>
					</div>
				</div>
			</div>



			<div class="offcanvas offcanvas-end w-25" tabindex="-1" id="offcanvasRight"
				aria-labelledby="offcanvasRightLabel">
				<div class="offcanvas-header">
					<h5 class="offcanvas-title" id="offcanvasRightLabel">Carrello Piatti</h5>
					<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
					<ul>
						<li>piatto 1</li>
						<li>piatto 2</li>
						<li>piatto 3</li>
						<li>piatto 4</li>
					</ul>
				</div>
			</div>


		</div>
		<!-- </nav> -->
	</header>
</template>

<style lang="scss" scoped>
header {
	background-color: #8b0101;
	height: 90px;

	li {
		list-style: none;
		font-family: "Luckiest Guy", system-ui;
		color: #ff9f22;
	}

	.link-title {
		color: #ffc107;
		font-size: 1.5rem;
		letter-spacing: 1px;
		transition: all .3s ease-out;
		&:hover{
			color: rgb(251, 198, 145);
		}
	}

	.logo {
		width: 150px;
		object-fit: contain;
	}

	.bottone {
		font-family: "Luckiest Guy", system-ui;
	}
}
</style>
