<template>
  <div class="home">
    <section class="img">
    <img src="../assets/logo.svg" alt="logo">
    </section>
    <section class="name">
      <router-link class="link" to="/Buy"><h1> Were it´s @!</h1></router-link>
    
    </section>
    <section class="tagLine">
    <h2>Ticketing made easy..</h2>
    </section>
    <!-- Tillfäliga länkar under dev. -->
          <router-link to="/Admin">Admin!</router-link>
          <router-link to="/Buy">Buy!</router-link>
          <router-link to="/Events">Events!</router-link>
          <router-link to="/Home">Home!</router-link>
          <router-link to="/Staff">Staff!</router-link>
          <router-link to="/Tickets">Tickets!</router-link>
    <!-- -->
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Sansita:400,800i");
@import '../scss/variable';

body {
    background-color:$orange !important;
    overflow: hidden;
}
  .home {
    margin: 2rem 0;
    font-family: 'Sansita', sans-serif;
    text-align: center;
    max-width: 18rem;
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 5fr 1fr auto ;
    grid-template-areas:
    "img"
     "name"
    "tagLine"
    }
    
  .img {
  grid-area: img;
} 
  .name {
  grid-area: name;
} 
  .tagLine {
  grid-area: tagLine;
} 
h1{
  font-family: 'Sansita', sans-serif;
  font-size: 2rem;
  margin: 0%;
  padding: 0%;
  color: #F56B9A;
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
