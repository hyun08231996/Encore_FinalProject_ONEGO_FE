import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue'
import SearchResult from '@/views/SearchResult.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Main",
		component: Main
	},
	{
		path: "/search/:search",
		name: "SearchResult",
		component: SearchResult,
		props: true
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
