<template>
<article class="ticket">
  
    <section class="what">{{ticket.event.name}}</section>
    <section class="where"><h3><span>VENUE: </span><br> {{ticket.event.where}}</h3></section>
    <section class="when"><h3><span>DATE: </span><br> {{ticket.event.date.day}}  {{ticket.event.date.month}}</h3></section>
    <section class="from"><h3><span>FROM: </span><br> {{ticket.event.when.from}}</h3></section>
    <section class="to"><h3><span>TO: </span><br> {{ticket.event.when.to}}</h3></section>
    <section class="code">{{ticket.code}}</section>
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
@import '../scss/variable';
@import url('https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text');

.ticket {
  max-width: 1000px;
  width: 19rem;
  background: #fff;
  display: grid;
  border-radius: 5px;
  margin-bottom: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 90px 75px 70px 100px;
  grid-template-areas:
  "what what what"
  "where where where"
  "when from to"
  "code code code";

    .what {
      margin-top: .6rem;
      grid-area: what;
      font-size: 2rem;
      color: $main_bg;
      font-weight: 700;
      @extend %center;
      padding-bottom: 0.5rem;
    }
    .where {
      grid-area: where;
      background: #eee;
      font-size: 1.5rem;
      font-weight: 700;
      @extend %center;
      padding-bottom: .2rem;
      padding-bottom: 2rem;
    }
    .when {
      grid-area: when;
      background: #ddd;
      border: 1px dotted black;
      @extend %center;
      padding-bottom: .6rem;
      font-size: 1.3rem;
      font-weight: 800;
      padding-bottom: 1.5rem;
    }
    .from {
      grid-area: from;
      background: #ddd;
      border: 1px dotted black;
      @extend %center;
      padding-bottom: .6rem;
      font-size: 1.3rem;
      font-weight: 800;
      padding-bottom: 1.5rem;
    }
    .to {
      grid-area: to;
      background: #ddd;
      border: 1px dotted black;
      @extend %center;
      padding-bottom: .6rem;
      font-size: 1.3rem;
      font-weight: 800;
      padding-bottom: 1.5rem;
    }
    .code {
      grid-area: code;
      font-family: 'Libre Barcode 39 Text', cursive;
      font-size: 5rem;
      @extend %center;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    h3 {
      margin:0;
    }
    span {
      font-size: 0.6rem;
      font-weight: 800;
      color: #555;
      padding: 0;
    }
}
</style>
