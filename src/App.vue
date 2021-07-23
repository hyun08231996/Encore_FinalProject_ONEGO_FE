<template>
  <v-app >
	<Header />
	<router-view />
	<br><br><br><br><br><br><br><br><br><br><br><br>
	<Footer />
  </v-app>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Header from '@/components/layout/Header.vue'
	import Footer from '@/components/layout/Footer.vue'

	export default Vue.extend({
		name: "App",
		components:{
			Header, Footer
		}
	})
</script>


<style lang="scss">
	#app {
		font-family: 'Nanum Myeongjo', serif;
	}
</style>
