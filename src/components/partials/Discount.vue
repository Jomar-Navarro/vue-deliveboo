<script>
export default {};
</script>

<template>
	<div class="container-fluid container_discont d-flex justify-content-center align-items-center flex-column">
		<img
			src="https://static.vecteezy.com/ti/vettori-gratis/p1/2423042-badge-logo-servizio-di-consegna-gratuita-vettoriale.jpg"
			alt="free delivery">
		<div class="d-flex justify-content-between align-items-center flex-column">
			<h1>solo per il mese di Agosto la spedizione è gratuita!</h1>
			
			<p>approfitta degli sconti per scoprire nuovi ristoranti</p>
		</div>
		
	</div>
</template>

<style lang="scss" scoped>
.container_discont {
	background-color: rgb(255, 115, 0);
	height: 100vh;
	color: rgb(233, 233, 233);

	img {
		width: 10%;
		border-radius: 50%;
		margin-bottom: 5%;
	}

	h1 {
		text-align: center;
		font-size: 70px;
		width: 70%;
		padding-bottom: 5%;
		margin-bottom: 5%;
		border-bottom: 1px solid;
	}

	p {
		font-size: 50px;
		font-weight: 600;
		text-align: center;
		width: 90%;
	}
}





// da 992px in giu
@media (max-width: 992px) {
	.container_discont {
		img {
			width: 20%;
		}

		h1 {
			font-size: 60px;
			width: 70%;
			margin-bottom: 5%;
		}

		p {
			font-size: 40px;
			width: 70%;
		}
	}
}

// da 576px in giu
@media (max-width: 576px) {
	.container_discont {
		img {
			width: 30%;
			margin-bottom: 20%;	
		}

		h1 {
			font-size: 40px;
			width: 90%;
			margin-bottom: 15%;
			padding-bottom: 50px;
			border-bottom: 1px solid;
		}

		p {
			font-size: 27px;
			width: 70%;
		}
	}
}
</style>
