<template>
  <section class="hero is-bold is-fullheight bg">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="letter">
          <h1 class="title"> 
            hello
          </h1> 
        </div>
        <!-- .letter -->
        <div class="social">
          <router-link to="/signup">signup</router-link> 
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
