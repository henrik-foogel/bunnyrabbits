<template>
<main>
  <ticket v-for="ticket in tickets[0]" :key="ticket.code" :ticket="ticket"></ticket>

  </main>
</template>

<script>
import ticket from '@/components/Ticket';

export default {
  name: 'tickets',
  components: {
    ticket
  },
  computed: {
    tickets(){
      return this.$store.state.tickets
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

<style scoped>
</style>
