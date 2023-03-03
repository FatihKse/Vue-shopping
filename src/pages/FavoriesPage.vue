<template>
    <div class="top-start">
        <h1> Favories Page</h1>
        <div class="d-flex-card">
            <div v-for="liked in _likeitems" :key="liked" :loading="loading" class="card-out me-7 my-5">
                <v-img class="card-photo" :src="liked.photo"></v-img>
                <v-card-item>
                    <v-card-title class="font-weight-bold">{{ liked.name }}</v-card-title>
                </v-card-item>
                <v-card-text>
                    <div class="my-4 text-subtitle-1 ">
                        <p class="text-green"> {{ liked.price }} $</p>
                    </div>
                    <div>{{ liked.color }}</div>
                    <div class="basket-box d-flex">

                        <button @click="deleteLike(liked)" class="doneBtn">
                            <span class="">Çıkart</span>

                        </button>

                        <button @click="addToBtn(liked)" class="basketBtn">
                            <span class="">Sepete Ekle</span>
                        </button>


                    </div>
                </v-card-text>
            </div>

        </div>

    </div>
</template>

<script>

import { useStore } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    setup() {
        const store = useStore();
        return { store }

    },
    created() {

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