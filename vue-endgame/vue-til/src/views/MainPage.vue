<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem
          v-for="postItem in postsItems"
          :key="postItem._id"
          :postItem="postItem"
          @refresh="fetchData"
        ></PostListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>
<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/posts.js';

export default {
  data() {
    return {
      postsItems: [],
      isLoading: false,
    };
  },
  components: { PostListItem, LoadingSpinner },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      console.log('data :  ', data);
      this.postsItems = data.posts;
    },
  },
  created() {
    if (!this.isUserLogin) {
      this.$router.push('login');
      return;
    }

    this.fetchData();
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>
