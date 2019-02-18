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
  },
  actions: {
    async getEvents(ctx) {
      let events = await axios.get('http://localhost:3000/events')
      ctx.commit('setEvents', events.data)
    },
    async addTicket(ctx, buyData) {
      let tickets = await axios.post('http://localhost:3000/tickets', buyData)
      console.log(tickets);
      //ctx.commit('setEvents', events.data)
    }
  },
  setEvent(ctx, event) {
    ctx.commit('selectedEvents', event)
  }
})
