<template>
  <div class="buy">
    <section class="heading">
    <p>You're buying tickets to:</p>
    </section>
    <section class="eventInfo">
      <h2>{{ event.name }}</h2> 
      <p id="date">{{ event.date.day }} {{ event.date.month }} {{ event.when.from }}</p>
      <p> {{ event.where }}</p>
    </section>
    
    <section class="ticketsAvailable">
      <div><h3>Tickets available: <br> {{ event.tickets.available }}</h3></div>
    </section>
    <section class="sumPrice"><h4>{{  amount * event.price }} SEK</h4></section>
    <section class="amountMinus" @click="removeTickets">
      <span><h1>-</h1></span>
    </section>
    <section class="amount"><h2>{{ amount }}</h2></section>
    <section class="amountPlus"  @click="addTickets">
     <span><h1>+</h1></span>
    </section>
    <section class="buying-more">
      <p>If you buy tickets in different rounds, then they will not end up in order on the ticket side</p></section>
    <section class="btnBuy">
      <div class="btn" @click="buy(event)">Buy!</div>
    </section>
    <div class="dot">
      <dot :currentDot="currentDot"/>
    </div>
  </div>
</template>

<script>
import dot from '@/components/Dot';

export default {
  name: 'buy',
  data() {
    return {
      amount: 1,
      currentDot: 3
    }
  },
  components: {
    dot
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
        if (this.event.tickets.available >= this.amount && this.amount > 0) {
          this.$store.dispatch('addTicket', { event: this.event._id, amount: this.amount });
          this.$router.push({name: 'tickets'})
        } else {
          console.log("No tickets for you!")
        }
      },
    addTickets() {
      this.amount++
    },
    removeTickets(){
      this.amount--
    }
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
  .buy {
    font-family: 'Sansita', sans-serif;
    max-width: 18rem;
    display: grid;
    grid-template-columns:  repeat(3, 1fr);
    grid-template-rows: 90px 110px 50px 120px 90px 60px auto 60px ;
    grid-template-areas:
    "heading heading heading"
    "eventInfo eventInfo eventInfo"
    "ticketsAvailable ticketsAvailable ticketsAvailable"
    "sumPrice sumPrice sumPrice"
    "amountMinus amount amountPlus"
    "buying-more buying-more buying-more"
    "btnBuy btnBuy btnBuy"
    ". dot .";
  }

  .heading {
  grid-area: heading;
  margin-top: 1.5rem;
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
.ticketsAvailable {
  grid-area: ticketsAvailable;
  color: #fff;
}
.ticketsAvailable div {
  vertical-align: middle;
}
.ticketsAvailable div h3 {
  margin: 0;
  padding: 0;
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
.buying-more {
  grid-area: buying-more;
}
.btnBuy {
  grid-area: btnBuy;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {  
  width: 100%;
  border-radius: 8px;
  background-color: #F56B9A;
  text-decoration: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  padding-bottom: .5rem;
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
