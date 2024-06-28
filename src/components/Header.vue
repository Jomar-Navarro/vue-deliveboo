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
	<header class="header float-start py-2 w-100">
		<div
			class="container-fluid d-flex align-items-center justify-content-between"
		>
			<div class="logo-container me-md-4 w-50">
				<router-link to="/">
					<img
						src="/img/logo-final.png"
						alt="Logo"
						class="logo img-fluid me-md-3"
					/>
				</router-link>
			</div>

			<!-- menu in vista desktop view -->
			<nav class="font_ d-none d-md-flex justify-content-end w-75">
				<ul class="nav-list d-flex list-unstyled mb-0">
					<li class="nav-item home">
						<router-link class="nav-link" :to="{ name: 'home' }"
							>Home</router-link
						>
					</li>
					<li class="nav-item mx-5 contatti">
						<router-link class="nav-link" :to="{ name: 'contacts' }"
							>Contatti</router-link
						>
					</li>
					<li class="nav-item chi-siamo">
						<router-link class="nav-link" to="/la-nostra-storia"
							>Chi Siamo</router-link
						>
					</li>
				</ul>
			</nav>
			<!-- / -->

			<div class="hamburger-icon text-white d-md-none">
				<i class="fa-solid fa-bars ps-sm-5 me-sm-5" @click="toggleMenu"></i>
			</div>
		</div>

		<!-- menu a comparsa in mobile view -->
		<nav
			class="font_ nav nav_hidden d-md-none flex-column"
			:class="{ 'menu-open': isMenuOpen, 'menu-closed': !isMenuOpen }"
		>
			<ul class="nav-list list-unstyled text-center m-0">
				<li class="nav-item">
					<router-link class="nav-link text-warning" :to="{ name: 'home' }"
						>Home</router-link
					>
				</li>
				<li class="nav-item">
					<router-link class="nav-link text-warning" :to="{ name: 'contacts' }"
						>Contatti</router-link
					>
				</li>
				<li class="nav-item">
					<router-link class="nav-link text-warning" :to="{ name: 'about' }"
						>Chi Siamo</router-link
					>
				</li>
			</ul>
		</nav>
		<!-- / -->

		<Cart />
	</header>
</template>

<style lang="scss" scoped>
.header {
	height: auto;
	background-color: rgba($color: #000000, $alpha: 0.5);

	.logo {
		width: 120px;
	}
	.nav-link {
		font-size: clamp(0.5rem, 2.5vw, 1.8rem);
		letter-spacing: 1px;
		transition: all 0.3s ease-out;

		&:hover {
			color: rgb(251, 198, 145);
		}
	}

	.font_ {
		font-family: "Ubuntu", sans-serif;
	}

	.fa-solid {
		font-size: 2rem;
	}

	.hamburger-icon {
		cursor: pointer;
		font-size: 2rem;
	}

	.nav_hidden {
		overflow: hidden;
		max-height: 0;
		transition: max-height 0.3s ease-out;
	}

	.menu-open {
		max-height: 500px;
		transition: max-height 0.6s ease-in;
	}

	.menu-closed {
		max-height: 0;
		transition: max-height 0.5s ease-out;
	}
}

.home,
.contatti,
.chi-siamo {
	border: 1px solid #ffc107;
	border-radius: 30px;
	.nav-link {
		color: #ffc107;
		padding: 5px 10px;
	}
	&:hover {
		background-color: #ffc107;
		color: white;
	}
}

// da 576px in giu
@media (max-width: 576px) {
	.hamburger-icon {
		i {
			margin: 0 20px 0 70px;
		}
	}
}
</style>
