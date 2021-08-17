<template>
<v-row class="mx-auto justify-center">
  <v-container>
    <v-card
      min-height="1300px"
      flat 
      class="post"
      >
        <!-- Title Image -->
        <v-card tile class="mb-12" id="image-card">
            <v-img height="50vh" :src="article.titleImage">
              <v-flex id="title-preview-margin">
              <template v-if="loginUser === article.userEmail">
                  <span class="postbtn"><v-btn rounded outlined color="#00d5aa" @click="postdelete(article.id)">삭제</v-btn></span>
                  <span class="postbtn"><v-btn rounded outlined color="#00d5aa" @click="postput(article.id,article.title,article.subtitle,article.titleImage,article.contents,article.tags)">수정</v-btn></span>
                </template>
                <template v-else>
                  <!-- <span class="postbtn"><BookmarkBtn/></span>  -->
                  <span class="postbtn"><p class="likescount">{{article.likes}} 번</p></span>
                  <span class="postbtn"><v-btn rounded outlined color="#00d5aa" @click="getlike(article.userEmail)">스크랩</v-btn></span>
                  <!-- <span class="postbtn"><v-btn icon color="#00d5aa" @click="getlike(article.userEmail)"><span style="font-size: 1.8em;"><i class="fa fa-heart"></i></span></v-btn></span>  -->
              </template>  
              <span><h1 style="font-size:40px; padding-left:1px; max-width:80%;">{{ article.title }}</h1></span>  
              <div style="opacity:80%;"><h3>{{ article.subtitle }}</h3></div>
              <div style="opacity:60%;margin-top:30px;">
                <span><h5> {{ article.nickName }}· {{ article.modDatetime }} </h5></span>
              </div>
              </v-flex>
            </v-img>
        </v-card>
        
      <!-- Content -->
      <v-flex id="content-preview-margin" class="mx-auto">
          <div v-for="(content,i) in article.contents" :key="i">
            <h3 v-html="content.subtitle"></h3>
            <p style="padding-top: 10px; padding-bottom: 30px; line-height:30px;" v-html="content.content"></p>
          </div>
      </v-flex>

      <!-- Tags -->
      <v-flex id="tag-preview-margin" class="mx-auto mt-8 pb-8">
        <span  v-for="tag in article.tags" :key="tag">
          <v-chip outlined small color="#00d5aa" class="mr-2">{{ tag }}</v-chip>
        </span>
      </v-flex>

      <!-- <div style="height: 60px;"></div> -->
      <Comment :boardId = "article.id"/>   
      
      <!-- <div style="height: 60px;"></div> -->
      <Profile :id = "article.userEmail"/>
   </v-card>
  </v-container>
 </v-row>
</template>


<script lang="ts">
import Vue from 'vue';
import Profile from '@/components/layout/Profile.vue'
import Comment from '@/components/layout/Comment.vue'
import http from '../../http/http-common'
// import BookmarkBtn from '@/components/buttons/BookmarkBtn.vue'
//import PostDeleteBtn from '@/components/buttons/PostDeleteBtn.vue'
//import PublishBtn from '@/components/buttons/PublishBtn.vue'


export default Vue.extend({

    data: () => ({
          errored: false,
          loading: true,
          content: '',
          page: 1,
          article : {},
          user: {},
          // titleImage: 'null',
          titleImageFile: new File([""], ""),
          id : '',
          userId : '',
          loginUser:''
    }),
    components:{
      Profile, Comment
      // 'LikeBtn':LikeBtn, 'PostDeleteBtn':PostDeleteBtn,'PublishBtn':PublishBtn, 'BookmarkBtn':BookmarkBtn,     
    },
    methods: {
        async getArticle(boardId: string){
          await http
              .get('/board', {
                params: { 'boardId': boardId }, 
                headers:{'Authorization': 'Bearer '+localStorage.getItem('accessToken')
                    }})
              .then(response => {
                  console.log(response.data)
                  this.article = response.data[0];
              })
        },
        getlike(userEmail:string){
          console.log("like")
          console.log(this.$route.params.boardId)
          console.log(this.$route.params.boardId)
          http
          .post('/'+this.$route.params.boardId, {'userEmail': userEmail},{
                headers:{'Authorization': 'Bearer '+localStorage.getItem('accessToken')
           }})
          .then(response => {
            console.log(response.data)
            var con_test = confirm("스크랩 페이지로 이동하시겠습니까?");
            if(con_test == true){
              //해야할것(1) 스크랩 페이지로 이동기능!!!! 2. 스크랩 get수정(수영님)            
              this.getArticle(this.$route.params.boardId)
            }
            else if(con_test == false){
              this.getArticle(this.$route.params.boardId)
            }  
          })
        },

        postdelete(boardId:string){
          console.log("postdelete")
          console.log(boardId)
          var con_test = confirm("글을 삭제하시겠습니까?");
          if(con_test == true){
              console.log(true)
              http
                .delete('/board', {
                data: {'boardId': boardId}, 
                headers:{
                        'Authorization': 'Bearer '+localStorage.getItem('accessToken')
                    }})
                .then(response => {
                    //해야할것(2) article 페이지로 이동!!!!
                     this.getArticle(this.$route.params.boardId)
                })
          }
          else if(con_test == false){
            console.log(false)
              http
                .get('/board', {
                  params: { 'boardId': boardId }, 
                  headers:{
                        'Authorization': 'Bearer '+localStorage.getItem('accessToken')
                    }})
                .then(response => {
                     this.getArticle(this.$route.params.boardId)
                })
          }
          
        },
        //해야할것(3) 수정 페이지를 어떻게 연결할까요..? titleImageFile오류,,
         postput(boardId:string,title:string,subtitle:string,titleImageFile:File,contents:string,tags:string){
            console.log(boardId)
            console.log(title)
            console.log(subtitle)
            console.log(titleImageFile)
            console.log(contents)
            console.log(tags)
            
          //   const form = new FormData()
            
          //   				const board = JSON.stringify(
					// 	{
					// 		title:this.itemList[0].title,
					// 		subtitle:this.itemList[0].subtitle,
					// 		userEmail:this.$store.state.user.userAccount.attributes.email,
					// 		nickName:this.$store.state.user.userAccount.attributes.nickname,
					// 		titleImageFile:this.titleImage,
					// 		contents:contentList,
					// 		modDatetime:date,
					// 		tags:tagList
					// 	}
					// )

              http
              .put('/board', { 
                'boardId': boardId, 'title': title, 'subtitle': subtitle, 'titleImageFile': titleImageFile, 'contents': contents, 'tags':tags
                },{headers:{'Authorization': 'Bearer '+localStorage.getItem('accessToken')
                    }})
              .then(response => {
                  console.log(response.data)
                  this.article = response.data[0];
              })
          },
          
    },
    created(){  
      var userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
      this.loginUser = userInfo.email
      this.getArticle(this.$route.params.boardId)
    }
})
</script>


<style >
  .mx-auto justify-center{
    margin: 0 auto;
  }
	.post {
		font-family: "Noto Sans KR", sans-serif !important;
	}
  .postbtn{
    vertical-align: middle;
    float: right;
    padding-left: 10px;
    padding-bottom: 30px;
  }
  #preview-btn:hover{
	color:#757575 !important;
  }
  #image-card{
    position:relative !important;
  }
  .likescount{
    padding-top: 5px;
    color: #00d5aa;
    font-size: 1.1rem;
  }
  #title-preview-margin{
    width:50% !important;
    position:absolute !important;
    bottom:10% !important;
    left:25% !important;
  }

  #image-card .v-image__image{
    opacity:80% !important;
  }

  #title-content-preview-margin,
  #content-preview-margin,
  #tag-preview-margin{
    max-width:50% !important;
  }
</style>