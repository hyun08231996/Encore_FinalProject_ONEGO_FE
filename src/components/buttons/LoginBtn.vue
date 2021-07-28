<template>
	<v-btn
		class="ma-2"
		rounded
		outlined
		color="#00d5aa"
		@click="login">
		로그인
	</v-btn>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name:"LoginBtn",
		data: ()=>({
		}),
		methods:{
			login(){
				this.$emit('login', true);
				window.open("/login","_self");    
			}
		}
	})
</script>

<style scoped>

</style>