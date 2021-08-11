<template>
  <v-app >
	<Header :class="$route.meta.headerClass"/>
	<router-view id="content-margin"/>
	<Footer v-if="$route.meta.showFooter"/>
  </v-app>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Header from '@/components/layout/Header.vue'
	import Footer from '@/components/layout/Footer.vue'
	import http from '@/http/http-common'

	export default Vue.extend({
		name: "App",
		components:{
			Header, Footer
		},
		created(){
			this.$store.dispatch('findUser');
			console.log(this.$store.state.user.userAccount)
			console.log("테스트")
			console.log(Object.keys(this.$store.state.user.userAccount).length)
			console.log(this.$store.state.user.userAccount)
			if(Object.keys(this.$store.state.user.userAccount).length != 0){
				console.log("if문")
				console.log(this.$store.state.user.userAccount.attributes.email)
				http
					.get('/users/'+this.$store.state.user.userAccount.attributes.email)
					.then(response => {
						console.log(response.data)
						this.$store.commit('setUserInfo', response.data);
						// this.$store.state.user.userInfo = response.data
						console.log(this.$store.state.user.userInfo)
					})
			}
		},
	})
</script>


<style lang ="scss">
	#app {
		font-family: 'Nanum Myeongjo', serif !important;
	}
	#content-margin{
		margin-top:100px;
		margin-bottom:400px;
	}
</style>
