<template>
  <section class="hero is-bold is-fullheight bg">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="letter">
          <h1 class="title">
            <img src="./../assets/logo@1.5x.png" />
          </h1> 
          <p>
            빈칸은 아티스트의 작품을 <br/> 
            리미티드 에디션 형태로 제작하여 <br/> 
            작품의 가치를 선물합니다.<br/><br/> 
            공간을 새롭게 만들고 싶다면,<br/> 
            순간을 특별하게 그리고 싶다면,<br/>            
            오래 기억될 선물을 주고 싶다면,<br/>
            <br/>
            <strong>빈칸이 당신의 삶에 특별함을 채워 드립니다.</strong><br/>
          </p>
        </div>
        <!-- .letter -->
        <div class="social">
          <router-link to="/signup">signup</router-link>
          <a href="https://www.instagram.com/vinkanlab/" target="_blank">
            <span class="icon"> <i class="fa fa-instagram"></i> </span> 
            인스타그램 바로가기
           </a>
        </div>
      </div>
    </div>
  </section> 
</template>

<script lang="ts">
import Hello from './Hello.ts'
export default Hello
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped> 
.letter {

  @media screen and (min-width: 770px) {
    img {
      max-width: 210px;
    }
  }

}


</style>
