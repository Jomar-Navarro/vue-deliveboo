<script>
import { store } from "../../data/store";
import axios from "axios";

export default {
    data() {
        return {
            store,
            selectedTypes: [],
            searchQuery: '',
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
                types: this.selectedTypes.join(','),
                query: this.searchQuery
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
            this.searchQuery = ''; // Clear search query when types are selected
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
        <div class="container-fluid py-5">
            <div class="d-flex justify-content-center text-center">
                <div>
                    <div class="d-flex my-3">
                        <input
                            class="form-control me-2"
                            @keyup="handleKeyup"
                            v-model="searchQuery"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </div>

                    <span
                        v-for="type in store.types"
                        :key="type.id"
                        class="rounded-5 me-2 my-2 d-inline-block"
                    >
                        <input
                            :value="type.type_name"
                            @click="toggleType(type.type_name)"
                            type="checkbox"
                            class="btn-check"
                            :id="`btn-${type.type_name}`"
                            :checked="isTypeChecked(type)"
                        />
                        <label class="btn btn-primary" :for="`btn-${type.type_name}`">{{
                            type.type_name
                        }}</label>
                    </span>
                </div>
            </div>
            <div
                class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center mt-5"
            >
                <div
                    class="col mb-5 px-5"
                    v-for="restaurant in store.restaurants"
                    :key="restaurant.id"
                >
                    <a href="" class="card ratio-1x1">
                        <img
                            :src="`http://127.0.0.1:8000` + restaurant.image"
                            class="card__image"
                            alt=""
                        />
                        <div class="card__overlay">
                            <div class="card__header">
                                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                                    <path />
                                </svg>
                                <div class="card__header-text">
                                    <h3 class="card__title fw-bold">{{ restaurant.name }}</h3>
                                    <span class="card__status">1 hour ago</span>
                                </div>
                            </div>
                            <p class="card__description">
                                {{ restaurant.description }}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>




<style lang="scss" scoped>
.resto {
	background-color: #f77f00;
}

.card {
	position: relative;
	display: block;
	height: 100%;
	border-radius: calc(40 * 1px);
	overflow: hidden;
	text-decoration: none;
	border-radius: 30px 5px 30px 5px;
	border: 1px solid #f77f00;
}

.card__image {
	width: 100%;
	aspect-ratio: 1;
	object-fit: cover;
}

.card__overlay {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
	border-radius: calc(0 * 1px);
	background-color: white;
	transform: translateY(100%);
	transition: 0.2s ease-in-out;
	opacity: 0.85;
}

.card:hover .card__overlay {
	transform: translateY(0);
	opacity: 0.55;
}

.card__header {
	position: relative;
	display: flex;
	align-items: center;
	gap: 2em;
	padding: 2em;
	border-radius: calc(30 * 1px) 0 0 0;
	background-color: white;
	transform: translateY(-100%);
	transition: 0.2s ease-in-out;
	opacity: 0.95;
}

.card__arc {
	width: 80px;
	height: 80px;
	position: absolute;
	bottom: 100%;
	right: 0;
	z-index: 1;
}

.card__arc path {
	fill: white;
	d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}

.card:hover .card__header {
	transform: translateY(0);
}

.card__thumb {
	flex-shrink: 0;
	width: 50px;
	height: 50px;
	border-radius: 50%;
}

.card__title {
	font-size: 2em;
	margin: 0 0 0.3em;
	color: #03071e;
}

.card__tagline {
	display: block;
	margin: 1em 0;
	font-family: "MockFlowFont";
	font-size: 0.8em;
	color: #d7bdca;
}

.card__status {
	font-size: 0.8em;
	color: #d7bdca;
}

.card__description {
	padding: 0 2em 2em;
	margin: 0;
	color: #03071e;
	font-family: "MockFlowFont";
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
</style>
