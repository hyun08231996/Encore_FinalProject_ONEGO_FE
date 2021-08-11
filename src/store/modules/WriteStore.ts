import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/store/store'

interface ItemList{
	id:number;
	title:string;
	subtitle:string;
	text:string;
	children:Array<{id:number,title:string,subtitle:string,isContent:boolean,text:string}>;
}

interface MemoList{
	memo:string;
}

@Module({store, name:'WriteStore', namespaced:true})
export default class WriteStore extends VuexModule{
	public id = ''
	public userId = ''
	public nickName = '남승현'
	public titleImage : File|string = new File([""], "")
	public modDatetime : Date = new Date()
	public itemList : ItemList[] = [
		{
			id:1,
			title: '',
			subtitle: '',
			text: '',
			children: Array<{id:number,title:string,subtitle:string,isContent:boolean,text:string}>(),
		}
	]
	public memoList : MemoList[] = []
	public tagList : string[] = []

	public activeVal = 0 //used to communicate between Write.vue and Treeview.vue
	public content = '' //used to communicate between Write.vue and Treeview.vue
	public activeId = 0 //used to communicate between Write.vue and Treeview.vue
	public wordCount = 0 //used to communicate between Write.vue and Tag.vue
	public imageUrl = '' //used to communicate between Tag.vue and PreviewModal.vue

	get getTitleImage(){
		return this.titleImage
	}

	get getActiveVal(){
		return this.activeVal
	}

	get getItemList(){
		return this.itemList
	}

	get getMemoList(){
		return this.memoList
	}

	get getTagList(){
		return this.tagList
	}

	get getWordCount(){
		return this.wordCount
	}

	get getContent(){
		return this.content
	}


	// @Mutation
	// 	public update(){
	// 		console.log(this.tagList)
	// 	}

	@Mutation
		public setDate(date:Date){
			this.modDatetime = date
			//console.log(this.modDatetime)
		}

	@Mutation
		public setImageUrl(url:string){
			this.imageUrl = url
		}

	@Mutation
		public setActiveVal(val:any){
			this.activeVal = val[0]
		}

	@Mutation
		public setTagList(list:string[]){
			this.tagList = list
		}

	@Mutation
		public setTitleImage(image:File){
			this.titleImage = image
		}

	@Mutation
		public setTitle(title:string){
			//console.log(title)
			if(this.itemList[0].id == this.activeVal){
				this.itemList[0].title = title
				const content:string = '<h1>'+this.itemList[0].title!+'</h1>'+'<h2>'+this.itemList[0].subtitle!+'</h2>'+'<p>'+this.itemList[0].text!.replace('\n','</p><p>')+'</p>'
				this.content = content
				//console.log(this.content)
			}
			for(let i=0; i<this.itemList[0].children.length; i++){
				if(this.itemList[0].children[i].id == this.activeVal){
					this.itemList[0].children[i].title = title
					const content:string = '<h1>'+this.itemList[0].children[i].title!+'</h1>'+'<h2>'+this.itemList[0].children[i].subtitle!+'</h2>'+'<p>'+this.itemList[0].children[i].text!.replace('\n','</p><p>')+'</p>'
					this.content = content
					//console.log(this.content)
				}
			}
		}

	@Mutation
		public sendContent(itemId:number){ //triggers when item in Treeview.vue is clicked
			//console.log(itemId)
			this.activeId = itemId
			if(this.itemList[0].id == itemId){
				const content:string = '<h1>'+this.itemList[0].title!+'</h1>'+'<h2>'+this.itemList[0].subtitle!+'</h2>'+'<p>'+this.itemList[0].text!.replace('\n','</p><p>')+'</p>'
				this.content = content
			}// displays title + text on text editor
			for(let i=0; i<this.itemList[0].children.length; i++){
				if(this.itemList[0].children[i].id == itemId){
					const content:string = '<h1>'+this.itemList[0].children[i].title!+'</h1>'+'<h2>'+this.itemList[0].children[i].subtitle!+'</h2>'+'<p>'+this.itemList[0].children[i].text!.replace('\n','</p><p>')+'</p>'
					this.content = content
				}// displays subtitle + text on text editor
			}
			//console.log(itemId)
			//console.log(this.content)
		}

	@Mutation
		public setContent(data:string){
			this.content = data
		}

	@Mutation
		public updateContent(data:string){ //triggers when key is pressed in Write.vue
			//console.log(this.activeId)
			//console.log(data)
			const str = data
			const title = str.substring(str.indexOf("<h1>")+4,str.indexOf("</h1>"))
			const subtitle = str.substring(str.indexOf("<h2>")+4,str.indexOf("</h2>"))
			const content = str.substring(str.indexOf("<p>")+3,str.lastIndexOf("</p>"))

			if(this.activeId == 1){
				this.itemList[0].title = title
				this.itemList[0].subtitle = subtitle
				this.itemList[0].text = content.replace('</p><p>','\n')
			}
			if(this.activeId > 1){
				for(let i=0; i<this.itemList[0].children.length; i++){
					if(this.itemList[0].children[i].id == this.activeId){
						this.itemList[0].children[i].title = title
						this.itemList[0].children[i].subtitle = subtitle
						this.itemList[0].children[i].text = content.replace('</p><p>','\n')
					}
				}
			}

			this.wordCount = title.length+subtitle.length+content.length
		}

	@Mutation
		public addMemo(){
			this.memoList.push({memo:''})
		}
	@Mutation
		public deleteMemo(index:number){
			this.memoList.splice(index, 1)
		}
	@Mutation
		public setMemoList(val:any){
			this.memoList = val
			//console.log(this.memoList[0].text)
		}

  }