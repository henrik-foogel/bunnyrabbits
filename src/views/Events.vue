<template>
  <main class="events">
    <section class="event-title">Events</section>
    <section class="event-search">
      <span class="fa fa-search" style="top: 1.8rem; left: 0.7rem; float: left; color: rgba(255, 255, 255, 0.2);"></span>
      <input type="text" v-model="search" placeholder="search events">
    </section>
    <section class="margin">
      <event v-for="event in filteredEvents" :key="event.id" :event="event"/>
    </section>
    <span class="dot">
      <dot :currentDot="currentDot"/>
    </span>
  </main>
</template>

<script>
import event from '@/components/Event';
import dot from '@/components/Dot';

export default {
  name: 'events',
  data() {
    return {
      search: '',
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
    },
    filteredEvents: function() {
      return this.eventList.filter((event) => {
        return event.name.match(this.search.toUpperCase());
      })
    }
  },
  beforeMount() {
    this.$store.dispatch('getEvents');
    this.$store.state.tickets = []
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Sansita+One');
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');

@import '../scss/variable';

  .events {
    font-family: 'Sansita One';
    max-width: 20rem;
    width: 100%;
    height: 50rem;
    display: grid;
    grid-template-rows: 120px 100px ;
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
    color: $pink;
    margin-top: 2rem;
    bottom: 0;
    margin-bottom: 0;
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
    margin-bottom: 1.5rem;
  }
  .margin {
    margin-bottom: 3rem;
  }
 


</style>