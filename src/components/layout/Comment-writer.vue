<template>
  <v-card
    max-width="95%"
    flat
    class="mx-auto"
  >

    <v-list min-height="250">
      <template>
        <v-list-item class="comment" v-for="(item, i) in items" :key="i">
          <v-list-item-avatar >
            <v-img :src="item.avatar" style="padding-bottom: 40px;"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title 
              style="font-family: Noto Sans KR; font-size : 1.25rem; font-weight: 400; padding-top:80px; padding-bottom:5px;" 
              v-html="item.title">
            </v-list-item-title>
            <v-list-item-subtitle 
              style="font-family: Noto Sans KR; font-size : 1rem; font-weight: 300; padding-bottom:15px;"  
              v-html="item.subtitle">
            </v-list-item-subtitle>

            <span class="comment-btn">
            <v-btn 
            small
            depressed
            @click = "delete2"
            >
            삭제</v-btn></span>

            </v-list-item-content>
            
          <br/><br/><br/>
        </v-list-item>
      </template>
    </v-list>
    <v-textarea
        class="mx-2"
        prepend-icon=""
        outlined
        style="width: 90%; margin-left: 100;"
        height="80px"
        value="댓글을 입력해주세요!"
    ></v-textarea>
    <v-btn 
        depressed
    >
      입력</v-btn>
  </v-card>
</template>


<script>
export default {
     data: () => ({
      items: [
        {
          id:'1234',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { id:'4567',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
        }
      ]
    }),
    methods: {
      delete2($event, i){
        this.items.splice(i,1)
      },
    },
}
</script>

<style>

.comment{
   height: 100px;
}
.comment-btn{
  text-align: right;

}

</style>