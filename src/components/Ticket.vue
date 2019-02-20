<template>
<article class="ticket">
    <section class="what">{{ticket.event.name}}</section>
    <section class="where">{{ticket.event.where}}</section>
    <section class="when">{{ticket.event.date.day}}  {{ticket.event.date.month}}</section>
    <section class="from">{{ticket.event.when.from}}</section>
    <section class="to">{{ticket.event.when.to}}</section>
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text');

.ticket {
  max-width: 1000px;
  width: 19rem;
  background: #fff;
  display: grid;
  border-radius: 5px;
  margin-bottom: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 60px 40px 60px 100px;
  grid-template-areas: "what what what"
  "where where where"
  "when from to"
  "code code code"
}
.what {
  grid-area: what;
  font-size: 2rem;
  color:midnightblue;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.where {
  grid-area: where;
  background: #eee;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.when {
  grid-area: when;
  background: #ddd;
  border: 1px dotted black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 800;
}
.from {
  grid-area: from;
  background: #ddd;
  border: 1px dotted black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 800;
}
.to {
  grid-area: to;
  background: #ddd;
  border: 1px dotted black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 800;
}
.code {
  grid-area: code;
  font-family: 'Libre Barcode 39 Text', cursive;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>