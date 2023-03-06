<template>
  <div class="navbar-menu">
    <v-container>
      <v-row>
        <v-col cols="7" class="last-padding">
          <router-link to="/" class="nav-link" active-class="active">
            Vue Shoping
          </router-link>
        </v-col>
        <v-col cols="5" class="text-right last-padding">
          <router-link to="/favories" class="nav-link me-5" active-class="active">
            <i class="fa-solid fa-heart nav-like"></i>
            <span class="favCount text-white" v-if="_likeitems.length > 0">
              {{ _likeitems.length }}
            </span>
          </router-link>
          <router-link to="/basket" class="nav-link" active-class="active">
            Basket
            <span class="prodCount text-orange" v-if="cartQuant > 0">
              {{ cartQuant }}
            </span>
          </router-link>
        </v-col>
      </v-row>
    </v-container>

    <router-view></router-view>


  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {

  computed: {
    cartQuant() {
      return this.$store.getters.totalQuntity
    },
    ...mapGetters({
      _likeitems: "_likeitems",
      _deleteLike: "_deleteLike",
      _addBasket: "_addBasket",
    })
  }
}


</script>
<style></style>

