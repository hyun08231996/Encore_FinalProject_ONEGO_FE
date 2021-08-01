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
	import { Auth } from 'aws-amplify'
	// import { AmplifyEventBus } from 'aws-amplify-vue'

	export default Vue.extend({
		name: "App",
		components:{
			Header, Footer
		},
		created(){
			this.findUser();
			// AmplifyEventBus.$on('authStaet', info => {
			// 	if(info === 'signedIn'){
			// 		this.findUser()
			// 	}else{
			// 		this.signedIn = false
			// 	}
			// })
		},
		methods: {
			async findUser(){
				try{
					const user = await Auth.currentAuthenticatedUser()
						.then(user => {
                                this.$store.state.user.signedIn = !!user;
                                this.$store.state.user.userInfo = user;
								console.log('App.vue signedin', this.$store.state.user.signedIn);
                            })
						.catch(err => {
							console.log(err)
							this.$store.state.user.signedIn = false;
                            this.$store.state.user.userInfo = null;

						});
				}
				catch (error) {
                    console.log('not signed in', error);
                }
				console.log('App.vue signedin2222', this.$store.state.user.signedIn);
			}
		}
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
