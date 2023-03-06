<template>
    <v-container>
        <v-row no-gutters v-if="products.length > 0">
            <v-col cols="12" sm="12" md="12" lg="7" class="bask-left">
                <v-table density="compact">
                    <thead>
                        <tr class="table-row">
                            <th class="table-head text-center">
                                Ürün
                            </th>

                            <th class="table-head text-center mobiles">
                                Görsel
                            </th>
                            <th class="table-head text-center">
                                Adet
                            </th>
                            <th class="table-head text-center">
                                Fiyat
                            </th>
                            <th class="table-head text-center cols-5 mobiles">
                                Tutar
                            </th>

                        </tr>
                    </thead>
                    <tbody class="mobileBody">
                        <tr v-for="item in products" :key="item">
                            <td class="text-center font-weight-bold">{{ item.name }}</td>
                            <td class="text-center mobiles">
                                <v-img class="card-photo" :src="item.photo"></v-img>
                            </td>
                            <td class="text-center count">
                                <button @click="add(item)" class="artirBtn text-center">Ekle</button>
                                <span class="text-orange v-counter">
                                    {{ item.quantity }}
                                </span>
                                <button @click="sub(item)" class="azaltBtn  text-center">Çıkar</button>
                            </td>
                            <td class="text-center text-green">
                                {{ item.price }}$
                            </td>
                            <td class="text-center text-green mobiles">
                                {{ item.price * item.quantity }}$
                            </td>

                        </tr>
                    </tbody>
                </v-table>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="5" class="bask-right">
                <div class="bask-total-area">
                    <img src="..//assets/purchase.png" alt="">
                    <ul>
                        <li v-for="item in products" :key="item">
                            <strong>
                                {{ item.name }} :
                            </strong>
                            <span class="quant">
                                {{ item.quantity }}
                            </span>
                            <span class="sumIcon">
                                X
                            </span>
                            <span class="price">
                                {{ item.price }}
                            </span>
                            <span class="sumIconTwo">
                                =
                            </span>
                            <span class="totals">
                                {{ item.quantity * item.price }} <i class="fa-solid fa-coins coins"></i>
                            </span>

                        </li>

                    </ul>
                    <p class="totals-product">
                        Toplam Ürün :
                        <span class="text-orange">
                            {{ cartQuant }}
                        </span>
                    </p>
                    <p class="totals-cash">
                        Toplam Tutar :
                        <span class="money">
                            {{ cartTotal }} $
                        </span>
                    </p>

                </div>
            </v-col>
        </v-row>
        <v-col v-else cols="12" class="bos-sepet d-flex justify-center">
            <v-col cols="12" sm="6" md="4" lg="4" class="text-center">
                <v-alert type="warning" text="Sepetinizde Ürün Bulunmamaktadır. Lütfen Ürün Ekleyiniz">
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
    data() {
        return {
            products: [],
        }
    },
    created() {
        this.products = this._addBasket
    },

    methods: {

        add(item) {
            this.total += item.price;
            item.quantity++;
        },
        sub(item) {
            this.total -= item.price;
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                for (let i = 0; i < this.products.length; i++) {
                    if (this.products[i].id === item.id) {
                        this.products.splice(i, 1);
                        break;
                    }
                }
            }
        },
    },
    computed: {
        cartTotal() {
            return this.$store.getters.totalCart
        },
        cartQuant() {
            return this.$store.getters.totalQuntity
        },
        ...mapGetters({
            _addBasket: "_addBasket",
            _addToBasket: "addToBasket",

        })
    },

}

</script>

<style></style>