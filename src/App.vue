<template>
  <div id="app">
    <div id="nav">
		<Header>
		</Header>

    </div>
  </div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Header from '@/components/layout/Header.vue'
	//import Sidebar from '@/components/layout/Sidebar.vue'

	export default Vue.extend({
		name: "App",
		components:{
			Header,
		}


	})
</script>


<style lang="scss">

</style>
