<template>
  <div>
    <title>game matcher</title>
    <div v-if="currentGame === 'number-baseball'">
      <number-baseball></number-baseball>
    </div>
    <div v-else-if="currentGame === 'response-check'">
      <response-check></response-check>
    </div>
    <div v-else-if="currentGame === 'lotto-generator'">
      <lotto-generator></lotto-generator>
    </div>
    <div v-else-if="currentGame === 'minesweeper'">
      <mine-sweeper></mine-sweeper>
    </div>
    <div v-else>일치하는 게임이 없습니다</div>
  </div>
</template>

<script>
import NumberBaseball from "../3.number-baseball/NumberBaseball";
import ResponseCheck from "../4.react_speed_check_AND_webpack_watch/ResponseCheck";
import LottoGenerator from "../6.lotto/LottoGenerator";
import MineSweeper from "../8.minesweeper/MineSweeper";

export default {
  components: {
    NumberBaseball,
    ResponseCheck,
    LottoGenerator,
    MineSweeper,
  },
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
  },
  computed: {
    currentGame() {
      console.log("currentGame : ", this.$route.params.name);
      return this.$route.params.name;
    },
  },
};
</script>
