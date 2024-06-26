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
	<div class="container mt-5">
		<h2>Grazie per il tuo ordine!</h2>
		<div class="row justify-content-center">
			<div
				class="col-md-10"
				v-if="localOrderDetails && localOrderDetails.order"
			>
				<h4 class="mt-3">Dettagli dell'ordine</h4>
				<ul class="list-group mb-5">
					<li class="list-group-item">
						<strong>Nome:</strong> {{ localOrderDetails.order.name }}
					</li>
					<li class="list-group-item">
						<strong>Cognome:</strong> {{ localOrderDetails.order.lastname }}
					</li>
					<li class="list-group-item">
						<strong>Indirizzo:</strong> {{ localOrderDetails.order.address }}
					</li>
					<li class="list-group-item">
						<strong>CAP:</strong> {{ localOrderDetails.order.postal_code }}
					</li>
					<li class="list-group-item">
						<strong>Telefono:</strong>
						{{ localOrderDetails.order.phone_number }}
					</li>
					<li class="list-group-item">
						<strong>Email:</strong> {{ localOrderDetails.order.email }}
					</li>
					<li
						class="list-group-item"
						v-if="localOrderDetails.order.total_price"
					>
						<strong>Totale (EUR):</strong> €{{
							localOrderDetails.order.total_price
						}}
					</li>
					<li
						class="list-group-item"
						v-if="
							localOrderDetails.order.dishes &&
							localOrderDetails.order.dishes.length > 0
						"
					>
						<strong>Piatti:</strong>
						<ul>
							<li v-for="dish in localOrderDetails.order.dishes" :key="dish.id">
								Piatto ID: {{ dish.id }}, Quantità: {{ dish.pivot.quantity }}
								<br />
								Nome: {{ dish.dish_name }}, Prezzo: {{ dish.price }}
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="col-md-10" v-else>
				<p>Nessun dettaglio dell'ordine trovato.</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.thanks {
	height: 100vh;
}

.btn-primary {
	background-color: #007bff;
	border-color: #007bff;
}

.btn-primary:hover {
	background-color: #0056b3;
	border-color: #004085;
}

li strong {
	margin-right: 5px;
}
</style>
