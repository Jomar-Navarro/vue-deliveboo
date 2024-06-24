<script>
import { store } from "../data/store";
import axios from "axios";

export default {
  name: "order",

  data() {
    return {
      store,
      order: {
        name: '',
        lastname: '',
        address: '',
        postal_code: '',
        phone_number: '',
        email: '',
      },
    };
  },
  computed: {
    totalPrice() {
      const total = this.store.cart
        .reduce((acc, item) => {
          const priceString = item.price.replace('€', '').replace(',', '.').trim();
          const price = parseFloat(priceString) || 0;
          const quantity = parseInt(item.quantity, 10) || 0;
          return acc + price * quantity;
        }, 0)
        .toFixed(2);

      return total.replace('.', ',');
    },
  },
  methods: {
    submitOrder() {
      const order = {
        ...this.order,
        total_price: this.totalPrice.replace(',', '.'),
        dishes: this.store.cart.map((item) => ({
          dish_id: item.id,
          quantity: item.quantity,
        })),
      };

      axios
        .post(this.store.apiUrl + "orders", order)
        .then((response) => {
          console.log(response.data);
          alert("Ordine effettuato con successo!");
          store.clearCart();
          this.$router.push({ name: "payment" });
        })
        .catch((error) => {
          console.error(error);
          alert("Errore durante l'effettuazione dell'ordine.");
        });
    },
    redirectToPayment() {
      this.$router.push({ name: "payment" });
    },
  },
};
</script>



<template>
  <div class="container mt-5">
    <h2>Checkout</h2>
    <div class="row">
      <!-- Form Dati Utente -->
      <div class="col-md-6">
        <form @submit.prevent="submitOrder">
          <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control" id="name" v-model="order.name" required>
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">Cognome</label>
            <input type="text" class="form-control" id="lastname" v-model="order.lastname" required>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Indirizzo</label>
            <input type="text" class="form-control" id="address" v-model="order.address" required>
          </div>
          <div class="mb-3">
            <label for="postal_code" class="form-label">CAP</label>
            <input type="text" class="form-control" id="postal_code" v-model="order.postal_code" required>
          </div>
          <div class="mb-3">
            <label for="phone_number" class="form-label">Telefono</label>
            <input type="tel" class="form-control" id="phone_number" v-model="order.phone_number" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="order.email" required>
          </div>
          <button type="submit" class="btn btn-warning mb-5">Invia Ordine</button>
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
            <span class="text-muted">€{{ (parseFloat(item.price.replace('€', '').replace(',', '.')) * item.quantity).toFixed(2).replace('.', ',') }}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Totale (EUR)</span>
            <strong>€{{ totalPrice }}</strong>
          </li>
        </ul>
        <button @click="redirectToPayment" class="btn btn-warning w-100">Vai al Pagamento</button>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Aggiungi il tuo stile qui, se necessario */
</style>
