<template>
<article class="ticket">
  <div class="evenimang"><p>Evenemang: </p></div>
    <section class="what"><p>{{ticket.event.name}}</p></section>
    <section class="where"><h3>Vart: <br> {{ticket.event.where}}</h3></section>
    <section class="date"><h3>Datum: <br> {{ticket.event.date.month}} {{ticket.event.date.day}}</h3></section>
    <section class="time"><h3>Tid: <br> {{ticket.event.when.from}} - {{ticket.event.when.to}}</h3></section>
    <section class="price"><h3>Pris: <br>{{ticket.event.price}}:-</h3></section>
    <section class="code"><h3>Kod:</h3><h3 id="barcode"> <br> {{ticket.code}}</h3></section>
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
@import url("https://fonts.googleapis.com/css?family=Sansita:400,800i");
@import '../scss/variable';
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
      "evenimang what what"
      "where where where"
      "date date date"
      "time time time"
      "price price price"
      "code code code";

      .evenimang {
      grid-area: evenimang;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
        p {
          margin: .2rem;
          color: $greyich;
          text-transform: uppercase;   
          font-family:"Lucida Console", Monaco, monospace;

        }
      }

      .what {
        grid-area: what;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;

        p {
         color: $pink;
         margin: .5rem;
         font-family: 'Sansita', sans-serif;
         font-weight: 800;
         font-size: 1.5rem;
        }
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
