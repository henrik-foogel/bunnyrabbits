<template>
<main>
  <div class="page"><span class="arrows" @click="ticketPageDown()">&#8249;</span><span>{{ page }}</span><span class="arrows" @click="ticketPageUpp()">&#8250;</span></div>
  <ticket v-for="ticket in tickets[ticketIndex]" :key="ticket.code" :ticket="ticket"></ticket>

  </main>
</template>

<script>
import ticket from '@/components/Ticket';

export default {
  name: 'tickets',
  components: {
    ticket
  },
  data() {
    return {
      page: 1,
      ticketIndex: 0
    }
  },
  computed: {
    tickets(){
      return this.$store.state.tickets
    }
  },
  methods: {
    ticketPageUpp() {
      if(this.ticketIndex == this.$store.state.tickets.length-1) {
        console.log(this.$store.state.tickets.length)
        this.page = 1
        this.ticketIndex = 0
      } else {
        this.page++
        this.ticketIndex++
      }
    },
    ticketPageDown() {
      if(this.ticketIndex == 0) {
        console.log(this.$store.state.tickets.length)
        this.page = this.$store.state.tickets.length
        this.ticketIndex = this.$store.state.tickets.length-1
      } else {
        this.page--
        this.ticketIndex--
      }
    }
  },
  beforeMount() {
    for(let i = 0; i <= 60; i++){
      if(localStorage.getItem('tickets'+i)){
        this.$store.dispatch('getTickets', i)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  main {
    font-family: "Sansita", sans-serif;
    display: flex;
    align-self: baseline;
    flex-direction: column;
  }
  .page {
    margin-bottom: 1rem;
    color: #fff;
    font-size: 2rem;

    span {
      padding: 1rem;
    }

    .arrows {
      cursor: pointer;
      font-weight: 900;
    }
  }
</style>
