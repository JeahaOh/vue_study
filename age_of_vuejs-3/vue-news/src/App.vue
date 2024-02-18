<template>
  <div>
    <!-- app -->
    <tool-bar> </tool-bar>
    <router-view> </router-view>
    <!-- <transition name="page"></transition> -->
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components: { ToolBar },
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
