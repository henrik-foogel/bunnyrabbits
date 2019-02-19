<template>
<article class="ticket">
    <section class="what"><h3 class="rubrik">Evenemang: <br> {{ticket.event.name}}</h3></section>
    <section class="where"><h3 class="rubrik">Vart: <br> {{ticket.event.where}}</h3></section>
    <section class="date"><h3 class="rubrik">Datum: <br> {{ticket.event.date.month}} / {{ticket.event.date.day}}</h3></section>
    <section class="from"><h3 class="rubrik">Börjar: <br> {{ticket.event.when.from}}</h3></section>
    <section class="to"><h3 class="rubrik">Slutar: <br> {{ticket.event.when.to}}</h3></section>
    <section class="price"><h3 class="rubrik">Pris: <br>{{ticket.event.price}}:-</h3></section>
    <section class="code"><h3 class="rubrik">Vertifiering code:</h3><h3 id="barcode"> <br> {{ticket.code}}</h3></section>
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
      background: green;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 60px 60px 60px 60px 60px 120px;
      grid-template-areas:
      "what what what"
      "where where where"
      "date date date"
      "from . to"
      "price price price"
      "code code code";

      h3 {
        margin: .2rem;
      }
      .what {
      grid-area: what;
      background: #9c0808;
      }
      .where {
      grid-area: where;
      background: #577657;
      }
      .date {
        grid-area: date;
        background: hotpink;
      }
      .from {
      grid-area: from;
      background: #989898;
      }
      .to {
      grid-area: to;
      background: #1122dd;
      }
      .price {
        grid-area: price;
        background: saddlebrown;
      }
      .code {
      grid-area: code;
      background: #9c0808;

      #barcode {
      font-family: barCode;
      font-size: 1rem;
      line-height: 1rem;
      padding-top: 1.2rem;
      }  
  }
}
</style>
