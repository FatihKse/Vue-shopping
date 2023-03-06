<template>
    <v-container>
        <v-col v-for="item in product" :key="item">
            <v-col cols="12" v-if="item.id == id">
                <v-row>
                    <v-col cols="12" sm="12" md="4" lg="4" class="py-0 px-0">
                        <img class="w-100" :src="item.photo" alt="">
                    </v-col>
                    <v-col cols="12" sm="12" md="8" lg="8" class="product-right">
                        <v-col cols="12">
                            <h1 class="text-center text-blue my-5">{{ item.name }}</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur libero ratione iste ipsa
                                laborum quaerat pariatur accusamus iure minus quae rem dicta aliquid fugit hic architecto
                                laboriosam est, maxime quisquam.!</p>
                            <p class="text-center py-3">
                                <i v-for="i in 3" :key="i" class="fa-solid fa-star text-yellow"></i>
                            </p>
                            <v-col>
                                <p cols="12" sm="6" md="6" lg="6" class="text-center font-weight-bold">Fiyat: <span
                                        class="text-green">{{
                                            item.price }} $</span>
                                </p>

                            </v-col>
                            <v-col class="favories-and-buy-and-home">
                                <v-col cols="2" sm="4" md="4" lg="4" class="like-box">
                                    <button @click="likeItem(item)">
                                        <i v-if="item.isLiked === true" class="fa-solid fa-heart fonts reds"></i>
                                        <i v-else class="fa-regular fa-heart text-red fonts"></i>
                                    </button>
                                </v-col>
                                <v-col cols="10" sm="8" md="8" lg="8" class="home-and-basket-box">
                                    <button @click="addProduct(item)" class="addBasket">
                                        <span class="">Sepete Ekle</span>
                                    </button>
                                    <button class="btn homeBtn mx-2">
                                        <router-link to="/" class="text-decoration-none text-white font-weight-bold">
                                            <span class="">Alışverişe Devam Et</span>
                                        </router-link>
                                    </button>
                                </v-col>


                            </v-col>
                        </v-col>

                    </v-col>
                </v-row>
            </v-col>
        </v-col>

    </v-container>
</template>


<script>
export default {
    name: 'ProductPage',

    data() {
        return {
            id: this.$route.params.id,
            product: []
        }
    },
    created() {
        this.$appAxios.get(`/shoes/?id=${this.$route.params.id}`).then(shoes_come => {
            this.product = shoes_come.data
        })
    },
    methods: {
        likeItem(item) {
            console.log(item);
            this.$store.dispatch("likeProd", item)
        },
        addProduct(item) {
            this.$store.dispatch("addBasket", item)
            this.$toast.success(`Sepete Eklendi`);
        },
    },
}
</script>