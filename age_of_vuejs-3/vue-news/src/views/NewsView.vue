<template>
  <div>
    <div v-for="item in items">{{ item }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.news;
    },
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>
