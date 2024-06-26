<script>
import axios from "axios";
import { store } from "../data/store";

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
			dishDetails: {}, // Oggetto per memorizzare i dettagli dei piatti
		};
	},
	mounted() {
		this.localOrderDetails =
			this.orderDetails || JSON.parse(localStorage.getItem("orderDetails"));
		console.log("Order details received:", this.localOrderDetails);

		if (
			this.localOrderDetails &&
			this.localOrderDetails.order &&
			this.localOrderDetails.order.dishes
		) {
			// Esegui una chiamata API per ottenere i dettagli dei piatti
			const dishIds = this.localOrderDetails.order.dishes.map(
				(dish) => dish.dish_id
			);
			this.fetchDishDetails(dishIds);
		}
	},
	methods: {
		fetchDishDetails(dishIds) {
			axios
				.post(store.apiUrl + "dishes", { dishIds })
				.then((response) => {
					const dishDetails = response.data;
					// Aggiungi i dettagli dei piatti all'oggetto dishDetails
					dishDetails.forEach((dish) => {
						this.$set(this.dishDetails, dish.id, dish);
					});
				})
				.catch((error) => {
					console.error(
						"Errore durante il recupero dei dettagli dei piatti:",
						error
					);
				});
		},
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
				<h4>Dettagli dell'ordine</h4>
				<ul class="list-group mb-3">
					<li class="list-group-item" v-if="localOrderDetails.order.name">
						<strong>Nome:</strong> {{ localOrderDetails.order.name }}
					</li>
					<li class="list-group-item" v-if="localOrderDetails.order.lastname">
						<strong>Cognome:</strong> {{ localOrderDetails.order.lastname }}
					</li>
					<li class="list-group-item" v-if="localOrderDetails.order.address">
						<strong>Indirizzo:</strong> {{ localOrderDetails.order.address }}
					</li>
					<li
						class="list-group-item"
						v-if="localOrderDetails.order.postal_code"
					>
						<strong>CAP:</strong> {{ localOrderDetails.order.postal_code }}
					</li>
					<li
						class="list-group-item"
						v-if="localOrderDetails.order.phone_number"
					>
						<strong>Telefono:</strong>
						{{ localOrderDetails.order.phone_number }}
					</li>
					<li class="list-group-item" v-if="localOrderDetails.order.email">
						<strong>Email:</strong> {{ localOrderDetails.order.email }}
					</li>
					<li
						class="list-group-item"
						v-if="localOrderDetails.order.total_price"
					>
						<strong>Totale (EUR):</strong> €{{
							localOrderDetails.order.total_price.replace(".", ",")
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
							<li
								v-for="dish in localOrderDetails.order.dishes"
								:key="dish.dish_id"
							>
								Piatto ID: {{ dish.dish_id }}, Quantità: {{ dish.quantity }}
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

.order-summary {
	margin-top: 30px;
}

.btn-primary {
	background-color: #007bff;
	border-color: #007bff;
}

.btn-primary:hover {
	background-color: #0056b3;
	border-color: #004085;
}
</style>
