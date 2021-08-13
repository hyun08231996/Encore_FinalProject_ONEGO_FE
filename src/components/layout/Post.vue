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
              <v-flex id="title-preview-margin" class="mx-auto">
              <h1 style="font-size:40px; padding-left:1px;">{{ article.title }}</h1>
              <div style="opacity:80%;"><h3>{{ article.subtitle }}</h3></div>
              <div style="opacity:60%;margin-top:50px;">
                <h5> {{ article.nickName }}· {{ article.modDatetime }}</h5>
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
      <div>
        <comment />
      </div>
      <br/><br/>
      <Profile />
   </v-card>
  </v-container>
 </v-row>
</template>


<script lang="ts">
<<<<<<< HEAD
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import BookmarkBtn from '@/components/buttons/BookmarkBtn.vue'
import LikeBtn from '@/components/buttons/LikeBtn.vue'
import CommentBtn from '@/components/buttons/Comment.vue'
import Profile from '@/components/layout/Profile.vue'
import Comment from '@/components/layout/Comment.vue'
//import TagsBtn from '@/components/buttons/TagsBtn.vue'

Vue.use(Vuetify)

export default Vue.extend({
    name: 'Mypost',
    data: () => ({
        return: {
          title: "진짜 내 사람 구별하는 방법",
          text: "얕은 만남이 판치는 시대에서 '내 사람'을 구별하는 방법  |  우리 아빠에겐 친구가 몇 명없다. 나는 아빠의 친구분들과는 별로 안면이 없지만 유일하게 기억에 남는 딱 한분이 계신다. 그분을 처음 본건 친 할머니의 장례식장에서 였다. 서울에서 4시간가량 떨어진 먼 장례식장에도 제일 먼저 달려와 준 그 사람. 장례식장에서 계속 울고불고 하던 아빠를 잠깐이라도 웃음짓게 만들어준 그 사람을 보며 '진짜 내 사람'의 정석을 배웠다. '진짜 내 사람'은 아무 말을 하지 않아도 표정으로 마음을 읽는다. 장례식장에서 점점 언성이 높아지고, 헛소리를 하는 아빠를 보며 우리 가족들은 '너무 취했다.'라고 말했지만 유일하게 그 분은 '지금은 진짜 취한 게 아니에요.'라고 말하며 아빠에 대해 정확하게 파악하고 있었다.",
        },
        tags: [
        '일상',
        '시사',
        '이슈',
        'IT 트렌드',
        '요리',
        '운동',
        '사랑',
        '이별'
      ],
    }),
		components:{
      'like-btn':LikeBtn,
      'bookmark-btn':BookmarkBtn,
      'comment-btn':CommentBtn,
      'profile':Profile,
      'comment':Comment
      //'tag-btn':TagsBtn
		},
    methods: {
    
  }
})


=======
import Vue from 'vue';
import Vuetify from 'vuetify/lib'
import Profile from '@/components/layout/Profile.vue'
import Comment from '@/components/layout/Comment.vue'
import http from '../../http/http-common'


export default Vue.extend({

    name: 'Mypost',
    data: () => ({
          errored: false,
          loading: true,
          content: '',
          page: 1,
          article : {},
          user: {},
          id : '',
          userId : ''
    }),
    components:{
      Profile, Comment
    },
    methods: {
        async getArticle(boardId: string){
          console.log('getArticles')
          await http
              .get('/board', {
                params: { 'boardId': boardId }})
              .then(response => {
                  console.log(response.data)
                  this.article = response.data[0];
              })
        }
    },
    created(){  
      console.log(this.$route.params.boardId)
      this.getArticle(this.$route.params.boardId)
    }
})
>>>>>>> 6af4afcb3030d8407cf955e521439214f2fafdc6
</script>


<style >
<<<<<<< HEAD
	#item {
			font-family: "Noto Sans KR", sans-serif !important;
	}
  .icon{
    padding-top: 1em;
    padding-right: 1.5em;

  }
  .icon-publish{
    padding-left: 2em;
    height: 1.8em;
  }
  #text{
    font-size : 1.1rem; 
    line-height: 2.3em; 
    font-weight: 300; 
    letter-spacing: 0;
=======
	.post {
		font-family: "Noto Sans KR", sans-serif !important;
	}

  #preview-btn:hover{
	color:#757575 !important;
  }

  #image-card{
    position:relative !important;
  }

  #title-preview-margin{
    max-width:50% !important;
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
>>>>>>> 6af4afcb3030d8407cf955e521439214f2fafdc6
  }
</style>