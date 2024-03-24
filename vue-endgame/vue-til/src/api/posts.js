import { posts } from './index.js';

function fetchPosts() {
  return posts.get('');
}

function createPost(postData) {
  return posts.post('', postData);
}

function fetchPost(postId) {
  return posts.get(postId);
}

function deletePosts(postId) {
  return posts.delete(postId);
}

function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchPosts, createPost, fetchPost, deletePosts, editPost };
