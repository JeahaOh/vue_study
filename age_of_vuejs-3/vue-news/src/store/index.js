import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
    list: [],
  },
  mutations,
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    },
    fetchedUser(state) {
      return state.user;
    },
  },
  actions,
});
