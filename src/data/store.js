import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  restaurants: [],
  types: [],

  // Carrello degli acquisti dell'utente, inizialmente vuoto o caricato da localStorage
  cart: JSON.parse(localStorage.getItem('cart')) || [],

  // Aggiunge un piatto al carrello
  addToCart(dish, quantity, restaurantId) {
    const item = this.cart.find(i => i.id === dish.id && i.restaurantId === restaurantId);
    if (item) {
      item.quantity += quantity;
    } else {
      this.cart.push({ ...dish, quantity, restaurantId });
    }
    this.saveCart();
  },

  // Rimuove un piatto dal carrello
  removeFromCart(dish) {
    const index = this.cart.findIndex(i => i.id === dish.id && i.restaurantId === dish.restaurantId);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  },

  // Aggiorna la quantità di un piatto nel carrello
  updateQuantity(dish, quantity) {
    const item = this.cart.find(i => i.id === dish.id && i.restaurantId === dish.restaurantId);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
    }
  },

  // Svuota completamente il carrello
  clearCart() {
    this.cart = [];
    this.saveCart();
  },

  // Salva il carrello corrente in localStorage
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
});

