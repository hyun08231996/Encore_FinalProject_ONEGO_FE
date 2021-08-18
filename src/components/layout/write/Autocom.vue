<template>
	<div style="height:45%;">
	  <div v-if="toggleSignAuto" style="margin-left:8px;position:relative;">
		<v-tooltip left>
		  <template v-slot:activator="{ on, attrs }">
			<v-btn style="position:absolute;right:4px;" @click="showAutocom" icon v-bind="attrs" v-on="on">
			  <v-icon>mdi-chevron-left</v-icon>
			</v-btn>
		  </template>
		  <span>자동완성</span>
		</v-tooltip>
	  </div>
	  <div v-else style="margin-left:8px;position:relative;">
		<span><v-tooltip top v-if="showBtn">
		  <template v-slot:activator="{ on, attrs }">
			<v-btn icon v-bind="attrs" v-on="on" @click="autoComplete"><v-icon>mdi-motion-play-outline</v-icon></v-btn>
		  </template>
		  <span>문장 자동완성</span>
		</v-tooltip>
		<v-progress-circular v-if="isLoading"
			class="ml-2 mt-2 mb-2"
			indeterminate
			width="2"
			size="20"
			color="#00d5aa"/>
		<v-btn @click="clearField" class="ml-1" v-if="text!==''" x-small outlined rounded color="grey">지우기</v-btn></span>
		<span style="position:absolute;right:4px;"><v-btn @click="showAutocom" icon><v-icon>mdi-chevron-down</v-icon></v-btn></span>
		<div style="margin-left:8px;margin-right:14px;margin-top:10px;">
		  <v-textarea class="mx-auto"
		  	:value="text"
			solo
			no-resize
			placeholder="AI 자동완성이 이곳에 출력됩니다.."
			height="32vh"
			readonly>
		  </v-textarea>
		</div>
	  </div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { namespace } from 'vuex-class';
	import http from '@/http/http-common'

	const WriteStoreModule = namespace('writeStore')

	@Component
	export default class Autocom extends Vue {
		toggleSignAuto = true
		text = ''
		isLoading = false
		showBtn = true

		@WriteStoreModule.Getter('getItemList')
		private itemList!:any[]

		@WriteStoreModule.Getter('getActiveVal')
		private activeVal!:number

		showAutocom():void{
			this.toggleSignAuto = !this.toggleSignAuto
		}

		clearField():void{
			this.text = ''
		}

		autoComplete():void{
			this.isLoading = true
			this.showBtn = false

			const form = new FormData()

			var sentenceList = [] as any[]
			var autoCom = ''

			var content = ''

			if(this.activeVal === 1){
				content = this.itemList[0].text.replaceAll("\n"," ")
			}else if(this.activeVal > 1){
				for(var i=0; i<this.itemList[0].children.length;i++){
					if(this.activeVal === this.itemList[0].children[i].id){
						content = this.itemList[0].children[i].text.replaceAll("\n", " ")
					}
				}
			}
			var text = content.split(". ").pop() as string
			//console.log(text, typeof(text))

			form.append('text',text)

			http.
				post('/ai/complete',form)
				.then(response=>{
					if (response.status >=200 && response.status < 204){
						//console.log(response.data)
						
						console.log("success")
						sentenceList = response.data
						for(let j=0;j<sentenceList.length;j++){
							autoCom += (j+1).toString()+'. ' + sentenceList[j] + '\n'
						}
						this.text = autoCom
						this.isLoading = false
						this.showBtn = true
					} else{
						//console.log(response)
						console.log("fail..")
					}
				})
			
		}
	}
</script>

<style scoped>

</style>