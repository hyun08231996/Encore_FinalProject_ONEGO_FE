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
</script>


<style >
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
  }
</style>