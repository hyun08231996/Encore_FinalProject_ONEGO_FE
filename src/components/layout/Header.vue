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
		<p>
	What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
  </p>
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


	export default Vue.extend({
		data: () => ({
			drawer: false,
			group: null,
			isAuth: true
		}),
		name: "Header",
		components:{
		},
	})
</script>

<style scoped>

</style>