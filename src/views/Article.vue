<template>
  <div id="textArea">
    <!-- contents -->
    <div id="pages">
        <Page />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Page from '../components/layout/Page.vue'

  export default Vue.extend({
		data: () => ({

		}),
		name: "Header",
		components:{
			Page
		},
	})

</script>
<style>
</style>