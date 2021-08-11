<template>
	<div style="height:55%;">
	  <div v-if="toggleSignMemo" style="margin-left:8px;position:relative;">
		<v-tooltip left>
		  <template v-slot:activator="{ on, attrs }">
			<v-btn style="position:absolute;right:4px;" @click="showMemo" icon v-bind="attrs" v-on="on">
			  <v-icon>mdi-chevron-left</v-icon>
			</v-btn>
		  </template>
		  <span>메모</span>
		</v-tooltip>
	  </div>
	  <div v-else style="margin-left:8px;position:relative;">
		<div>
			<span><v-tooltip top>
			<template v-slot:activator="{ on, attrs }">
				<v-btn icon v-bind="attrs" v-on="on" @click="addMemo"><v-icon>mdi-note-plus-outline</v-icon></v-btn>
			</template>
			<span>메모추가</span>
			</v-tooltip></span>
			<span style="position:absolute;right:4px;"><v-btn @click="showMemo" icon><v-icon>mdi-chevron-down</v-icon></v-btn></span>
		</div>
		<div style="margin-top:8px;width:100%;height:44vh;overflow-y:auto;">
		  <draggable v-model="draggableCards" delay=0 animation=300 handle=".memo-delete-margin">
			<transition-group type="transition" name="flip-list">
			  <div style="margin-top:2px;" id="memo-list" v-for="(memo,i) in memoList" :key="i">
				<div class="memo-margin" >
					<v-card elevation="3" height="11vh">
						<div class="memo-delete-margin">
						  <v-btn icon x-small @click="editMemo(i)"><v-icon small>mdi-pencil</v-icon></v-btn>
						  <v-btn icon x-small @click="deleteMemo(i)"><v-icon small>mdi-delete</v-icon></v-btn>
						</div>
						<v-textarea class="memo-text-area"
							v-model="memo.text"
							:key="i"
							flat solo
							no-resize
							readonly
							height="8vh">
						</v-textarea>
					</v-card>
				</div>
			  </div>
			</transition-group>
		  </draggable>
		</div>
	  </div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { namespace } from 'vuex-class';
	import draggable from "vuedraggable";

	const WriteStoreModule = namespace('WriteStore')

	@Component({
		components:{
			draggable
		},
	})
	export default class Memo extends Vue {
		toggleSignMemo = true

		@WriteStoreModule.Getter('getMemoList')
		private memoList!:any[]

		public get draggableCards():unknown{
			//console.log(this.memoList)
			return this.memoList
		}

		public set draggableCards(val:unknown){
			this.setMemoList(val)
		}

		@WriteStoreModule.Mutation('addMemo')
		private addMemo!:()=>void

		@WriteStoreModule.Mutation('deleteMemo')
		private deleteMemo!:(index:number)=>void

		@WriteStoreModule.Mutation('setMemoList')
		private setMemoList!:(val:unknown)=>void

		showMemo():void{
			this.toggleSignMemo = !this.toggleSignMemo
		}

		editMemo(index:number):void{
			const textarea = document.getElementsByClassName('memo-text-area')

			for(var i=0; i<textarea.length; i++){
				if(i === index){
					//console.log(i)
					const editIcon = document.getElementsByClassName('memo-delete-margin')[i].children[0].children[0].children[0]
					const textareaId = textarea[i].children[0].children[0].children[0].children[0].id
					//console.log(textareaId)
					const element = document.getElementById(textareaId) as HTMLInputElement

					if(editIcon.classList.contains('mdi-check')){
						element.readOnly = true
						editIcon.classList.remove('mdi-check')
						editIcon.classList.add('mdi-pencil')
					}

					else{
						element.readOnly = false
						editIcon.classList.remove('mdi-pencil')
						editIcon.classList.add('mdi-check')
						document.getElementById(textareaId)?.focus()
					}

					element.addEventListener('keypress', (e)=>{
						if(e.key === 'Enter') {
							element.readOnly = true
							editIcon.classList.remove('mdi-check')
							editIcon.classList.add('mdi-pencil')
						}
					})

				}
			}

		}

	}
</script>

<style>
.memo-delete-margin:hover{
	background-color:#89e7d434;
	cursor:move;
}
</style>