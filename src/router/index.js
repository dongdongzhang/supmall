import Vue from 'vue'
import VueRouter from 'vue-router'

const Shoppingcart = () => import('views/cart/Shoppingcart.vue')
const Classify = () => import('views/classify/Classify.vue')
const Home = () => import('views/home/Home.vue')
const Mine = () => import('views/mine/Mine.vue')
const Detail = () => import('views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/shoppingcart',
    component:Shoppingcart
  },
  {
    path: '/classify',
    component:Classify
  },
  {
    path: '/mine',
    component:Mine
  },
  {
    path: '/detail/:iid',
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
