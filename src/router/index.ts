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
import SignUpPage from '@/views/SignupPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import Write from '@/views/Write.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Main",
		component: Main,
		meta:{ showFooter: true, showHeader: true }
	},
	{
		path: "/signup",
		name: "signup",
		component: SignUpPage,
		meta: { showFooter: false, showHeader: true }
	},
	{
		path: "/login",
		name: "login",
		component: LoginPage,
		meta: { showFooter: false, showHeader: true },
		props: true
	},
	{
		path: "/search/:search",
		name: "SearchResult",
		component: SearchResult,
		props: true,
		meta:{ showFooter: true, showHeader: true }
	},
	{
		path: "/scrap",
		component: Scrap,
		meta:{ showFooter: true, showHeader: true }
	},
	{
		path: "/article",
		component: Article,
		meta:{ showFooter: true, showHeader: true }
	},
	{
		path: "/setting",
		name: "Setting",
		component: Setting,
		meta:{ showFooter: true, showHeader: true }
	},
	{
		path:"/change-pass",
		name: "ChangePassword",
		component: ChangePassword,
		meta:{ showFooter: true, showHeader: true }
	},
	{
		path:"/edit-prof",
		name: "EditProfile",
		component: EditProfile,
		meta:{ showFooter: true, showHeader: true }
	},
	{
		path:"/myonego",
		name: "MyOnego",
		component: MyOnego,
		meta:{ showFooter: true, showHeader: true }
	},
	{
		path:"/myprofile",
		name: "MyProfile",
		component: MyProfile,
		meta: {
			headerClass: 'myprof-header-color',
			showFooter: true, showHeader: true
		}
	},
	{
		path:"/userprofile",
		name: "UserProfile",
		component: UserProfile,
		meta:{
			headerClass: 'myprof-header-color',
			showFooter: true, showHeader: true
		}
	},
	{
		path:"/write",
		name: "Write",
		component: Write,
		meta:{ showFooter: false, showHeader: false }
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router