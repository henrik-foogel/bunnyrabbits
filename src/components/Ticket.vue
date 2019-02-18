<template>
<article class="ticket">
    <section class="what">{{ ticket }}</section>
    <section class="where">{{ ticket }}</section>
    <section class="when">{{ ticket }}</section>
    <section class="from">{{ ticket }}</section>
    <section class="to">{{ ticket }}</section>
    <section class="info">{{ ticket }}</section>
    <section class="code">{{ ticket }}</section>
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
.tickets {
  color: white;
  max-width: 19rem;
  width: 100%;
  background: green;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 60px 120px 60px 60px 120px;
  grid-template-areas: "what what what"
  "where where where"
  "when from info"
  "code code code"
}

.what {
  grid-area: what;
  background: #4f4f4f;
}
.where {
  grid-area: where;
  background: #577657;
}
.when {
  grid-area: when;
  background: #112222;
}
.from {
  grid-area: from;
  background: #989898;
}
.to {
  grid-area: to;
  background: #1122dd;
}
.info {
  grid-area: info;
  background: #12ab11;
}
.code {
  grid-area: code;
  background: #577657;
}
</style>