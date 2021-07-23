<template>
	<v-app>
	<v-card class="overflow-hidden">
	<!-- Header -->
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7" fixed="top"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <a href="/"><img src="@/assets/logo/onego_logo.jpeg" width="20%" height="20%"></a>

      <v-spacer></v-spacer>
	<div v-if="isAuth">
		<v-btn class="ma-2" rounded outlined color="#00d5aa">
			로그아웃
		</v-btn>
	</div>
	<div v-else>
      <v-btn class="ma-2" rounded outlined color="grey" @click="signup">
        회원가입
      </v-btn>

      <v-btn class="ma-2" rounded outlined color="#00d5aa" @click="login">
        로그인
      </v-btn>
	</div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="absolute"
    >
      <v-container style="height: 100%;">
		<br><br><br><br>
		<router-view></router-view>
      </v-container>
    </v-sheet>
	
	<!-- Sidebar drawer -->
	<v-navigation-drawer
				v-model="drawer"
				absolute
				temporary
				>
				<template v-slot:prepend>
					<v-list-item two-line>
					<v-list-item-avatar style="align:center;">
						<img src="https://randomuser.me/api/portraits/women/81.jpg">
					</v-list-item-avatar>

					<br>

					<v-list-item-content style="align:center;">
						<v-list-item-title>User Name</v-list-item-title>
					</v-list-item-content>
					</v-list-item>
				</template>

				<v-divider></v-divider>

				<v-list dense>
					<v-list-item
					v-for="item in items"
					:key="item.title"
					>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>
  </v-card>

  </v-app>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		data: () => ({
			drawer: false,
			group: null,
			isAuth: false,
			items: [
				{ title: 'Home', icon: 'mdi-view-dashboard' },
				{ title: 'About', icon: 'mdi-forum' },
			],
		}),
		name: "Header",
		components:{
			
		},
		methods: {
			home: function() {
				window.open("/","_self");
			},
			signup: function () {   
				window.open("/signup","_self");    
			},
			login: function () {   
				window.open("/login","_self");    
			}
		}
	})
</script>

<style scoped>

</style>