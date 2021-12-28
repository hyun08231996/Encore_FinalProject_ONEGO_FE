<template>
	<v-tooltip bottom>
		<template v-slot:activator="{ on, attrs }">
			<div v-bind="attrs" v-on="on" style="margin-left:13px;">
				<!-- <v-switch class="mt-5 ml-4"
					v-model="switch1"
					color="#00d5aa"
					dense
					inset
				/> -->
				<toggle-button @change="switchDark" :color="{checked: '#696969', unchecked: '#E0E0E0'}" 
					:labels="{checked: '🌙', unchecked: '☀️'}" 
					:switch-color="{checked: '#121212', unchecked: '#FFFFFF'}"
					font-size="11"/>
			</div>
		</template>
		<span>{{tooltip}}</span>
	</v-tooltip>
	

</template>

<script lang="ts">
	import { Component, Vue, Watch } from 'vue-property-decorator';
	import { eventBus } from '@/main'

	@Component
	export default class DarkModeSwitch extends Vue {
		switch = false
		tooltip = "Activate DarkMode"

		@Watch('switch')
		watchSwitch():void{
			//console.log(this.switch1)
			if(this.switch == true){
				setTimeout(()=>{
					this.$vuetify.theme.dark = true
				},10)
				
				eventBus.$emit('toDark',true)

				this.tooltip = "Deactivate DarkMode"
			}else{
				setTimeout(()=>{
					this.$vuetify.theme.dark = false
				},10)
				
				eventBus.$emit('toLight',false)

				this.tooltip = "Activate DarkMode"
			}
		}

		switchDark():void{
			//console.log("hello")
			this.switch = !this.switch
		}

	}
</script>

<style>

</style>
