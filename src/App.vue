<template>
  <div class="navbar-menu">
    <v-container>
      <v-row>
        <v-col cols="7">
          <router-link to="/" class="nav-link" active-class="active">
            Vue Shoping
          </router-link>
        </v-col>
        <v-col cols="5" class="text-right">
          <router-link to="/favories" class="nav-link me-5" active-class="active">
            Favories
            <span v-if="_likeitems.length > 0">
              {{ _likeitems.length }}
            </span>
          </router-link>
          <router-link to="/basket" class="nav-link" active-class="active">
            Basket
            <span v-if="_addBasket.length > 0">
              {{ _addBasket.length }}
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

    ...mapGetters({
      _likeitems: "_likeitems",
      _deleteLike: "deleteLike",
      _addBasket: "_addBasket",
    })
  }
}


</script>
<style></style>

