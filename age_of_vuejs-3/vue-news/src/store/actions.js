import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
} from '../api/index.js';

export default {
  // FETCH_NEWS({ commit }) {
  //   return fetchNewsList()
  //     .then(({ data }) => {
  //       commit('SET_NEWS', data);
  //       return data;
  //     })
  //     .catch((err) => console.error(err));
  // },
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       commit('SET_JOBS', data);
  //       return data;
  //     })
  //     .catch((err) => console.error(err));
  // },
  // FETCH_ASK({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       commit('SET_ASK', data);
  //       return data;
  //     })
  //     .catch((err) => console.error(err));
  // },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch((err) => console.error(err));
  },
  FETCH_USER({ commit }, name) {
    console.log('name', name);
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
        return data;
      })
      .catch((err) => console.error(err));
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
        return data;
      })
      .catch((err) => console.error(err));
  },
};
