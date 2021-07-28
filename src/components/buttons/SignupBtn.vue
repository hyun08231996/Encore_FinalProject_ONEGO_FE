<template>
	<v-btn
		class="ma-2"
		rounded
		outlined
		color="grey" @click="signup">
		회원가입
	</v-btn>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		methods: {
			signup: function () {   
				window.open("/signup","_self");    
			}
		}
	})
</script>

<style scoped>

</style>