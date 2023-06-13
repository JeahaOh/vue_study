<template>
  <div>
    <mine-form />
    <div>{{ timer }}</div>
    <table-component />
    <div>{{ result }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import store, { INCREMENT_TIMER } from "./store";
import TableComponent from "./TableComponent";
import MineForm from "./MineForm";

let interval;

export default {
  store,
  components: {
    TableComponent,
    MineForm,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["timer", "result", "halted"]),
  },
  methods: {},
  watch: {
    halted(value, oldValue) {
      console.log("watch halted", value, oldValue);
      if (value === false) {
        // js의 타이머는 정확하지 않기 때문에 다른 방법도 알아봐라.
        interval = setInterval(() => {
          this.$store.commit(INCREMENT_TIMER);
        }, 1000);
      } else {
        clearInterval(interval);
      }
    },
  },
};
</script>

<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
