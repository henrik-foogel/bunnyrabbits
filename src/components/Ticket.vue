<template>
<article class="ticket">
    <section class="what"><h3>Evenemang: <br> {{ticket.event.name}}</h3></section>
    <section class="where"><h3>Vart: <br> {{ticket.event.where}}</h3></section>
    <section class="date"><h3>Datum: <br> {{ticket.event.date.month}} / {{ticket.event.date.day}}</h3></section>
    <section class="time"><h3>Tid: <br> {{ticket.event.when.from}} - {{ticket.event.when.to}}</h3></section>
    <section class="price"><h3>Pris: <br>{{ticket.event.price}}:-</h3></section>
    <section class="code"><h3>Vertifiering code:</h3><h3 id="barcode"> <br> {{ticket.code}}</h3></section>
  </article>
</template>

<script>
export default {
    name: 'ticket',
    props: ['ticket'],
    methods: {
    }
}
</script>

<style lang="scss" scoped>
@font-face{
  font-family: 'barCode';
  src: url(../assets/barcode.ttf);
}
  .ticket {
      color: #000;
      max-width: 20rem;
      width: 100%;
      background: whitesmoke;
      border: 2px solid black;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 60px 60px 60px 60px 60px 120px;
      grid-template-areas:
      "what what what"
      "where where where"
      "date date date"
      "time time time"
      "price price price"
      "code code code";

      h3 {
        margin: .2rem;
      }
      .what {
      grid-area: what;
       border: 1px solid black;
       background: rgb(136, 135, 135);
      }
      .where {
      grid-area: where;
      border: 1px solid black;
      }
      .date {
      grid-area: date;
      border: 1px solid black;
      border-bottom: 0px;
      }
      .time {
      grid-area: time;
      border: 2px solid black;
      }
      .price {
      grid-area: price;
      border: 1px solid black;
      border-top: 0px;
      }
      .code {
      grid-area: code;
      border: 1px solid black;

      #barcode {
      font-family: barCode;
      font-size: 1rem;
      line-height: 1rem;
      padding-top: 1.2rem;
      }  
  }
}
</style>
