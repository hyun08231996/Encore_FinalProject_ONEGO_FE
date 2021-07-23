import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue'
import Scrap from '@/views/Scrap.vue'
import Article from '@/views/Article.vue'
	
Vue.use(VueRouter)
	
const routes: Array<RouteConfig> = [
	{
		path: "/",
		component: Main
	},
	{
		path: "/scrap",
		component: Scrap
	},
	{
		path: "/article",
		component: Article
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
