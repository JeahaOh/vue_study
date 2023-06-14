import Vue from "vue";
import VueRouter from "vue-router";

import NumberBaseball from "../3.number-baseball/NumberBaseball";
import ResponseCheck from "../4.react_speed_check_AND_webpack_watch/ResponseCheck";
import RockSissorsPaper from "../5.rock_siccors_paper/RockSiccorsPaper";
import LottoGenerator from "../6.lotto/LottoGenerator";
import MineSweeper from "../8.minesweeper/MineSweeper";

import GameMatcher from "./GameMatcher";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/number-baseball", component: NumberBaseball },
    { path: "/response-check", component: ResponseCheck },
    { path: "/rock-scissors-paper", component: RockSissorsPaper },
    { path: "/lotto-generator", component: LottoGenerator },
    { path: "/minesweeper", component: MineSweeper },
    { path: "/game/:name", component: GameMatcher },
  ],
});
