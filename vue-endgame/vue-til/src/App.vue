<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <router-view />
    </div>
    <ToastPopup></ToastPopup>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import ToastPopup from '@/components/common/ToastPopup.vue';

export default {
  components: { AppHeader, ToastPopup },
  created() {
    console.log('hi');
  },
};
</script>

<style>
@import url(./css/reset.css);
@import url(./css/common.css);
</style>
