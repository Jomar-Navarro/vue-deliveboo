<script>
import { store } from "../../data/store";
import axios from "axios";

export default {
	data() {
		return {
			store,
			selectedTypes: [],
			searchQuery: "",
			currentPage: 1,
			itemsPerPage: 8,
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

		handlePageClick(pageNum) {
			this.currentPage = pageNum;
		},

		prevPage() {
			if (this.currentPage > 1) {
				this.currentPage--;
			}
		},

		nextPage() {
			if (this.currentPage < this.pageCount) {
				this.currentPage++;
			}
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

		paginatedRestaurants() {
			const start = (this.currentPage - 1) * this.itemsPerPage;
			const end = start + this.itemsPerPage;
			return this.store.restaurants.slice(start, end);
		},

		pageCount() {
			return Math.ceil(this.store.restaurants.length / this.itemsPerPage);
		},
	},

	mounted() {
		this.getAllRestaurants();
		this.getTypes();
	},
};
</script>

<template>
	<section class="resto py-5 position-relative">
		<div class="container py-5">
			<div class="d-flex justify-content-center">
				<!-- <img class="fries" src="/img/Fries.png" alt="" />
				<img class="pizza" src="/img/pizza.png" alt="" /> -->
				<div>
					<h2 class="titolo mb-5 pb-2 text-center">Cerca il tuo ristorante</h2>
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
						<h2 class="filtro mt-5 text-center mb-5">Filtra per tipologia</h2>
					</div>

					<div
						class="d-flex font-type flex-wrap justify-content-center position-relative"
					>
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
								<span class="fw-bold font-type">{{
									type.type_name
								}}</span></label
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
					v-for="restaurant in paginatedRestaurants"
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
			<div class="d-flex justify-content-center mt-4 align-items-center">
				<button
					@click="prevPage"
					:disabled="currentPage === 1"
					class="pagination-button rounded-5"
				>
					Prev
				</button>

				<button
					v-for="pageNumber in pageCount"
					:key="pageNumber"
					@click="handlePageClick(pageNumber)"
					:class="['pagination-button', { active: pageNumber === currentPage }]"
				>
					{{ pageNumber }}
				</button>

				<button
					@click="nextPage"
					:disabled="currentPage === pageCount"
					class="pagination-button rounded-5"
				>
					Next
				</button>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.resto {
	background-color: #e84242;
	font-family: "Ubuntu", sans-serif;
	// background: linear-gradient(rgba(0, 0, 0, .9), rgba(32, 32, 32, 0.5)),
	// 	url("/img/jumbo_2.jpeg");
	// background-size: cover;
	// background-repeat: no-repeat;
}

.font-type {
	// font-family: 'Bangers', system-ui;
	// font-family: 'Fredoka One', system-ui;
	// font-family: 'Rampart One', system-ui;
	font-family: "Cabin Sketch", system-ui;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 1.2rem;
}

.search {
	height: 2.4rem;
	background-color: white;
	border: none;
	&:focus {
		outline: 1px solid rgb(187, 187, 187);
		background-color: rgb(238, 238, 238);
		transition: background-color 0.3s ease;
	}
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
	font-family: "Ubuntu", sans-serif;
	color: #f5e7c1;
	// font-size: 5rem;
	font-size: clamp(1.5rem, 4vw, 3rem);
}

.filtro {
	color: #f5e7c1;
	// font-family: "Luckiest Guy", system-ui;
	// font-family: 'Nunito Sans Variable', sans-serif;
	font-family: "Ubuntu", sans-serif;
	// font-size: 3rem;
	font-size: clamp(1.5rem, 4vw, 3rem);
}

h2 {
	font-size: 2.1rem;
	font-family: #f5e7c1;
	color: white;
	line-height: 1.1;
}

p {
	// font-family: white;
	// font-family: 'Nunito Sans Variable', sans-serif;
	font-family: "Ubuntu", sans-serif;
	font-size: 1rem;
	line-height: 1.5;
	color: white;
}

.flow > * + * {
	margin-top: 1.25rem;
}

/* CARD COMPONENT */
.card {
	border: none;
	display: grid;
	place-items: center;
	// width: 50vw;
	max-width: 20.875rem;
	text-decoration: none;
	height: 26.125rem;
	overflow: hidden;
	border-radius: 0.625rem;
	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0); /* Inizialmente senza ombra */
	transition: box-shadow 1s ease; /* Transizione della box-shadow più veloce */

	&:hover {
		box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.3); /* Ombra con transizione al passaggio del mouse */
	}
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
	border: none;
	--flow-space: 0.9375rem;
	overflow: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-self: flex-end;
	height: 70%;
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

// customize ScrollBar
.card__content::-webkit-scrollbar{
   width: 5px;
}

.card__content::-webkit-scrollbar-thumb {
   -webkit-border-radius: 20px;
   border-radius: 20px;
   background: rgba(153, 153, 153, 0.589);
   border: 1px solid rgba(255, 255, 255, 0.452);
 }
//

.pagination-button {
	background-color: #ffffff;
	border: none; 
	padding: 0.65rem 1.2rem; 
	border-radius: 50%;
	margin: 0 0.25rem; /* Margine tra i pulsanti */
	cursor: pointer; 
	transition: background-color 0.3s ease; 

	&:hover {
		background-color: #c3c3c3; 
	}

	&:disabled {
		background-color: #d3d3d3; 
		cursor: not-allowed; 
	}

	&.active {
		background-color: #cacaca; 
		font-weight: bold; 
	}
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

}


// da 992px in su
@media (min-width: 992px) {
	.type_:hover {
		transition: all 0.7s ease;
		background-color: rgb(251, 142, 0) !important;
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
}


// da 992px in giu
@media (max-width: 992px) {
	.card__content {
		transform: translateY(0); /* Sempre visibile */
	}

	.card__content--container > :not(.card__title),
	.card__button {
		opacity: 1;
		transition: none; /* Disabilita le transizioni */
	}

	.card__background {
		transform: scale(1); /* Disabilita lo zoom su hover */
		transition: none; /* Disabilita le transizioni */
	}

	.card__title::after {
		opacity: 1;
		transform: scaleX(1);
		transition: none; /* Disabilita le transizioni */
	}
}



// da 768px in giu
@media (max-width: 768px) {
	.card__description {
		display: none;
	}

	.card__content {
		width: 100%;
		justify-content: end;
	}




}
</style>
