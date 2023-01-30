<template>
  <div>
    <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
    <template v-if="result.length">
      <div>평균 시간 : {{ average }} ms</div>
      <button @click="onReset">reset</button>
    </template>
  </div>
</template>
<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
export default {
  data() {
    return {
      result: [],
      state: "waiting",
      message: "Click to Start.",
    };
  },
  // 계산식을 캐싱해둠, 성능 향상
  computed: {
    average() {
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
    },
  },
  methods: {
    onReset() {
      this.result = [];
    },
    onClickScreen() {
      switch (this.state) {
        case "waiting":
          this.state = "ready";
          this.message = "Click When It Change To Green";
          timeout = setTimeout(() => {
            this.state = "now";
            this.message = "Click Now!";
            startTime = new Date();
          }, Math.floor(Math.random() * 1000) + 2000);
          break;
        case "ready":
          clearTimeout(timeout);
          this.state = "waiting";
          this.message = "Too Fast!! Click When It Change To Green.";
          break;
        case "now":
          endTime = new Date();
          this.state = "waiting";
          this.message = "Click to Start.";
          this.result.push(endTime - startTime);
          break;
      }
    },
  },
};
</script>

<style scoped>
/* scoped -> 해당 vue 파일에서만 사용, css 성능향상 */
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}
#screen.waiting {
  background-color: aqua;
}
#screen.ready {
  background-color: red;
  color: white;
}
#screen.now {
  background-color: greenyellow;
}
</style>
