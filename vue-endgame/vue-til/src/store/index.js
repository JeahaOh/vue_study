import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
  deleteCookie,
} from '@/utils/cookies.js';
import { loginUser } from '@/api/auth.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      //console.log(data);
      //console.log(data.token);
      const username = data.user.username;
      const token = data.token;
      //console.log('res.data.username : ', username);

      commit('setUsername', username);
      commit('setToken', token);

      saveUserToCookie(username);
      saveAuthToCookie(token);

      return data;
    },
    LOGOUT({ commit }) {
      commit('setUsername', '');
      commit('setToken', '');

      deleteCookie('til_auth');
      deleteCookie('til_user');
    },
  },
  modules: {},
});
