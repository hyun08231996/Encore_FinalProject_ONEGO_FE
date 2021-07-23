<template>
	<v-card>
		<!-- navbar -->
		<v-app-bar
		fixed
		color="white"
		elevate-on-scroll
		app
		>
		<v-app-bar-nav-icon @click="drawer = true; openMenu()"></v-app-bar-nav-icon>

		<a href="/"><img src="@/assets/logo/onego_logo.jpeg" width="20%" height="20%"></a>

		<v-spacer></v-spacer>
		<div v-if="isAuth"><logout-btn @logout="isAuth = $event"/></div>
		<div v-else><signup-btn /><login-btn @login="isAuth = $event" /></div>

		<search-btn />
		</v-app-bar>

		<!-- sidebar -->
		<v-navigation-drawer
			v-model="drawer"
			temporary
			fixed
			fluid style="height: 100vh;"
			app
			>
			<br><br>
			<div v-if="isAuth">
				<div class="side-itms" style="padding-left:5%;">
					<v-list-item-avatar size=90>
						<img src="https://randomuser.me/api/portraits/women/82.jpg">
					</v-list-item-avatar>
				</div>
				<div class="side-itms">
					<v-list-item-content>
						<v-list-item-title>Mary Jane</v-list-item-title>
					</v-list-item-content>
				</div>
			</div>
			<div v-else>
				<div class="side-itms" style="padding-left:5%;">
					<v-list-item-avatar size=90>
						<img src="@/assets/logo/onego_mac.png">
					</v-list-item-avatar>
				</div>
				<div class="side-itms" >
					<v-list-item-content>
						<em>Finish your sentence</em>
						<em>with ONEGO...</em>
					</v-list-item-content>
				</div>
			</div>
			<br>
			<div class="side-itms">
				<div v-if="isAuth">
					<v-btn class="ma-2" rounded outlined color="#00d5aa">
						글쓰기
					</v-btn>
				</div>

			<br>
			<v-divider></v-divider>
			<br>
				<v-btn id="menu-btn" retain-focus-on-click rounded outlined color="grey" @click="openMenu" >
					메뉴
				</v-btn>&nbsp;&nbsp;
				<v-btn retain-focus-on-click rounded outlined color="grey" @click="openCategory">
					카테고리
				</v-btn>
			</div>
			<br>
			<v-divider></v-divider>

			<v-list dense v-if="showMenu">
				<div class="side-itms">
					<v-list-item
					v-for="item in menusBL"
					:key="item.title">
						<v-list-item-content>
							<v-btn text :href="item.link"><v-list-item-title>{{ item.title }}</v-list-item-title></v-btn>
						</v-list-item-content>
					</v-list-item>
				</div>
				<br><br>
				<div v-if="isAuth" class="side-itms">
					<v-list-item
					v-for="item in menusAL"
					:key="item.title">
						<v-list-item-content>
							<v-btn text><v-list-item-title>{{ item.title }}</v-list-item-title></v-btn>
						</v-list-item-content>
					</v-list-item>
				</div>
			</v-list>

			<v-list dense v-if="showCate">
					<div>
						<v-list-item
						v-for="item in categories"
						:key="item.title">
							<v-list-item-content>
								<v-btn text><v-list-item-title>{{ item.title }}</v-list-item-title></v-btn>
							</v-list-item-content>
						</v-list-item>
					</div>
			</v-list>

			<div class="side-itms">
				<div v-if="isAuth" id="side-footer1"><logout-btn @logout="isAuth = $event"/></div>
				<div v-else id="side-footer2"><signup-btn /><login-btn @login="isAuth = $event" /></div>
			</div>

		</v-navigation-drawer>

    </v-card>
</template>

<script lang="ts">
	import Vue from 'vue'
	import LoginBtn from '@/components/buttons/LoginBtn.vue'
	import LogoutBtn from '@/components/buttons/LogoutBtn.vue'
	import SignupBtn from '@/components/buttons/SignupBtn.vue'
	import SearchBtn from '@/components/buttons/SearchBtn.vue'

	export default Vue.extend({
		data: () => ({
			drawer: false,
			group: null,
			isAuth: false,
			showCate:false,
			showMenu:false,
			menusBL: [
				{ title: '홈', link: '/'},
				{ title: '최신글'},
			],
			menusAL: [
				{ title: '내 프로필'},
				{ title: '내 원고'},
				{ title: '스크랩'},
			],
			categories:[
				{title:'일상'},
				{title:'시사·이슈'},
				{title:'IT 트렌드'},
				{title:'요리·레시피'},
				{title:'운동·건강'},
				{title:'사랑·이별'}
			]
		}),
		name: "Header",
		components:{
			'login-btn':LoginBtn, 'logout-btn':LogoutBtn, 'signup-btn':SignupBtn,
			'search-btn':SearchBtn
		},
		methods:{
			openCategory(){
				this.showMenu = false;
				this.showCate = true;
			},
			openMenu(){
				this.showCate = false;
				this.showMenu = true;
			}
		}
	})
</script>

<style>
	.side-itms{
		text-align:center;

	}
	.v-btn::before{
		background-color: transparent !important;
	}
	.v-btn:hover,
	.v-btn:focus,
	.v-btn:active{
		color: #00d5aa !important;
	}
	#side-footer2{
		position:fixed !important;
		bottom:3%;
		left:10%;
	}
	#side-footer1{
		position:fixed !important;
		bottom:3%;
		left:28%;
	}
	#menu-btn{
		padding-left:30px !important;
		padding-right:30px !important;
	}
</style>