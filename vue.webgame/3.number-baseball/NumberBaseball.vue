<template>
  <div>
    <h1>{{ result }}</h1>
    <form v-on:submit="onSubmitForm">
      <input ref="answer" maxlength="4" v-model="value" />
      <button>GO</button>
    </form>
    <div>{{}} tries</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
    },
  },
};
</script>
<style></style>
