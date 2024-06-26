<script>
import { store } from "../../data/store";
import axios from "axios";

export default {
	data() {
		return {
			store,
			selectedTypes: [],
			searchQuery: "",
		};
	},

	methods: {
		getAllRestaurants() {
			axios
				.get(this.store.apiUrl + "restaurants")
				.then((res) => {
					this.store.restaurants = res.data;
					console.log(this.store.restaurants);
				})
				.catch((error) => {
					console.error(error);
				});
		},

		getTypes() {
			axios
				.get(this.store.apiUrl + "types")
				.then((res) => {
					this.store.types = res.data;
					console.log(this.store.types);
				})
				.catch((error) => {
					console.error(error);
				});
		},

		getFilteredRestaurants() {
			const params = {
				types: this.selectedTypes.join(","),
				query: this.searchQuery,
			};

			axios
				.get(this.store.apiUrl + "restaurants/filter", { params })
				.then((res) => {
					this.store.restaurants = res.data;
					console.log(this.store.restaurants);
				})
				.catch((error) => {
					console.error(error);
				});
		},

		toggleType(type) {
			const index = this.selectedTypes.indexOf(type);
			if (index === -1) {
				this.selectedTypes.push(type);
			} else {
				this.selectedTypes.splice(index, 1);
			}
			this.searchQuery = ""; // Clear search query when types are selected
			this.getFilteredRestaurants();
		},

		handleKeyup() {
			this.selectedTypes = []; // Clear selected types when a search query is entered
			this.getFilteredRestaurants();
		},
	},

	watch: {
		searchQuery() {
			this.handleKeyup();
		},
	},

	computed: {
		isTypeChecked() {
			return (type) => this.selectedTypes.includes(type.type_name);
		},
	},

	mounted() {
		this.getAllRestaurants();
		this.getTypes();
	},
};
</script>

<template>
	<section class="resto py-5">
		<div class="container py-5">
			<div class="d-flex justify-content-center">
				<div>
					<h2 class="titolo mb-5 pb-2 text-center text-warning">Cerca il tuo ristorante</h2>
					<div class="d-flex justify-content-center">
						<input
							class="search w-50 me-2 rounded-5 px-3 py-4"
							@keyup="handleKeyup"
							v-model="searchQuery"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
					</div>

					<div>
						<h2 class="filtro mt-5 text-center mb-5 text-warning">Filtra per tipologia</h2>
					</div>

					<div class="d-flex font-type flex-wrap justify-content-center">
						<span
							v-for="type in store.types"
							:key="type.id"
							class="rounded-5 me-2 my-2"
						>
							<input
								:value="type.type_name"
								@click="toggleType(type.type_name)"
								type="checkbox"
								class="btn-check"
								:id="`btn-${type.type_name}`"
								:checked="isTypeChecked(type)"
							/>
							<label
								class="btn type_ btn-outline-warning d-flex flex-column justify-content-center align-items-center rounded-5"
								:for="`btn-${type.type_name}`"
							>
								<!-- <img
									src="/img/logo-final.png"
									alt=""
									class="checkbox-icon img-fluid object-fit-cover"
								/> -->
								<span class="fw-bold font-type">{{ type.type_name }}</span></label
							>
						</span>
					</div>
				</div>
			</div>
			<div
				class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center mt-5 mx-sm-0 mx-md-3"
			>
				

				<div
					class="col mb-5 px-3 d-flex justify-content-center"
					v-for="restaurant in store.restaurants"
					:key="restaurant.id"
				>
					<router-link
						:to="{ name: 'menu', params: { id: restaurant.id } }"
						class="card p-0"
					>
						<img
							class="card__background"
							:src="`http://127.0.0.1:8000` + restaurant.image"
							alt="#"
							width="1920"
							height="2193"
						/>
						<div class="card__content | flow">
							<div class="card__content--container | flow">
								<h2 class="card__title mb-3">{{ restaurant.name }}</h2>
								<span
									v-for="item in restaurant.types"
									:key="item.id"
									class="card__status badge mx-1"
									>{{ item.type_name }}</span
								>
								<p class="card__description">
									{{ restaurant.description }}
								</p>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.resto {
	background-color: #292626;
	font-family: 'Ubuntu', sans-serif;
	// background: linear-gradient(rgba(0, 0, 0, .9), rgba(32, 32, 32, 0.5)),
	// 	url("/img/jumbo_2.jpeg");
	// background-size: cover;
	// background-repeat: no-repeat;
}

.font-type{
	// font-family: 'Bangers', system-ui;
	// font-family: 'Fredoka One', system-ui;
	// font-family: 'Rampart One', system-ui;
	font-family: 'Cabin Sketch', system-ui;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 1.2rem;
}

.search {
	height: 2.4rem;
	background-color: #f5e7c1;
}

.checkbox-icon {
	width: 8rem; /* Imposta la larghezza dell'immagine */
	height: 8rem; /* Imposta l'altezza dell'immagine */
	transition: filter 0.3s ease; /* Animazione per il filtro */
}

/* Stile per l'elemento label quando il checkbox è selezionato */
.btn-check:checked + .btn.checkbox-active {
	background-color: yellow; 
}

.titolo {
	// font-family: "Luckiest Guy", system-ui;
	// font-family: 'Nunito Sans Variable', sans-serif;
	font-family: 'Ubuntu', sans-serif;
	color: rgb(255, 237, 176);
	// font-size: 5rem;
	font-size: clamp(1.5rem, 4vw, 3rem);
}

.filtro {
	color: rgb(255, 237, 176);
	// font-family: "Luckiest Guy", system-ui;
	// font-family: 'Nunito Sans Variable', sans-serif;
	font-family: 'Ubuntu', sans-serif;
	// font-size: 3rem;
	font-size: clamp(1.5rem, 4vw, 3rem);
}



h2 {
	font-size: 2.1rem;
	font-family: var(--font-title);
	color: white;
	line-height: 1.1;
}

p {
	// font-family: white;
	// font-family: 'Nunito Sans Variable', sans-serif;
	font-family: 'Ubuntu', sans-serif;
	font-size: 1rem;
	line-height: 1.5;
	color: white;
}

.flow > * + * {
	margin-top: 1.25rem;
}

/* CARD COMPONENT */
.card {
	display: grid;
	place-items: center;
	width: 50vw;
	max-width: 20.875rem;
	height: 26.125rem;
	overflow: hidden;
	border-radius: 0.625rem;
	box-shadow: 0.25rem .25rem .25rem rgba(255, 197, 4, 0.562);
}

.card > * {
	grid-column: 1 / 2;
	grid-row: 1 / 2;
}

.card__background {
	object-fit: cover;
	max-width: 100%;
	height: 100%;
}

.card__content {
	--flow-space: 0.9375rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-self: flex-end;
	height: 65%;
	padding: 12% 1.25rem 1.875rem;
	background: linear-gradient(
		180deg,
		hsla(0, 0%, 0%, 0) 0%,
		hsla(0, 0%, 0%, 0.3) 10%,
		hsl(0, 0%, 0%) 100%
	);
}

.card__content--container {
	--flow-space: 1.25rem;
}

.card__title {
	position: relative;
	width: fit-content;
	width: -moz-fit-content; /* Prefijo necesario para Firefox  */
}

.card__title::after {
	content: "";
	position: absolute;
	height: 0.3125rem;
	width: calc(100% + 1.25rem);
	bottom: calc((1.25rem - 0.5rem) * -1);
	left: -1.25rem;
	background-color: hsl(46, 100%, 50%);
}

.card__status {
	border: 1px solid #f5e7c1;
	margin-top: 10px;
}

@media (any-hover: hover) and (any-pointer: fine) {
	.card__content {
		transform: translateY(62%);
		transition: transform 250ms ease-out;
		transition-delay: 250ms;
	}

	.card__title::after {
		opacity: 0;
		transform: scaleX(0);
		transition: opacity 500ms ease-in, transform 250ms ease-out;
		transition-delay: 250ms;
		transform-origin: right;
	}

	.card__background {
		transition: transform 250ms ease-in;
	}

	.card__content--container > :not(.card__title),
	.card__button {
		opacity: 0;
		transition: transform 250ms ease-out, opacity 250ms ease-out;
	}

	.card:hover,
	.card:focus-within {
		transform: scale(1.05);
		transition: transform 250ms ease-in;
	}

	.card:hover .card__content,
	.card:focus-within .card__content {
		transform: translateY(0);
		transition: transform 250ms ease-in;
	}

	.card:focus-within .card__content {
		transition-duration: 0ms;
	}

	.card:hover .card__background,
	.card:focus-within .card__background {
		transform: scale(1.3);
	}

	.card:hover .card__content--container > :not(.card__title),
	.card:hover .card__button,
	.card:focus-within .card__content--container > :not(.card__title),
	.card:focus-within .card__button {
		opacity: 1;
		transition: opacity 250ms ease-in;
		transition-delay: 500ms;
	}

	.card:hover .card__title::after,
	.card:focus-within .card__title::after {
		opacity: 1;
		transform: scaleX(1);
		transform-origin: left;
		transition: opacity 250ms ease-in, transform 250ms ease-in;
		transition-delay: 250ms;
	}
}



// da 992px in su
@media (min-width: 992px) {
	.type_:hover {
		transition: all 0.7s ease;
		background-color: rgb(251, 142, 0) !important;
	}
}



// da 992px in giu
@media (max-width: 992px) {
	
}

</style>
