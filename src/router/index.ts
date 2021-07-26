import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue'
<<<<<<< HEAD
import SearchResult from '@/views/SearchResult.vue'

=======
import Scrap from '@/views/Scrap.vue'
import Article from '@/views/Article.vue'
	
>>>>>>> f7f200cefe4043aaa565425101171bfd45fb1df1
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Main",
		component: Main
	},
	{
<<<<<<< HEAD
		path: "/search/:search",
		name: "SearchResult",
		component: SearchResult,
		props: true
=======
		path: "/scrap",
		component: Scrap
	},
	{
		path: "/article",
		component: Article
>>>>>>> f7f200cefe4043aaa565425101171bfd45fb1df1
	}
]

function castRoute(route:any) {
	return{
		search: String(route.params.search),
		filteredSearch: Array(route.params.search),

	};
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
