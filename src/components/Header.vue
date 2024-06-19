<script>
export default {};
</script>

<template>
	<header class="d-flex align-items-center">
		<nav class="navbar navbar-expand-lg w-100 mx-3">
			<div class="container-fluid">
				<a class="navbar-brand text-white" href="#"><img src="/public/img/logo-dark.png" alt="" class="logo rounded-circle"></a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a
								class="nav-link active text-white"
								aria-current="page"
								href="#"
							></a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" href="#"></a>
						</li>

						<li class="nav-item">
							<a class="nav-link text-white" href="#"></a>
						</li>

						<li class="nav-item">
							<a class="nav-link text-white" href="#"></a>
						</li>

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
					</ul>

					<div>
						<div class="text-white d-flex align-items-center">
							<button class="btn btn-outline-warning me-3">Ristoranti</button>
							<div>
								<i class="fa-solid fa-cart-shopping"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
header {
	height: 120px;
	background-color: #03071e;

	li {
		list-style: none;
	}

	.logo {
			width: 100px;
			height: 100px;
			object-fit: contain;
	}
}
</style>
