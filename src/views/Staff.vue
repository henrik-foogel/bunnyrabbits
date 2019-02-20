<template>
    <main id="staff">
        <section class="logo">
            <img  id="small" src="../assets/logo.svg" alt="logo">
            <p>staff</p>
        </section>
        <section class="img">
            <img v-if="!doStuff" class="pass" src="../assets/pass.jpg" alt="stiffler tumbs up">
          <!--  <img v-if="doStuff" class="pass" src="../assets/fail.png" alt="stiffler tumbs up"> -->
        </section>
        <section class="input">
            <input type="text" name="vertify" id="">
        </section>
        <section class="btn">
            <button @click="doStuff">Vertify ticket!</button>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

 <style lang="scss" coped>
 @import '../scss/variable';
 @import url('https://fonts.googleapis.com/css?family=Fira+Sans');

 /* Kanske onödigt att ha grid när ändå allt bara ska ligga påvaranndra, men övning ger färdighet, så vi kör på de ändå!*/
  body {

     background-color:$orange;
 }

 #staff {
    max-width: 20rem;
    width: 100%;
    height: 30rem;
    display: grid;
    grid-template-rows: 180px 180px 90px 90px;
    grid-template-areas:
     "logo"
    "img"
    "input"
    "btn"
  }

    .logo {
  grid-area: logo;
  filter: grayscale(100%);
}  
.logo p {
    text-transform: uppercase;
    font-family: 'Fira Sans', sans-serif;
    font-size: 22px;
    text-align: center;
    letter-spacing: 0.3em;
    
}
#small {
    width: 8rem;
}
 .img {
    grid-area: img;
    display: flex;
    justify-content: center;
    align-items: center;
}  
.pass {
    width: 10rem;
    border-radius: 50%;
}
 .input {
  grid-area: input;
  border: 2px solid #231F42;
} 
.input input {
    width: 99%;
    height: 100%;
    font-family: 'Fira Sans', sans-serif;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: .2em;
    color: #000;
    text-align: center;
}

  .btn {
  grid-area: btn;
} 
.btn button {
    background-color: #231F42;
    width: 100%;
    height: 100%;
    font-family: 'Fira Sans', sans-serif;
    font-weight: bold;
    font-size: 26px;
    letter-spacing: .2em;
    color: #fff;
}
</style>
