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

	export default Vue.extend({
		name:"LogoutBtn",
		data: ()=>({
		}),
		methods:{
			logout(){
				this.$emit('logout', false);
			}
		}
	})
</script>

<style scoped>

</style>