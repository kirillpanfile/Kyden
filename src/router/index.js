import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart'
import Checkout from '../views/Checkout.vue'
import Product from '../views/Product.vue'
import Shop from '../views/Shop.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/sroduct',
    name: 'Product',
    component: Product
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
