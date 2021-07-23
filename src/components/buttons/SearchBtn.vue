<template>
	<v-btn icon @click="showSearch">
		<v-icon>mdi-magnify</v-icon>
	</v-btn>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		methods:{
			showSearch(){
			console.log("hello")
			}
		}
	})
</script>

<style scoped>

</style>