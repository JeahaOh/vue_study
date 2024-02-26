import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
  ask: 'ask/1.json',
  jobs: 'jobs/1.json',
  news: 'news/1.json',
  user: 'user/',
  item: 'item/',
};

async function fetchNewsList() {
  try {
    return await axios.get(`${config.baseUrl}${config.news}`);
  } catch (err) {
    console.error(err);
  }
}

async function fetchAskList() {
  try {
    return await axios.get(`${config.baseUrl}${config.ask}`);
  } catch (err) {
    console.error(err);
  }
}

async function fetchJobsList() {
  try {
    return await axios.get(`${config.baseUrl}${config.jobs}`);
  } catch (err) {
    console.error(err);
  }
}

async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`);
  } catch (err) {
    console.error(err);
  }
}

async function fetchUserInfo(id) {
  console.log('id', id);
  try {
    return await axios.get(`${config.baseUrl}${config.user}${id}.json`);
  } catch (err) {
    console.error(err);
  }
}

async function fetchCommentItem(id) {
  try {
    return await axios.get(`${config.baseUrl}${config.item}${id}.json`);
  } catch (err) {
    console.error(err);
  }
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchCommentItem };
