<template>
	<v-app>
		<v-card>
			<v-navigation-drawer
				v-model="drawer" permanent
				>
				<template v-slot:prepend>
					<v-list-item two-line>
					<v-list-item-avatar style="align:center;">
						<img src="https://randomuser.me/api/portraits/women/81.jpg">
					</v-list-item-avatar>

					<br>

					<v-list-item-content style="align:center;">
						<v-list-item-title>User Name</v-list-item-title>
					</v-list-item-content>
					</v-list-item>
				</template>

				<v-divider></v-divider>

				<v-list dense>
					<v-list-item
					v-for="item in items"
					:key="item.title"
					>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>
		</v-card>
		<router-view/>
	</v-app>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name:"Sidebar",
	})
</script>

<style scoped>

</style>