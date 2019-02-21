<template>
<main>
  <ticket v-for="ticket in tickets" :key="ticket.code" :ticket="ticket"></ticket>
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
    if(localStorage.getItem('tickets')){
      this.$store.dispatch('getTickets')
    }
  }
}
</script>

<style scoped>
</style>
