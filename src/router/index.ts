import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue'
import SearchResult from '@/views/SearchResult.vue'
import Scrap from '@/views/Scrap.vue'
import Article from '@/views/Article.vue'
import Setting from '@/views/Setting.vue'
import ChangePassword from '@/views/ChangePassword.vue'
import EditProfile from '@/views/EditProfile.vue'
import MyOnego from '@/views/MyOnego.vue'
import MyProfile from '@/views/MyProfile.vue'
import UserProfile from '@/views/UserProfile.vue'
import MyContent from '@/views/MyContent.vue'
import Content from '@/views/Content.vue'

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
	},
	{
		path: "/scrap",
		component: Scrap
	},
	{
		path: "/article",
		component: Article
	},
	{
		path: "/setting",
		name: "Setting",
		component: Setting
	},
	{
		path:"/change-pass",
		name: "ChangePassword",
		component: ChangePassword
	},
	{
		path:"/edit-prof",
		name: "EditProfile",
		component: EditProfile
	},
	{
		path:"/myonego",
		name: "MyOnego",
		component: MyOnego
	},
	{
		path:"/myprofile",
		name: "MyProfile",
		component: MyProfile,
		meta: {
			headerClass: 'myprof-header-color'
		}
	},
	{
		path:"/userprofile",
		name: "UserProfile",
		component: UserProfile,
		meta:{
			headerClass: 'myprof-header-color'
		}
	},
	{
		path:"/myContent",
		name: "MyContent",
		component: MyContent
	},
	{
		path:"/content",
		name: "Content",
		component: Content
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
