import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    tickets: [],
    event: {}
  },
  mutations: {
    selectedEvent(state, event) {
      state.event = event
    },
    setEvents(state, events) {
      state.events = events
    },
    setTickets(state, tickets) {
      state.tickets = tickets
    } 
  },
  actions: { 
    async createEvents(ctx, event) {
      try{
        await axios.post('http://localhost:3000/events', event);
        
        ctx.dispatch('getEvents');

      } catch (err) {
          console.error(err.stack);
      }
    },
    async getEvents(ctx) {
      let events = await axios.get('http://localhost:3000/events')
      ctx.commit('setEvents', events.data)
    },
    async addTicket(ctx, buyData) {
      let tickets = await axios.post('http://localhost:3000/tickets', buyData)
      ctx.commit('setTickets', tickets.data)
      localStorage.setItem('tickets', JSON.stringify(tickets.data))
    },
    async getTickets(ctx) {
      for(let i = 0; i <= 60; i++){
        
        let tickets = await localStorage.getItem(`tickets`)
        let t = (JSON.parse(tickets));
        ctx.commit('setTickets', t)
      }
    }
  },
})
