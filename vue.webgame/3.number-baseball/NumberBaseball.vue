<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" minlength="4" maxlength="4" v-model="value" />
      <button type="submit">GO</button>
    </form>
    <div>{{ tries.length }} tries</div>
    <ul>
      <li v-for="tri in tries">
        <div>{{ tri.try }}</div>
        <div>{{ tri.result }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
/**
 * Radom하게 4개의 숫자 뽑기
 */
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

export default {
  data() {
    return {
      answer: getNumbers(),
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      if (this.value === this.answer.join("")) {
        // 정답인 경우
        this.tries.push({
          try: this.value,
          result: "HOME RUN!!",
        });
        this.result = "HOME RUN!!";
        this.answer = getNumbers();
        alert("게임을 다시 실행합니다.");

        this.tries = [];
        this.value = "";
        this.$refs.answer.focus();
      } else {
        // 틀린 경우
        if (this.tries.length >= 9) {
          this.result = `GAME END!!\nthe answer was ${this.answer.join(",")}!`;
          alert("게임을 다시 실행합니다.");
          this.value = "";
          this.answer = getNumbers();
          this.tries = [];
          this.value = "";
          this.$refs.answer.focus();
        }
        let strike = 0;
        let ball = 0;

        const answerArray = this.value.split("").map((v) => parseInt(v));
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.answer[i]) {
            // 숫자, 자릿수 모두 정답
            strike++;
          } else if (this.answer.includes(answerArray[i])) {
            // 숫자만 정답
            ball++;
          }
        }

        this.tries.push({
          try: this.value,
          result: `${strike} strike, ${ball} ball.`,
        });
        this.value = "";
        this.$refs.answer.focus();
      }
    },
  },
};
</script>
<style></style>
