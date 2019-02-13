<template>
  <div class="buy">
    <section class="heading">
    <h1>Kassa</h1>
    <p>Du köper biljetter till följande evenimang:</p>
    </section>
    <section class="eventInfo">
      <h3>Bamse på turné</h3> 
      <p>Scandinavium</p>
      <p>16 NOV lör - 14:00</p>
    </section>
    <section class="empty"></section>
    <section class="sumPrice">1045:-</section>
    <section class="amountMinus">
      <button>-</button>
    </section>
    <section class="amount"> 3</section>
    <section class="amountPlus">
      <button>+</button>
    </section>
    <section class="empty2"></section>
    <section class="btnBuy">
      <router-link class="btn" to="/#">Boka!</router-link>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .buy {
    margin: 2rem 0;
    font-family: 'Sansita', sans-serif;
    max-width: 18rem;
    width: 100%;
    display: grid;
    grid-template-columns: 3;
    grid-template-rows: 90px 90px 30px 90px 90px 30px 90px ;
    grid-template-areas:
    "heading heading heading"
     "eventInfo eventInfo eventInfo"
     "empty empty empty"
    "sumPrice sumPrice sumPrice"
    "amountMinus amount amountPlus"
    "empty2 empty2 empty2"
    "btnBuy btnBuy btnBuy"
  }

  .heading {
  grid-area: heading;
  background: #4f4f4f;
}
.eventInfo {
  grid-area: eventInfo;
  background: #edf05a;
}
.eventInfo h3, p {
  margin: .3rem;
  padding: 0%;
}
.sumPrice {
  grid-area:sumPrice ;
  background: #47e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.amountMinus {
  grid-area: amountMinus;
  background: #13721f;
  display: flex;
  justify-content: center;
  align-items: center;
}
.amount {
  grid-area: amount;
  background: #3d0742;
  display: flex;
  justify-content: center;
  align-items: center;
}
.amountPlus {
  grid-area: amountPlus;
  background: #2df105;
  display: flex;
  justify-content: center;
  align-items: center;
 
}
.btnBuy {
  grid-area: btnBuy;
  background: #fc0000;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font-size: 3rem;
}
.btn {  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  border-radius: 15px;
  background-color: deeppink;
  text-decoration: none;
 color: #ffffff;
  font-size: 2rem;
}

</style>
