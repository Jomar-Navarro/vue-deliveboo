<script>
import { store } from "../data/store";
import axios from "axios";
import dropin from "braintree-web-drop-in"; // Assicurati di importare dropin correttamente

export default {
  name: "Order",
  data() {
    return {
      store,
      order: {
        name: "",
        lastname: "",
        address: "",
        postal_code: "",
        phone_number: "",
        email: "",
      },
      dropinInstance: null,
    };
  },
  computed: {
    totalPrice() {
      // Calcola il totale dell'ordine
      let total = 0;
      for (const item of this.store.cart) {
        const price = parseFloat(item.price.replace("€", "").replace(",", "."));
        total += price * item.quantity;
      }
      return total.toFixed(2).replace(".", ",");
    },
  },
  methods: {
    submitOrder() {
      // Utilizzo di this.$refs per accedere al form
      const form = this.$refs.orderForm;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Creazione dell'oggetto order da inviare al backend
      const order = {
        ...this.order,
        total_price: this.totalPrice.replace(",", "."),
        dishes: this.store.cart.map(item => ({
          dish_id: item.id,
          quantity: item.quantity
        }))
      };

      console.log("Ordine da inviare:", order);

      // Richiesta del metodo di pagamento
      if (!this.dropinInstance) {
        alert("Errore: Braintree Drop-in non è stato inizializzato correttamente.");
        return;
      }

      this.dropinInstance.requestPaymentMethod((err, payload) => {
        if (err) {
          console.error("Errore durante la richiesta del metodo di pagamento:", err);
          alert("Errore durante la richiesta del metodo di pagamento.");
          return;
        }

        // Aggiungi il nonce al payload dell'ordine
        order.nonce = payload.nonce;

        // Invia l'ordine al backend
        axios
          .post("http://127.0.0.1:8000/api/orders", order)
          .then((response) => {
            console.log(response.data);
            alert("Ordine effettuato con successo!");
            store.clearCart();
            this.$router.push({ name: "success" });
          })
          .catch((error) => {
            console.error("Errore durante l'effettuazione dell'ordine:", error.response.data);
            alert("Errore durante l'effettuazione dell'ordine.");
          });
      });
    },
    setupDropin() {
      axios
        .get(this.store.apiUrl + "client_token")
        .then((response) => {
          return dropin.create({
            authorization: response.data.clientToken,
            container: "#dropin-container",
          });
        })
        .then((instance) => {
          this.dropinInstance = instance;
          this.setupDropinButton();
        })
        .catch((error) => {
          console.error(error);
          alert("Errore durante l'inizializzazione del metodo di pagamento.");
        });
    },
    setupDropinButton() {
      // Non è più necessario gestire il click separato per il pagamento
    },
  },
  mounted() {
		this.setupDropin();
  },
};
</script>

<template>
	<div class="container mt-5">
		<h2>Checkout</h2>
    <div class="row">
			<!-- Form Dati Utente -->
      <div class="col-md-6">
				<form @submit.prevent="submitOrder" id="order-form" ref="orderForm" novalidate>
					<div class="mb-3">
						<label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control" id="name" v-model="order.name" required />
            <div class="invalid-feedback">Il nome è richiesto.</div>
          </div>
          <div class="mb-3">
						<label for="lastname" class="form-label">Cognome</label>
            <input type="text" class="form-control" id="lastname" v-model="order.lastname" required />
            <div class="invalid-feedback">Il cognome è richiesto.</div>
          </div>
          <div class="mb-3">
						<label for="address" class="form-label">Indirizzo</label>
            <input type="text" class="form-control" id="address" v-model="order.address" required />
            <div class="invalid-feedback">L'indirizzo è richiesto.</div>
          </div>
          <div class="mb-3">
						<label for="postal_code" class="form-label">CAP</label>
            <input type="text" class="form-control" id="postal_code" v-model="order.postal_code" pattern="[0-9]{5}" required />
            <div class="invalid-feedback">Il CAP è richiesto e deve essere composto da 5 cifre numeriche.</div>
          </div>
          <div class="mb-3">
						<label for="phone_number" class="form-label">Telefono</label>
            <input type="tel" class="form-control" id="phone_number" v-model="order.phone_number" required />
            <div class="invalid-feedback">Il numero di telefono è richiesto.</div>
          </div>
          <div class="mb-3">
						<label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="order.email" required />
            <div class="invalid-feedback">L'email è richiesta e deve essere in un formato valido.</div>
          </div>
					<button type="submit" class="btn btn-warning mb-5">Invia Ordine e Paga</button>
        </form>
      </div>
			
      <!-- Riepilogo Carrello -->
      <div class="col-md-6">
				<h4>Riepilogo del Carrello</h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-condensed" v-for="item in store.cart" :key="item.id">
						<div>
              <h6 class="my-0">{{ item.dish_name }}</h6>
              <small class="text-muted">Quantità: {{ item.quantity }}</small>
            </div>
            <span class="text-muted">€{{ (parseFloat(item.price.replace("€", "").replace(",", ".")) * item.quantity).toFixed(2).replace(".", ",") }}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Totale (EUR)</span>
            <strong>€{{ totalPrice }}</strong>
          </li>
        </ul>
        <div id="dropin-container"></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.button {
	cursor: pointer;
	font-weight: 500;
	left: 3px;
	line-height: inherit;
	position: relative;
	text-decoration: none;
	text-align: center;
	border-style: solid;
	border-width: 1px;
	border-radius: 3px;
	-webkit-appearance: none;
	-moz-appearance: none;
	display: inline-block;
}

.button--small {
	padding: 10px 20px;
	font-size: 0.875rem;
}

.button--green {
	outline: none;
	background-color: #64d18a;
	border-color: #64d18a;
	color: white;
	transition: all 200ms ease;
}

.button--green:hover {
	background-color: #8bdda8;
	color: white;
}
</style>
