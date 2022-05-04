import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/Shop.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("../views/ProductPage.vue"),
    meta: {
      requiresAuth: false,
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
