<script>
import Cart from "./partials/Cart.vue";

export default {
	components: {
		Cart,
	},
	data() {
		return {
			isMenuOpen: false,
		};
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		},
	},
};
</script>

<template>
	<header class="header bg-dark sticky-top py-2">
		<div class="container-fluid d-flex align-items-center justify-content-between">
			<div class="logo-container">
				<img src="/img/logo-final.png" alt="Logo" class="logo img-fluid" />
			</div>

			<nav class="font_ nav d-none d-md-flex flex-grow-1 justify-content-center">
				<ul class="nav-list d-flex list-unstyled mb-0">
					<li class="nav-item">
						<router-link class="nav-link text-warning" :to="{ name: 'home' }">Home</router-link>
					</li>
					<li class="nav-item mx-5">
						<router-link class="nav-link text-warning" :to="{ name: 'contacts' }">Contatti</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link text-warning" :to="{ name: 'about' }">Chi Siamo</router-link>
					</li>
				</ul>
			</nav>

			<div class="cart-container d-flex align-items-center me-md-4">
				<button class="font_ btn btn-outline-warning d-none d-md-flex me-2" type="button" data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
					Vai al carrello
				</button>
				<div class="cart-icon">
					<a class="text-warning" href="" data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-cart-shopping"></i></a>
				</div>
			</div>

			<div class="hamburger-icon text-white d-md-none">
				<i class="fa-solid fa-bars me-4" @click="toggleMenu"></i>
			</div>
		</div>

		<nav class="font_ nav d-md-none flex-column" :class="{ 'd-flex': isMenuOpen, 'd-none': !isMenuOpen }">
			<ul class="nav-list list-unstyled text-center m-0">
				<li class="nav-item">
					<router-link class="nav-link text-warning" :to="{ name: 'home' }">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link text-warning" :to="{ name: 'contacts' }">Contatti</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link text-warning" :to="{ name: 'about' }">Chi Siamo</router-link>
				</li>
			</ul>
		</nav>

		<Cart />

	</header>
</template>


<style lang="scss" scoped>

.header {
	height: auto;
	.logo {
		width: 120px;
	}
	
		
		.nav-link {
			font-size: 2rem;
			letter-spacing: 1px;
			transition: all 0.3s ease-out;
			&:hover {
				color: rgb(251, 198, 145);
			}
		
	}
	.font_ {
		font-family: "Luckiest Guy", system-ui;
	}
	.fa-solid {
		font-size: 2rem;
	}
	.hamburger-icon {
		cursor: pointer;
		font-size: 2rem;
	}
}

</style>
