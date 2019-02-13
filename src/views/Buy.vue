<template>
  <div class="buy">
    <section class="heading">
    <h1>Kassa</h1>
    <p>Du köper biljetter till följande evenimang:</p>
    </section>
    <section class="eventInfo">
      <h2>Bamse på turné</h2> 
      <p>Scandinavium</p>
      <p>16 NOV lör - 14:00</p>
    </section>

    <section class="sumPrice">1045:-</section>
    <section class="amountMinus">
      <button>-</button>
    </section>
    <section class="amount"> 3</section>
    <section class="amountPlus">
      <button>+</button>
    </section>
    
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
@import url("https://fonts.googleapis.com/css?family=Sansita:400,800i");

  .buy {
    margin: 2rem 0;
    font-family: 'Sansita', sans-serif;
    max-width: 18rem;
    width: 100%;
    display: grid;
    grid-template-columns: 3;
    grid-template-rows: 90px 120px 120px 90px  90px ;
    grid-template-areas:
    "heading heading heading"
    "eventInfo eventInfo eventInfo"
    "sumPrice sumPrice sumPrice"
    "amountMinus amount amountPlus"
    "btnBuy btnBuy btnBuy"
  }

  .heading {
  grid-area: heading;
} 

.eventInfo {
  grid-area: eventInfo;
  line-height: 40px;
}
.eventInfo h2, p {
  vertical-align: middle;
  margin: 0;
  padding: 0%;
}
.sumPrice {
  grid-area:sumPrice ;
  font-size: 2.5rem;
  margin-top: 30px;
  border: 1px solid #F56B9A;
  display: flex;
  justify-content: center;
  align-items: center;
}
.amountMinus {
  grid-area: amountMinus;
  border: 1px solid #F56B9A;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

}
.amount {
  grid-area: amount;
    border: 1px solid #F56B9A;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.amountPlus {
  grid-area: amountPlus;
  border: 1px solid #F56B9A;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

 
}
.btnBuy {
  grid-area: btnBuy;

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
  background-color: #F56B9A;
  text-decoration: none;
  color: #ffffff;
  font-size: 2rem;
}
h1 {
  font-size:2.5rem;
  margin-top: 0;
  margin-bottom: .5rem;
}
h1, h2 {
  color: #F56B9A;
}
p {
  color: #ffffff;
}
</style>
