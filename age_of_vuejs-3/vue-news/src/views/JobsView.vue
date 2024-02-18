<template>
  <p v-for="job in fetchedJobs">
    <a :href="job.url">{{ job.title }}</a>
    <small>{{ job.time_ago }} {{ job.domain }}</small>
  </p>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({ fetchedJobs: (state) => state.jobs }),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style></style>
