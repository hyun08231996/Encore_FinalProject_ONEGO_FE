<template>
  <v-card
    max-width="95%"
    flat
    class="mx-auto"
  >

  <div class="comment-box" v-for="(item, i) in items" :key="i">
    <div class="img-box">
      <img class="img" :src="item.img">
    </div>

    <div class="content">
        <span class="nickname"
          v-html="item.nickname">  
        </span>
        <span class="modDatetime" v-html="item.modDatetime"></span>

        <span class="comment-btn">
          <v-btn 
          small
          depressed
          @click = "delete2($event,i)"
          >
        삭제</v-btn></span>

        <span class="comment-btn" v-if="isedit">
          <v-btn 
          depressed
          small
          @click = "editMemo3($event,i)"
          >
        수정</v-btn></span>

        <span class="comment-btn" v-else>
          <v-btn 
          depressed
          small
          @click = "confirm($event,i)"
          >
          확인</v-btn></span>

          <v-text-field class="text" flat solo readonly dense v-model="item.comment"></v-text-field>  
    </div>
  </div>
      <div class="content">
      <textarea
        class="new_comment"
        id="new_comment"
        name="new_comment"
        placeholder="댓글을 입력해주세요!"
        max="300"
      ></textarea>
      <button 
        type="submit"
        @click = "submit"
      >등록</button>
      </div>
    <!--의문 1) 댓글 작성자 id랑 img정보를 input hidden 태그로 보내면되낭...-->
  </v-card>
</template>


<script>
export default {
     data: () => ({
      items: [
        {
          id:'1',
          userId:'asd1',
          img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          nickname: 'Brunch',
          comment: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          modDatetime: '2020-08-27'
        },
        {
          id:'1',
          userId:'asd1',
          img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          nickname: 'Brunch',
          comment: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          modDatetime: '2020-08-27'
        }
      ],
      isedit:true,
    }),

    methods: {
      delete2(i){
        this.items.splice(i,1)
      },
      editMemo3(index){
            const textarea = document.getElementsByClassName('text')
            this.isedit = false
            for(var i=0; i<textarea.length; i++){
                if(i === index){
                    //console.log(i)
                    const textareaId = textarea[i].children[0].children[0].children[0].children[0].id
                    //console.log(textareaId)
                    const element = document.getElementById(textareaId)
                    element.readOnly = false
                    document.getElementById(textareaId)?.focus()
                }
            }
      },
      confirm(index){
            const textarea = document.getElementsByClassName('text')
            this.isedit = true
            for(var i=0; i<textarea.length; i++){
                if(i === index){
                    //console.log(i)
                    const textareaId = textarea[i].children[0].children[0].children[0].children[0].id
                    //console.log(textareaId)
                    const element = document.getElementById(textareaId)
                    element.readOnly = true
                }
            }
      },

      submit(){
        const newcommentEL = document.getElementById("new_comment")
        const newcomment = newcommentEL.value.trim()

        function dateToString(date){
          const dateString = date.toISOstring()
          const dateToString = dateString.substring(0,10) + " "+dateString.substring(11,19)
          return dateToString
        }
        
        if(newcomment) {
          const dateEL = document.createElement('div')
          dateEL.classList.add("modDatetime")
          const dateString = dateToString(new Date())
          dateEL.innerText = dateString

          const contentEL = document.createElement('div')
          contentEL.classList.add('comment-box')
          contentEL.innerText = newcomment

          const commentEL = document.createElement('div')
          commentEL.classList.add('content')
          commentEL.append(contentEL)
          commentEL.append(contentEL)

          document.getElementsByClassName("comment-box").append(commentEL)
          newcommentEL.value=""

        }else{
           alert("댓글은 2글자이상 작성해주세요!");
        }

      }
     
  
    }
}
</script>

<style>
.comment-box{
  margin-top: 10px;
  width: 96%;
  min-height: 100px;
}
.content{
  width: 90%;
  float: right;
  height: 100px;
}
.img-box{
  width: 60px;
  height: 60px; 
  border-radius: 70%;
  overflow: hidden;
  float:left;
  margin-top: 15px;
  margin-bottom: 20px;
  margin-left: 20px;
}
.img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nickname{
   font-family: Noto Sans KR; 
   font-size : 1.25rem; 
   font-weight: 400;
   width: 80%;
   height: 35px;
   padding-top: 10px; 
   padding-left: 10px;
}
.comment{
  font-family: Noto Sans KR; 
  font-size : 1rem; 
  font-weight: 300;
  padding-bottom: 10px;
}
.modDatetime{
  padding-left: 10px;
  font-weight: 200;
}
.text{
  width: 100%;
}
.comment-btn{
  vertical-align: middle;
  float: right;

}
.form{
  width: 100%; 
  margin-left: 100px; 
}
.new_comment{
 min-width: 800px;
 padding-left: 30px;
 height: 20px;
}
</style>