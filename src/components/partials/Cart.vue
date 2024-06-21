<script>
import { store } from "../../data/store";
import axios from "axios";

export default {
    data() {
        return {
            store,
        };
    },
    computed: {
        totalPrice() {
            return this.store.cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
        }
    },
    methods: {
        removeFromCart(dish) {
            store.removeFromCart(dish);
        },
        updateQuantity(dish) {
            store.updateQuantity(dish, dish.quantity);
        },
        checkout() {
            const order = {
                name: 'Nome Cliente',
                lastname: 'Cognome Cliente',
                address: 'Indirizzo Cliente',
                postal_code: 'CAP',
                phone_number: 'Telefono Cliente',
                email: 'Email Cliente',
                total_price: this.totalPrice,
                dishes: this.store.cart.map(item => ({ dish_id: item.id, quantity: item.quantity }))
            };

            axios.post(this.store.apiUrl + 'orders', order)
                .then(response => {
                    console.log(response.data);
                    alert('Ordine effettuato con successo!');
                    store.clearCart();
                })
                .catch(error => {
                    console.error(error);
                    alert('Errore durante l\'effettuazione dell\'ordine.');
                });
        }
    }
};
</script>

<template>
  <div class="offcanvas offcanvas-end w-25" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrello Piatti</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="cart">
        <h2>Carrello</h2>
        <ul>
          <li v-for="item in store.cart" :key="item.id">
            {{ item.name }} - {{ item.quantity }} x {{ item.price }}
            <input type="number" v-model.number="item.quantity" @change="updateQuantity(item)" min="1" />
            <button @click="removeFromCart(item)">Rimuovi</button>
          </li>
        </ul>
        <p v-if="!store.cart.length">Il carrello è vuoto.</p>
        <p>Total: {{ totalPrice }}</p>
        <button @click="checkout" :disabled="!store.cart.length">Checkout</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
li {
  list-style: none;
  font-family: "Luckiest Guy", system-ui;
  color: #ff9f22;
}
</style>
