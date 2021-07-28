<template>
	<v-btn
		class="ma-2"
		rounded
		outlined
		color="#00d5aa"
		@click="logout">
		로그아웃
	</v-btn>
</template>

<script lang="ts">
	import Vue from 'vue'
	import { Auth } from 'aws-amplify';

	async function signOut() {
		try {
			await Auth.signOut();
			console.log('signout')
		} catch (error) {
			console.log('error signing out: ', error);
		}
	}

	export default Vue.extend({
		name:"LogoutBtn",
		data: ()=>({
		}),
		methods:{
			logout(){
				this.$emit('logout', false);
				signOut();
			}
		}
	})
</script>

<style scoped>

</style>