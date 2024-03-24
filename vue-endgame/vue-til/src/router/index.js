import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/signup',
    component: () => import('@/views/SignupPage.vue'),
  },
  {
    path: '/main',
    component: () => import('@/views/MainPage.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/add',
    component: () => import('@/views/PostAddPage.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/post/:id',
    component: () => import('@/views/PostEditPage.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '*',
    component: () => import('@/views/NotFoundPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(`to : `, to);
  // console.log(`from : `, from);
  // console.log(`next : `, next);

  if (to.meta.auth && !store.getters.isLogin) {
    next('/login');
    return;
  }

  next();
});

export default router;
