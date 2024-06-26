<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  computed: {
    // Calcola il prezzo totale del carrello, convertendo il formato per l'interfaccia utente
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
    // Rimuove un piatto dal carrello
    removeFromCart(dish) {
      store.removeFromCart(dish);
    },

    // Aggiorna la quantità di un piatto nel carrello
    updateQuantity(dish) {
      store.updateQuantity(dish, dish.quantity);
    },

    // Incrementa la quantità di un piatto nel carrello
    increaseQuantity(dish) {
      dish.quantity++;
      this.updateQuantity(dish);
    },

    // Decrementa la quantità di un piatto nel carrello, assicurandosi che non scenda sotto 1
    decreaseQuantity(dish) {
      if (dish.quantity > 1) {
        dish.quantity--;
        this.updateQuantity(dish);
      }
    },
  },
};
</script>

<template>
  <div class="offcanvas offcanvas-end w-25" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrello</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="cart">
        <ul class="w-100">
          <li class="d-flex justify-content-between align-items-center mb-4" v-for="item in store.cart" :key="item.id">
            <div>
              {{ item.quantity }} x {{ item.dish_name }} {{ item.price }}
            </div>
            <div class="d-flex">
              <div class="number-input">
                <button class="btn-plus-minum pay-title" @click="decreaseQuantity(item)">-</button>
                <input class="quantita" type="number" v-model.number="item.quantity" @change="updateQuantity(item)"
                  min="1" max="99" />
                <button class="btn-plus-minum pay-title" @click="increaseQuantity(item)">+</button>
              </div>
              <div class="ms-2">
                <button class="btn btn-dark" @click="removeFromCart(item)">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
        <div data-bs-dismiss="offcanvas">

          <p v-if="!store.cart.length">Il carrello è vuoto.</p>
          <p class="tot-price ">Totale: €{{ totalPrice }}</p>

          <router-link v-if="store.cart.length" :to="{ name: 'order' }" :disabled="!store.cart.length"
            class="btn btn-dark pay-title">Vai al pagamento</router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
////////////////////////////////////////

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

// Input type number per non mostare le frecce

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

//////////////////////////////////////////

.offcanvas {
  background-color: #ff9f22;

  .offcanvas-title {
    // font-family: "Luckiest Guy", system-ui;
    font-family: 'Bangers', system-ui;
    color: #212529;
    font-size: 3rem;
  }

  .pay-title {
    font-family: 'Ubuntu', sans-serif;
  }

  .number-input {
    display: flex;
    align-items: center;
  }

  .number-input input {
    text-align: center;
    border-radius: 10px;
    width: 30px;
    margin: 0 5px;
    background-color: transparent;
    border: none;
  }

  .number-input button {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: transparent;
    font-size: 1.4rem;
  }

  .number-input button:active {
    background-color: #bbb;
  }
}

li {
  list-style: none;
  // font-family: "Luckiest Guy", system-ui;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 900;
  color: #212529;
}

.tot-price {
  font-weight: bold;
  color: #212529;
}



// da 992px in giu
@media (max-width: 992px) {
  .offcanvas {
    width: 50% !important;
  }
}


// da 576px in giu
@media (max-width: 576px) {
  .offcanvas {
    width: 100% !important;
  }
}
</style>
