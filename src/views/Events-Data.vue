<template>
  <div class="events">
    <section class="event-title">Events</section>
    <section class="event-search"><input type="text"></section>
    <section class="event-list"></section>
  </div>
</template>

<script>
export default {
  name: 'events'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Sansita+One');

  .events {
    max-width: 17rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 60px 60px 120px;
    grid-template-areas: "event-title"
    "event-search"
    "event-list"
  }

  .event-title {
    grid-area: event-title;
    font-family: 'Sansita One';
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 32px;
    text-align: center;
    color: #F56B9A;
    margin-top: 1rem;
  }
  .event-search {
    grid-area: event-search;
    background: firebrick;
  }
  .event-list {
    grid-area: event-list;
    background: steelblue;
  }

  /*.event-title {
    position: absolute;
    width: 311px;
    height: 45px;
    left: 32px;
    top: 34px;
    font-family: 'Sansita One';
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 32px;
    text-align: center;
    color: #F56B9A;
  }

  .event-search {
    position: absolute;
  }*/
</style>
