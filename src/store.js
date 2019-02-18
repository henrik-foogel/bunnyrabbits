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
    async getEvents(ctx) {
      let events = await axios.get('http://localhost:3000/events')
      ctx.commit('setEvents', events.data)
    },
    async addTicket(ctx, buyData) {
      let tickets = await axios.post('http://localhost:3000/tickets', buyData)
      console.log(buyData)
      ctx.commit('setTickets', tickets.data)
      localStorage.setItem('tickets', JSON.stringify(tickets.data))
    },
    getTickets(ctx) {
      let tickets = localStorage.getItem('tickets')
      let t = (JSON.parse(tickets));
      console.log(t[0].event._id);
      ctx.commit('setTickets', t)
    }
  },
})
