<template>
  <article class="tickets">
    <section class="what"></section>
    <section class="where"></section>
    <section class="when"></section>
    <section class="from"></section>
    <section class="to"></section>
    <section class="info"></section>
    <section class="code"></section>
  </article>
</template>

<style scoped>
.tickets {
  max-width: 17rem;
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
