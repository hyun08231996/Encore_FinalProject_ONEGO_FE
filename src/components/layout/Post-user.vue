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
        <v-toolbar-title style="font-weight: 700; font-size : 1.7rem;">
          {{ article.title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>

      </v-toolbar>

      <br/><hr/><br/><br/>
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
              v-for="tag in tags"
              :key="tag"
              active-class="tag"
              color="#00d5aa"
              outlined
              link
            >
              {{ article.tag }}
            </v-chip>
            <v-spacer></v-spacer>
              <v-v-btn-toggle
                color="#00d5aa"
                text-color="#ffffff"
                v-model="toggle_comment"
              >
                <v-btn
                color="#00d5aa"
                outlined
                >
                  댓글
                </v-btn>
              </v-v-btn-toggle>
          </v-chip-group>
        </v-col>
      </v-row>
      <br/><br/>

      <!-- 댓글 layout component로 만들기,,,-->
      <span style="font-size : 1.2rem; font-weight: 400; padding-left: 1rem;">댓글</span>
      <v-banner>
      </v-banner>
      <Comment />
      <br/>
      <!-- 프로필 -->
      <Profile />
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
          articles: {},
          errored: false,
          loading: true,
          content: '',
          page: 1,
        }),
        methods: {
          async getArticles(userId: string){
            await http
                .post('/board', {
                  params: { 'userId': userId }})
                .then(response => {
                    this.articles = response.data;
                    console.log(this.articles)
                })
                .catch(() => {
                  this.errored = true
                })
                .finally(() => this.loading = false)
                
              },
    async created(){
        console.log("mounted")
        this.getArticles("1")
        // console.log(this.articles)
      }
  }
})


</script>


<style >
	#item {
			font-family: "Noto Sans KR", sans-serif !important;
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