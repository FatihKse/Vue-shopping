import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/pages/HomePage"),
  },
  {
    name: "FavoriesPage",
    path: "/favories",
    component: () => import("@/pages/FavoriesPage"),
  },
  {
    name: "BasketPage",
    path: "/basket",
    component: () => import("@/pages/BasketPage"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
