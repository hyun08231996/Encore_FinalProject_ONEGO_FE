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
          {{ title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>

      </v-toolbar>


      <br/><hr/><br/><br/>
      <div id="text">
        {{ text }}
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
              {{ tag }}
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
      <comment />
      <br/>
      <!-- 프로필 -->
      <profile />
   </v-card>
  </v-container>
</div>
</template>


<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Profile from '@/components/layout/Profile-user.vue'
import Comment from '@/components/layout/Comment-user.vue'

Vue.use(Vuetify)

export default Vue.extend({
    name: 'Mypost',
    data: () => ({
         
        title: '진짜 내 사람 구별하는 방법',
        text: "얕은 만남이 판치는 시대에서 '내 사람'을 구별하는 방법  |  우리 아빠에겐 친구가 몇 명없다. 나는 아빠의 친구분들과는 별로 안면이 없지만 유일하게 기억에 남는 딱 한분이 계신다. 그분을 처음 본건 친 할머니의 장례식장에서 였다. 서울에서 4시간가량 떨어진 먼 장례식장에도 제일 먼저 달려와 준 그 사람. 장례식장에서 계속 울고불고 하던 아빠를 잠깐이라도 웃음짓게 만들어준 그 사람을 보며 '진짜 내 사람'의 정석을 배웠다. '진짜 내 사람'은 아무 말을 하지 않아도 표정으로 마음을 읽는다. 장례식장에서 점점 언성이 높아지고, 헛소리를 하는 아빠를 보며 우리 가족들은 '너무 취했다.'라고 말했지만 유일하게 그 분은 '지금은 진짜 취한 게 아니에요.'라고 말하며 아빠에 대해 정확하게 파악하고 있었다.",
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
        methods: {

        },
    }),
		components:{
      'profile':Profile,
      'comment':Comment
		},
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