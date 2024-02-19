import Vue from 'vue';
import App from './App.vue';
import router from './routes/index.js';
import store from './store/index.js';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
