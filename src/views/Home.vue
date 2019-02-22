<template>
<main>
<mainLink></mainLink>
  <div class="home">
    <section class="img">
    <img src="../assets/logo.svg" alt="logo">
    </section>
    <section class="name">
      <router-link class="link" to="/Events"><h1> Were it´s @!</h1></router-link>
    </section>
    <section class="tagLine">
    <h2>Ticketing made easy..</h2>
    </section>
  </div>
    <div class="dot">
      <dot :currentDot="currentDot"/>
    </div>
</main>
</template>

<script>
import mainLink from '@/components/MainLink';
import dot from '@/components/Dot';

export default {
  name: 'home',
    data(){
    return {
      currentDot: 1,
    }
  },
  components: {
    mainLink,
    dot
  },
  beforeMount() {
    this.$store.state.tickets = []
  }
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Sansita:400,800i");
@import '../scss/variable';


body {
    overflow: hidden;
}
  .home {
    margin: 2rem 0;
    font-family: 'Sansita', sans-serif;
    text-align: center;
    max-width: 18rem;
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 3fr 1fr 60px 150px;
    grid-template-areas:
    "img"
     "name"
    "tagLine"
    "dot"
    }
    
  .img {
  grid-area: img;
  margin-top: 2rem;
} 
  .name {
  grid-area: name;
} 
  .tagLine {
  grid-area: tagLine;
} 
.dot{
  grid-area: dot;
  @extend %center;
  width: 100%;
  height: 30px;
  padding: 1rem  0;
  z-index: 10;
  bottom: 0px;
  background: $main_bg;
}
h1{
  font-family: 'Sansita', sans-serif;
  font-size: 2rem;
  margin: 0%;
  padding: 0%;
  color: $pink;
}
h2 {  
  margin: 0%;
  padding: 0%;
  font-size: .7rem;
  font-style: italic;
  color: whitesmoke;
}
.link {
  text-decoration: none;
}

</style>
