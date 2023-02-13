<template>
  <div>
    <div>numbers</div>
    <div id="result">
      <!--
        <lotto-ball v-for="ball in winBalls" :key="i" number="5"></lotto-ball>
      -->
    </div>
    <div>bonus</div>
    <!--
      <lotto-ball v-if="bonus" />
    -->
    <button v-if="redo">one more!</button>
  </div>
</template>
<script>
import LottoBall from "./LottoBall.vue";

const getWinNumbers = () => {
  console.group("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  console.groupEnd("getWinNumbers");

  return [...winNumbers, bonusNumber];
}

export default {
  components: { 'lotto-ball' : LottoBall },
  data() {
    return {
      winNumbers = getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    };
  },
  computed: {},
  methods: {},
  beforeCreate() {
    console.group("before create");
    console.groupEnd("before create");
  },
  created() {
    console.group("created");
    console.groupEnd("created");
  },
  beforeMount() {
    console.group("before mount");
    console.groupEnd("before mount");
  },
  mounted() {
    console.group("mounted");
    console.groupEnd("mounted");
  },
  beforeUpdate() {
    console.group("before update");
    console.groupEnd("before update");
  },
  updated() {
    console.group("updated");
    console.groupEnd("updated");
  },
  beforeDestroy() {
    console.group("before destroy");
    console.groupEnd("before destroy");
  },
  destroyed() {
    console.group("destroyed");
    console.groupEnd("destroyed");
  },
};
</script>

<style scoped></style>
