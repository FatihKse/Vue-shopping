<template>
    <v-container>

        <v-row v-if="shopingList.length > 0">
            <v-col cols="12" sm="6" md="4" lg="" xl="3" v-for="item in shopingList" :key="item" :loading="loading">
                <v-card>
                    <router-link :to="{ path: '/product/' + item.id }">
                        <v-img class="card-photo" :src="item.photo"></v-img>
                        <v-card-title class="d-flex justify-space-around">
                            <span class="text-left text-orange">{{ item.name }}</span>
                            <span class="text-green text-right"> {{ item.price }} $</span>
                        </v-card-title>
                    </router-link>

                    <v-card-text>
                        <div class="favories-and-buy d-flex justify-space-between">
                            <div>
                                <button @click="likeItem(item)">
                                    <i v-if="item.isLiked === true" class="fa-solid fa-heart fonts reds"></i>
                                    <i v-else class="fa-regular fa-heart text-red fonts"></i>
                                </button>
                            </div>

                            <button @click="addProduct(item)" class="addBasket">
                                <span class="">Sepete Ekle</span>


                            </button>

                        </div>
                    </v-card-text>
                </v-card>

            </v-col>
        </v-row>
        <v-row v-else class="loader-box">
            <v-col class="loader-inner">
                <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style="left: 50%; top: 50%; position: absolute; transform: translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0);">
                    <path
                        d="M150.4 99.2794C165.296 114.496 172.504 127.95 188.041 127.95C203.577 127.95 216.07 115.457 216.07 99.9201C216.07 84.3835 203.577 71.73 188.041 71.8902C172.504 72.0503 166.738 83.4225 152.643 99.2794C138.388 113.374 127.496 127.95 111.959 127.95C96.4229 127.95 83.9295 115.457 83.9295 99.9201C83.9295 84.3835 96.4229 71.8902 111.959 71.8902C127.496 71.8902 138.067 86.7861 150.4 99.2794Z"
                        stroke="url(#paint0_linear_205_88)" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" id="outline" />
                    <path id="oultine-bg" opacity="0.05"
                        d="M150.4 99.2794C165.296 114.496 172.504 127.95 188.041 127.95C203.577 127.95 216.07 115.457 216.07 99.9201C216.07 84.3835 203.577 71.73 188.041 71.8902C172.504 72.0503 166.738 83.4225 152.643 99.2794C138.388 113.374 127.496 127.95 111.959 127.95C96.4229 127.95 83.9295 115.457 83.9295 99.9201C83.9295 84.3835 96.4229 71.8902 111.959 71.8902C127.496 71.8902 138.067 86.7861 150.4 99.2794Z"
                        stroke="#EDEDED" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_205_88" x1="84" y1="97.5" x2="216" y2="97.5"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#445C46" />
                            <stop offset="1" stop-color="#6AAB6B" />
                        </linearGradient>
                    </defs>
                </svg>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {

    data() {
        return {
            loading: false,
            selection: 1,
            shopingList: [],
            colors: false,
        }
    },
    created() {
        setTimeout(() => {
            this.$appAxios.get("/shoes").then(shoes_come => {
                this.shopingList = shoes_come.data
            })
        }, 1000);
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
    computed: {
        setActive() {
            return {
                btnColor: this.colors

            }

        }
    }
}
</script>

<style>
.btnColor {
    background-color: red;
}

.btnDot {
    background-color: green;
}
</style>



