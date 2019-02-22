import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    tickets: [],
    event: {},
    verifyData: null
  },
  mutations: {
    selectedEvent(state, event) {
      state.event = event
    },
    setEvents(state, events) {
      state.events = events
    },
    setTickets(state, tickets) {
        state.tickets.push(tickets)
    } ,
    setVerifyData(state, data) {
      state.verifyData = data;
    }
  },
  actions: { 
    async createEvents(ctx, event) {
      try{
        await axios.post('http://localhost:3000/events', event);
        
        ctx.dispatch('getEvents');

      } catch (err) {
          console.err(err.stack);
      }
    },
    async getEvents(ctx) {
      let events = await axios.get('http://localhost:3000/events')
      ctx.commit('setEvents', events.data)
    },
    async addTicket(ctx, buyData) {
      let tickets = await axios.post('http://localhost:3000/tickets', buyData)
      let time = new Date().getUTCSeconds()
      localStorage.setItem('tickets' + time, JSON.stringify(tickets.data))
    },
    async getTickets(ctx, i) {
        if(localStorage.getItem(`tickets`+i)){
          let tickets = await localStorage.getItem(`tickets`+i)
          let t = (JSON.parse(tickets));ctx.commit('setTickets', t)
        }
    },
    async verifyTicket(ctx, code) {
      let verify = await axios.get(`http://localhost:3000/verify/${code}`);
      ctx.commit('setVerifyData', verify.data);
    }
  }
})
