<template>
<article @click="setEvent(event)" class="event">
    <section class="event-list">
      <div class="event-list-date">
            <h1>{{ event.date.day }}</h1>
            <p>{{ event.date.month }}</p>
        </div>
        <div class="event-list-event">
              <h1>{{ event.name }}</h1>
            <p>{{ event.where }}</p>
            <span class="event-list-event-span-one">{{ event.when.from }} - {{ event.when.to }}</span>
            <span class="event-list-event-span-two">{{ event.price }} sek</span>
        </div>
    </section>
  </article>
</template>

<script>
export default {
    name: 'event',
    props: ['event'],
    methods: {
      setEvent(event) {
        this.$store.commit('selectedEvent', event)
        this.$router.push({ name: 'buy', params: {id:event._id} })
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Sansita+One');
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');
.event {
    display: flex;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .event-list {
    font-family: Fira Sans;
    grid-area: event-list;
    max-width: 20rem;
    width: 100%;
    display: grid;
    grid-template-columns: 22% 78%;
    grid-template-rows: 70px;
    cursor: pointer;
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
    margin-left: .5rem;
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