import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
  ask: 'ask/1.json',
  jobs: 'jobs/1.json',
  news: 'news/1.json',
  user: 'user/',
  item: 'item/',
};

function fetchNewsList() {
  return axios.get(`${config.baseUrl}${config.news}`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}${config.ask}`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}${config.jobs}`);
}

function fetchUserInfo(id) {
  return axios.get(`${config.baseUrl}${config.user}${id}.json`);
}

function fetchCommentItem(id) {
  return axios.get(`${config.baseUrl}${config.item}${id}.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem };
