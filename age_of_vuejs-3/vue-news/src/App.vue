<template>
  <div>
    <!-- app -->
    <tool-bar> </tool-bar>
    <spinner-vue :loading="loadingStatus"></spinner-vue>
    <transition name="page">
      <router-view />
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import SpinnerVue from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: { ToolBar, SpinnerVue },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on('start:spnner', this.startSpinner);
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
