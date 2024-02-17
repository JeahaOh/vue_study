<template>
  <div>
    <div v-for="job in fetchedJobs">{{ job.title }}</div>
  </div>
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
