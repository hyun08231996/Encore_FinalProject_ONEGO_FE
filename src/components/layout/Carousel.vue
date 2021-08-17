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
        v-slot="{ active, toggle }"
      >
      
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-0"
          height="600"
          width="800"
          @click="toggle"
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
            async getArticles(){
                await http
                    .get('/board', {
                        params: { 'pageNumber': 1 }})
                    .then(response => {
                        console.log(response.data)
                        this.articles = response.data
                    })
            },
        },
        created() {
            // console.log('main user: '+this.$store.state.user.signedIn);
            // console.log(this.$store.state.user.userAccount);
            this.getArticles()
        }
  }
</script>