import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue';

export default [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/ask',
    component: AskView,
  },
  {
    path: '/jobs',
    component: JobsView,
  },
  {
    path: '/news',
    component: NewsView,
  },
  {
    path: '/user',
    component: UserView,
  },
];
