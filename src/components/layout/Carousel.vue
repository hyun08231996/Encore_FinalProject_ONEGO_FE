<template>

    <v-slide-group
      
      class="pa-4"
      active-class="success"
      show-arrows
    >
    <!-- v-model="model" -->
      <v-slide-item
        v-for="article in articles"
        :key="article.id"
        v-slot="{ active }"
      >
      
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-0"
          height="600"
          width="800"
          style="padding: 1px"
        >
        
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-img :src="article.titleImage">

            </v-img>
            <!-- <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition> -->
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
</template>
<script>
  import http from '../../http/http-common'
  export default {
    data: () => ({
      articles: []
		}),
		name: "Carousel",
		components:{
		},
        methods: {
            async getArticles(idx){
                await http
                    .get('/board', {
                        params: { 'pageNumber': idx }})
                    .then(response => {
                        response.data.forEach((d) => {
                          if(d.titleImage != null){
                            if(d.titleImage.length != 0){
                              this.articles.push(d)
                            }
                          }
                        })
                        // 최신순으로 정렬
                        this.articles = this.articles.sort((a, b) => new Date(b.modDatetime) - new Date(a.modDatetime))
                    })
            },
        },
        mounted() {
            // console.log('main user: '+this.$store.state.user.signedIn);
            // console.log(this.$store.state.user.userAccount);
            var i = 1
            console.log(this.articles.length)
            for(i; i<10; i++){
              this.getArticles(i)
              if(this.articles.length > 6)
                break;
            }
        }
  }
</script>