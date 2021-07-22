<template>
	<v-app>
	<v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <a href="#"><img src="@/assets/logo/onego_logo.jpeg" width="20%" height="20%"></a>

      <v-spacer></v-spacer>
	<div v-if="isAuth">
		<v-btn
	class="ma-2"
		rounded
		outlined
		color="teal"
	>
        로그아웃
      </v-btn>
	</div>
	<div v-else>
      <v-btn
	class="ma-2"
		rounded
		outlined
		color="grey"
	>
        회원가입
      </v-btn>

      <v-btn
	class="ma-2"
		rounded
		outlined
		color="teal"
	>
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
      max-height="1000"
    >
      <v-container style="height: 1500px;">
		<br><br><br><br>
		<Main />
      </v-container>
    </v-sheet>
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
  <router-view/>

  </v-app>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Main from '../../views/Main.vue'

	export default Vue.extend({
		data: () => ({
			drawer: false,
			group: null,
			isAuth: true
		}),
		name: "Header",
		components:{
			Main
		},
	})
</script>

<style scoped>

</style>