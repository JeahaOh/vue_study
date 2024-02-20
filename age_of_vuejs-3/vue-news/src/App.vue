<template>
  <div>
    <!-- app -->
    <tool-bar> </tool-bar>
    <transition name="page">
      <router-view />
    </transition>
    <spinner-vue :loading="loadingStatus"></spinner-vue>
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
      console.group('startSpinner');
      this.loadingStatus = true;
      console.groupEnd('startSpinner', this.loadingStatus);
    },
    endSpinner() {
      console.group('endSpinner');
      this.loadingStatus = false;
      console.groupEnd('endSpinner', this.loadingStatus);
    },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
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
