<template>
<div id="item">
  <v-container>
    <v-card 
      class="mx-auto"  
      max-width="65%"
      min-height="1300px"
      flat
    >
      <v-toolbar
        prominent
        flat
      >
        <v-spacer></v-spacer>
        <div style="font-weight: 700; font-size : 2.3em;">
          {{ article.title }}
        </div>
        <v-spacer></v-spacer> 
      </v-toolbar>

      <div>
          <span>By</span>
          <span class="nickName" v-html="article.nickName"> </span>
          <span>.</span>
          <span class="modDatetime" v-html="article.modDatetime"></span>
      </div>

      <br/><hr style="max-width : 1200px;"/><br/><br/>
      <img style="max-width: 1200px;" :src="article.titleImage">
      <div id="text">
        {{ article.subtitle }}
      </div> <br/><br/><br/>
      
      <!-- 태그 -->
      <v-row justify="space-around">
        <v-col
          cols="12"
        >
          <v-chip-group
            mandatory
            active-class="primary--text"
          >
            <v-chip
              v-for="tag in article.tags"
              :key="tag"
              active-class="tag"
              color="#00d5aa"
              outlined
              link
            >
              {{ tag }}
            </v-chip>
            <v-spacer></v-spacer>
              <!-- <v-v-btn-toggle
                color="#00d5aa"
                text-color="#ffffff"
                name="댓글"
              >
                <v-btn
                color="#00d5aa"
                outlined
                >
                  댓글
                </v-btn>
              </v-v-btn-toggle> -->
          </v-chip-group>
        </v-col>
      </v-row>
      <br/><br/>

      <span style="font-size : 1.2rem; font-weight: 400; padding-left: 1rem;">댓글</span>
      <v-banner>
      </v-banner>
      <Comment />
      <Profile :id = "article.userId"/>
   </v-card>
  </v-container>
</div>
</template>


<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Profile from '@/components/layout/Profile-user.vue'
import Comment from '@/components/layout/Comment-user.vue'
import http from '../../http/http-common'


Vue.use(Vuetify)

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
	#item {
		font-family: "Noto Sans KR", sans-serif !important;
	}
  .modDatetime{
    float: left;

  }
  .icons{
    padding-top: 1em;
    padding-right: 1.5em;
  }

  .icon{
    padding-left: 2em;
    padding-right: 2em;
    height: 1.8em;
  }
  #text{
    font-size : 1.1rem; 
    line-height: 2.3em; 
    font-weight: 300; 
    letter-spacing: 0;
  }
</style>