import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue'
import SignUpPage from '../views/SignupPage.vue'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: "/",
		component: Main,
    meta: { showFooter: true }
	},
  {
    path: "/signup",
    name: "signup",
    component: SignUpPage,
    meta: { showFooter: false }
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: { showFooter: false },
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
