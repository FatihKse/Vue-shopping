<template>
    <v-container>
        <v-row v-if="_likeitems.length > 0">
            <v-col cols="12" sm="6" md="3" xl="3" v-for="liked in _likeitems" :key="liked" :loading="loading">
                <v-card>
                    <v-img class="card-photo" :src="liked.photo"></v-img>
                    <v-card-title class="d-flex justify-space-around">
                        <span class="text-left text-orange">{{ liked.name }}</span>
                        <span class="text-green text-right"> {{ liked.price }} $</span>
                    </v-card-title>

                    <v-card-text>

                        <div class="text-center my-5 text-orange">{{ liked.color }}</div>
                        <div class="basket-box d-flex">

                            <button @click="deleteLike(liked)" class="doneBtn">
                                <span class="">Çıkart</span>
                            </button>

                            <button @click="addToBtn(liked)" class="basketBtn">
                                <span class="">Sepete Ekle</span>
                            </button>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-col v-else cols="12" class="bos-sepet d-flex justify-center">
            <v-col cols="12" sm="6" md="4" lg="4" class="text-center">
                <v-alert type="warning" text="Favorilerinizde Ürün Bulunmamaktadır">
                    <br>
                    <router-link to="/" class="text-decoration-none text-white font-weight-bold">AnaSayfa</router-link>
                </v-alert>
            </v-col>
        </v-col>
    </v-container>
</template>

<script>

import { useStore } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    setup() {
        const store = useStore();
        return { store }

    },

    methods: {
        deleteLike(product) {
            this.$store.dispatch("deleteLike", product)
        },
        addToBtn(prodItem) {
            this.$store.dispatch("addToBasket", prodItem)
            // console.log(prodItem);
        }


    },
    computed: {
        ...mapGetters({
            _likeitems: "_likeitems",
            _addToBasket: "addToBasket"
        })
    }

}
</script>