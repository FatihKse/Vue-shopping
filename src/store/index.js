import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      likes: [],
      basket: [],
    };
  },
  mutations: {
    likeProd(state, item) {
      if (!state.likes.includes(item)) {
        state.likes.push(item);
      } else {
        state.likes = state.likes.filter((i) => i.id !== item.id);
      }
    },
    addBasket(state, prodItem) {
      let prod = state.basket.find((i) => i.id === prodItem.id);
      if (prod) {
        prod.quantity++;
      } else {
        state.basket.push({ ...prodItem, quantity: 1 });
      }
    },
    addToBasket(state, likeProd) {
      let prod = state.basket.find((i) => i.id === likeProd.id);
      if (prod) {
        prod.quantity++;
      } else {
        state.basket.push({ ...likeProd, quantity: 1 });
      }
      // state.basket.push(likeProd);
    },
    deleteLik(state, item) {
      state.likes = state.likes.filter((i) => i.id !== item.id);
    },
    // dissLikeItem(state, disLike) {
    //   state.likes = state.likes.filter((i) => i.id !== disLike.id);
    // },
  },

  actions: {
    likeProd({ commit }, item) {
      commit("likeProd", item);
    },
    addBasket({ commit }, prodItem) {
      commit("addBasket", prodItem);
    },
    addToBasket({ commit }, likeProd) {
      commit("addToBasket", likeProd);
    },

    deleteLike({ commit }, product) {
      commit("deleteLik", product);
    },
    // dissLikeItem({ commit }, disLike) {
    //   commit("dissLikeItem", disLike);
    // },
  },
  getters: {
    _likeitems: (state) => state.likes,
    _deleteLike: (state) => state.likes,
    // _dissLikeItem: (state) => state.likes,
    _addBasket: (state) => state.basket,
    _addToBasket: (state) => state.basket,
    totalCart: (state) => {
      return state.basket.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
});

export default store;
