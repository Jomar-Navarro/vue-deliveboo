<script>
import { store } from "../data/store";
import axios from "axios";

export default {
  name: "menu",
  data() {
    return {
      store,
      restaurantName: "",
      dishes: [],
    };
  },
  methods: {
    getApi(id) {
      axios.get(this.store.apiUrl + "menu/" + id).then((res) => {
        this.restaurantName = res.data;
        this.dishes = res.data.dishes;
        this.dishes.forEach((dish) => {
          dish.selectedQuantity = 1;
        });
      });
    },

    increaseQuantity(dish) {
      dish.selectedQuantity++;
    },

    decreaseQuantity(dish) {
      if (dish.selectedQuantity > 1) {
        dish.selectedQuantity--;
      }
    },

    addToCart(dish) {
      const restaurantId = this.$route.params.id;
      store.addToCart(dish, dish.selectedQuantity, restaurantId);
    },

    returnQuantityToOne(dish) {
      dish.selectedQuantity = 1;
    },
  },
  mounted() {
    this.getApi(this.$route.params.id);
  },
};
</script>

<template>
  <div class="container menu-bg">
    <h1 class="text-center rest-title mt-5 text-warning pt-4 pb-4">{{ restaurantName.name }}</h1>
    <div class="row d-flex justify-content-between">

      <!-- card desktop  -->
      <div v-for="dish in dishes" :key="dish.id" class="card_desk col">
        <div class="container page-wrapper">
          <div class="page-inner">
            <div class="row">
              <div class="el-wrapper">
                <div class="box-up py-3">
                  <img class="img-fluid img" :src="dish.image_url" alt="" />
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name fw-bold">{{ dish.dish_name }}</span>
                      <span class="p-company">{{ dish.description }}</span>
                    </div>
                    <div class="a-size">
                      <h5 class="text-black">Quantità</h5>
                      <div class="d-flex justify-content-center align-items-center">
                        <button class="btn-quantity btn btn-warning rounded-5" @click="decreaseQuantity(dish)">
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <p class="text-black fw-semibold mx-3 m-0">{{ dish.selectedQuantity }}</p>
                        <button class="btn-quantity btn btn-warning rounded-5" @click="increaseQuantity(dish)">
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>
                  <a @click.prevent="addToCart(dish), returnQuantityToOne(dish)" class="cart" href="#">
                    <span class="price">{{ dish.price }}</span>
                    <span class="add-to-cart">
                      <span class="txt">Aggiungi al carrello</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / -->


      <!-- card mobile  -->
      <div v-for="dish in dishes" :key="dish.id" class="card_phone col menu-bg">
        <div class="container  page-wrapper">
          <div class="page-inner">
            <div class="row">
              <div class=" el-wrapper">
                <div class="box-up py-3">
                  <img class="img-fluid img" :src="dish.image_url" alt="" />
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name fw-bold">{{ dish.dish_name }}</span>
                      <span class="p-company">{{ dish.description }}</span>
                    </div>

                    <div class="a-size">
                      <div class="d-flex justify-content-center align-items-center">
                        <button class="btn-quantity btn btn-warning rounded-5" @click="decreaseQuantity(dish)">
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <p class="text-black fw-semibold mx-3 m-0">{{ dish.selectedQuantity }}</p>
                        <button class="btn-quantity btn btn-warning rounded-5" @click="increaseQuantity(dish)">
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>
                  <a @click.prevent="addToCart(dish), returnQuantityToOne(dish)" class="cart" href="#">
                    <span class="price">{{ dish.price }}</span>
                    <span class="add-to-cart">
                      <span class="txt"> <br> Aggiungi al carrello</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / -->

    </div>
  </div>
</template>



<style lang="scss" scoped>
/* Stato di default per .card_phone e .card_desk */
.card_phone {
  display: none;
  background-color: rgb(255, 255, 255);

  .dish-title {
    color: black;
    font-family: 'Ubuntu', sans-serif;

    .dish-desc {
      // font-family: 'Ubuntu', sans-serif;
      color: black;
      background-color: #e07878;
    }
  }
}

.rest-title {
  font-family: 'Bangers', system-ui;
}


.img_phone {
  max-width: 250px;
  object-fit: cover;
  aspect-ratio: 2/1;
}

.menu-bg {
  background-color: #292626;
  border-radius: 5px;
  margin-bottom: 20px;
  // font-family: "Luckiest Guy", system-ui;
  font-family: 'Ubuntu', sans-serif;
}

.align-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.flex-centerY-centerX {
  justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.page-wrapper {
  height: 100%;
  display: table;
}

.page-wrapper .page-inner {
  display: table-cell;
  vertical-align: middle;
}

.el-wrapper {
  width: 360px;
  padding: 15px;
  margin: 15px auto;
  background-color: #fff;
}

.el-wrapper .box-down {
  width: 100%;
  height: 60px;
  position: relative;
  overflow: hidden;
}

.el-wrapper .box-up {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.el-wrapper .img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  padding: 50px 0;
  -webkit-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
}

.h-bg {
  -webkit-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  width: 660px;
  height: 100%;
  background-color: #ffc107;
  position: absolute;
  left: -800px;
}

.h-bg .h-bg-inner {
  width: 50%;
  height: 100%;
  background-color: #292626;
}

.info-inner {
  -webkit-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  position: absolute;
  width: 100%;
  bottom: 10px;
}

.info-inner .p-name,
.info-inner .p-company {
  display: block;
}

.info-inner .p-name {
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  color: #252525;
}

.info-inner .p-company {
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: #2e2e2e;

}

.a-size {
  -webkit-transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  position: absolute;
  width: 100%;
  bottom: -20px;
  font-family: 'PT Sans', sans-serif;
  color: #828282;
  opacity: 0;
}

.a-size .size {
  color: #252525;
}

.cart {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
}

.cart .price {
  -webkit-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-delay: 100ms;
  -o-transition-delay: 100ms;
  transition-delay: 100ms;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #252525;
}

.cart .add-to-cart {
  -webkit-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-delay: 100ms;
  -o-transition-delay: 100ms;
  transition-delay: 100ms;
  display: block;
  position: absolute;
  top: 50%;
  left: 110%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.cart .add-to-cart .txt {
  font-size: 12px;
  color: #fff;
  letter-spacing: 0.045em;
  text-transform: uppercase;
  white-space: nowrap;
}




/* Mostra card_phone e nasconde card_desk solo quando la vista è inferiore a 992px */
@media (max-width: 991px) {
  .card_phone {
    display: block;
  }

  .card_desk {
    display: none;
  }

  .el-wrapper {
    width: 290px;
  }

  .el-wrapper .h-bg {
    left: 0px;
  }

  .el-wrapper .price {
    left: 50%;
    color: #f0f0f0;
  }

  .el-wrapper .add-to-cart {
    left: 50%;
  }

  .el-wrapper .info-inner {
    bottom: 150px;
  }

  .el-wrapper .a-size {
    bottom: 15px;
    opacity: 1;
  }

  .info-inner .p-name {
    font-family: 'PT Sans', sans-serif;
    font-size: 20px;
    color: #252525;
  }

  .info-inner .p-company {
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: #2e2e2e;
    margin-top: 80px;
    background-color: #ffffffb7;
  }

  .el-wrapper .box-down {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .cart .price {
    padding-bottom: 20px;
    color: white;
    display: block;
  }
}






/* Nasconde card_phone e mostra card_desk solo quando la vista è superiore a 992px */
@media (min-width: 992px) {
  .card_phone {
    display: none !important;
  }

  .card_desk {
    display: block;
  }

  .el-wrapper:hover .h-bg {
    left: 0px;
  }

  .el-wrapper:hover .price {
    left: 20px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #f0f0f0;
    border-right: 1px solid rgb(255, 252, 252);
    padding-right: 10px;
  }

  .el-wrapper:hover .add-to-cart {
    left: 50%;
  }

  .el-wrapper:hover .img {
    filter: progid:DXImageTransform.Microsoft.Blur(pixelradius='7', shadowopacity='0.0');
    opacity: 0.2;
  }

  .el-wrapper:hover .info-inner {
    bottom: 155px;
  }

  .el-wrapper:hover .a-size {
    -webkit-transition-delay: 300ms;
    -o-transition-delay: 300ms;
    transition-delay: 300ms;
    bottom: 15px;
    opacity: 1;
  }
}
</style>
