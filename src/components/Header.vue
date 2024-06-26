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
		 <div class="logo-container me-md-4">
			<img src="/img/logo-final.png" alt="Logo" class="logo img-fluid me-md-3" />
		 </div>
 
		 <!-- menu in vista desktop view -->
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
		 <!-- / -->
 
		 <div class="cart-container d-flex align-items-center me-md-4">
			<button class="font_ btn btn-outline-warning d-none d-md-flex me-2" type="button" data-bs-toggle="offcanvas"
			  data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
			  Vai al carrello
			</button>
			<div class="cart-icon">
			  <a class="text-warning" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
				 aria-controls="offcanvasRight"><i class="fa-solid fa-cart-shopping"></i></a>
			</div>
		 </div>
 
		 <div class="hamburger-icon text-white d-md-none">
			<i class="fa-solid fa-bars ps-sm-5 me-sm-5 " @click="toggleMenu"></i>
		 </div>
	  </div>
 
	  <!-- menu a comparsa in mobile view -->
	  <nav class="font_ nav nav_hidden d-md-none flex-column" :class="{ 'menu-open': isMenuOpen, 'menu-closed': !isMenuOpen }">
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
	  <!-- / -->
 
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
    font-size: clamp(0.5rem, 2.5vw, 1.8rem);
    letter-spacing: 1px;
    transition: all 0.3s ease-out;

    &:hover {
      color: rgb(251, 198, 145);
    }
  }

  .font_ {
    font-family: 'Ubuntu', sans-serif;
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


// da 576px in giu
@media (max-width: 576px) {
  .hamburger-icon {
    i {
      margin: 0 20px 0 70px;
    }
  }
}
</style>
