import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import( '../views/Home.vue')
const Cart = () => import( '../views/cart.vue')
const mine = () => import( '../views/mine.vue')
const classification = () => import( '../views/classification.vue')



const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',  
    component: Cart
  },
  {
    path: '/classification',
    name: 'classification',  
    component: classification
  },
  {
    path: '/mine',
    name: 'mine',  
    component: mine
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode:"history"
})

export default router
