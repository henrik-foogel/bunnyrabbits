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
    selectedEvents(state, event) {
      state.event = event
    },
    setEvents(state, events) {
      state.events = events
    }
  },
  actions: {
    async getEvents(ctx) {
      let events = await axios.get('https://localhost:3000/events')
      ctx.commit('setEvents', events.data)
 
    } 
  }
})
