import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: "/",
		component: Main
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
