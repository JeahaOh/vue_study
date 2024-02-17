import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  mutations,
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  actions,
});

export default store;
