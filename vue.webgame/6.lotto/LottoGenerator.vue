<template>
  <div>
    <div>numbers</div>
    <div id="result">
      <!--
      -->
      <lotto-ball v-for="ball in winBalls" :key="ball" v-bind:number="ball"></lotto-ball>
    </div>
    <div>bonus</div>
    <!--
    -->
    <lotto-ball v-if="bonus" :number="bonus" />
    <button v-if="redo" @click="onClickRedo">one more!</button>
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
};
const timeouts = [];
export default {
  components: { LottoBall },
  data() {
    return {
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    };
  },
  computed: {},
  methods: {
    onClickRedo() {
      this.winNumbers = getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
      this.showBalls();
    },
    showBalls() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        timeouts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 300);
      }
      timeouts[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true;
      }, 1500);
    },
  },
  mounted() {
    console.group("mounted");
    this.showBalls();
    console.groupEnd("mounted");
  },
  beforeDestroy() {
    console.group("before destroy");
    timeouts.forEach((t) => {
      console.log("t", t);
      clearTimeout(t);
    });
    console.groupEnd("before destroy");
  },
  watch: {
    // 사용 지양
    // winBalls(val, oldValue) {
    //   console.log(val, oldValue);
    //   if (val.length === 0) {
    //     this.showBalls();
    //   }
    // },
    // bonus(value, oldValue) {
    //   if (value === null) {
    //     this.showBalls();
    //   }
    // },
    // redo(value, oldValue) {
    //   console.log(value, oldValue);
    //   if (value === false) {
    //     this.showBalls();
    //   }
    // },
  },
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
  beforeUpdate() {
    console.group("before update");
    console.groupEnd("before update");
  },
  updated() {
    console.group("updated");
    console.groupEnd("updated");
  },
  destroyed() {
    console.group("destroyed");
    console.groupEnd("destroyed");
  },
};
</script>

<style scoped></style>
