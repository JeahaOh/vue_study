<template>
  <div>
    <div v-for="item in ask">{{ idx }} {{ item }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    let vm = this;
    fetchAskList()
      .then((response) => {
        vm.ask = response.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style></style>
