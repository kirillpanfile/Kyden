import { createRouter, createWebHashHistory } from "vue-router";
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
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
  },
  // {
  //   path: "/checkout",
  //   name: "checkout",
  //   component: () => import("../views/Checkout.vue"),
  // },
  {
    name: "privacy",
    path: "/privacy-policy",
    component: () => import("../views/Privacy.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
