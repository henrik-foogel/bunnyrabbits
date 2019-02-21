<template>
  <main class="events">
    <section class="event-title">Events</section>
    <section class="event-search">
      <span class="fa fa-search" style="top: 1.8rem; left: 0.7rem; float: left; color: rgba(255, 255, 255, 0.2);"></span>
      <input type="text">
    </section>
    <section>
      <event v-for="event in eventList" :key="event.id" :event="event"/>
    </section>
        <div class="dot">
      <dot :currentDot="currentDot"/>
    </div>
  </main>
</template>

<script>
import event from '@/components/Event';
import dot from '@/components/Dot';

export default {
  name: 'events',
  data(){
    return {
      currentDot: 2
    }
  },
  components: {
    event,
    dot
  }, 
  computed: {
    eventList() {
      return this.$store.state.events
    }
  },
  beforeMount() {
    this.$store.dispatch('getEvents');
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sansita+One');
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');

  .events {
    font-family: 'Sansita One';
    max-width: 20rem;
    width: 100%;
    height: 50rem;
    display: grid;
    grid-template-rows: 120px 100px;
    grid-template-areas: "event-title"
    "event-search"
    
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
    margin-top: 2rem;
    bottom: 0;
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
    color: #fff;
    font-size: 20px;
    padding-left: 2.3rem;
    max-width: -webkit-fill-available;
  }
  .dot {
    margin: 1.5rem;
  }
</style>