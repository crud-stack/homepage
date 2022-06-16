<template>
  <div>
    <b-container>
      <Header/>
    </b-container>
    <nuxt/>
    <!--    <div class="b-example-divider"></div>-->
    <Footer/>
  </div>
</template>




<script>
    import Header from '../components/common/Header.vue'
    import Footer from '../components/common/Footer.vue'
    export default {
        name: '',
        components: {
            Header,
            Footer
        },
    }
</script>

<style>
  /*@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');*/

  /*html, body {*/
  /*  font-family: 'Jua', sans-serif;*/
  /*}*/
  /*#app {*/
  /*  font-family: 'Jua', sans-serif;*/
  /*}*/
  .nuxt-link-exact-active{
    font-weight: bold;
    color: black;
  }
  .link-secondary{
    color: black;
  }
</style>
