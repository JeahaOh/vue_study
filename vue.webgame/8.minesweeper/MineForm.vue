<template>
  <div>
    <input type="number" :value="row" @change="onChangeRow" placeholder="vertical" />
    <input type="number" :value="cell" @change="onChangeCell" placeholder="horizon" />
    <input type="number" :value="mine" @change="onChangeMine" placeholder="mine" />
    <button @click="onClickBtn">START</button>
  </div>
</template>
<script>
import { START_GAME } from "./store";
export default {
  data() {
    return {
      row: 10,
      cell: 10,
      mine: 20,
    };
  },
  methods: {
    onChangeRow(e) {
      this.row = e.target.value;
    },
    onChangeCell(e) {
      this.cell = e.target.value;
    },
    onChangeMine(e) {
      this.mine = e.target.value;
    },
    onClickBtn() {
      this.$store.commit(START_GAME, { row: this.row, cell: this.cell, mine: this.mine });
    },
  },
};
</script>
