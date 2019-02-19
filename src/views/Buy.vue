<template>
  <div class="buy">
    <section class="heading">
    <p>Du köper biljetter till följande evenimang:</p>
    </section>
    <section class="eventInfo">
      <h2>{{ event.name }}</h2> 
      <p id="date">{{ event.date.day }} {{ event.date.month }} {{ event.when.from }}</p>
      <p> {{ event.where }}</p>
    </section>

    <section class="sumPrice"><h4>{{  amount * event.price }} SEK</h4></section>
    <section class="amountMinus" @click="removeTickets">
      <span><h1>-</h1></span>
    </section>
    <section class="amount"><h2>{{ amount }}</h2></section>
    <section class="amountPlus"  @click="addTickets">
     <span><h1>+</h1></span>
    </section>
    <section class="btnBuy">
      <div class="btn" @click="buy(event)">Boka!</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'buy',
  data() {
    return {
      amount: 1
    }
  },
  computed: {
    event() {
      var id = this.$route.params.id;
        return this.$store.state.events.find(function(event) {          
          return event._id == id
        })
    },
  },
  methods: {
    buy() {
        console.log(this.event._id + " " + this.amount)
        this.$store.dispatch('addTicket', { event: this.event._id, amount: this.amount });
        this.$router.push({name: 'tickets'})
      },
    addTickets() {
      this.amount++
    },
    removeTickets(){
      this.amount--
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Sansita:400,800i");

  .buy {
    font-family: 'Sansita', sans-serif;
    max-width: 18rem;
    width: 100%;
    display: grid;
    grid-template-columns:  repeat(3, 1fr);
    grid-template-rows: 90px 120px 120px 90px auto ;
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
  line-height: 30px;
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
  color: #ffffff;
  cursor: pointer;
}
.amount {
  grid-area: amount;
  border: 1px solid #F56B9A;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.amount h2 {
  color: #ffffff;
}
.amountPlus {
  grid-area: amountPlus;
  border: 1px solid #F56B9A;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: #ffffff;
  cursor: pointer;
}
.btnBuy {
  grid-area: btnBuy;
  display: flex;
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
}
h1 {
  font-size:2.5rem;
  margin-top: 0;
  margin-bottom: .5rem;
}
.eventInfo h1, h2 {
  color: #F56B9A;
}

p {
  color: #ffffff;
}
h4 {
  color: #ffffff;
  font-size: 2rem;
}
span {
  text-decoration: none;
}
#date {
  color:#37AEAB;
}
</style>
