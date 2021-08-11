<template>
  <div style="margin-bottom:-400px;">
	<div style="margin-top:-36px;"><v-divider/></div>
	<!-- 목록 -->
	<treeview />

	<!-- 텍스트 에디터 -->
	<div align="center" id="write-margin">
		<div id="editor-size">
		  <div>
			<tiptap-vuetify id="text-editor"
				v-model="content"
				:extensions="extensions"
				:native-extensions="nativeExtensions"
				:disabled="isActive"
				autoFocus=true
				><!-- @keydown="updateContent(content)" -->
				<v-toolbar>
					<v-file-input></v-file-input>
				</v-toolbar>
			</tiptap-vuetify>
		  </div>
		  <!-- 태그 입력, 이미지 선택, 글자수 -->
		  <tag />
		</div>
	</div>
	<!-- 자동완성 & 메모 -->
	<div id="memo-margin">
		<div id="memo-size">
		  <!-- 자동완성 -->
		  <autocom />
		  <v-divider style="margin-bottom:7px;"/>
		  <!-- 메모 -->
		  <memo />
		</div>
	</div>
  </div>
</template>

<script lang="ts">
	import { Component, Vue, Watch } from 'vue-property-decorator';
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	import { TiptapVuetify, History, Paragraph, Heading, Bold, Italic, Underline } from "tiptap-vuetify";
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	import { insertText } from 'tiptap-commands';
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	import { Extension } from 'tiptap'
	import Treeview from '@/components/layout/write/Treeview.vue'
	import Autocom from '@/components/layout/write/Autocom.vue'
	import Memo from '@/components/layout/write/Memo.vue'
	import Tag from '@/components/layout/write/Tag.vue'
	import '@/assets/css/Write.css'
	import { namespace } from 'vuex-class';

	const WriteStoreModule = namespace('WriteStore')

	@Component({
		components:{
			TiptapVuetify,
			'treeview':Treeview,
			'autocom':Autocom,
			'memo':Memo,
			'tag':Tag
		}

	})
	export default class Write extends Vue {
		extensions : unknown = [
			History,
			Paragraph,
			[Heading, { options: {levels:[1,2,3]}}],
			Bold,
			Italic,
			Underline
		]
		nativeExtensions : unknown = [
			new class extends Extension {
				keys() {
    				return {
      					Tab: insertText('    ')
    				}
 				}
			}
		]
		content = ''
		isActive = false

		@Watch('activeVal')
		watchActiveVal():void{
			//console.log(this.activeVal)
			if(this.activeVal == undefined){
				this.isActive = true
			}else this.isActive = false
		}

		@Watch('getContent')
		watchGetContent():void{
			//console.log('watch')
			this.content = this.getContent
			this.updateContent(this.content)
			//console.log(this.content)
			const element:HTMLElement = document.getElementsByClassName('ProseMirror')[0] as HTMLElement
			//console.log(element)
			if(element !== undefined) {
				element.setAttribute('id','prose-mirror')
				const textTitle:HTMLHeadingElement = element.children[0] as HTMLHeadingElement
				if(textTitle !== undefined) textTitle.setAttribute('data-text','제목 : ')
				const textSubtitle:HTMLHeadingElement = element.children[1] as HTMLHeadingElement
				if(textSubtitle !== undefined) textSubtitle.setAttribute('data-text','소제목 : ')
			}
		}

		@Watch('content')
		watchContent():void{
			//console.log(this.content)
			this.setContent(this.content)
			this.updateContent(this.content)
		}

		@WriteStoreModule.Getter('getContent')
		private getContent!:string

		@WriteStoreModule.Mutation('setContent')
		private setContent!:(data:string)=>void

		@WriteStoreModule.Mutation('updateContent')
		private updateContent!:(data:string)=>void

		@WriteStoreModule.Getter('getActiveVal')
		private activeVal!:number


	}
</script>

<style>
#img-btn{ margin-right:500px; }
#text-editor .v-sheet.v-card{ border-radius: 4px 4px 0px 0px; }
</style>