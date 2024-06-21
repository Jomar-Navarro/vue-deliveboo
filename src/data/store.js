import { reactive } from "vue";

export const store = reactive({
	apiUrl: "http://127.0.0.1:8000/api/",
	restaurants: [],
	types: [],
	cart: [],

	addToCart(dish) {
		const item = this.cart.find(i => i.id === dish.id);
		if (item) {
			item.quantity++;
		} else {
			this.cart.push({ ...dish, quantity: 1 });
		}
	},
	removeFromCart(dish) {
		const index = this.cart.findIndex(i => i.id === dish.id);
		if (index !== -1) {
			this.cart.splice(index, 1);
		}
	},
	updateQuantity(dish, quantity) {
		const item = this.cart.find(i => i.id === dish.id);
		if (item) {
			item.quantity = quantity;
		}
	},
	clearCart() {
		this.cart = [];
	}

});

