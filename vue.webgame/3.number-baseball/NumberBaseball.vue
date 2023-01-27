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
export default {
  data() {
    return {
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      this.tries.push({
        try: this.value,
        result: "HOME RUN",
      });
      this.value = "";
      this.$refs.answer.focus();
    },
  },
};
</script>
<style></style>
