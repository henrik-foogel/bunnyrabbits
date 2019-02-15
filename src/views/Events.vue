<template>
  <div class="events">
    <section class="event-title">Events</section>
    <section class="event-search">
      <span class="fa fa-search" style="top: 1.8rem; left: 0.7rem; float: left; color: rgba(255, 255, 255, 0.2);"></span>
      <input type="text">
    </section>
    <section class="event-list">
      <div class="event-list-date">
            <h1>18</h1>
            <p>JUL</p>
        </div>
        <div class="event-list-event">
            <h1>John Carpenter</h1>
            <p>Scandinavium</p>
            <span class="event-list-event-span-one">20.00 - 22.00</span>
            <span class="event-list-event-span-two">350 sek</span>
        </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'events',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Sansita+One');
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');
  .events {
    max-width: 20rem;
    width: 100%;
    height: 50rem;
    display: grid;
    grid-template-rows: 120px 100px 250px;
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
    margin-top: 3rem;
  }
  .event-search {
    grid-area: event-search;
  }
  .event-search span {
    position: relative;
  }
  .event-search input {
    border: 0;
    width: 100%;
    height: 2.5rem;
    left: 32px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  .event-list {
    font-family: Fira Sans;
    grid-area: event-list;
    max-width: 20rem;
    width: 100%;
    display: grid;
    grid-template-columns: 22% 78%;
    grid-template-rows: 70px;
    color: #FFFFFF;
    grid-template-areas: "event-list-date event-list-event"
  }
  .event-list-date {
    grid-area: event-list-date;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 3px;
  }
  .event-list-event {
    margin-left: 1.5rem;
    grid-area: event-list-event;
    border-bottom: 0.5px solid rgba(255,255,255,.5);
  }
  .event-list-date h1, .event-list-date p {
    width: 100%; 
    text-align: center;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    color: #fff;
  }
  .event-list-date h1 {
    margin: 1rem 0 0;
  }
  .event-list-date p {
    margin: 0;
  }

  .event-list-event {
    text-align: left;
  }

  .event-list-event h1 {
    margin: -0.2rem 0 0.3rem;
    font-size: 22px;
    color: #fff;
    text-shadow: 1px 1px 0px #F56B9A;
    font-weight: normal;
  }
  .event-list-event p {
    margin: 0;
    font-size: 12px;
    font-style: italic;
    color: rgba(255, 255, 255, 0.8);
    padding-bottom: 0.3rem;
  }
  .event-list-event span {
    padding-bottom: -1rem;
  }
  .event-list-event-span-one {
    font-size: 13px;
    color: #D0D0D0;
  }
  .event-list-event-span-two {
    color:#37AEAB;
    float: right;
    font-weight: bold;
  }
</style>