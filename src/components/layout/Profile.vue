<template>
    <div id="profile">
        <div class="profile-text">
            <span class="profile-img">
                <div class="profile-avatar">
                    <img class="img" :src="user.profileImage" @click="writerProfile(user.email)">
                </div>
            </span>
            
            <span class="profile-name" @click="writerProfile(user.email)" style="height: 25px; color: #555555; text-decoration: none; vertical-align: middle; float:left;">
                {{ user.nickName }}
            </span> 

            <template v-if="loginUser != user.email">
                <div style="vertical-align: middle; padding-top: 5px;">
                    <template v-if="this.follow==false">
                        <v-btn id="profile-subscribe-btn" width="60" height="30" rounded outlined color="#00d5aa" @click="subscribe(user.email)">
                            구독
                        </v-btn>
                    </template>
                    <template v-else>
                        <v-btn id="profile-unsubscribe-btn" width="60" height="30" value="" rounded outlined color="#00d5aa" @click="unsubscribe(user.email)">
                        </v-btn>
                    </template>
                </div>
            </template>
            <template v-else>
                <div style="vertical-align: middle; width: 60px; height: 30px;"></div>
            </template>  

            <div class="profile-text-description">
                {{ user.email }}
            </div>
            <div class="profile-text-info">
                {{ user.intro }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import http from '../../http/http-common'

declare interface User{
    nickName:string,
    email:string,
	intro:string,
	profileImage:string
}

export default Vue.extend({
    props: {
        id: String
    },
    data: () => ({
        user: {} as User,
        loginUser:'',
        disabledFollowing:false,
        disabledFollower:false,
        errored: false,
        loading: true,
        follow: false
    }),
    methods: {
        getUserInfo(id : string){
            http
            .get('/users/'+id)
            .then(response => {
                this.user=response.data
            })
        },
        async subscribe(email: string){
				await http
					.post('/followings/'+this.$store.state.user.userAccount.attributes.email, {'followEmail': email},{
						headers:{
							'Authorization': 'Bearer '+localStorage.getItem('accessToken')
						}})
					.then(response => {
						console.log(response.data)
					})
					.catch(() => this.errored = true )
					.finally(() => {
						this.loading = false
					})
				this.follow = true
			},
			async unsubscribe(email: string){
				await http
					.delete('/followings/'+this.$store.state.user.userAccount.attributes.email, {data: {'followEmail': email},
                        headers:{
							'Authorization': 'Bearer '+localStorage.getItem('accessToken')
						}})					
                    .then(response => {
						console.log(response.data)
					})
					.catch(() => this.errored = true )
					.finally(() => {
						this.loading = false
					})
					this.follow = true
				this.follow = false
			},
        writerProfile(email : string){
            this.$router.push({
                name: "MyProfile",
                params: { emailProp: email },
            });
        },
    },
    watch: {
        id(){
            this.getUserInfo(this.id)
        }
    },
    created(){ 
    var userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
    this.loginUser = userInfo.email
    }
})
</script>

<style>
#profile-unsubscribe-btn{
	background-color: #00d5aa !important;
    color: white !important;
}
#profile-unsubscribe-btn::after{
	content: "구독중 ✓";
}
#profile-unsubscribe-btn:hover{
	color: #00d5aa !important;
	border-color: #00d5aa !important;
	background-color: white !important;
}
#profile-unsubscribe-btn:hover:after{
	content: "구독해지";
}

#profile{
    margin: auto;
    max-width:50% !important;
    box-shadow: 3px 3px 8px lightgray;
}
.profile-text{
    padding-left: 25px;
    padding-top: 10px;
    font-family: Noto Sans KR;
}
.profile-name{
    font-size : 1.4rem;
    font-weight: 500;
    padding-bottom:14px;
    padding-right: 10px;
}
.profile-link{
    color: #555555;
    text-decoration: none;
}
.profile-text-description{
    font-size : 1.1rem;
    font-weight: 300;
    color: #555555;
    margin-top:14px; 
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
    color: #555555;
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
    height: 5.1em; /*height는 1.7em * 1줄 = 5.1em */
}
.profile-img{
  float: right;
  margin-right: 30px;
  margin-bottom: 5px;
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
