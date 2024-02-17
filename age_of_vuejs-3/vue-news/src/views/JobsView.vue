<template>
  <div>
    <div v-for="job in jobs">{{ idx }}{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    let vm = this;
    fetchJobsList()
      .then((response) => (vm.jobs = response.jobs))
      .catch((err) => console.error(err));
  },
};
</script>

<style></style>
