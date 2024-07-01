<script>
import Cart from "./partials/Cart.vue";

export default {
	components: {
		Cart,
	},
	data() {
		return {
			isMenuOpen: false,
			activeLinkIndex: null, // Indice del link attivo
		};
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		},
		toggleActive(index) {
			this.activeLinkIndex = index; // Aggiorna l'indice del link attivo
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
			<nav class="font_ d-none d-md-flex justify-content-end">
				<ul
					class="nav-list d-flex list-unstyled mb-0 align-items-center text-center"
				>
					<li class="nav-item home">
						<router-link
							@click="toggleActive(0)"
							:class="{ 'active rounded-3 text-black': activeLinkIndex === 0 }"
							class="nav-link align-items-center d-flex"
							:to="{ name: 'home' }"
							>Home</router-link
						>
					</li>
					<li class="nav-item ristoranti ms-3">
						<router-link
							@click="toggleActive(1)"
							:class="{ 'active rounded-3 text-black': activeLinkIndex === 1 }"
							class="nav-link align-items-center d-flex"
							:to="{ name: 'ristoranti' }"
							>Ristoranti</router-link
						>
					</li>
					<li class="nav-item contatti mx-3">
						<router-link
							@click="toggleActive(2)"
							:class="{ 'active rounded-3 text-black': activeLinkIndex === 2 }"
							class="nav-link align-items-center d-flex"
							:to="{ name: 'contacts' }"
							>Contatti</router-link
						>
					</li>
					<li class="nav-item chi-siamo">
						<router-link
							@click="toggleActive(3)"
							:class="{ 'active rounded-3 text-black': activeLinkIndex === 3 }"
							class="nav-link align-items-center d-flex"
							to="/la-nostra-storia"
							><span>Chi Siamo</span></router-link
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
			class="font_ nav nav_hidden d-md-none flex-column z-3 position-relative"
			:class="{ 'menu-open': isMenuOpen, 'menu-closed': !isMenuOpen }"
		>
			<ul class="nav-list list-unstyled text-center m-0">
				<li class="nav-item">
					<router-link class="nav-link text-warning" :to="{ name: 'home' }"
						>Home</router-link
					>
				</li>
				<li class="nav-item">
					<router-link
						class="nav-link text-warning"
						:to="{ name: 'ristoranti' }"
						>Ristoranti</router-link
					>
				</li>
				<li class="nav-item">
					<router-link class="nav-link text-warning" :to="{ name: 'contacts' }"
						>Contatti</router-link
					>
				</li>
				<li class="nav-item">
					<router-link
						class="nav-link text-warning"
						:to="{ name: 'laNostraStoria' }"
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
	position: relative;
	z-index: 15;
	height: auto;

	.logo {
		width: 120px;
	}
	.nav-link {
		font-size: clamp(0.5rem, 2.5vw, 1.8rem);
		letter-spacing: 1px;
		transition: all 0.3s ease-out;

		&:hover {
			color: rgb(47, 47, 47);
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
		z-index: 15; // Aggiungi z-index elevato per il menu burger
		transition: max-height 0.3s ease-out;
		position: relative;
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
.chi-siamo,
.ristoranti {
	border: 1px solid #ffc107;
	border-radius: 10px;
	height: 100%;
	.nav-link {
		color: #ffc107;
		padding: 2px 10px;
		height: 100%;
	}
	&:hover {
		background-color: #ffc107;
		color: rgb(0, 0, 0);
	}
}

.active {
	background-color: #ffc107;
}

// da 576px in giu
@media (max-width: 576px) {
	.hamburger-icon {
		i {
			margin: 0 20px 0 70px;
		}
	}
}

@media (max-width: 768px) {
	.home,
	.contatti,
	.chi-siamo,
	.ristoranti {
		border: 1px solid #ffc107;
		border-radius: 10px;
		height: 50%;
		.nav-link {
			color: #ffc107;
			padding: 0px 10px;
			height: 50%;
		}
		&:hover {
			background-color: #ffc107;
			color: white;
		}
	}
}

@media (max-width: 992px) {
	.home,
	.contatti,
	.chi-siamo,
	.ristoranti {
		border: 1px solid #ffc107;
		border-radius: 10px;
		height: 50%;
		.nav-link {
			color: #ffc107;
			padding: 0px 10px;
			height: 50%;
		}
		&:hover {
			background-color: #ffc107;
			color: white;
		}
	}

	.nav_hidden {
		.nav-link {
			font-size: 25px;
		}
	}
}

@media (max-width: 1200px) {
	.home,
	.contatti,
	.chi-siamo,
	.ristoranti {
		border: 1px solid #ffc107;
		border-radius: 10px;
		height: 50%;
		align-items: center;
		display: flex;
		.nav-link {
			color: #ffc107;
			padding: 0px 10px;
			height: 50%;
			justify-content: center;
			align-items: center;
		}
		&:hover {
			background-color: #ffc107;
			color: white;
		}
	}

	.chi-siamo {
		width: 100%;
		padding: 30px 10px;
		.nav-link {
			color: #ffc107;
			padding: 2px 10px;
			justify-content: center;
			width: 100%;
			span {
				width: 100%;
				max-height: max-content;
			}
		}
	}
}

.loader-container {
	z-index: 1000; // Aggiungi z-index per essere sopra tutto il resto
}
</style>
