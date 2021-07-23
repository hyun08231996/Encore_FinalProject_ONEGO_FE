<template>
    <div id="main">
        <div id="textArea">
            <br>
            <!-- ONEGO Intro -->
            <div class="intro_onego">
                <h1>커서가 깜빡이는 순간, 당신은 이미 작가입니다.</h1>
                <h1 style="opacity: 80%">ONEGO에서는 작가님을 응원합니다.</h1>
            </div>
            <br><br>
            <!-- Slide Area -->
            <div id="discover_posts">
                <Carousel />
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Carousel from '../components/layout/Carousel.vue'

  export default Vue.extend({
		data: () => ({

		}),
		name: "Header",
		components:{
			Carousel
		},
	})
</script>
<style>
    #discover_posts {
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
    }
</style>