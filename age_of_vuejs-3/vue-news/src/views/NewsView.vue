<template>
  <div>
    <div v-for="user in users">{{ user }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    let vm = this;
    fetchNewsList()
      .then((response) => (vm.users = response.data))
      .catch((err) => console.error(err));
  },
};
</script>

<style></style>
