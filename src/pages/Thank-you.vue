<script>
export default {
	name: "ThankYou",
	props: {
		orderDetails: {
			type: Object,
			required: false,
			default: null,
		},
	},
	data() {
		return {
			localOrderDetails: null,
		};
	},
	mounted() {
		this.localOrderDetails =
			this.orderDetails || JSON.parse(localStorage.getItem("orderDetails"));
		console.log("Order details received:", this.localOrderDetails);
	},
};
</script>

<template>
	<div class="container-fluid bg_color py-5">
		<div class="container mt-5 py-5">
			<h2 class="text-center pt-5">Grazie per il tuo ordine!</h2>
			<div class="row justify-content-center my-3">
				<div
					class="col-lg-8 col-md-10 col-sm-12"
					v-if="localOrderDetails && localOrderDetails.order"
				>
					<h4 class="mt-3">Dettagli dell'ordine</h4>
					<ul class="list-group mb-5">
						<li
							class="list-group-item d-flex flex-column flex-md-row justify-content-between"
						>
							<strong>Nome & Cognome:</strong>
							<div>
								<span class="me-1">{{ localOrderDetails.order.name }}</span>
								<span>{{ localOrderDetails.order.lastname }}</span>
							</div>
						</li>
						<li
							class="list-group-item d-flex flex-column flex-md-row justify-content-between"
						>
							<strong>Indirizzo:</strong>
							<span>{{ localOrderDetails.order.address }}</span>
						</li>
						<li
							class="list-group-item d-flex flex-column flex-md-row justify-content-between"
						>
							<strong>CAP:</strong>
							<span>{{ localOrderDetails.order.postal_code }}</span>
						</li>
						<li
							class="list-group-item d-flex flex-column flex-md-row justify-content-between"
						>
							<strong>Telefono:</strong>
							<span>{{ localOrderDetails.order.phone_number }}</span>
						</li>
						<li
							class="list-group-item d-flex flex-column flex-md-row justify-content-between"
						>
							<strong>Email:</strong>
							<span>{{ localOrderDetails.order.email }}</span>
						</li>

						<li
							class="list-group-item"
							v-if="
								localOrderDetails.order.dishes &&
								localOrderDetails.order.dishes.length > 0
							"
						>
							<strong>Piatti:</strong>
							<ul class="list-group">
								<li
									class="d-flex flex-column flex-md-row justify-content-between"
									v-for="dish in localOrderDetails.order.dishes"
									:key="dish.id"
								>
									<div class="d-flex">
										<div>
											<span class="me-2"> {{ dish.pivot.quantity }} x</span>
											<span>{{ dish.dish_name }}</span>
										</div>
										<div class="d-flex justify-content-between">
											<strong></strong>
											<span class="text-end">{{ dish.price }}</span>
										</div>
									</div>
								</li>
							</ul>
						</li>
						<li
							class="list-group-item d-flex flex-column flex-md-row justify-content-between"
							v-if="localOrderDetails.order.total_price"
						>
							<strong>Totale (EUR):</strong>
							<span>€{{ localOrderDetails.order.total_price }}</span>
						</li>
					</ul>
					<div class="d-flex justify-content-end">
						<router-link :to="{ name: 'home' }">
							<button class="btn btn-outline-warning">
								<i class="fa-solid fa-house"></i>
							</button>
						</router-link>
					</div>
				</div>
				<div class="col-lg-8 col-md-10 col-sm-12" v-else>
					<p class="text-center">Nessun dettaglio dell'ordine trovato.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.bg_color {
	background: rgb(235, 194, 44);
	background: radial-gradient(
		circle,
		rgba(235, 194, 44, 0.3841911764705882) 0%,
		rgba(184, 42, 8, 0.05085784313725494) 100%
	);
}

.text-center {
	text-align: center;
}

.list-group-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.list-group-item strong {
	margin-right: 5px;
}

.mt-5 {
	margin-top: 3rem !important;
}

.mt-3 {
	margin-top: 1rem !important;
}

.mb-5 {
	margin-bottom: 3rem !important;
}

@media (max-width: 768px) {
	.list-group-item {
		flex-direction: column;
		align-items: flex-start;
	}
}
</style>
