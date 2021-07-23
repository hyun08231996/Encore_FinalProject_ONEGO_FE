import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Main.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    alias: "/home",
    component: Home
  },
  {
    path: "/signup",
    name: "signup",
    alias: "/signup",
    component: SignUp
  },
  {
    path: "/login",
    name: "login",
    alias: "/login",
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
