import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: [],
  },
  mutations,
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    },
  },
  actions,
});

export default store;
