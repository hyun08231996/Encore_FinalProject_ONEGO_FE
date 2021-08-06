<template>
    <div id="app">
        <v-card
            class="mx-auto"
            width="100%"
            height="215"
            elevation="1"
        >
            <v-list-item three-line w>
                <v-list-item-content class="profile-text">
                    <v-list-item-title class="profile-name">
                        {{ name }}
                        <v-btn
                        outlined
                        rounded
                        text
                        width="70"
                        height="30"
                        >
                        구독
                        </v-btn>
                    <br/><br/>
                    </v-list-item-title>
                    <div class="profile-text-description">
                        {{ description }}
                    </div>
                    <v-list-item-subtitle class="profile-text-info">
                        {{ info }}
                    </v-list-item-subtitle>
                </v-list-item-content>
                    
                <v-list-item-avatar
                    heigth="200px"
                    color="grey"
                    class="profile-avatar"
                >
                    <v-img :src="avatar"
                    ></v-img>
                </v-list-item-avatar>
            </v-list-item>
        </v-card>  
    </div>     
</template>

<script>
export default {
    data() {
        return{
            name: "집게사장",
            description: "저희 게살버거가 정말 맛있습니다",
            info: "게살버거 5000원 (+set 2500원) / 별점 5점 사진리뷰시 음료무제한!",
            avatar: "https://w.namu.la/s/986b0d64e035c2fc42127b088a3839345f7bbc7c4214a9d282dbb41a989cd7b04e6283fa1a9d854fc880d5d8d0457925dae7db3228856e092222f19a2dced1fe298ad5d8d0472b1c511aa4a80d2251e07d04682c9888838951cd30cff93d299f"
        }
    }
}
</script>

<style>
.profile-text{
    width:500px;
    font-family: Noto Sans KR;
}
.profile-name{
    font-size : 1.5rem; 
    font-weight: 500; 
    padding-top: 10;
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
.profile-avatar{
    margin-right: 50;
}
</style>
