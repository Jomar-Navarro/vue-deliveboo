<script>
export default {};
</script>

<template>
	<header class="d-flex align-items-center justify-content-between">
		<nav class="navbar navbar-expand-lg w-100 mx-3">
			<div class="container-fluid">
				<div>
				<a class=" text-white" href="#">
					<img src="/img/logo-final.png" alt="" class="logo" />
				</a>
				</div>
			
					<div>
						<ul  class="d-flex justify-content-center">
						<li class="nav-item">
							<router-link class="nav-link link-title mx-3" :to="{name: 'home'}">Home</router-link>
						</li>

						<li class="nav-item">
							<router-link class="nav-link link-title mx-3" :to="{name: 'contacts'}">Contatti</router-link>
						</li>

						<li class="nav-item ">
							<router-link class="nav-link link-title mx-3" :to="{name: 'about'}">Chi Siamo</router-link>
						</li>
					</ul>
					</div>

						<!-- <li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle text-white"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li><hr class="dropdown-divider" /></li>
								<li>
									<a class="dropdown-item" href="#">Something else here</a>
								</li>
							</ul>
						</li> -->
				

					<div>
						<div class="text-white d-flex align-items-center">
							<button class="btn btn-outline-warning me-3">Ristoranti</button>
							<div>
								<i class="fa-solid fa-cart-shopping"></i>
							</div>
						</div>
					</div>
				
			</div>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
header {
	background-color: #8b0101;
	height: 80px;
	li {
		list-style: none;
		font-family: 'Luckiest Guy', system-ui;
		color:#ff9f22
	}
	.link-title{
		color:#ff9f22;
		font-size: 1.5rem;
		letter-spacing: 1px;
	}

	.logo {
		width: 25%;
		object-fit: cover;
	}
}
</style>
