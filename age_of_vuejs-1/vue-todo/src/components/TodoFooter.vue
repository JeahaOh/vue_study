<template>
  <div class="claerAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo"> Clear All </span>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      clearTodo: "clearAllItems",
    }),
  },
};
</script>
<style scoped>
.claerAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
}
.clearAllBtn {
  color: #e20303;
  display: block;
  cursor: pointer;
}
</style>
