<template>
  <div>
    <div id="computer" :style="conputedStyleObject"></div>
    <div>
      <button @click="onClickButton('rock')">rock</button>
      <button @click="onClickButton('siccors')">siccors</button>
      <button @click="onClickButton('paper')">paper</button>
      <button @click="onClickButton('stop')">stop</button>
    </div>
    <div>{{ result }}</div>
    <div>now : {{ score }}</div>
  </div>
</template>
<script>
const rspCoords = {
  rock: "0",
  siccors: "-142px",
  paper: "-284px",
};

const scores = {
  siccors: 1,
  rock: 0,
  paper: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find((v) => {
    return v[1] === imgCoord;
  })[0];
};

let interval = null;
export default {
  data() {
    return {
      imgCoord: rspCoords.rock,
      result: "",
      score: 0,
    };
  },
  computed: {
    conputedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0 `,
      };
    },
  },
  methods: {
    changeHand() {
      interval = setInterval(() => {
        console.log("setInterval : ", this.imgCoord);
        switch (this.imgCoord) {
          case rspCoords.rock:
            this.imgCoord = rspCoords.siccors;
            break;
          case rspCoords.siccors:
            this.imgCoord = rspCoords.paper;
            break;
          case rspCoords.paper:
            this.imgCoord = rspCoords.rock;
            break;
          default:
            console.error("this.imgCoord : ", this.imgCoord);
            clearInterval(interval);
        }
      }, 100);
    },
    onClickButton(choice) {
      if (choice === "stop") {
        clearInterval(interval);
        return;
      }

      clearInterval(interval);
      const myScore = scores[choice];
      const computerScore = scores[computerChoice(this.imgCoord)];
      const diff = myScore - computerScore;

      if (diff === 0) {
        this.result = "DRAW!";
      } else if ([-1, 2].includes(diff)) {
        this.result = "WIN!!";
        this.score++;
      } else {
        this.result = "LOSE!";
        this.score--;
      }

      setTimeout(() => {
        this.changeHand();
      }, 1500);
    },
  },
  beforeCreate() {
    console.group("before create");
    console.groupEnd("before create");
  },
  created() {
    // 보여지긴 하지만 화면에 나타나기 전
    console.group("created");
    console.groupEnd("created");
  },
  beforeMount() {
    console.group("before mount");
    console.groupEnd("before mount");
  },
  mounted() {
    console.group("mounted");
    console.log(this.imgCoord);

    this.changeHand();

    console.groupEnd("mounted");
  },
  beforeUpdate() {
    console.group("before update ->");
    console.groupEnd("before update ->");
  },
  updated() {
    console.group("updated ->");
    console.groupEnd("updated ->");
  },
  beforeDestroy() {
    clearInterval(interval);
    console.group("before destroy");
    console.groupEnd("before destroy");
  },
  destroyed() {
    console.group("destroyed");
    console.groupEnd("destroyed");
  },
};
</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
