<template>
    <div id="app">
        <div class="profile">
            <div class="profile-text">
                <span class="profile-img">
                    <div class="profile-avatar">
                        <a href="/myprofile"><img class="img" :src="article.profileImage"></a>
                    </div>
                </span>
                <a href="/myprofile" style="color: #555555; text-decoration: none;">
                    <span class="profile-name">
                        {{ article.name }}   
                     </span>
                </a>
                <span style="padding-left:10px; margin-top:10px;"><v-btn
                    outlined
                    rounded
                    text
                    width="70"
                    height="30"
                    style="vertical-align: middle;"
                    >
                    구독
                </v-btn></span>
                <br/><br/>
                <div class="profile-text-description">
                    {{ article.email }}
                </div>
                <div class="profile-text-info">
                    {{ article.intro }}
                </div>
            </div>
        </div> 
    </div>     
</template>

<script lang="ts">
import Vue from 'vue'
import http from '../../http/http-common'

export default {
  data: () => ({
          user: {},
          errored: false,
          loading: true,
          content: '',
          page: 1,
        }),
        methods: {
          // async getUser(email){
          //   await http
          //       .get('/user/{email}', {
          //         params: { 'email': string }})
          //       .then(response => {
          //           this.user = response.data
          //       })
          //       .catch(() => { this.errored = true })
          //       .finally(() => this.loading = false)
          //   },    
          // async created(){
          //     console.log("mounted")
          //     this.getUser("")
      }
  }
}
</script>

<style>
.profile{
    margin-top: 80px;
    width: 100%;
    box-shadow: 3px 3px 8px lightgray;
}
.profile-text{
    padding-left: 25px;
    padding-top: 20px;
    font-family: Noto Sans KR;
}
.profile-name{
    font-size : 1.5rem; 
    font-weight: 500; 
    padding-top: 10;
    vertical-align: middle;
}
.profile-link{
    color: #555555;
    text-decoration: none;
}
.profile-text-description{
    font-size : 1.1rem; 
    font-weight: 300; 
    /* 글자수 제한*/
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    height: 1.7em; /*height는 1.7em * 3줄 = 5.1em */
  }

.profile-text-info{
    color: gray;
    font-size : 1.1rem; 
    line-height: 1.7em; 
    font-weight: 300; 
    letter-spacing: 0;
    /* 글자수 제한*/
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    height: 5.1em; /*height는 1.7em * 3줄 = 5.1em */
}
.profile-img{
  float: right;
  margin-right: 30px;
}
.profile-avatar{
  width: 150px;
  height: 150px; 
  border-radius: 70%;
  overflow: hidden;
}
.img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
